import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import LocationAdvantages from "@/components/LocationAdvantages";
import StickyDownloadButton from "@/components/StickyButton";
import metroImg from "@/assets/metro.webp";
import expresswayImg from "@/assets/expressway.webp";
import { SITE_URL, project, distances, landmarks } from "@/data/project";

const PAGE_URL = `${SITE_URL}/location-connectivity`;
const OG_IMAGE = `${SITE_URL}/northwind-hero.webp`;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sector+Pi-1%2C+Greater+Noida%2C+Uttar+Pradesh+201306";

const PAGE_TITLE =
  "NorthWind Estates Location & Connectivity | Sector Pi-1, Greater Noida";
const PAGE_DESCRIPTION =
  "NorthWind Estates is at Plot 07, Sector Pi-1, Greater Noida — 2 km from GNIDA Metro, 5 km from Pari Chowk and 30 km from Noida International Airport, with the Noida and Yamuna Expressways close at hand.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "NorthWind Estates Location — Sector Pi-1, Greater Noida",
    description:
      "Plot 07, Sector Pi-1 — 2 km from GNIDA Metro, 5 km from Pari Chowk, 30 km from the new airport. See the full connectivity map.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: OG_IMAGE }],
  },
};

/** Connectivity chart for this page — brochure figures plus indicative drive bands. */
const connectivityRows = [
  {
    place: "GNIDA Metro Station (Aqua Line)",
    distance: "2 km",
    time: "5 min",
  },
  { place: "Pari Chowk", distance: "5 km", time: "7 min" },
  { place: "Fortis Hospital", distance: "5 km", time: "7 min" },
  { place: "Delhi Public School", distance: "8 km", time: "10 min" },
  {
    place: "Noida International Airport, Jewar",
    distance: "30 km",
    time: "30–40 min",
  },
  {
    place: "South Delhi (via Noida Expressway)",
    distance: "30 km",
    time: "45–60 min",
  },
];

/** The four corridors within reach of Sector Pi-1. */
const corridors = [
  {
    name: "Noida–Greater Noida Link Road",
    note: "the everyday route into Noida's Sectors 18, 62 and 125.",
  },
  {
    name: "Noida Expressway",
    note: "northwest into the Noida business districts, and onward to DND and South Delhi.",
  },
  {
    name: "Yamuna Expressway",
    note: "south toward Jewar, the new airport, and Agra beyond it.",
  },
  {
    name: "Eastern Peripheral Expressway",
    note: "the outer ring, for anyone who needs to reach Gurugram, Sonipat or Haryana without crossing Delhi.",
  },
];

const neighbourhood = [
  {
    title: "Education",
    body: "Sharda University, Bennett University and the wider Knowledge Park III cluster are within a short drive. Delhi Public School is 8 km out. For families, this is the sector's strongest argument: you're inside the education belt without living on top of it.",
  },
  {
    title: "Healthcare",
    body: "Fortis Hospital at 5 km, roughly seven minutes. Kailash and Sharda Hospital are also within the Knowledge Park radius.",
  },
  {
    title: "Work",
    body: "Alpha Commercial Belt, the GNIDA office, and the Noida Expressway corporate corridor via the Link Road. India Expo Mart is close enough to be useful and far enough to be irrelevant on a normal weekday.",
  },
  {
    title: "Everyday",
    body: "Ansal Plaza and the Pari Chowk retail cluster at 5 km, Radisson Blu nearby, and the Alpha and Beta market belts for daily needs.",
  },
];

const addressAdvantages = [
  {
    lead: "Density is fixed.",
    body: "Pi-1 was planned at low FAR. The sector's built form is largely settled, which means the skyline around NorthWind Estates isn't going to close in the way it has across the Noida Extension belt.",
  },
  {
    lead: "The metro is already running.",
    body: "GNIDA Station on the Aqua Line is 2 km away and operational — not proposed, not sanctioned. Among property for sale in Greater Noida, \"metro at 2 km\" and \"metro coming soon\" are very different propositions.",
  },
  {
    lead: "Four expressways, four directions.",
    body: "Airport south, Delhi northwest, the outer ring east. Wherever the region's growth concentrates next, Pi-1 has a road to it.",
  },
];

const dt = (place: string) => {
  const row = distances.find((d) => d.place === place);
  return row ? `${row.distance} · ${row.time}` : "";
};

const faqData = [
  {
    question: "Where exactly is NorthWind Estates located?",
    answer: `NorthWind Estates' project NorthWind Sanctuary is at ${project.address} — a 4.48-acre parcel in ${project.locality}, in the Gautam Buddha Nagar district. The PIN code for the address is 201306.`,
  },
  {
    question: "What is the nearest metro station to NorthWind Estates?",
    answer: `GNIDA Metro Station on the Aqua Line is the nearest station — ${dt(
      "GNIDA Metro Station",
    )} from the site, and already operational.`,
  },
  {
    question: "How far is Noida International Airport from NorthWind Estates?",
    answer:
      "Noida International Airport at Jewar sits about 30 km south down the Yamuna Expressway — an indicative 30–40 minute drive. Sector Pi-1 is close enough to benefit from the airport corridor's development, far enough not to sit under a flight path, and connected to it by expressway rather than by sector roads.",
  },
  {
    question: "Which roads and expressways serve Sector Pi-1?",
    answer:
      "Four corridors are within reach: the Noida–Greater Noida Link Road into Noida's Sectors 18, 62 and 125; the Noida Expressway northwest to DND and South Delhi; the Yamuna Expressway south toward Jewar and the new airport; and the Eastern Peripheral Expressway for Gurugram, Sonipat and Haryana without crossing Delhi.",
  },
  {
    question: "What schools and hospitals are close to NorthWind Estates?",
    answer: `Delhi Public School is ${dt(
      "Delhi Public School",
    )} away and Fortis Hospital is ${dt(
      "Fortis Hospital",
    )} away. Sharda University, Bennett University and the Knowledge Park III cluster are all within a short drive.`,
  },
  {
    question: "What else is in the neighbourhood?",
    answer: `The landmarks around the project include ${landmarks.join(
      ", ",
    )} — with Pari Chowk itself ${dt("Pari Chowk")} from the gate.`,
  },
];

export default function LocationConnectivityPage() {
  return (
    <>
      <h1 className="sr-only">
        NorthWind Estates — Location &amp; Connectivity, Sector Pi-1, Greater
        Noida
      </h1>

      <PageBanner
        eyebrow="Location & Connectivity"
        title="NorthWind Estates — Location & Connectivity"
        subtitle="Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306"
      />

      {/* Intro + where exactly */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-3">
              There are two kinds of quiet in Greater Noida. One comes from
              being far from everything. The other comes from being in a sector
              that was planned properly, where the roads are wide, the plots
              are large, and nobody built a market at your gate.
            </p>
            <p className="text-[#0B3B2C] font-semibold text-base md:text-lg">
              Sector Pi-1 is the second kind.
            </p>
          </div>

          <h2 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            Where Exactly Is NorthWind Estates?
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
              Plot 07, Sector Pi-1 — on the established western side of Greater
              Noida, off the Noida–Greater Noida Link Road, roughly midway
              between Pari Chowk and the Knowledge Park belt.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
              If you know the city, that placement will tell you most of what
              you need. If you don&apos;t: Pi-1 is one of the sectors that was
              laid out in Greater Noida&apos;s original master plan rather than
              absorbed into it later. Wide sector roads, low FAR, mature
              planting along the arterials, and no realistic prospect of a
              high-density cluster appearing next door.
            </p>

            <Link
              href="/contact-us"
              className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Get the exact location &amp; site visit details →
            </Link>
          </div>
        </div>
      </section>

      {/* Connectivity table + corridors */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Connectivity from Sector Pi-1
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-6">
            <div className="rounded-lg overflow-hidden border border-[#DCD6C2] shadow-md">
              <Image
                src={metroImg}
                alt="Aqua Line metro serving Greater Noida, two kilometres from NorthWind Estates"
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={85}
              />
            </div>

            <div className="overflow-x-auto rounded-lg border border-[#DCD6C2] shadow-sm bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#0B3B2C] text-[#F0E9D6] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Destination</th>
                    <th className="px-4 py-3 whitespace-nowrap">Distance</th>
                    <th className="px-4 py-3 whitespace-nowrap">Drive time</th>
                  </tr>
                </thead>
                <tbody>
                  {connectivityRows.map((row) => (
                    <tr key={row.place} className="border-t border-[#DCD6C2]">
                      <td className="px-4 py-3 text-gray-800">{row.place}</td>
                      <td className="px-4 py-3 font-semibold text-[#0B3B2C] tabular-nums whitespace-nowrap">
                        {row.distance}
                      </td>
                      <td className="px-4 py-3 text-[#C0A15C] tabular-nums whitespace-nowrap">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic text-center mb-14">
            Drive times are indicative and vary with traffic. Verify against
            live conditions at the hour you&apos;d actually be travelling.
          </p>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="lg:order-2 rounded-lg overflow-hidden border border-[#DCD6C2] shadow-md">
              <Image
                src={expresswayImg}
                alt="Expressway connectivity around Sector Pi-1, Greater Noida — four corridors in four directions"
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={85}
              />
            </div>
            <div className="lg:order-1">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Four corridors, four directions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                The expressway position is the part that matters most. Four
                corridors are within reach of Sector Pi-1:
              </p>
              <ul className="space-y-3 mb-5">
                {corridors.map((c) => (
                  <li key={c.name} className="flex items-start gap-3">
                    <span className="text-[#C0A15C] mt-1">•</span>
                    <span className="text-sm">
                      <span className="font-semibold text-gray-800">
                        {c.name}
                      </span>
                      <span className="text-gray-600"> — {c.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm">
                Four directions out. That&apos;s unusual, and it&apos;s the
                practical reason Pi-1 holds up better than its
                distance-from-Delhi figure suggests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The airport question */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 text-center">
            The Airport Question
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 text-center">
            Noida International Airport at Jewar sits about 30 km south down
            the Yamuna Expressway.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
            It&apos;s worth being clear-eyed about what that means. The airport
            is the single largest variable in Greater Noida property values
            right now, and every project in the region is invoking it. The
            honest position: Sector Pi-1 is close enough to benefit from the
            corridor&apos;s development, far enough not to sit under a flight
            path, and connected to it by expressway rather than by sector
            roads.
          </p>
          <p className="text-[#0B3B2C] font-semibold text-sm md:text-base text-center">
            That&apos;s a better position than either extreme.
          </p>
        </div>
      </section>

      {/* Brochure map + exact distance & time chart + landmarks */}
      <LocationAdvantages />

      {/* Neighbourhood */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-10 text-center">
            The Neighbourhood Around NorthWind Estates
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {neighbourhood.map((group) => (
              <div
                key={group.title}
                className="bg-[#F2EEE0] p-6 rounded-lg border border-[#CFC7B2]"
              >
                <h3 className="font-bold text-[#0B3B2C] text-base mb-3">
                  {group.title}
                </h3>
                <p className="text-[#4A5B50] text-sm leading-relaxed">
                  {group.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why the address matters */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 text-center">
            Why the Address Matters More Than the Amenities
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-3 text-center font-semibold">
            Every project in Greater Noida can build a clubhouse. Very few can
            build a location.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 text-center">
            If you&apos;re weighing apartments in Greater Noida at this level,
            three things about Pi-1 are worth more than any amenity list,
            because none of them can be added later:
          </p>

          <ol className="space-y-4 mb-8">
            {addressAdvantages.map((item, i) => (
              <li
                key={item.lead}
                className="flex gap-4 bg-white border border-[#DCD6C2] rounded-lg p-5"
              >
                <span className="text-[#C0A15C] font-bold text-lg leading-none pt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">{item.lead}</strong>{" "}
                  {item.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center">
            That&apos;s the case for the address. What sits on it — 185 homes
            across 4.48 acres, three towers, 80% of the ground left as
            landscape, IGBC Pre-Certified Platinum — is on the{" "}
            <Link
              href="/about-northwind-sanctuary"
              className="text-[#C0A15C] hover:underline font-semibold"
            >
              project pages
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Plan a site visit */}
      <section className="w-full bg-[#0B3B2C] py-16 px-6 text-[#F0E9D6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">
            Plan a Site Visit
          </h2>
          <p className="leading-relaxed text-sm md:text-base mb-6 text-[#EDE9DA]">
            The drive times above are numbers. The sector reads differently
            when you&apos;re standing in it — which is the honest reason
            we&apos;d rather you came than took our word for the table.
          </p>
          <p className="font-semibold text-base mb-8">
            Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href="/contact-us"
              className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors"
            >
              Book a Site Visit →
            </Link>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#C0A15C] text-[#F0E9D6] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded hover:bg-[#08251C] transition-colors"
            >
              Get Directions →
            </a>
          </div>
          <p className="text-sm text-[#CFC7B2] leading-relaxed">
            Site visits run seven days a week. Tell us roughly when and
            we&apos;ll have current availability ready when you arrive.
          </p>
          <p className="text-sm mt-8">
            Related:{" "}
            <Link
              href="/floor-plans"
              className="text-[#C0A15C] hover:underline font-semibold"
            >
              Floor plans &amp; master plan →
            </Link>{" "}
            ·{" "}
            <Link
              href="/price"
              className="text-[#C0A15C] hover:underline font-semibold"
            >
              Price &amp; availability →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#DCD6C2] rounded-lg p-5"
              >
                <h3 className="font-semibold text-gray-800 text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                mainEntity: faqData.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${SITE_URL}/`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Location & Connectivity",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: PAGE_TITLE,
                description: PAGE_DESCRIPTION,
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
                about: { "@id": `${SITE_URL}/#residence` },
                mainEntity: { "@id": `${PAGE_URL}#faq` },
                primaryImageOfPage: OG_IMAGE,
                inLanguage: "en-IN",
              },
              {
                "@type": "ApartmentComplex",
                "@id": `${SITE_URL}/#residence`,
                name: project.name,
                description:
                  "A 4.48-acre, three-tower residential development at Sector Pi-1, Greater Noida — 185 homes set in 80% lush green landscape, with Club Roots at its heart.",
                url: `${SITE_URL}/`,
                image: OG_IMAGE,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Plot 07, Sector Pi-1",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201306",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 28.4595,
                  longitude: 77.534,
                  description:
                    "Approximate centroid of Sector Pi-1, Greater Noida.",
                },
                hasMap: MAPS_URL,
                numberOfAccommodationUnits: {
                  "@type": "QuantitativeValue",
                  value: 185,
                },
                amenityFeature: [
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "Club Roots",
                    value: true,
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "80% Lush Green Landscape",
                    value: true,
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "IGBC Pre-Certified Platinum Rated",
                    value: true,
                  },
                ],
              },
              {
                "@type": "RealEstateAgent",
                "@id": `${SITE_URL}/#organization`,
                name: "NorthWind Estates — Channel Partner",
                url: `${SITE_URL}/`,
                logo: OG_IMAGE,
                image: OG_IMAGE,
                telephone: "+91-9810890353",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "601, SL Tower, 6th Floor, Alpha Commercial Belt",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201310",
                  addressCountry: "IN",
                },
                areaServed: {
                  "@type": "City",
                  name: "Greater Noida",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
