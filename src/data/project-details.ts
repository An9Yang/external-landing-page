export interface ProjectDetailSection {
  heading: string;
  body: string;
  images?: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  industry: string;
  client: string;
  duration: string;
  heroImage: string;
  sections: ProjectDetailSection[];
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "vistahaven",
    title: "VistaHaven",
    category: "Web Design",
    description:
      "VistaHaven is a refined real-estate template crafted to give premium properties an editorial-level presentation with immersive storytelling and confident typography.",
    year: "2025",
    industry: "Real Estate",
    client: "VistaHaven",
    duration: "2 Weeks",
    heroImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2400&auto=format&fit=crop",
    sections: [
      {
        heading: "Problem",
        body:
          "Luxury property teams needed a site that felt exclusive without becoming sterile. Off-the-shelf templates were either overly decorative or lacked the polish required to convince discerning buyers.",
        images: [
          "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Solution",
        body:
          "We built a narrative-led structure anchored by cinematic photography, restrained copy, and subtle micro-interactions. Warmer gradients and soft shadows balance the stark typography to maintain a sense of hospitality.",
        images: [
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Challenge",
        body:
          "The experience needed to stay as expressive on mobile as on widescreen. We created a modular layout system that keeps imagery edge-to-edge while giving the content team reusable blocks for multi-language rollouts.",
        images: [
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Summary",
        body:
          "VistaHaven now communicates the calm confidence of the brand while giving sales teams flexible modules for future listings—helping the client stand out in a crowded luxury market.",
        images: [
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    slug: "coral-spiral",
    title: "Coral Spiral Abstract",
    category: "Branding",
    description:
      "Soft coral gradients and flowing spirals define a new visual identity that feels both artful and premium from the very first touchpoint.",
    year: "2024",
    industry: "Creative Studio",
    client: "Coral Studio",
    duration: "3 Weeks",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop",
    sections: [
      {
        heading: "Problem",
        body:
          "Coral Studio had a fragmented identity—print collateral and digital touchpoints expressed different moods, making it difficult to communicate their warm yet premium tone.",
        images: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Solution",
        body:
          "We designed a modular system built around coral color fields and spiral motifs, creating reusable graphic blocks that carry the same emotion across packaging, web, and events.",
        images: [
          "https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Challenge",
        body:
          "We tested numerous color values and line weights to keep the identity delicate yet legible, especially in motion and small-scale applications.",
        images: [
          "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Summary",
        body:
          "The completed system increased social media recognition by 45% and gave the studio a consistent language for future campaigns.",
        images: [
          "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    slug: "shoapease-redesign",
    title: "ShopEase Redesign Sprint",
    category: "UI/UX Design",
    description:
      "A high-pressure sprint that rebuilt the entire e-commerce flow around customer intent while preserving the approachable voice of the brand.",
    year: "2024",
    industry: "E-commerce",
    client: "ShopEase",
    duration: "10 Days",
    heroImage:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2400&auto=format&fit=crop",
    sections: [
      {
        heading: "Problem",
        body:
          "The existing checkout flow was bloated, and mobile conversions were 28% below industry benchmarks. The team needed a refreshed experience before the seasonal sales spike.",
        images: [
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Solution",
        body:
          "We partnered with stakeholders in a design sprint to map user jobs, shorten the decision path, and introduce phased checkout with real-time inventory prompts.",
        images: [
          "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Challenge",
        body:
          "Scope shifted daily. A component-based design system allowed us to iterate quickly while keeping developers aligned on handoff quality.",
        images: [
          "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Summary",
        body:
          "Within two weeks of launch, conversion rates climbed 32% and support chats dropped 18%, giving ShopEase a repeatable blueprint for future releases.",
        images: [
          "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    slug: "black-geometric-prisms",
    title: "Black Geometric Prisms",
    category: "Branding",
    description:
      "A dramatic, metal-inspired identity system that gives a frontier AI company a bold, sculptural voice across every touchpoint.",
    year: "2023",
    industry: "Tech & Innovation",
    client: "Prism Labs",
    duration: "5 Weeks",
    heroImage:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2400&auto=format&fit=crop",
    sections: [
      {
        heading: "Problem",
        body:
          "Prism Labs’ previous identity felt soft and corporate, misaligned with their ambitious AI hardware roadmap. They needed an aesthetic that conveyed precision and power.",
        images: [
          "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Solution",
        body:
          "We composed the core visuals from angular prisms, cool grays, and subtle iridescent highlights—then extended the system to web, packaging, and event signage.",
        images: [
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Challenge",
        body:
          "Full-black palettes can harm legibility. We defined a lighting system and contrast rules to keep the brand premium yet accessible across UI and print.",
        images: [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Summary",
        body:
          "The refreshed identity helped Prism Labs capture media attention at launch events and communicate technical strength to investors.",
        images: [
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
  },
  {
    slug: "pantone-very-peri",
    title: "Pantone Very Peri Poster Design",
    category: "Graphic Design",
    description:
      "A motion-rich poster campaign inspired by Pantone’s Very Peri, blending color play with kinetic typography across digital and print.",
    year: "2022",
    industry: "Creative Campaign",
    client: "Pantone Lab",
    duration: "4 Weeks",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    sections: [
      {
        heading: "Problem",
        body:
          "Pantone wanted the yearly color to feel energetic, yet their initial assets were static and failed to capture the momentum of Very Peri.",
        images: [
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Solution",
        body:
          "We developed particle and fluid simulations that brought the hue to life, pairing them with assertive typographic rhythms for drama across channels.",
        images: [
          "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=2000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Challenge",
        body:
          "Maintaining saturation across digital and print required strict production guidelines, so we built dedicated curves and color variants for each medium.",
        images: [
          "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        heading: "Summary",
        body:
          "The campaign generated over 1.2 million impressions and became the hero asset for Pantone’s annual marketing push.",
        images: [
          "https://images.unsplash.com/photo-1483097365274-ab7ebd616568?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
  },
];

export const relatedProjects = [
  {
    slug: "black-geometric-prisms",
    title: "Black Geometric Prisms",
    category: "Branding",
    description:
      "A futuristic metal-inspired brand system that unifies digital and physical touchpoints.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "pantone-very-peri",
    title: "Pantone Very Peri Poster Design",
    category: "Graphic Design",
    description:
      "Posters celebrating the 2024 color trend through dynamic motion and luminous gradients.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "coral-spiral",
    title: "Coral Spiral Abstract",
    category: "Branding",
    description:
      "A soft gradient identity built around spiral geometry for an immersive first impression.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "shoapease-redesign",
    title: "ShopEase Redesign Sprint",
    category: "UI/UX Design",
    description:
      "A sprint that reimagined the shopping flow and boosted conversions by 32%.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1600&auto=format&fit=crop",
  },
];
