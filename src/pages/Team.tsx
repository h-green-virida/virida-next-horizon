import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Elena Bergström',
    role: 'Managing Partner',
    bio: 'Former VP Engineering at Siemens Energy. 15 years building and scaling deep tech companies. PhD in Power Systems from ETH Zurich.',
    linkedin: '#',
  },
  {
    name: 'Marcus van der Berg',
    role: 'General Partner',
    bio: 'Previously investment director at EQT. Led investments in industrial automation and energy infrastructure. MBA from INSEAD.',
    linkedin: '#',
  },
  {
    name: 'Dr. Sophie Laurent',
    role: 'Partner',
    bio: 'Former CTO at a grid-scale storage company. Deep expertise in battery systems and power electronics. PhD in Materials Science from Cambridge.',
    linkedin: '#',
  },
  {
    name: 'Henrik Andersen',
    role: 'Principal',
    bio: 'Ex-McKinsey, focused on energy and heavy industry. Led deal execution for multiple climate tech investments. MSc from Copenhagen Business School.',
    linkedin: '#',
  },
  {
    name: 'Dr. Maria Kowalski',
    role: 'Venture Partner',
    bio: 'Former R&D director at BASF. Expert in industrial decarbonisation and sustainable materials. PhD in Chemical Engineering from TU Munich.',
    linkedin: '#',
  },
  {
    name: 'Alexander Müller',
    role: 'Associate',
    bio: 'Background in energy consulting at BCG. Focus on market analysis and due diligence for hardware investments. MSc Engineering from TU Delft.',
    linkedin: '#',
  },
];

export default function Team() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Our Team</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Operators and investors building the energy future
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Our team combines deep technical expertise in energy systems with decades of experience 
              building and scaling industrial technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                  <span className="font-display text-2xl font-semibold text-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent font-medium mt-1 mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="How we work"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Technical Depth',
                description: 'We evaluate technologies from first principles. Our team has built and scaled hardware companies, and we bring that operational lens to every investment.',
              },
              {
                title: 'Founder Partnership',
                description: 'We work alongside founders, not just as investors, but as collaborators who understand the unique challenges of building physical products.',
              },
              {
                title: 'Long-Term Thinking',
                description: "Hardware takes time. We're structured to support companies through the multi-year journey from prototype to commercial scale.",
              },
            ].map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
