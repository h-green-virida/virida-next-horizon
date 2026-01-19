import { Layout } from '@/components/layout/Layout';
import { NewsGrid } from '@/components/shared/NewsGrid';

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

      {/* News Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <NewsGrid showViewAll />
        </div>
      </section>
    </Layout>
  );
}
