import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Niels Jongste',
    role: 'Managing Partner',
    bio: 'Founder of Green Giraffe, Europe\'s leading renewables advisory firm, working on >€5bn of transactions annually. Built and grew a clean energy investment vehicle to >€120m in AUM and delivered multiple exits.',
    linkedin: 'https://www.linkedin.com/in/niels-jongste-1758104/',
  },
  {
    name: 'Alexandra Nilsson',
    role: 'Managing Partner',
    bio: 'Former leader at Macquarie\'s green investment banking division in Europe, a pioneer in energy transition finance. Set up her own advisory firm, working on several first of a kind transactions such as Ikea\'s first ever offshore wind investment',
    linkedin: 'https://www.linkedin.com/in/alexandra-nilsson-a8065339/',
  },
  {
    name: 'Harley Green',
    role: 'Investment Manager',
    bio: 'Senior employee at two early-stage VC funds covering climate tech, sourcing and leading several investments into now category leading businesses. Sat on multiple company boards, LP in several emerging VC funds, and active angel investor.',
    linkedin: 'https://www.linkedin.com/in/harleycgreen/',
  },
  {
    name: 'Annika Berghauser',
    role: 'Investment Manager',
    bio: 'Extensive clean energy investment advisory experience covering Europe, the US, and Japan. Previously worked at KfW-IPEX, and the International Energy Agency.',
    linkedin: 'https://www.linkedin.com/in/annika-bergh%C3%A4user-247a4263/',
  },
  {
    name: 'Joppe Eising',
    role: 'Analyst',
    bio: 'Formerly at Impulse, a financial advisory firm for impact tech startups in energy and health.',
    linkedin: 'https://www.linkedin.com/in/joppe-eising/',
  },
  {
    name: 'Advisor Name',
    role: 'Advisor',
    bio: 'Description of the advisor\'s background and expertise in the energy sector.',
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
              Operators and investors building the future of energy
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Our team combines deep expertise in energy systems with decades of experience 
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
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden mb-6">
                  <img 
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80&seed=${index}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
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
