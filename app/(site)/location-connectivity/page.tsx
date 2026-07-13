import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import LocationAdvantages from "@/components/LocationAdvantages";
import StickyDownloadButton from "@/components/StickyButton";
import metroImg from "@/assets/metro.webp";
import expresswayImg from "@/assets/expressway.webp";
import { SITE_URL, project, distances, landmarks } from "@/data/project";

const PAGE_URL = `${SITE_URL}/location-connectivity`;
const OG_IMAGE = `${SITE_URL}/northwind-hero.webp`;

export const metadata: Metadata = {
  title:
    "Location & Connectivity — NorthWind Sanctuary, Sector Pi-1, Greater Noida",
  description:
    "NorthWind Sanctuary is located at Plot 07, Sector Pi-1, Greater Noida — 02 km from GNIDA Metro Station, 05 km from Pari Chowk and 30 km from Noida International Airport, with the Noida and Yamuna Expressways close at hand.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Location & Connectivity — NorthWind Sanctuary, Sector Pi-1, Greater Noida",
    description:
      "The brochure distance & time chart, the neighbourhood map and the expressway, metro and airport links that place Sanctuary in the heart of the city, yet a world apart.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE }],
  },
};

/** Every figure below is read straight from the brochure chart in @/data/project. */
const dt = (place: string) => {
  const row = distances.find((d) => d.place === place);
  return row ? `${row.distance} · ${row.time}` : "";
};

const rowsFor = (places: string[]) =>
  distances.filter((d) => places.includes(d.place));

const transitRows = rowsFor(["GNIDA Metro Station", "Pari Chowk"]);
const roadRows = rowsFor(["Pari Chowk", "Delhi"]);
const airRows = rowsFor(["Noida International Airport"]);
const civicRows = rowsFor(["Fortis Hospital", "Delhi Public School"]);

/** Corridors and landmarks as labelled on the brochure location map. */
const corridors = [
  {
    name: "Noida–Greater Noida Link Road",
    note: "The everyday spine of the address — the road that carries Sector Pi-1 straight into Noida without a detour.",
  },
  {
    name: "Noida Expressway",
    note: "The high-speed run north-west towards Noida's business districts and the Delhi border.",
  },
  {
    name: "Yamuna Expressway",
    note: "The southern corridor, and the road that carries you towards Noida International Airport and Agra.",
  },
  {
    name: "Eastern Peripheral Expressway",
    note: "The outer ring that lets you bypass Delhi altogether when you are heading across the NCR.",
  },
  {
    name: "Hindon River",
    note: "The natural edge to the north-west of the map — the green boundary of the Greater Noida plan.",
  },
];

const neighbourhoodGroups = [
  {
    title: "Learning",
    items: ["Sharda University", "Bennett University", "Knowledge Park"],
  },
  {
    title: "Business & Civic",
    items: ["India Expo Mart", "GNIDA Office", "Alpha Commercial Belt"],
  },
  {
    title: "Hospitality & Everyday",
    items: ["Radisson Blu Hotel", "Sector 34 & Sector Pi"],
  },
];

const faqData = [
  {
    question: "Where exactly is NorthWind Sanctuary located?",
    answer: `NorthWind Sanctuary is at ${project.address} — a 4.48-acre parcel in ${project.locality}, in the Gautam Buddha Nagar district. The PIN code for the address is 201306.`,
  },
  {
    question: "What is the nearest metro station to NorthWind Sanctuary?",
    answer: `GNIDA Metro Station on the Aqua Line is the nearest station — ${dt(
      "GNIDA Metro Station",
    )} from the site, per the brochure distance and time chart.`,
  },
  {
    question:
      "How far is Noida International Airport from NorthWind Sanctuary?",
    answer: `Noida International Airport is ${dt(
      "Noida International Airport",
    )} from Sanctuary, reached via the Yamuna Expressway. Delhi is the same on the chart — ${dt(
      "Delhi",
    )}.`,
  },
  {
    question: "Which roads and expressways serve Sector Pi-1?",
    answer:
      "The brochure map places Sanctuary between the Noida–Greater Noida Link Road, the Noida Expressway, the Yamuna Expressway and the Eastern Peripheral Expressway — four corridors that between them reach Noida, Delhi, the airport and the wider NCR without threading city traffic.",
  },
  {
    question: "What schools and hospitals are close to NorthWind Sanctuary?",
    answer: `Delhi Public School is ${dt(
      "Delhi Public School",
    )} away and Fortis Hospital is ${dt(
      "Fortis Hospital",
    )} away. Sharda University, Bennett University and Knowledge Park are all marked within the neighbourhood on the brochure map.`,
  },
  {
    question: "What else is in the neighbourhood?",
    answer: `The landmarks shown around Sanctuary on the brochure map include ${landmarks.join(
      ", ",
    )} — with Pari Chowk itself ${dt("Pari Chowk")} from the gate.`,
  },
];

export default function LocationConnectivityPage() {
  return (
    <>
      <h1 className="sr-only">
        Location &amp; Connectivity — NorthWind Sanctuary, Sector Pi-1, Greater
        Noida
      </h1>

      <PageBanner
        eyebrow="Your Gateway to Peace"
        title="Location & Connectivity — NorthWind Sanctuary, Sector Pi-1, Greater Noida"
        subtitle="In the heart of the city, yet a world apart. Plot 07, Sector Pi-1 sits where the Link Road, the Expressways and the Aqua Line meet — and where the noise of all three stops at the gate."
      />

      {/* Where exactly */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#C0A15C] tracking-[0.2em]">
            The Calm Begins Here
          </p>

          <h2 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            Where Exactly is NorthWind Sanctuary?
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
              {project.name} occupies a 4.48-acre parcel at{" "}
              {project.locality} — an established address on Greater Noida&apos;s
              planned grid, a few minutes from Pari Chowk and the GNIDA Metro
              Station, and an easy half-hour from both Delhi and Noida
              International Airport. It is a location that asks little of your
              day: the metro is a short hop, the school run and the hospital are
              inside ten minutes, and no journey is hostage to a single road.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Eighty per cent of the site is given back to landscape, and the
              three towers are set deep enough into it that the city becomes a
              view rather than a neighbour. There&apos;s those thinking more or
              less — and there&apos;s you, believing in less is more.
            </p>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector+Pi-1%2C+Greater+Noida%2C+Uttar+Pradesh+201306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <div className="bg-[#F6F4EC] p-5 rounded-lg border border-[#DCD6C2]">
              <p className="font-semibold text-[#0B3B2C] mb-1">
                Project Address
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.name}
                <br />
                Plot 07, Sector Pi-1
                <br />
                Greater Noida, Uttar Pradesh 201306
              </p>
            </div>
            <div className="bg-[#F6F4EC] p-5 rounded-lg border border-[#DCD6C2]">
              <p className="font-semibold text-[#0B3B2C] mb-1">
                Developed By
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.developer}
                <br />
                Architecture by {project.architect}
                <br />
                {project.certification}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure map + exact distance & time chart + landmarks */}
      <LocationAdvantages />

      {/* Connectivity narrative */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#C0A15C] tracking-[0.2em]">
            Your View to the World
          </p>
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 text-center">
            Connectivity from Sector Pi-1
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-3xl mx-auto text-center mb-12">
            Read the brochure map and the logic of the address becomes obvious.
            Sanctuary sits inside a lattice of four corridors and one metro
            line — so no single journey depends on any single road.
          </p>

          {/* Metro */}
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-14">
            <div className="rounded-lg overflow-hidden border border-[#DCD6C2] shadow-md">
              <Image
                src={metroImg}
                alt="Aqua Line metro serving Greater Noida, two kilometres from NorthWind Sanctuary"
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={85}
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Metro — the Aqua Line at GNIDA Station
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                GNIDA Metro Station is the nearest boarding point on the Aqua
                Line, {dt("GNIDA Metro Station")} from the gate — close enough
                that the daily commute stops being a car decision. From there
                the line threads the length of the Noida–Greater Noida corridor
                and into the wider Delhi Metro network.
              </p>
              <ul className="space-y-2">
                {transitRows.map((row) => (
                  <li
                    key={row.place}
                    className="flex items-baseline justify-between gap-4 border-b border-[#DCD6C2] pb-2"
                  >
                    <span className="text-gray-800 text-sm">{row.place}</span>
                    <span className="shrink-0 flex items-baseline gap-3 text-sm">
                      <span className="font-semibold text-[#0B3B2C] tabular-nums">
                        {row.distance}
                      </span>
                      <span className="text-[#C0A15C] tabular-nums">
                        {row.time}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Road */}
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-14">
            <div className="lg:order-2 rounded-lg overflow-hidden border border-[#DCD6C2] shadow-md">
              <Image
                src={expresswayImg}
                alt="Expressway connectivity around Sector Pi-1, Greater Noida — the Noida Expressway, Yamuna Expressway and Eastern Peripheral Expressway"
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={85}
              />
            </div>
            <div className="lg:order-1">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Road — four corridors, one address
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Sanctuary is held between the Noida–Greater Noida Link Road and
                three expressways. Pari Chowk — the roundabout every route here
                is measured from — is {dt("Pari Chowk")} away, and Delhi is{" "}
                {dt("Delhi")}.
              </p>
              <ul className="space-y-3">
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
              <ul className="space-y-2 mt-5">
                {roadRows.map((row) => (
                  <li
                    key={row.place}
                    className="flex items-baseline justify-between gap-4 border-b border-[#DCD6C2] pb-2"
                  >
                    <span className="text-gray-800 text-sm">{row.place}</span>
                    <span className="shrink-0 flex items-baseline gap-3 text-sm">
                      <span className="font-semibold text-[#0B3B2C] tabular-nums">
                        {row.distance}
                      </span>
                      <span className="text-[#C0A15C] tabular-nums">
                        {row.time}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Air + civic */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-[#DCD6C2]">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Air — Noida International Airport
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                The Yamuna Expressway runs south from the neighbourhood towards
                Noida International Airport — {dt("Noida International Airport")}{" "}
                on the brochure chart. For a home this quiet, the world stays
                unusually close.
              </p>
              <ul className="space-y-2">
                {airRows.map((row) => (
                  <li
                    key={row.place}
                    className="flex items-baseline justify-between gap-4 border-b border-[#DCD6C2] pb-2"
                  >
                    <span className="text-gray-800 text-sm">{row.place}</span>
                    <span className="shrink-0 flex items-baseline gap-3 text-sm">
                      <span className="font-semibold text-[#0B3B2C] tabular-nums">
                        {row.distance}
                      </span>
                      <span className="text-[#C0A15C] tabular-nums">
                        {row.time}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#DCD6C2]">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Everyday — care and classrooms
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                The two journeys a family actually makes every week are the two
                shortest on the chart: the school run and the hospital, both
                inside ten minutes of the gate.
              </p>
              <ul className="space-y-2">
                {civicRows.map((row) => (
                  <li
                    key={row.place}
                    className="flex items-baseline justify-between gap-4 border-b border-[#DCD6C2] pb-2"
                  >
                    <span className="text-gray-800 text-sm">{row.place}</span>
                    <span className="shrink-0 flex items-baseline gap-3 text-sm">
                      <span className="font-semibold text-[#0B3B2C] tabular-nums">
                        {row.distance}
                      </span>
                      <span className="text-[#C0A15C] tabular-nums">
                        {row.time}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 mt-8 italic text-center">
            Map not to scale. Approximate distance &amp; time.
          </p>
        </div>
      </section>

      {/* Neighbourhood */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#C0A15C] tracking-[0.2em]">
            Begin Where the World Pauses
          </p>
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4 text-center">
            The Neighbourhood Around Sanctuary
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-3xl mx-auto text-center mb-12">
            Sector Pi-1 is not a frontier address waiting for a neighbourhood to
            arrive. The institutions, the civic centre and the commercial belt
            marked on the brochure map are all already standing — which is why
            the drives here are measured in minutes rather than promises.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {neighbourhoodGroups.map((group) => (
              <div
                key={group.title}
                className="bg-[#F2EEE0] p-6 rounded-lg border border-[#CFC7B2]"
              >
                <h3 className="font-bold text-[#0B3B2C] text-base mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#C0A15C] mt-1">•</span>
                      <span className="text-[#4A5B50] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed text-sm max-w-3xl mx-auto text-center mt-10">
            Fortis Hospital, Delhi Public School and Pari Chowk complete the
            picture — the three destinations closest to the gate, and the three
            that decide how a week actually feels.
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
                name: "Location & Connectivity — NorthWind Sanctuary, Sector Pi-1, Greater Noida",
                description:
                  "NorthWind Sanctuary is located at Plot 07, Sector Pi-1, Greater Noida — 02 km from GNIDA Metro Station, 05 km from Pari Chowk and 30 km from Noida International Airport.",
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
                  "A 4.48-acre, three-tower residential development at Sector Pi-1, Greater Noida — 180 luxury apartments and 05 penthouses set in 80% lush green landscape, with Club Roots at its heart.",
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
                hasMap:
                  "https://www.google.com/maps/search/?api=1&query=Sector+Pi-1%2C+Greater+Noida%2C+Uttar+Pradesh+201306",
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
                name: "NorthWind Sanctuary — Channel Partner",
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
