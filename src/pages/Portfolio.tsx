import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const companies = [
  {
    name: 'Undisclosed',
    logo: 'UD',
    sector: 'Energy Generation',
    description: 'Undisclosed',
    longDescription: 'Undisclosed',
    founded: '2025',
    location: 'United Kingdom',
    website: '#',
  },
  {
    name: 'Undisclosed',
    logo: 'UD',
    sector: 'Industrial Heat',
    description: 'undiscosed',
    longDescription: 'Undisclosed',
    founded: '2024',
    location: 'Netherlands',
    website: '#',
  },
  {
    name: 'Marcley',
    logo: 'MC',
    sector: 'Infrastructure',
    description: 'Giving multi-tenant buildings access to cheap, clean energy.',
    longDescription: 'Marcley provides a hardware and software solution that enables multi-tenant buildings to deploy self-generated solar energy for tenants, seamlessly managing the grid, on-site generation, and other connected assets - whilst saving costs and reducing emissions.',
    founded: '2022',
    location: 'Hanover, Germany',
    website: 'https://www.marcley.com',
  },
];

const sectors = ['All', ...Array.from(new Set(companies.map(c => c.sector)))];

export default function Portfolio() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  const filteredCompanies = selectedSector === 'All' 
    ? companies 
    : companies.filter(c => c.sector === selectedSector);

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <button
                key={index}
                onClick={() => setSelectedCompany(company)}
                className="group p-8 rounded-2xl border border-border bg-card text-left hover-lift transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {company.logo}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                  {company.sector}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{company.name}</h3>
                <p className="text-sm text-muted-foreground">{company.description}</p>
              </button>
            ))}
          </div>
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
              <div className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center">
                <span className="font-display text-2xl font-semibold text-foreground">
                  {selectedCompany.logo}
                </span>
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-2">
                  {selectedCompany.sector}
                </span>
                <h2 className="font-display text-2xl font-semibold text-foreground">{selectedCompany.name}</h2>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{selectedCompany.longDescription}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Founded</p>
                <p className="font-display font-semibold text-foreground">{selectedCompany.founded}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-display font-semibold text-foreground">{selectedCompany.location}</p>
              </div>
            </div>

            <Button variant="outline" className="w-full" asChild>
              <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer">
                Visit website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
