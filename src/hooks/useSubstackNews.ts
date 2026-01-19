import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface SubstackPost {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  imageUrl: string | null;
}

interface SubstackFeedResponse {
  posts: SubstackPost[];
  cached?: boolean;
  stale?: boolean;
  error?: string;
}

async function fetchSubstackNews(): Promise<SubstackPost[]> {
  const { data, error } = await supabase.functions.invoke<SubstackFeedResponse>('substack-feed');
  
  if (error) {
    console.error('Error fetching Substack news:', error);
    throw new Error('Failed to fetch news');
  }
  
  if (!data || !data.posts) {
    return [];
  }
  
  return data.posts;
}

export function useSubstackNews() {
  return useQuery({
    queryKey: ['substack-news'],
    queryFn: fetchSubstackNews,
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

export const SUBSTACK_HOME_URL = 'https://viridacapital.substack.com';
