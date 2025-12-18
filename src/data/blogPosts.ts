export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string | null;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'rise-of-long-duration-energy-storage',
    title: 'The Rise of Long-Duration Energy Storage',
    excerpt: 'As renewable energy penetration increases, the need for storage solutions that can balance supply and demand over hours, days, and even seasons becomes critical.',
    content: `
      <p>As renewable energy sources like wind and solar continue to grow their share of the global electricity mix, a fundamental challenge emerges: how do we balance supply and demand when the sun doesn't shine and the wind doesn't blow?</p>
      
      <h2>The Challenge of Intermittency</h2>
      <p>Traditional electricity grids were designed around dispatchable power sources—coal, gas, and nuclear plants that could be turned on and off based on demand. Renewable energy flips this model on its head, creating a system where supply is dictated by weather patterns rather than consumption needs.</p>
      
      <h2>Beyond Lithium-Ion</h2>
      <p>While lithium-ion batteries have revolutionised short-duration storage (typically 2-4 hours), they face significant limitations for longer durations. The economics simply don't work when you need to store energy for days or weeks at a time.</p>
      
      <h2>Emerging Technologies</h2>
      <p>A new generation of storage technologies is emerging to fill this gap:</p>
      <ul>
        <li><strong>Flow batteries</strong> offer scalable capacity independent of power ratings</li>
        <li><strong>Compressed air energy storage</strong> leverages geological formations for massive scale</li>
        <li><strong>Thermal storage</strong> converts electricity to heat for later recovery</li>
        <li><strong>Green hydrogen</strong> enables seasonal storage through chemical conversion</li>
      </ul>
      
      <h2>The Investment Opportunity</h2>
      <p>At Virida, we see long-duration energy storage as one of the most critical enablers of a fully decarbonised grid. The companies that crack this challenge will unlock trillions of dollars in renewable energy investment that is currently constrained by intermittency concerns.</p>
    `,
    category: 'Storage',
    date: '2024-12-10',
    readTime: '6 min read',
    image: null,
  },
  {
    id: 2,
    slug: 'green-hydrogen-hype-to-reality',
    title: 'Green Hydrogen: From Hype to Reality',
    excerpt: 'We examine the economics of green hydrogen production and identify the sectors where it will first achieve cost competitiveness with fossil alternatives.',
    content: `
      <p>Green hydrogen has captured the imagination of policymakers, investors, and industry leaders alike. But beneath the hype lies a more nuanced reality about where and when hydrogen will actually make economic sense.</p>
      
      <h2>Understanding the Economics</h2>
      <p>Green hydrogen today costs roughly €4-6 per kilogram to produce, compared to €1-2 for grey hydrogen from natural gas. Closing this gap requires dramatic reductions in both electrolyser costs and renewable electricity prices.</p>
      
      <h2>Where Hydrogen Makes Sense</h2>
      <p>Not every application touted for hydrogen actually makes economic or physical sense. We see the strongest near-term opportunities in:</p>
      <ul>
        <li><strong>Industrial feedstock</strong> where hydrogen is already used (ammonia, refining)</li>
        <li><strong>Heavy transport</strong> where batteries face weight and range limitations</li>
        <li><strong>High-temperature industrial heat</strong> that cannot be easily electrified</li>
      </ul>
      
      <h2>The Path Forward</h2>
      <p>We believe green hydrogen will achieve cost parity with fossil alternatives in many applications by 2030, driven by manufacturing scale, improved efficiency, and continued declines in renewable energy costs.</p>
    `,
    category: 'Molecules',
    date: '2024-11-28',
    readTime: '8 min read',
    image: null,
  },
  {
    id: 3,
    slug: 'decarbonising-heavy-industry',
    title: 'Decarbonising Heavy Industry: The Hardware Challenge',
    excerpt: 'Steel, cement, and chemicals account for nearly 30% of global emissions. We explore the breakthrough technologies that could transform these sectors.',
    content: `
      <p>While the electrification of transport and power generation dominates climate discourse, a harder challenge lurks in the background: decarbonising the industries that make modern civilisation possible.</p>
      
      <h2>The Scale of the Challenge</h2>
      <p>Steel, cement, and chemicals together account for roughly 30% of global CO2 emissions. These industries are characterised by high temperatures, massive scale, and razor-thin margins—making decarbonisation exceptionally difficult.</p>
      
      <h2>Breakthrough Technologies</h2>
      <p>A new generation of hardware startups is tackling these challenges head-on:</p>
      <ul>
        <li><strong>Green steel</strong> using hydrogen-based direct reduction</li>
        <li><strong>Novel cement chemistries</strong> that reduce or eliminate process emissions</li>
        <li><strong>Electrochemical processes</strong> replacing thermal routes in chemicals</li>
        <li><strong>Carbon capture</strong> for residual emissions that cannot be eliminated</li>
      </ul>
      
      <h2>Our Investment Focus</h2>
      <p>At Virida, we're actively seeking founders who are reimagining industrial processes from first principles. The prize is enormous: these are multi-trillion dollar markets ripe for disruption.</p>
    `,
    category: 'Foundations',
    date: '2024-11-15',
    readTime: '7 min read',
    image: null,
  },
  {
    id: 4,
    slug: 'grid-of-tomorrow',
    title: 'The Grid of Tomorrow: Rebuilding Energy Infrastructure',
    excerpt: 'The electricity grid was designed for centralised fossil fuel generation. The transition to distributed renewables demands fundamental reinvention.',
    content: `
      <p>The electricity grid is perhaps the most complex machine ever built by humanity. But it was designed for a world of centralised, dispatchable power plants—a world that is rapidly disappearing.</p>
      
      <h2>A System Under Stress</h2>
      <p>Today's grids face unprecedented challenges: bidirectional power flows, intermittent generation, and exploding demand from EVs and heat pumps. Without fundamental upgrades, we risk brownouts and blackouts as renewable penetration increases.</p>
      
      <h2>The Opportunity Space</h2>
      <p>We see massive opportunities across the grid value chain:</p>
      <ul>
        <li><strong>Grid-scale power electronics</strong> for voltage and frequency regulation</li>
        <li><strong>Advanced conductors</strong> that double transmission capacity</li>
        <li><strong>Software platforms</strong> for real-time grid optimisation</li>
        <li><strong>Distributed energy resource management</strong> systems</li>
      </ul>
      
      <h2>The Investment Case</h2>
      <p>Global grid investment needs to double to over $600 billion annually by 2030. The companies building the hardware to enable this transformation will capture enormous value.</p>
    `,
    category: 'Electrons',
    date: '2024-10-30',
    readTime: '5 min read',
    image: null,
  },
  {
    id: 5,
    slug: 'electric-aviation',
    title: 'Electric Aviation: When Will Planes Go Green?',
    excerpt: 'Aviation is one of the hardest sectors to decarbonise. We analyse the pathways to zero-emission flight and the timeline for commercial viability.',
    content: `
      <p>Aviation accounts for roughly 2.5% of global CO2 emissions—and that share is growing as other sectors decarbonise. Can we make flight sustainable without giving up the benefits of air travel?</p>
      
      <h2>The Physics Challenge</h2>
      <p>Batteries are heavy. Very heavy. While this is manageable for cars, it's a fundamental problem for aircraft where every kilogram counts. Today's best batteries have energy densities roughly 50x lower than jet fuel.</p>
      
      <h2>Pathways to Zero-Emission Flight</h2>
      <p>Different solutions make sense for different flight segments:</p>
      <ul>
        <li><strong>Battery-electric</strong> for flights under 500km (urban air mobility, regional)</li>
        <li><strong>Hydrogen fuel cells</strong> for regional flights up to 1,500km</li>
        <li><strong>Hydrogen combustion</strong> for medium-haul routes</li>
        <li><strong>Sustainable aviation fuels</strong> for long-haul where no other option exists</li>
      </ul>
      
      <h2>The Timeline</h2>
      <p>We expect to see commercial electric aircraft on short routes by 2026, with hydrogen aircraft following in the early 2030s. Long-haul decarbonisation remains the toughest nut to crack.</p>
    `,
    category: 'Mobility',
    date: '2024-10-18',
    readTime: '9 min read',
    image: null,
  },
  {
    id: 6,
    slug: 'why-europe-leads-climate-hardware',
    title: 'Why Europe Leads in Climate Hardware',
    excerpt: 'Europe has emerged as the global epicentre for climate hardware innovation. We examine the factors driving this leadership and what it means for founders.',
    content: `
      <p>While Silicon Valley dominates software, Europe has quietly become the world leader in climate hardware innovation. What's driving this shift, and what does it mean for founders and investors?</p>
      
      <h2>The European Advantage</h2>
      <p>Several factors combine to make Europe uniquely positioned for climate hardware:</p>
      <ul>
        <li><strong>Policy certainty</strong> through the European Green Deal and national net-zero targets</li>
        <li><strong>Deep engineering talent</strong> from world-class technical universities</li>
        <li><strong>Industrial heritage</strong> providing manufacturing know-how and supply chains</li>
        <li><strong>Ambitious corporate buyers</strong> seeking to decarbonise their operations</li>
      </ul>
      
      <h2>The Funding Landscape</h2>
      <p>European climate tech funding has grown 10x over the past five years, with hardware companies increasingly able to raise the patient capital they need. Government co-investment programs have been particularly catalytic.</p>
      
      <h2>Our Thesis</h2>
      <p>At Virida, we believe Europe's structural advantages in climate hardware will only strengthen over the coming decade. We're committed to backing the exceptional founders building category-defining companies from this continent.</p>
    `,
    category: 'Insights',
    date: '2024-10-05',
    readTime: '6 min read',
    image: null,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
