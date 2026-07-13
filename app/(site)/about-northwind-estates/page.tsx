import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/northwind-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project } from "@/data/project";

const PAGE_URL = `${SITE_URL}/about-northwind-estates`;
const PAGE_TITLE = "About North Wind Estates | Developer of NorthWind Sanctuary";
const PAGE_DESCRIPTION =
  "North Wind Estates — a refined expression of modern living, rooted in over two decades of real estate legacy. Meet the developer and the architects behind NorthWind Sanctuary, Greater Noida.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [`${SITE_URL}/northwind-hero.webp`],
  },
};

const developerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",
      primaryImageOfPage: `${SITE_URL}/northwind-hero.webp`,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      about: { "@id": `${SITE_URL}/#developer` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "About North Wind Estates",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#developer`,
      name: project.developer,
      alternateName: "North Wind Estates",
      description:
        "North Wind Estates is a refined expression of modern living, rooted in over two decades of real estate legacy, with a focus on design integrity, sustainability and transparency.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/northwind-hero.webp`,
      logo: `${SITE_URL}/northwind-hero.webp`,
      areaServed: { "@type": "City", name: "Greater Noida" },
    },
  ],
};

const brandPillars = [
  "Over two decades of real estate legacy",
  "Design integrity at the centre of every decision",
  "Sustainability — IGBC Pre-Certified Platinum at Sanctuary",
  "Transparency with every home buyer",
];

export default function AboutNorthWindEstatesPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About North Wind Estates"
        subtitle="A refined expression of modern living, rooted in over two decades of real estate legacy."
      />

      {/* Developer */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="North Wind Estates"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
              The Brand
            </h6>

            <p className="text-gray-600 text-sm leading-relaxed">
              North Wind Estates is a refined expression of modern living, rooted
              in over two decades of real estate legacy. With an unwavering focus
              on design integrity, sustainability, and transparency, the brand is
              shaping elevated spaces that resonate with purpose and elegance.
              Their flagship development in Greater Noida offers a thoughtfully
              crafted lifestyle amidst expansive greens — where architecture meets
              harmony, and every detail is designed to enrich the way you live.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              That flagship is {project.name}: 4.48 acres in Sector Pi-1, Greater
              Noida, with three towers, 180 luxury apartments, five penthouses and
              80% of the site given over to landscape. It is one of the first IGBC
              Pre-Certified Platinum rated group housing societies in Greater
              Noida — a commitment made at the drawing board, not added as an
              afterthought.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {brandPillars.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-700 text-sm"
                >
                  <span className="text-[#C0A15C] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/about-northwind-sanctuary"
                className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore NorthWind Sanctuary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architect */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6 border-t border-[#DCD6C2]">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
            The Architects
          </h6>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {project.architect} — Where Dreams Take Shape
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            NorthWind Sanctuary is designed by Confluence, an award-winning
            multidisciplinary architecture and design firm. Founded in 1999 by
            Vineeta and Vishal, the practice has spent more than 25 years working
            across architecture, interiors and landscape — today with a studio of
            over 200 architects and designers.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            At Sanctuary, that multidisciplinary approach is what allows the
            towers, the seven landscaped zones and the interiors of every
            residence to read as one idea rather than three. When pacifying nature
            is accompanied by extraordinary interiors, living here has to be
            different.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {[
              { value: "1999", label: "Founded" },
              { value: "25+", label: "Years of Practice" },
              { value: "200+", label: "Architects & Designers" },
              { value: "Multi", label: "Disciplinary Studio" },
            ].map((stat) => (
              <div key={stat.label} className="border-t-2 border-[#C0A15C] pt-2">
                <dt className="text-xl font-bold text-[#0B3B2C] leading-none">
                  {stat.value}
                </dt>
                <dd className="text-[10px] uppercase tracking-wider text-[#7C8B80] mt-1.5 leading-tight">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developerSchema) }}
      />
    </>
  );
}
