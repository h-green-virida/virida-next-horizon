import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Atom, Battery, Car, Settings, X, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { NewsGrid } from '@/components/shared/NewsGrid';
import { cn } from '@/lib/utils';
import { usePortfolioCompanies, PortfolioCompany } from '@/hooks/usePortfolioCompanies';
import sectorElectrons from '@/assets/sector-electrons.png';
import sectorMolecules from '@/assets/sector-molecules.png';
import sectorStorage from '@/assets/sector-storage.png';
import sectorMobility from '@/assets/sector-mobility.png';
import sectorFoundations from '@/assets/sector-foundations.png';
const focusAreas = [
  {
    icon: Zap,
    title: 'Electrons',
    description: 'Technologies that create and intelligently manage clean electricity across the energy system.',
    backgroundImage: sectorElectrons,
  },
  {
    icon: Atom,
    title: 'Molecules',
    description: 'Solutions enabling the production, conversion, and use of physical energy carriers.',
    backgroundImage: sectorMolecules,
  },
  {
    icon: Battery,
    title: 'Storage',
    description: 'Technologies that store energy to balance supply and demand across time, scale, and application.',
    backgroundImage: sectorStorage,
  },
  {
    icon: Car,
    title: 'Mobility',
    description: 'Systems and platforms that electrify the movement of people and goods across land, sea, and air.',
    backgroundImage: sectorMobility,
  },
  {
    icon: Settings,
    title: 'Foundations & Efficiencies',
    description: 'Core technologies that improve industry, manufacturing, and infrastructure efficiency.',
    backgroundImage: sectorFoundations,
  },
];

export default function Index() {
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany | null>(null);
  const { data: portfolioData, isLoading: portfolioLoading } = usePortfolioCompanies();
  
  const portfolioPreview = portfolioData?.companies || [];
  
  const isImageUrl = (url: string) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <ParticleNetwork />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="animate-fade-up text-sm font-medium text-accent uppercase tracking-widest mb-6">
              The Future of Physical
            </p>
            <h1 className="animate-fade-up font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground tracking-tight leading-tight">
              Investing in the new infrastructure of a{' '}
              <span className="text-gradient">net zero world</span>
            </h1>
            <p className="animate-fade-up-delayed text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
              We back breakthrough hardware companies that transform economic systems and unlock the future of clean energy.
            </p>
            <div className="animate-fade-up-delayed flex flex-col sm:flex-row items-center justify-center gap-4 mt-10" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/thesis">
                  Explore our thesis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-muted-foreground/60" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="About Virida"
                title="Catalysing the energy transition through hardware energy tech investment"
              />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Virida Capital is a European venture fund focused exclusively on early-stage hardware companies 
                accelerating the energy transition. We partner with exceptional founders building the physical 
                infrastructure required for a decarbonised world.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team combines deep expertise in energy systems, industrial technology, and venture capital 
                to support founders from first prototype to commercial scale.
              </p>
              <Button variant="minimal" className="mt-8" asChild>
                <Link to="/team">
                  Meet our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <p className="font-display text-lg md:text-xl lg:text-2xl font-normal text-foreground leading-snug max-w-xl">
                We invest in <strong className="font-semibold">energy hardware</strong> companies across <strong className="font-semibold">Europe</strong>, from <strong className="font-semibold">Seed to Series A</strong>, writing <strong className="font-semibold">€1–8M</strong> tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 lg:py-32 bg-[hsl(270,50%,97%)] dark:bg-[hsl(270,30%,12%)]">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment Focus"
            title="Where we invest"
            description="We focus on five interconnected domains where breakthrough hardware innovation can drive systemic change in energy and industrial systems."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border hover-lift overflow-hidden min-h-[280px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={area.backgroundImage} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                      <area.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-tight">{area.title}</h3>
                  </div>
                  <div className="flex-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed h-[92px] overflow-hidden">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/thesis">
                Read our full thesis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Portfolio"
              title="Companies we back"
              description="A selection of founders building the future of energy."
            />
            <Button variant="outline" asChild>
              <Link to="/portfolio">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          {portfolioLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : portfolioPreview.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No companies to display.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioPreview.map((company, index) => (
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
                  <div className="relative p-8 flex flex-col h-full min-h-[320px]">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center transition-colors overflow-hidden flex-shrink-0",
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
                    <div className="h-6 mt-6 flex-shrink-0">
                      {company.sector && (
                        <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                          {company.sector}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 mt-4 flex-shrink-0">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeading
              eyebrow="Insights"
              title="Latest news"
              description="Perspectives on climate hardware innovation and the energy transition."
            />
          </div>
          <NewsGrid showViewAll />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
            Building breakthrough climate hardware?
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg max-w-xl mx-auto">
            We're always looking to meet exceptional founders tackling the hardest problems in energy and industrial systems.
          </p>
          <Button
            variant="outline"
            size="xl"
            className="mt-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link to="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
