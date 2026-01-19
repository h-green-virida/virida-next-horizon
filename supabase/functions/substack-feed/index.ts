import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory cache
let cachedData: { posts: SubstackPost[], fetchedAt: number } | null = null;
const CACHE_DURATION_MS = 30 * 60 * 1000; // 30 minutes

interface SubstackPost {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  imageUrl: string | null;
}

async function fetchSubstackFeed(): Promise<SubstackPost[]> {
  // Virida Capital's Substack RSS feed
  const feedUrl = 'https://viridacapital.substack.com/feed';
  
  const response = await fetch(feedUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; ViridaWebsite/1.0)',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Substack feed: ${response.status}`);
  }

  const xmlText = await response.text();
  
  // Parse the RSS XML
  const posts: SubstackPost[] = [];
  
  // Extract items from RSS feed using regex (Deno doesn't have built-in XML parser)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xmlText)) !== null && posts.length < 3) {
    const itemContent = match[1];
    
    // Extract title
    const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || 
                       itemContent.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? decodeHTMLEntities(titleMatch[1]) : 'Untitled';
    
    // Extract link
    const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
    const url = linkMatch ? linkMatch[1].trim() : '';
    
    // Extract publish date
    const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
    const publishedAt = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
    
    // Extract image - try multiple sources
    let imageUrl: string | null = null;
    
    // Try enclosure tag first (common in RSS for images)
    const enclosureMatch = itemContent.match(/<enclosure[^>]*url="([^"]*)"[^>]*type="image[^"]*"/);
    if (enclosureMatch) {
      imageUrl = decodeHTMLEntities(enclosureMatch[1]);
    }
    
    // Try media:content
    if (!imageUrl) {
      const mediaMatch = itemContent.match(/<media:content[^>]*url="([^"]*)"/);
      if (mediaMatch) {
        imageUrl = decodeHTMLEntities(mediaMatch[1]);
      }
    }
    
    // Try to find image in content/description
    if (!imageUrl) {
      const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) ||
                          itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
      if (contentMatch) {
        const imgMatch = contentMatch[1].match(/<img[^>]*src="([^"]*)"/);
        if (imgMatch) {
          imageUrl = decodeHTMLEntities(imgMatch[1]);
        }
      }
    }
    
    // Clean up substackcdn URLs - extract just the S3 part for cleaner URLs
    if (imageUrl && imageUrl.includes('substackcdn.com/image/fetch/')) {
      // Extract the actual S3 URL from the CDN wrapper and decode it
      const s3Match = imageUrl.match(/https%3A%2F%2Fsubstack-post-media\.s3\.amazonaws\.com[^"'\s]*/);
      if (s3Match) {
        imageUrl = decodeURIComponent(s3Match[0]);
      }
    }
    
    // Generate a stable ID from URL
    const id = url ? btoa(url).slice(-12) : String(posts.length);
    
    posts.push({
      id,
      title,
      url,
      publishedAt,
      imageUrl,
    });
  }
  
  // Sort by publish date descending (newest first)
  posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  return posts.slice(0, 3);
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const now = Date.now();
    
    // Check cache
    if (cachedData && (now - cachedData.fetchedAt) < CACHE_DURATION_MS) {
      return new Response(JSON.stringify({
        posts: cachedData.posts,
        cached: true,
        cachedAt: new Date(cachedData.fetchedAt).toISOString(),
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Fetch fresh data
    const posts = await fetchSubstackFeed();
    
    // Update cache
    cachedData = { posts, fetchedAt: now };
    
    return new Response(JSON.stringify({
      posts,
      cached: false,
      fetchedAt: new Date(now).toISOString(),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error fetching Substack feed:', error);
    
    // If we have cached data, return it even if stale
    if (cachedData) {
      return new Response(JSON.stringify({
        posts: cachedData.posts,
        cached: true,
        stale: true,
        error: 'Using stale cache due to fetch error',
        cachedAt: new Date(cachedData.fetchedAt).toISOString(),
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // No cache available, return error
    return new Response(JSON.stringify({
      posts: [],
      error: 'Failed to fetch news. Please try again later.',
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
