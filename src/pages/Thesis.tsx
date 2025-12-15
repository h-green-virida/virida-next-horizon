import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Building2, Zap, Flame, Layers } from 'lucide-react';

const pillars = [
  {
    icon: Building2,
    title: 'Decarbonising Heavy Industry',
    description: 'Heavy industry accounts for nearly 30% of global emissions, yet remains underserved by traditional venture capital. We invest in technologies that fundamentally reimagine how steel, cement, chemicals, and other foundational materials are produced.',
    examples: ['Green steel production', 'Low-carbon cement alternatives', 'Industrial process electrification', 'Carbon capture for industrial sources'],
  },
  {
    icon: Zap,
    title: 'Next-Generation Energy Systems',
    description: 'The energy grid of tomorrow will look radically different. We back founders building the infrastructure for renewable generation at scale, grid modernisation, and the complex systems required to balance intermittent supply with dynamic demand.',
    examples: ['Advanced grid infrastructure', 'Renewable generation technologies', 'Power electronics and conversion', 'Grid balancing systems'],
  },
  {
    icon: Flame,
    title: 'Electrification & Thermal Technologies',
    description: 'The electrification of heat and industrial processes represents one of the largest opportunities in the energy transition. We invest in advanced battery technologies, thermal storage systems, and heat pumps for industrial applications.',
    examples: ['Next-gen battery chemistries', 'Long-duration energy storage', 'Industrial heat pumps', 'Thermal energy storage'],
  },
  {
    icon: Layers,
    title: 'Enabling Digital Layers',
    description: 'Software and sensors are the nervous system of the new energy economy. We invest in the digital infrastructure that enables hardware to operate efficiently, integrate seamlessly, and scale intelligently.',
    examples: ['Energy management systems', 'Predictive maintenance platforms', 'Industrial IoT infrastructure', 'Grid optimisation software'],
  },
];

export default function Thesis() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Our Thesis</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              The hardware revolution powering net zero
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              The transition to a net zero economy requires fundamental innovation in physical systems. 
              Software alone cannot decarbonise steel mills, electrify industrial heat, or build the grid of tomorrow. 
              We invest in the hardware that will.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Market Context"
                title="Why now"
              />
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Three converging forces have created an unprecedented opportunity for climate hardware innovation:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">1</span>
                    <span><strong className="text-foreground">Policy acceleration</strong> — The IRA, EU Green Deal, and equivalent legislation globally have created massive demand signals and de-risked early-stage climate technology.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">2</span>
                    <span><strong className="text-foreground">Technology maturation</strong> — Key enabling technologies (batteries, power electronics, advanced materials) have reached inflection points in cost and performance.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">3</span>
                    <span><strong className="text-foreground">Industrial urgency</strong> — Major industrials are actively seeking solutions to meet decarbonisation commitments, creating unprecedented customer pull.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10 border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-display text-6xl md:text-7xl font-bold text-gradient">€1.5T</p>
                    <p className="mt-4 text-muted-foreground">Annual investment needed in clean energy by 2030</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Pillars */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment Pillars"
            title="Where we focus"
            description="Our thesis is built around four interconnected domains where breakthrough hardware innovation can drive systemic change."
            centered
          />
          <div className="mt-20 space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group p-8 lg:p-12 rounded-2xl border border-border bg-card hover:bg-card/80 transition-colors"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <pillar.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{pillar.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:border-l lg:border-border lg:pl-8">
                    <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Focus Areas</p>
                    <ul className="space-y-2">
                      {pillar.examples.map((example, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Our Approach"
              title="How we partner"
              centered
            />
            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {[
                { title: 'Seed to Series A', description: 'We lead or co-lead rounds of €1-5M, with meaningful reserves for follow-on.' },
                { title: 'Active Builders', description: 'We work hands-on with founders on technical validation, team building, and go-to-market.' },
                { title: 'Network Effects', description: 'We connect portfolio companies to industry partners, customers, and talent across Europe.' },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-background border border-border">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
