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
      
      <p>Listen to the full episode <a href="https://open.spotify.com/episode/1W0jM2oVw65MZ3YcK27aj8" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">here</a>.</p>
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
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
