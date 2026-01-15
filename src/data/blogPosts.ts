import blogClimateAsAService from '@/assets/blog-climate-as-a-service.png';
import blogHarleyPodcast from '@/assets/blog-harley-podcast.jpg';
import blogMarcley from '@/assets/blog-marcley.jpg';

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
    slug: 'climate-solutions-as-a-service',
    title: 'Climate solutions-as-a-Service: hype or real solution for faster asset deployment?',
    excerpt: 'We live in a time where pretty much everything is being offered "as-a-service", from your clothes to charging your car. This model is becoming increasingly popular in climate tech.',
    content: `
      <p>We live in a time where pretty much everything is being offered "as-a-service", from your clothes to charging your car. This model is becoming increasingly popular in climate tech, where new technologies are most often hardware based and may have large upfront capital costs. But "a-a-S" is no magic fix; you can't turn steel, concrete, or electrons into recurring revenue streams just because you want to. Instead, you need a thorough understanding of the customer needs, structuring and financing aspects of turning gross margin into recurring revenue.</p>
      
      <p>Read the full article <a href="https://open.substack.com/pub/viridacapital/p/climate-solutions-as-a-service-hype?r=76a0i3&utm_campaign=post&utm_medium=web" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">here</a></p>
    `,
    category: 'Insights',
    date: '2025-09-09',
    readTime: '5 min read',
    image: blogClimateAsAService,
  },
  {
    id: 2,
    slug: 'rethinking-venture-capital-energy-transition',
    title: 'Rethinking Venture Capital for the Energy Transition: A Conversation with Harley Green at Zero One Hundred Impact Talks',
    excerpt: 'Our colleague Harley Green sat down with 0100 Conferences to discuss how venture capital must evolve to meet the urgent demands of the energy transition.',
    content: `
      <p>In a recent episode of 0100 Impact Talks, our colleague Harley Green sat down with the team at 0100 Conferences to discuss how venture capital must evolve to meet the urgent demands of the energy transition.</p>
      
      <p>In this episode, he explains how we're redefining climate venture with a new playbook designed to meet the scale, speed, and complexity of the net-zero challenge.</p>
      
      <h2>Why Traditional VC Doesn't Fit Climate Tech</h2>
      <p>Most venture funding models were designed for lean, fast-scaling software startups — not for the CapEx-heavy, infrastructure-oriented companies driving climate innovation. As Harley puts it, "Europe needs a new funding model for climate tech hardware — one that embraces complexity instead of shying away from it."</p>
      
      <p>That's where Virida comes in. Our approach contributes equity investment with structured finance access and hands-on operational support. We help founders not just raise capital, but also unlock the door to the non-dilutive and project-based funding they need to scale breakthrough hardware technologies in sectors like energy, industry, and transport.</p>
      
      <h2>Key Takeaways from the Episode</h2>
      <p>In the episode, Harley dives into:</p>
      <ul>
        <li>Why Europe's funding ecosystem must evolve;</li>
        <li>How Virida supports founders with access to non-dilutive capital;</li>
        <li>What Limited Partners (LPs) expect from climate-focused venture funds today;</li>
        <li>Why we believe "impact" isn't about ticking boxes — it's about delivering real-world outcomes.</li>
      </ul>
      
      <p>Whether you're a founder navigating the capital stack, an LP exploring climate VC, or just curious about how we finance the transition to net-zero, this conversation is worth a listen.</p>
      
      <p>Listen to the full episode <a href="https://open.spotify.com/episode/1qU8xQoP7s6Y9v7oZq5Z8o" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">here</a>.</p>
    `,
    category: 'Insights',
    date: '2025-06-11',
    readTime: '5 min read',
    image: blogHarleyPodcast,
  },
  {
    id: 3,
    slug: 'virida-invests-in-marcley',
    title: 'Over 4 million euros for the energy transition of apartment buildings: VIRIDA invests in Marcley',
    excerpt: 'The greentech startup MARCLEY from Hanover announces the successful completion of its latest financing round of over 4 million euros, led by Virida Capital.',
    content: `
      <p>Hanover, 30th July 2024 – Today the greentech startup MARCLEY from Hanover announces the successful completion of its latest financing round of over 4 million euros. The round was led by investors Virida Capital, a new energy hardware VC, Munich-based VC Venture Stars and well-known business angels including Emma Tracey and Florian Bennhold. The previous investors, such as the Hanover investment fund managed by Enjoy Ventures and the investor Climate Founders, also took part in the round again. In addition, this round was expanded by MBG and banks in the form of debt and mezzanine capital.</p>
      
      <p>Read the full article <a href="https://open.substack.com/pub/viridacapital/p/over-4-million-euros-for-the-energy?r=76a0i3&utm_campaign=post&utm_medium=web" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">here</a>.</p>
    `,
    category: 'Portfolio',
    date: '2024-07-30',
    readTime: '2 min read',
    image: blogMarcley,
  },
  // PLACEHOLDER: Add new article here
  // {
  //   id: 4,
  //   slug: 'new-article-slug',
  //   title: 'New Article Title',
  //   excerpt: 'Brief excerpt describing the article.',
  //   content: `
  //     <p>Article content goes here.</p>
  //   `,
  //   category: 'Insights',
  //   date: 'YYYY-MM-DD',
  //   readTime: 'X min read',
  //   image: null, // or import and use an image
  // },
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
