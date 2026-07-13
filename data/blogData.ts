import { SITE_URL, project } from "@/data/project";

export type BlogMeta = {
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
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

const publisher = {
  "@type": "Organization",
  name: project.developer,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/northwind-hero.webp`,
  },
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-1",

    /* SEO */
    title:
      "NorthWind Sanctuary Greater Noida: A Buyer's Guide to Amaltas, Banyan and Cedar",
    slug: "northwind-sanctuary-greater-noida-buyers-guide",
    excerpt:
      "Three towers, 185 homes, 4.48 acres and 80% landscape. What actually separates Amaltas, Banyan and Cedar, how to read the area figures on a floor plan, what the seven zones contain — and the questions you should still put to the developer.",
    metaTitle:
      "NorthWind Sanctuary Greater Noida: Buyer's Guide to Amaltas, Banyan & Cedar",
    metaDescription:
      "A complete buyer's guide to NorthWind Sanctuary, Sector Pi-1 Greater Noida: the three towers compared, carpet vs built-up vs saleable areas, the 47-element master plan, Club Roots, tower-wise specifications and IGBC Pre-Certified Platinum status.",
    keywords: [
      "NorthWind Sanctuary",
      "NorthWind Sanctuary Greater Noida",
      "Amaltas Banyan Cedar",
      "3 BHK Greater Noida",
      "4 BHK Greater Noida",
      "Sector Pi-1 Greater Noida",
      "Northwind Estates",
      "luxury apartments Greater Noida",
      "carpet area vs saleable area",
      "IGBC Platinum pre-certified",
    ],
    canonical: `${SITE_URL}/blogs/northwind-sanctuary-greater-noida-buyers-guide`,

    /* Display */
    image: "/blog-1.webp",
    altText:
      "NorthWind Sanctuary, Sector Pi-1 Greater Noida — the three towers Amaltas, Banyan and Cedar seen across the landscaped central lawn",
    date: "2026-07-08",
    updatedAt: "2026-07-08",
    author: "Admin",
    category: "Buyer's Guide",
    readTime: "12 min read",
    featured: true,
    tags: [
      "northwind sanctuary",
      "greater noida",
      "buyers guide",
      "floor plans",
      "carpet area",
      "luxury apartments",
      "sector pi-1",
    ],

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "NorthWind Sanctuary Greater Noida: A Buyer's Guide to Amaltas, Banyan and Cedar",
      description:
        "The three towers of NorthWind Sanctuary compared — Amaltas (4 BHK + Servant, 3,750 sq. ft.), Banyan (4 BHK, 2,431 sq. ft.) and Cedar (3 BHK, 1,895 sq. ft.) — with carpet and built-up areas, the seven amenity zones, Club Roots and the tower-wise specification.",
      image: [`${SITE_URL}/blog-1.webp`],
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      author: { "@type": "Person", name: "Admin" },
      publisher,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/northwind-sanctuary-greater-noida-buyers-guide`,
      },
      articleSection: "Real Estate",
      keywords:
        "NorthWind Sanctuary, Amaltas, Banyan, Cedar, Sector Pi-1, Greater Noida, carpet area, IGBC Platinum",
      about: [
        { "@type": "Residence", name: project.name },
        { "@type": "Place", name: "Sector Pi-1, Greater Noida" },
      ],
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What configurations are available at NorthWind Sanctuary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three. Tower A (Amaltas) is a 4 BHK + Servant of 3,750 sq. ft. saleable. Tower B (Banyan) is a 4 BHK of 2,431 sq. ft. saleable. Tower C (Cedar) is a 3 BHK of 1,895 sq. ft. saleable. There are also 5 penthouses and 4 garden villas across the project.",
          },
        },
        {
          "@type": "Question",
          name: "How many apartments are there in total?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "185 homes across three towers — 180 luxury apartments and garden villas plus 5 penthouses. Amaltas has 31 units over 17 floors, Banyan 76 units over 20 floors, and Cedar 78 units over 20 floors.",
          },
        },
        {
          "@type": "Question",
          name: "What is the carpet area of each apartment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amaltas: 1,956 sq. ft. carpet (2,839 built-up, 705 balcony). Banyan: 1,286 sq. ft. carpet (1,800 built-up, 394 balcony). Cedar: 957 sq. ft. carpet (1,468 built-up, 382 balcony). Always compare carpet with carpet when benchmarking against another project.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of an apartment at NorthWind Sanctuary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing is not published in the brochure and is shared on request. Ask for the current rate, the payment plan and all additional charges in writing, quoted against the saleable area of the specific unit you are considering.",
          },
        },
        {
          "@type": "Question",
          name: "What is the RERA registration number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RERA registration number is not printed in the brochure. Request it from the developer and verify it independently on the UP RERA portal before making any payment.",
          },
        },
        {
          "@type": "Question",
          name: "Which tower has the best specification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tower A (Amaltas) is the only tower specified with VRV air-conditioning; Towers B and C use split AC. The rest of the palette — imported marble, wooden flooring in bedrooms, quartz-top modular kitchen, Kohler/Roca/Jaquar or equivalent fittings, 2450 mm veneer doors and UPVC windows — is shared across all three.",
          },
        },
        {
          "@type": "Question",
          name: "Is NorthWind Sanctuary a green building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is described as one of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida, and 80% of the site is lush green landscape. Pre-certification is awarded on the design; ask the developer what the path to final certification is.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the architect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Confluence — an award-winning multidisciplinary firm founded in 1999 by Vineeta and Vishal, with more than 25 years of practice and over 200 architects and designers.",
          },
        },
      ],
    },
  },

  {
    id: "blog-2",

    /* SEO */
    title:
      "Sector Pi-1, Greater Noida: A Connectivity Guide to NorthWind Sanctuary's Address",
    slug: "sector-pi-1-greater-noida-connectivity-guide",
    excerpt:
      "Metro at 2 km. Pari Chowk and Fortis at 5. School at 8. Noida International Airport and Delhi at 30. What those six numbers mean for a weekday — and the expressway grid, universities and commercial belt around them.",
    metaTitle:
      "Sector Pi-1 Greater Noida Connectivity Guide | NorthWind Sanctuary Location",
    metaDescription:
      "How well connected is Sector Pi-1, Greater Noida? GNIDA Metro 2 km, Pari Chowk 5 km, Fortis Hospital 5 km, Delhi Public School 8 km, Noida International Airport and Delhi 30 km — plus the expressway grid, Sharda and Bennett universities and the Alpha commercial belt.",
    keywords: [
      "Sector Pi-1 Greater Noida",
      "NorthWind Sanctuary location",
      "Greater Noida connectivity",
      "GNIDA Metro Station",
      "Pari Chowk",
      "Noida International Airport",
      "Yamuna Expressway",
      "Noida Greater Noida Link Road",
      "Sharda University",
      "Bennett University",
    ],
    canonical: `${SITE_URL}/blogs/sector-pi-1-greater-noida-connectivity-guide`,

    /* Display */
    image: "/blog-2.webp",
    altText:
      "Aerial view of NorthWind Sanctuary in Sector Pi-1, Greater Noida, with the surrounding road network and green belt",
    date: "2026-07-10",
    updatedAt: "2026-07-10",
    author: "Admin",
    category: "Location Guide",
    readTime: "10 min read",
    featured: false,
    tags: [
      "sector pi-1",
      "greater noida",
      "connectivity",
      "location guide",
      "metro",
      "noida international airport",
      "northwind sanctuary",
    ],

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Sector Pi-1, Greater Noida: A Connectivity Guide to NorthWind Sanctuary's Address",
      description:
        "The six published distances from NorthWind Sanctuary, Sector Pi-1 Greater Noida — GNIDA Metro 02 km, Pari Chowk 05 km, Fortis Hospital 05 km, Delhi Public School 08 km, Noida International Airport 30 km and Delhi 30 km — and the expressway grid, universities and commercial belt around the site.",
      image: [`${SITE_URL}/blog-2.webp`],
      datePublished: "2026-07-10",
      dateModified: "2026-07-10",
      author: { "@type": "Person", name: "Admin" },
      publisher,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/sector-pi-1-greater-noida-connectivity-guide`,
      },
      articleSection: "Real Estate",
      keywords:
        "Sector Pi-1, Greater Noida, connectivity, GNIDA Metro, Pari Chowk, Noida International Airport, Yamuna Expressway",
      about: [
        { "@type": "Place", name: "Sector Pi-1, Greater Noida" },
        { "@type": "Residence", name: project.name },
      ],
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where exactly is NorthWind Sanctuary located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306 — in Greater Noida's planned residential belt, close to Pari Chowk and the Sector 34 and Sector Pi neighbourhoods.",
          },
        },
        {
          "@type": "Question",
          name: "How far is the nearest metro station?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GNIDA Metro Station is 02 km away, about a 5-minute drive.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Noida International Airport from NorthWind Sanctuary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Approximately 30 km, about a 30-minute drive under normal conditions.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Approximately 30 km, about a 30-minute drive, via the expressway network serving Greater Noida.",
          },
        },
        {
          "@type": "Question",
          name: "Which hospital is closest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fortis Hospital is 05 km away, roughly 7 minutes by road.",
          },
        },
        {
          "@type": "Question",
          name: "Are there good schools nearby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Delhi Public School is 08 km away, about a 10-minute drive. Sharda University, Bennett University and the Knowledge Park institutional cluster are also in the surrounding catchment.",
          },
        },
        {
          "@type": "Question",
          name: "Which expressways serve Sector Pi-1?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The location map shows the Noida–Greater Noida Link Road, the Noida Expressway, the Yamuna Expressway and the Eastern Peripheral Expressway — a road grid that separates local, regional and long-distance traffic.",
          },
        },
        {
          "@type": "Question",
          name: "Are these distances guaranteed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The developer's own caption reads: 'Map not to scale. Approximate Distance & Time.' They are indicative drive distances and times under normal conditions — drive the routes yourself at the hours you will actually use them.",
          },
        },
      ],
    },
  },
];
