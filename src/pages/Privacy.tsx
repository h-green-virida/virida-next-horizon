import { Layout } from '@/components/layout/Layout';

export default function Privacy() {
  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed">
                Virida Capital ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal data you voluntarily provide (name, email, company information)</li>
                <li>Usage data collected automatically (browser type, IP address, pages visited)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and communicate with you</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Send periodic communications about our fund and investment opportunities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Data Protection Rights (GDPR)
              </h2>
              <p className="leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain 
                data protection rights, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to rectification</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Data Retention
              </h2>
              <p className="leading-relaxed">
                We will retain your personal information only for as long as necessary to 
                fulfill the purposes for which it was collected, including to satisfy any 
                legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your 
                data protection rights, please contact us at{' '}
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
