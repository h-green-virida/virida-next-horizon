import { Layout } from '@/components/layout/Layout';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Let's build the future together
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Whether you're a founder with a breakthrough technology or a partner looking to collaborate, 
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Email us</h3>
                    <p className="text-muted-foreground mt-1">For general enquiries and founder introductions</p>
                    <a href="mailto:info@virida-capital.com" className="text-accent hover:underline mt-2 inline-block">
                      info@virida-capital.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground mt-1">
                      Nieuwegracht aan de Werf 18<br />
                      3512 LR Utrecht<br />
                      The Netherlands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}