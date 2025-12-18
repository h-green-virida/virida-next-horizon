import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Atom, Battery, Car, Settings, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';
import { SectionHeading } from '@/components/shared/SectionHeading';

const focusAreas = [
  {
    icon: Zap,
    title: 'Electrons',
    description: 'Technologies that create and intelligently manage clean electricity across the energy system.',
  },
  {
    icon: Atom,
    title: 'Molecules',
    description: 'Solutions enabling the production, conversion, and use of physical energy carriers.',
  },
  {
    icon: Battery,
    title: 'Storage',
    description: 'Technologies that store energy to balance supply and demand across time, scale, and application.',
  },
  {
    icon: Car,
    title: 'Mobility',
    description: 'Systems and platforms that decarbonise the movement of people and goods across land, sea, and air.',
  },
  {
    icon: Settings,
    title: 'Foundations & Efficiencies',
    description: 'Core technologies that improve industry, manufacturing, and infrastructure efficiency.',
  },
];

const portfolioPreview = [
  { name: 'Undisclosed', logo: 'UD', sector: 'Energy Generation', description: 'Undisclosed' },
  { name: 'Undisclosed', logo: 'UD', sector: 'Industrial Heat', description: 'Undisclosed' },
  { name: 'Marcley', logo: 'MC', sector: 'Infrastructure', description: 'Giving multi-tenant buildings access to cheap, clean energy.' },
];

const blogPreview = [
  {
    id: 1,
    title: 'The Rise of Long-Duration Energy Storage',
    excerpt: 'As renewable energy penetration increases, the need for storage solutions that can balance supply and demand becomes critical.',
    category: 'Storage',
    date: '2024-12-10',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'Green Hydrogen: From Hype to Reality',
    excerpt: 'We examine the economics of green hydrogen production and identify where it will first achieve cost competitiveness.',
    category: 'Molecules',
    date: '2024-11-28',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Decarbonising Heavy Industry',
    excerpt: 'Steel, cement, and chemicals account for nearly 30% of global emissions. We explore breakthrough technologies.',
    category: 'Foundations',
    date: '2024-11-15',
    readTime: '7 min read',
  },
];

export default function Index() {
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-secondary border border-border p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { value: 'Energy', label: 'Sector' },
                    { value: 'Europe', label: 'Geography' },
                    { value: 'Seed to Series A', label: 'Stage' },
                    { value: '€1-8M', label: 'Ticket Size' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-background/50 backdrop-blur">
                      <p className="font-display text-xl font-semibold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 lg:py-32 bg-card">
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
                className="group p-8 rounded-2xl bg-background border border-border hover-lift cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
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
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioPreview.map((company, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover-lift cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-semibold text-foreground">
                    {company.logo}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                  {company.sector}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{company.name}</h3>
                <p className="text-sm text-muted-foreground">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Insights"
              title="Latest from our blog"
              description="Perspectives on climate hardware innovation and the energy transition."
            />
            <Button variant="outline" asChild>
              <Link to="/blog">
                View all posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPreview.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover-lift cursor-pointer"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-xl font-semibold text-primary">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3 w-fit">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
    </Layout>
  );
}
