import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';

const blogPosts = [
  {
    id: 1,
    title: 'The Rise of Long-Duration Energy Storage',
    excerpt: 'As renewable energy penetration increases, the need for storage solutions that can balance supply and demand over hours, days, and even seasons becomes critical.',
    category: 'Storage',
    date: '2024-12-10',
    readTime: '6 min read',
    image: null,
  },
  {
    id: 2,
    title: 'Green Hydrogen: From Hype to Reality',
    excerpt: 'We examine the economics of green hydrogen production and identify the sectors where it will first achieve cost competitiveness with fossil alternatives.',
    category: 'Molecules',
    date: '2024-11-28',
    readTime: '8 min read',
    image: null,
  },
  {
    id: 3,
    title: 'Decarbonising Heavy Industry: The Hardware Challenge',
    excerpt: 'Steel, cement, and chemicals account for nearly 30% of global emissions. We explore the breakthrough technologies that could transform these sectors.',
    category: 'Foundations',
    date: '2024-11-15',
    readTime: '7 min read',
    image: null,
  },
  {
    id: 4,
    title: 'The Grid of Tomorrow: Rebuilding Energy Infrastructure',
    excerpt: 'The electricity grid was designed for centralised fossil fuel generation. The transition to distributed renewables demands fundamental reinvention.',
    category: 'Electrons',
    date: '2024-10-30',
    readTime: '5 min read',
    image: null,
  },
  {
    id: 5,
    title: 'Electric Aviation: When Will Planes Go Green?',
    excerpt: 'Aviation is one of the hardest sectors to decarbonise. We analyse the pathways to zero-emission flight and the timeline for commercial viability.',
    category: 'Mobility',
    date: '2024-10-18',
    readTime: '9 min read',
    image: null,
  },
  {
    id: 6,
    title: 'Why Europe Leads in Climate Hardware',
    excerpt: 'Europe has emerged as the global epicentre for climate hardware innovation. We examine the factors driving this leadership and what it means for founders.',
    category: 'Insights',
    date: '2024-10-05',
    readTime: '6 min read',
    image: null,
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Insights</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Perspectives on the energy transition
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Thoughts, analysis, and insights on climate hardware innovation, the energy transition, and building category-defining companies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover-lift cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-2xl font-semibold text-primary">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
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

      {/* Newsletter CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              eyebrow="Stay Updated"
              title="Subscribe to our newsletter"
              description="Get our latest insights on climate hardware innovation delivered to your inbox."
              centered
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
