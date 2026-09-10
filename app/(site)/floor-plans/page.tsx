import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection";

import StickyDownloadButton from "@/components/StickyButton";

import { SITE_URL, project, towers } from "@/data/project";

const PAGE_URL = `${SITE_URL}/floor-plans`;

const TITLE =
  "Northwind Sanctuary Floor Plan | 3 & 4 BHK, Sector Pi-1 Greater Noida";
const DESCRIPTION =
  "Northwind Sanctuary floor plans — Amaltas 4 BHK + Servant (3,750 sq.ft.), Banyan 4 BHK (2,431 sq.ft.) and Cedar 3 BHK (1,895 sq.ft.) in Sector Pi-1, Greater Noida. Unit plans, master plan and area chart.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "Northwind Sanctuary floor plan",
    "Northwind Sanctuary master plan",
    "Amaltas floor plan",
    "Banyan floor plan",
    "Cedar floor plan",
    "3 BHK floor plan Greater Noida",
    "4 BHK floor plan Sector Pi-1",
  ],
  openGraph: {
    title: "Northwind Sanctuary Floor Plan | Amaltas, Banyan & Cedar",
    description:
      "Every unit plan for Northwind Sanctuary in one place — 3 BHK and 4 BHK layouts, tower composition and the 4.48-acre master plan.",
    url: PAGE_URL,
    siteName: project.name,
    images: ["/northwind-hero.webp"],
    type: "website",
  },
};

export default function FloorPlansPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Floor Plans",
        item: PAGE_URL,
      },
    ],
  };

  const floorPlansLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#floor-plans`,
    name: `${project.name} — Floor Plans`,
    description: DESCRIPTION,
    url: PAGE_URL,
    image: "/northwind-hero.webp",
    itemListElement: towers.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${t.name} (${t.tower}) — ${t.config}, ${t.saleable} sq.ft. saleable`,
      url: `${PAGE_URL}#floor-plans`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floorPlansLd) }}
      />

      <PageBanner
        eyebrow="Floor Plans"
        title="Northwind Sanctuary Floor Plans"
        subtitle="Every unit plan, the master plan and the full area chart for all 185 homes in Sector Pi-1, Greater Noida — Amaltas (4 BHK + Servant), Banyan (4 BHK) and Cedar (3 BHK)."
      />
      <FloorPlanSection />

      <section className="w-full bg-[#F6F4EC] border-t border-[#DCD6C2] py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
            Take It With You
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Every Plan, In One Place
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Unit plans for all three towers, the master plan, and the project
            brochure — sent as a single set.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Tell us which configuration you&apos;re weighing and we&apos;ll
            include current availability and pricing for it alongside the
            drawings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/brochure.pdf"
              download
              className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors shadow-md"
            >
              Get All Floor Plans &amp; Brochure →
            </a>
            <a
              href="/master-plan.pdf"
              download
              className="inline-block bg-[#0B3B2C] hover:bg-[#08251C] text-[#F0E9D6] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors shadow-md"
            >
              Download Master Plan
            </a>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-8">
            Prefer to see it in person? The site is at Sector Pi-1, Greater
            Noida 201306, roughly 2 km from GNIDA Metro Station.
          </p>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
