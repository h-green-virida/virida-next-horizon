import { Layout } from '@/components/layout/Layout';

export default function SFDR() {
  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            EU SFDR Disclosures
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Sustainable Finance Disclosure Regulation (SFDR)
              </h2>
              <p className="leading-relaxed">
                Virida Capital is committed to transparency in how we integrate sustainability 
                considerations into our investment decisions and advice. This page contains 
                disclosures required under the EU Sustainable Finance Disclosure Regulation 
                (Regulation (EU) 2019/2088).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Sustainability Risk Integration
              </h2>
              <p className="leading-relaxed">
                Sustainability risks are integrated into our investment decision-making process. 
                We assess environmental, social, and governance (ESG) factors as part of our 
                due diligence for all potential investments, with a particular focus on climate 
                transition and clean energy opportunities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Principal Adverse Impacts
              </h2>
              <p className="leading-relaxed">
                Virida Capital considers the principal adverse impacts of investment decisions 
                on sustainability factors. We monitor and report on key indicators related to 
                climate and environmental impact, social and employee matters, and governance practices.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Remuneration Policy
              </h2>
              <p className="leading-relaxed">
                Our remuneration policy is designed to be consistent with the integration of 
                sustainability risks. Investment professionals are incentivized to consider 
                long-term sustainability factors alongside financial performance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Contact
              </h2>
              <p className="leading-relaxed">
                For more information about our SFDR disclosures or sustainability practices, 
                please contact us at{' '}
                <a 
                  href="mailto:hello@viridacapital.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  hello@viridacapital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
