import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Users, Building, BookOpen, Calendar } from 'lucide-react';

const initiatives = [
  {
    icon: Users,
    title: 'Founder Network',
    description: 'A private community of 100+ climate hardware founders across Europe. Monthly virtual sessions, annual summit, and continuous peer support.',
  },
  {
    icon: Building,
    title: 'Industry Partnerships',
    description: 'We maintain deep relationships with leading industrials, utilities, and corporates actively seeking climate solutions. We facilitate introductions and pilot opportunities for portfolio companies.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Platform',
    description: 'Proprietary research and insights on market dynamics, regulatory developments, and technology trends across our focus sectors.',
  },
  {
    icon: Calendar,
    title: 'Events & Convenings',
    description: 'Regular gatherings that bring together founders, investors, corporate partners, and policymakers to accelerate collaboration in climate hardware.',
  },
];

const partners = [
  { name: 'European Climate Foundation', type: 'Research Partner' },
  { name: 'Fraunhofer Institute', type: 'Technical Partner' },
  { name: 'Energy Transition Partnership', type: 'Industry Alliance' },
  { name: 'Climate-KIC', type: 'Ecosystem Partner' },
  { name: 'InnoEnergy', type: 'Co-investment Partner' },
  { name: 'RWTH Aachen', type: 'Academic Partner' },
];

export default function Ecosystem() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Ecosystem</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Building the infrastructure around climate hardware
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We invest in more than companies. We're building the connective tissue that helps 
              European climate hardware founders access customers, capital, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-8 pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group p-8 lg:p-10 rounded-2xl border border-border bg-card hover-lift transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <initiative.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{initiative.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Network"
            title="Partners & Collaborators"
            description="We work with leading institutions across research, industry, and policy to accelerate climate innovation."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <p className="font-display font-semibold text-foreground">{partner.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Founders in network' },
              { value: '50+', label: 'Industry partners' },
              { value: '12', label: 'Events per year' },
              { value: '8', label: 'Research partners' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-5xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
