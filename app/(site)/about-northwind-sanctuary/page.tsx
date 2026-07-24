import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import ZonesSection from "@/components/ZonesSection";
import StickyDownloadButton from "@/components/StickyButton";
import clubLounge from "@/assets/club-lounge.webp";
import aerialLandscape from "@/assets/aerial-landscape.webp";
import { SITE_URL, project, highlights, clubFacilities } from "@/data/project";

const PAGE_URL = `${SITE_URL}/about-northwind-sanctuary`;
const PAGE_TITLE =
  "About NorthWind Sanctuary | 3 & 4 BHK Residences, Sector Pi-1 Greater Noida";
const PAGE_DESCRIPTION =
  "NorthWind Sanctuary — 4.48 acres, 03 towers, 180 luxury apartments and 05 penthouses across seven landscaped zones in Sector Pi-1, Greater Noida. IGBC Pre-Certified Platinum, designed by Confluence.";

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

const aboutSchema = {
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
      about: { "@id": `${SITE_URL}/#residence` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "About NorthWind Sanctuary",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#residence`,
      name: project.name,
      description: PAGE_DESCRIPTION,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/northwind-hero.webp`,
      numberOfAccommodationUnits: 185,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 07, Sector Pi-1",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201306",
        addressCountry: "IN",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Club Roots" },
        { "@type": "LocationFeatureSpecification", name: "80% Green Landscape" },
        { "@type": "LocationFeatureSpecification", name: "Seven Landscaped Zones" },
        { "@type": "LocationFeatureSpecification", name: "Swimming Pools" },
        { "@type": "LocationFeatureSpecification", name: "Sports Zone" },
      ],
    },
  ],
};

export default function AboutNorthWindSanctuaryPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="About NorthWind Sanctuary"
        subtitle="In the heart of the city, yet a world apart — 4.48 acres in Sector Pi-1, Greater Noida, where everyday whispers: less is more."
      />

      <AboutProject heading={true} />

      {/* Cover figures */}
      <section className="w-full bg-[#0B3B2C] py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-[#C0A15C] mb-8">
            Sanctuary at a Glance
          </h2>
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <dt className="text-3xl font-bold text-[#F0E9D6] leading-none">
                  {h.value}
                  {h.unit ? (
                    <span className="text-xs font-semibold ml-1 text-[#C0A15C]">
                      {h.unit}
                    </span>
                  ) : null}
                </dt>
                <dd className="text-[10px] uppercase tracking-wider text-[#DCD6C2] mt-2 leading-tight">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-center text-xs text-[#8C8B80] mt-8 max-w-2xl mx-auto leading-relaxed">
            Tower A rises to 17 floors; Towers B and C to 20. In all, 185 homes
            — 180 luxury apartments and garden villas, and 05 penthouses.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
              Your Rare Living
            </h6>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              There&rsquo;s those thinking more or less, and there&rsquo;s you
              believing in less is more
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              NorthWind Sanctuary is built on restraint. Three towers —{" "}
              <strong className="font-semibold text-gray-800">Amaltas</strong>,{" "}
              <strong className="font-semibold text-gray-800">Banyan</strong> and{" "}
              <strong className="font-semibold text-gray-800">Cedar</strong> —
              stand on a 4.48-acre parcel that gives 80% of itself back to the
              landscape. The homes are deliberately few: 4 BHK residences with a
              servant room in Amaltas, 4 BHK homes in Banyan, and 3 BHK homes in
              Cedar, topped by five penthouses and a handful of garden villas.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every home is planned around light, cross-ventilation and generous
              balconies — 705 sq.ft. of it in a typical Amaltas residence. Step
              outside, and the grounds unfold as seven landscaped zones that carry
              you from the arrival plaza to the elevated Serenity Walk without
              ever crossing a car park.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              This is the calm that begins the moment the gate closes behind you:
              a tranquil retreat tucked within the city&rsquo;s embrace, where
              recreation, reflection and togetherness find their perfect rhythm.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col gap-4">
            <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={aerialLandscape}
                alt="Aerial view of the landscaped grounds at NorthWind Sanctuary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                quality={80}
              />
            </div>

            <div className="border-l-2 border-[#C0A15C] bg-[#F6F4EC] p-5 rounded-r-lg">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C] mb-2">
                Green by Certification
              </p>
              <p className="text-sm text-[#4A5B50] leading-relaxed">
                {project.certification} — an 80% green landscape is not a claim
                here, it is the plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seven zones */}
      <ZonesSection />

      {/* Club Roots */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6" id="club-roots">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={clubLounge}
                alt="The lounge at Club Roots, NorthWind Sanctuary"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
                quality={80}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
              Step Into Extravagance
            </h6>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {project.clubName}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A retreat within a retreat, Club Roots is designed for those who
              seek the finest in life. Thoughtfully curated to provide an elite
              lifestyle, it is a space where indulgence meets sophistication,
              offering an array of world-class experiences at your doorstep.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-1">
              {clubFacilities.map((facility) => (
                <li
                  key={facility}
                  className="flex items-start gap-2 text-gray-700 text-sm"
                >
                  <span className="text-[#C0A15C] mt-0.5">✓</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Architect */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
            Where Dreams Take Shape
          </h6>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Designed by {project.architect}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sanctuary is designed by Confluence — an award-winning
            multidisciplinary architecture and design firm founded in 1999 by
            Vineeta and Vishal. Over 25 years and with a studio of more than 200
            architects and designers, the practice has built a reputation for
            work that begins with the landscape and ends with the smallest
            interior detail. At Sanctuary, that shows in the way the towers step
            back from the greens, in the 2,450 mm-high veneer doors, and in the
            proportions of every balcony.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              href="/floor-plans"
              className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors duration-300"
            >
              View Floor Plans
            </Link>
            <Link
              href="/contact-us"
              className="inline-block border border-[#0B3B2C] text-[#0B3B2C] hover:bg-[#0B3B2C] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </>
  );
}
