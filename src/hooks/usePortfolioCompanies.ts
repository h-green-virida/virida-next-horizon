import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface PortfolioCompany {
  name: string;
  description: string;
  sector: string;
  founded: string;
  location: string;
  website: string;
  logo: string;
  backgroundGraphic: string | null;
}

interface PortfolioResponse {
  companies: PortfolioCompany[];
  count: number;
  cached: boolean;
  fetchedAt: string;
  error?: string;
}

async function fetchPortfolioCompanies(): Promise<PortfolioResponse> {
  const { data, error } = await supabase.functions.invoke<PortfolioResponse>('portfolio-companies');
  
  if (error) {
    throw new Error(error.message || 'Failed to fetch portfolio companies');
  }
  
  return data || { companies: [], count: 0, cached: false, fetchedAt: new Date().toISOString() };
}

export function usePortfolioCompanies() {
  return useQuery({
    queryKey: ['portfolio-companies'],
    queryFn: fetchPortfolioCompanies,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
  });
}
