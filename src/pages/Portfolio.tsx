import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePortfolioCompanies, PortfolioCompany } from '@/hooks/usePortfolioCompanies';

export default function Portfolio() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany | null>(null);
  
  const { data, isLoading, error } = usePortfolioCompanies();
  
  const companies = data?.companies || [];
  const companyCount = data?.count || 0;
  
  const sectors = useMemo(() => {
    const uniqueSectors = Array.from(new Set(companies.map(c => c.sector).filter(Boolean)));
    return ['All', ...uniqueSectors];
  }, [companies]);

  const filteredCompanies = selectedSector === 'All' 
    ? companies 
    : companies.filter(c => c.sector === selectedSector);

  const isImageUrl = (url: string) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Founders building the future of energy
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We partner with exceptional teams tackling the hardest problems in energy and industrial systems. 
              These are the companies we're proud to back.
            </p>
            {!isLoading && !error && (
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{companyCount}</span> {companyCount === 1 ? 'company' : 'companies'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedSector === sector
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Unable to load portfolio companies. Please try again later.</p>
            </div>
          ) : filteredCompanies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No companies found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company, index) => (
                <button
                  key={`${company.name}-${index}`}
                  onClick={() => setSelectedCompany(company)}
                  className="group relative rounded-2xl border border-border overflow-hidden text-left hover-lift transition-all"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {company.backgroundGraphic && isImageUrl(company.backgroundGraphic) ? (
                      <img 
                        src={company.backgroundGraphic} 
                        alt="" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-card" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors overflow-hidden",
                      isImageUrl(company.logo)
                        ? "bg-white"
                        : "bg-secondary group-hover:bg-primary/10"
                    )}>
                      {isImageUrl(company.logo) ? (
                        <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
                      ) : (
                        <span className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {company.logo || company.name.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    {company.sector && (
                      <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                        {company.sector}
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Detail Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setSelectedCompany(null)}
          />
          <div className="relative w-full max-w-2xl bg-background rounded-2xl border border-border shadow-elevated p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <div className="flex items-start gap-6 mb-6">
              <div className={cn(
                "w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden",
                isImageUrl(selectedCompany.logo)
                  ? "bg-white"
                  : "bg-secondary"
              )}>
                {isImageUrl(selectedCompany.logo) ? (
                  <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-16 h-16 object-contain" />
                ) : (
                  <span className="font-display text-2xl font-semibold text-foreground">
                    {selectedCompany.logo || selectedCompany.name.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                {selectedCompany.sector && (
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-2">
                    {selectedCompany.sector}
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold text-foreground">{selectedCompany.name}</h2>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{selectedCompany.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Founded</p>
                <p className="font-display font-semibold text-foreground">{selectedCompany.founded || '—'}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-display font-semibold text-foreground">{selectedCompany.location || '—'}</p>
              </div>
            </div>

            {selectedCompany.website && selectedCompany.website !== '#' && (
              <Button variant="outline" className="w-full" asChild>
                <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer">
                  Visit website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
