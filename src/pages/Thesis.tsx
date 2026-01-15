import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Zap, Atom, Battery, Car, Settings } from 'lucide-react';
import sectorElectrons from '@/assets/sector-electrons.png';
import sectorMolecules from '@/assets/sector-molecules.png';
import sectorStorage from '@/assets/sector-storage.png';
import sectorMobility from '@/assets/sector-mobility.png';
import sectorFoundations from '@/assets/sector-foundations.png';

const pillars = [
  {
    icon: Zap,
    title: 'Electrons',
    description: 'Technologies that generate, transmit, store, and intelligently manage electricity across the energy system. From advanced solar and wind to next-generation grid infrastructure, we back founders building the backbone of electrified economies.',
    examples: ['Advanced renewable generation', 'Grid modernisation and power electronics', 'Transmission and distribution infrastructure', 'Intelligent energy management systems'],
    backgroundImage: sectorElectrons,
  },
  {
    icon: Atom,
    title: 'Molecules',
    description: 'Solutions enabling the production, conversion, and use of low carbon fuels, chemicals, and industrial feedstocks. The molecular economy must be reinvented to meet net zero targets across heavy industry and hard-to-abate sectors.',
    examples: ['Green hydrogen production', 'Low-carbon ammonia and methanol', 'Sustainable aviation fuels', 'Bio-based chemicals and feedstocks'],
    backgroundImage: sectorMolecules,
  },
  {
    icon: Battery,
    title: 'Storage',
    description: 'Technologies that store energy or materials to balance supply and demand across time, scale, and applications. Storage is the linchpin of the energy transition, enabling flexibility across hours, days, and seasons.',
    examples: ['Next-gen battery chemistries', 'Long-duration energy storage', 'Thermal storage systems', 'Hydrogen and compressed air storage'],
    backgroundImage: sectorStorage,
  },
  {
    icon: Car,
    title: 'Mobility',
    description: 'Systems and platforms that decarbonize the movement of people and goods across road, sea, and air. Transport accounts for a quarter of global emissions and requires fundamental hardware innovation.',
    examples: ['Electric vehicle components', 'Maritime decarbonisation', 'Aviation electrification', 'Charging infrastructure'],
    backgroundImage: sectorMobility,
  },
  {
    icon: Settings,
    title: 'Foundations & Efficiencies',
    description: 'Core technologies that improve manufacturing, asset optimisation, and energy efficiency across the industrial value chain. Efficiency remains the cheapest form of clean energy.',
    examples: ['Industrial process optimisation', 'Smart sensors and IoT', 'Predictive maintenance platforms', 'Energy-efficient manufacturing'],
    backgroundImage: sectorFoundations,
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
            description="Our thesis is built around five interconnected domains where breakthrough hardware innovation can drive systemic change."
            centered
          />
          <div className="mt-20 space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={pillar.backgroundImage} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
                </div>
                
                {/* Content */}
                <div className="relative p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <pillar.icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{pillar.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:border-l lg:border-border/50 lg:pl-8">
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
                { title: 'Seed to Series A', description: 'We lead or co-lead rounds of €1-8M, with meaningful reserves for follow-on.' },
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
