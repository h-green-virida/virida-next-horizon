import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory cache
let cache: { data: Company[] | null; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

interface Company {
  name: string;
  description: string;
  sector: string;
  founded: string;
  location: string;
  website: string;
  logo: string;
  backgroundGraphic: string | null;
}

// Convert Google Drive sharing URLs to direct embeddable URLs
function convertGoogleDriveUrl(url: string): string {
  if (!url) return '';
  
  // Handle Google Drive file URLs: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const driveFileMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch) {
    return `https://drive.google.com/uc?export=view&id=${driveFileMatch[1]}`;
  }
  
  // Handle Google Drive open URLs: https://drive.google.com/open?id=FILE_ID
  const driveOpenMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (driveOpenMatch) {
    return `https://drive.google.com/uc?export=view&id=${driveOpenMatch[1]}`;
  }
  
  // Handle lh3.googleusercontent.com URLs (already direct)
  if (url.includes('lh3.googleusercontent.com') || url.includes('googleusercontent.com')) {
    return url;
  }
  
  // Return as-is if it's already a direct URL or other format
  return url;
}

function parseCSV(csvText: string): Company[] {
  const lines = csvText.split('\n');
  if (lines.length < 2) return [];
  
  // Parse header row
  const headers = parseCSVLine(lines[0]);
  
  // Find column indices
  const nameIdx = headers.findIndex(h => h.toLowerCase().trim() === 'name');
  const descIdx = headers.findIndex(h => h.toLowerCase().trim() === 'description');
  const sectorIdx = headers.findIndex(h => h.toLowerCase().trim() === 'sector');
  const foundedIdx = headers.findIndex(h => h.toLowerCase().trim() === 'founded');
  const locationIdx = headers.findIndex(h => h.toLowerCase().trim() === 'location');
  const websiteIdx = headers.findIndex(h => h.toLowerCase().trim() === 'website');
  const logoIdx = headers.findIndex(h => h.toLowerCase().trim() === 'logo');
  const bgIdx = headers.findIndex(h => h.toLowerCase().trim() === 'background graphic');
  
  const companies: Company[] = [];
  
  // Parse data rows (skip header)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = parseCSVLine(line);
    const name = (values[nameIdx] || '').trim();
    
    // Only include rows with non-empty Name
    if (!name) continue;
    
    const rawLogo = (values[logoIdx] || '').trim();
    const rawBg = (values[bgIdx] || '').trim();
    
    companies.push({
      name,
      description: (values[descIdx] || '').trim(),
      sector: (values[sectorIdx] || '').trim(),
      founded: (values[foundedIdx] || '').trim(),
      location: (values[locationIdx] || '').trim(),
      website: (values[websiteIdx] || '').trim(),
      logo: convertGoogleDriveUrl(rawLogo),
      backgroundGraphic: rawBg ? convertGoogleDriveUrl(rawBg) : null,
    });
  }
  
  return companies;
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current);
  
  return values;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const now = Date.now();
    
    // Check cache
    if (cache.data && (now - cache.timestamp) < CACHE_DURATION) {
      console.log('Returning cached portfolio data');
      return new Response(JSON.stringify({
        companies: cache.data,
        count: cache.data.length,
        cached: true,
        fetchedAt: new Date(cache.timestamp).toISOString(),
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch from Google Sheets (CSV export)
    const sheetId = '1jOyfjSC-yul8NaDPkS-Avtvoaeuz_yHqc3LrKlo6s70';
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
    
    console.log('Fetching portfolio data from Google Sheets...');
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.status}`);
    }
    
    const csvText = await response.text();
    const companies = parseCSV(csvText);
    
    // Update cache
    cache = { data: companies, timestamp: now };
    
    return new Response(JSON.stringify({
      companies,
      count: companies.length,
      cached: false,
      fetchedAt: new Date().toISOString(),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    
    // Return cached data if available on error
    if (cache.data) {
      return new Response(JSON.stringify({
        companies: cache.data,
        count: cache.data.length,
        cached: true,
        error: 'Using cached data due to fetch error',
        fetchedAt: new Date(cache.timestamp).toISOString(),
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({
      companies: [],
      count: 0,
      error: errorMessage,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
