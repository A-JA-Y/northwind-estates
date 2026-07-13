import { SITE_URL, project } from "@/data/project";

export type NewsMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-1",

    /* SEO */
    title:
      "NorthWind Sanctuary Named Among Greater Noida's First IGBC Pre-Certified Platinum Rated Group Housing Societies",
    slug: "northwind-sanctuary-igbc-platinum-pre-certified",
    excerpt:
      "NorthWind Sanctuary is one of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida — a Confluence-designed masterplan that gives 80% of its 4.48-acre site to lush green landscape across seven zones.",
    metaTitle:
      "NorthWind Sanctuary: IGBC Pre-Certified Platinum Rated | Greater Noida",
    metaDescription:
      "NorthWind Sanctuary, Sector Pi-1 Greater Noida, is one of the first IGBC Pre-Certified Platinum Rated group housing societies in the city. Inside the 80% green landscape, seven zones and the low-density 4.48-acre Confluence masterplan.",
    keywords: [
      "NorthWind Sanctuary",
      "IGBC Platinum pre-certified",
      "IGBC Green Homes rating",
      "green building Greater Noida",
      "Sector Pi-1 Greater Noida",
      "Northwind Estates",
      "Confluence architects",
      "sustainable luxury apartments Greater Noida",
    ],
    canonical: `${SITE_URL}/news/northwind-sanctuary-igbc-platinum-pre-certified`,

    /* Display */
    image: "/news-1.webp",
    altText:
      "Aerial render of NorthWind Sanctuary, Greater Noida — three towers set within 80% lush green landscape",
    date: "2026-07-06",
    updatedAt: "2026-07-06",
    author: "Admin",
    category: "Real Estate News",
    readTime: "5 min read",
    featured: true,
    tags: [
      "greater noida",
      "igbc platinum",
      "green building",
      "sustainability",
      "northwind sanctuary",
      "masterplan",
      "luxury apartments",
    ],

    /* Extra */
    location: "Sector Pi-1, Greater Noida",
    newsType: "Project",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "NorthWind Sanctuary Named Among Greater Noida's First IGBC Pre-Certified Platinum Rated Group Housing Societies",
      description:
        "NorthWind Sanctuary is one of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida, with 80% lush green landscape, seven landscaped zones and just 185 homes across a 4.48-acre Confluence-designed masterplan.",
      image: [`${SITE_URL}/news-1.webp`],
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      author: {
        "@type": "Person",
        name: "Admin",
      },
      publisher: {
        "@type": "Organization",
        name: project.developer,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/northwind-hero.webp`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/news/northwind-sanctuary-igbc-platinum-pre-certified`,
      },
      articleSection: "Real Estate",
      keywords:
        "NorthWind Sanctuary, IGBC Platinum pre-certified, green building, Greater Noida, Sector Pi-1, Confluence",
      about: [
        {
          "@type": "Place",
          name: "Sector Pi-1, Greater Noida",
        },
        {
          "@type": "Residence",
          name: project.name,
        },
      ],
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is NorthWind Sanctuary a green-certified project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. NorthWind Sanctuary is one of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida. Platinum is the highest tier of the Indian Green Building Council's rating, and a pre-certification is awarded at the design stage against the project's drawings, systems and specifications.",
          },
        },
        {
          "@type": "Question",
          name: "How much of NorthWind Sanctuary is open landscape?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "80% of the 4.48-acre site is lush green landscape, organised into seven zones — the Arrival Zone, Recreational Zone, Active Zone, Fun & Entertainment Zone, Sports Zone, the Serenity Walk and the level beneath it.",
          },
        },
        {
          "@type": "Question",
          name: "How many homes are there at NorthWind Sanctuary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "185 homes in all — 180 luxury apartments and garden villas plus 05 penthouses — across three towers: Amaltas (Tower A, 4 BHK + Servant), Banyan (Tower B, 4 BHK) and Cedar (Tower C, 3 BHK).",
          },
        },
        {
          "@type": "Question",
          name: "Who designed NorthWind Sanctuary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project is designed by Confluence, an award-winning multidisciplinary firm founded in 1999 by Vineeta and Vishal, with over 25 years of practice and a studio of more than 200 architects and designers.",
          },
        },
      ],
    },
  },
];

export default NewsData;
