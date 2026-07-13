import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ModalWrapper from "@/components/ModalWrapper";
import ReasonsToInvest from "@/components/ReasonToInvest";
import ResidenceFeatures from "@/components/ResidenceFeatures";
import StickyDownloadButton from "@/components/StickyButton";

import amaltasPlan from "@/assets/floorplan-amaltas.webp";
import banyanPlan from "@/assets/floorplan-banyan.webp";
import cedarPlan from "@/assets/floorplan-cedar.webp";
import specTowerA from "@/assets/spec-tower-a.webp";
import specTowerBC from "@/assets/spec-tower-bc.webp";

import { SITE_URL, project, towers, specifications } from "@/data/project";

const PAGE_URL = `${SITE_URL}/apartments-configurations`;

export const metadata: Metadata = {
  title:
    "NorthWind Sanctuary Apartments & Configurations | 3 & 4 BHK, Amaltas, Banyan & Cedar",
  description:
    "NorthWind Sanctuary configurations — Amaltas (4 BHK + Servant, 3,750 sq.ft.), Banyan (4 BHK, 2,431 sq.ft.) and Cedar (3 BHK, 1,895 sq.ft.) in Sector Pi-1, Greater Noida. Carpet, balcony and built-up areas, full specifications. Price on request.",
  keywords: [
    "NorthWind Sanctuary configurations",
    "NorthWind Sanctuary apartments",
    "3 BHK Sector Pi-1 Greater Noida",
    "4 BHK Sector Pi-1 Greater Noida",
    "Amaltas Tower A",
    "Banyan Tower B",
    "Cedar Tower C",
    "NorthWind Sanctuary specifications",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "NorthWind Sanctuary Apartments & Configurations | Amaltas, Banyan & Cedar",
    description:
      "Three towers, three formats — 3 & 4 BHK residences from 1,895 to 3,750 sq.ft. saleable, plus 5 penthouses and 4 garden villas, in Sector Pi-1, Greater Noida.",
    url: PAGE_URL,
    siteName: project.name,
    images: ["/northwind-hero.webp"],
    type: "website",
  },
};

const planImages: Record<string, StaticImageData> = {
  amaltas: amaltasPlan,
  banyan: banyanPlan,
  cedar: cedarPlan,
};

// Each specification row lists a different set of attributes per space
// (Flooring, Ceiling, AC, …), so read them as plain key/value pairs and skip
// the attributes a given space does not define.
type SpecBlock = Record<string, string | undefined>;
const specEntries = (block: SpecBlock): [string, string][] =>
  Object.entries(block).filter((entry): entry is [string, string] =>
    Boolean(entry[1])
  );

// Why each tower exists — positioning copy, brochure-grounded, no invented facts.
const positioning: Record<string, string> = {
  amaltas:
    "The signature residence. Amaltas takes the whole of Tower A and gives it just 31 homes — space kept generously, not sold twice over.",
  banyan:
    "Four bedrooms, edited. Banyan keeps everything a large family needs and trims everything it does not, around a drawing and dining hall built for gathering.",
  cedar:
    "The most efficient plan at Sanctuary. Cedar is a three-bedroom home where almost every square foot is one you actually live in.",
};

const totalUnits = towers.reduce((sum, t) => sum + t.units, 0);
const totalPenthouses = towers.reduce((sum, t) => sum + t.penthouses, 0);
const totalGardenVillas = towers.reduce((sum, t) => sum + t.gardenVillas, 0);

export default function ApartmentsConfigurationsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Apartments & Configurations",
        item: PAGE_URL,
      },
    ],
  };

  const configurationsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#configurations`,
    name: `${project.name} — Apartment Configurations`,
    itemListElement: towers.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Apartment",
        name: `${t.name} (${t.tower}) — ${t.config}`,
        description: t.description,
        numberOfRooms: t.config.startsWith("4") ? 4 : 3,
        floorSize: {
          "@type": "QuantitativeValue",
          value: t.saleable,
          unitCode: "FTK",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: project.address,
          addressLocality: "Greater Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201306",
          addressCountry: "IN",
        },
        image: "/northwind-hero.webp",
        url: PAGE_URL,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(configurationsLd) }}
      />

      <PageBanner
        eyebrow="Residences"
        title="Apartments & Configurations"
        subtitle="Three towers — Amaltas, Banyan and Cedar. 3 & 4 BHK residences from 1,895 to 3,750 sq.ft. saleable, with five penthouses and four garden villas, in Sector Pi-1, Greater Noida."
      />

      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Intro */}
          <div className="max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b border-[#DCD6C2] pb-4">
              NorthWind Sanctuary Configurations — Amaltas, Banyan &amp; Cedar
            </h1>

            <p className="text-lg leading-relaxed mb-6 text-[#4A5B50] italic">
              &ldquo;In the heart of the city, yet a world apart, where everyday
              whispers&mdash;less is more.&rdquo;
            </p>

            <p className="text-lg leading-relaxed mb-6">
              {project.name} places just <strong>{totalUnits} homes</strong> on
              4.48 acres in Sector Pi-1, Greater Noida &mdash;{" "}
              <strong>180 luxury apartments and garden villas</strong> and{" "}
              <strong>{totalPenthouses} penthouses</strong> across three towers,
              with 80% of the site given back to landscape. There is one typical
              plan per tower, which is the whole point: nothing is repeated for
              the sake of an inventory sheet. Amaltas is the four-bedroom-plus-servant
              residence, Banyan the four-bedroom home, Cedar the three-bedroom.
              Choose the tower, and you have chosen your plan.
            </p>

            <p className="leading-relaxed">
              Designed by <strong>{project.architect}</strong> and developed by{" "}
              {project.developer}, Sanctuary is {project.certification.charAt(0).toLowerCase()}
              {project.certification.slice(1)}.
            </p>
          </div>

          {/* Configuration summary */}
          <div>
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
              At a glance
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Configuration &amp; Area Chart
            </h2>

            <div className="overflow-x-auto rounded-lg border border-[#DCD6C2] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#0B3B2C] text-[#F0E9D6] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4 text-right">Saleable</th>
                    <th className="px-5 py-4 text-right">Carpet</th>
                    <th className="px-5 py-4 text-right">Balcony</th>
                    <th className="px-5 py-4 text-right">Built-up</th>
                    <th className="px-5 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {towers.map((t) => (
                    <tr key={t.id} className="border-t border-[#DCD6C2]">
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        {t.name}
                        <span className="block text-xs font-normal text-[#7C8B80]">
                          {t.tower}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600">{t.config}</td>
                      <td className="px-5 py-4 text-right font-semibold text-[#C0A15C]">
                        {t.saleable.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-right text-gray-700">
                        {t.carpet.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-right text-gray-700">
                        {t.balcony}
                      </td>
                      <td className="px-5 py-4 text-right text-gray-700">
                        {t.builtUp.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 font-semibold text-[#0B3B2C]">
                        Price on request
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed italic">
              All areas in sq.ft. and refer to the typical unit in each tower.
              Penthouse and garden-villa areas differ and are shared on request.
              Current pricing, availability and the applicable payment schedule
              are released by the developer and shared unit by unit &mdash;{" "}
              <Link
                href="/contact-us"
                className="text-[#C0A15C] hover:underline font-semibold not-italic"
              >
                request the latest details
              </Link>
              .
            </p>
          </div>

          {/* Tower composition */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How the {totalUnits} Homes Are Distributed
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {towers.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#F6F4EC] border border-[#DCD6C2] rounded-lg p-6"
                >
                  <p className="uppercase text-[10px] tracking-[2px] text-[#C0A15C] font-semibold mb-1">
                    {t.tower}
                  </p>
                  <h3 className="text-lg font-bold text-[#123528] mb-3">
                    {t.name}
                  </h3>
                  <dl className="text-sm text-[#4A5B50] space-y-1.5">
                    <div className="flex justify-between">
                      <dt>Floors</dt>
                      <dd className="font-semibold text-gray-900">{t.floors}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Total homes</dt>
                      <dd className="font-semibold text-gray-900">{t.units}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Luxury apartments</dt>
                      <dd className="font-semibold text-gray-900">
                        {t.apartments}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Penthouses</dt>
                      <dd className="font-semibold text-gray-900">
                        {t.penthouses}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Garden villas</dt>
                      <dd className="font-semibold text-gray-900">
                        {t.gardenVillas || "—"}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              {totalUnits} homes in all &mdash; {totalPenthouses} penthouses,{" "}
              {totalGardenVillas} garden villas at the base of Amaltas and
              Banyan, and 180 luxury apartments and garden villas between them.
              Tower A rises to 17 floors; Towers B and C to 20.
            </p>
          </div>

          {/* Per-tower detail */}
          <div className="space-y-12">
            <div>
              <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
                The Expansive Interiors
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">
                Three Towers, Three Ways to Live
              </h2>
            </div>

            {towers.map((t, idx) => (
              <article
                key={t.id}
                id={t.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-[#DCD6C2] rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <div
                  className={`relative h-72 md:h-full min-h-[300px] w-full bg-[#F6F4EC] ${
                    idx % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={planImages[t.id]}
                    alt={`${t.name} (${t.tower}) typical unit floor plan — ${t.config}, ${t.saleable} sq.ft. saleable, NorthWind Sanctuary, Greater Noida`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                  <span className="absolute top-3 left-3 bg-[#C0A15C] text-white text-[10px] px-2 py-1 rounded uppercase tracking-wider">
                    {t.tower}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-[#123528]">
                    {t.name}{" "}
                    <span className="text-sm font-normal text-[#7C8B80]">
                      · {t.config}
                    </span>
                  </h3>
                  <p className="text-sm font-semibold text-[#C0A15C] mt-1 mb-4">
                    {t.saleable.toLocaleString("en-IN")} sq.ft. saleable ·{" "}
                    {t.floors} floors · {t.units} homes
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {positioning[t.id]}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {t.description}
                  </p>

                  <div className="border-y border-[#DCD6C2] py-4 mb-5">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-[#7C8B80]">Saleable</dt>
                        <dd className="font-semibold text-gray-900">
                          {t.saleable.toLocaleString("en-IN")}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#7C8B80]">Carpet</dt>
                        <dd className="font-semibold text-gray-900">
                          {t.carpet.toLocaleString("en-IN")}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#7C8B80]">Balcony</dt>
                        <dd className="font-semibold text-gray-900">
                          {t.balcony}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#7C8B80]">Built-up</dt>
                        <dd className="font-semibold text-gray-900">
                          {t.builtUp.toLocaleString("en-IN")}
                        </dd>
                      </div>
                    </dl>
                    <p className="text-[11px] text-gray-500 italic mt-3">
                      All figures in sq.ft., as published in the project
                      brochure.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {t.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] bg-[#F2EEE0] text-[#6E5B2E] border border-[#CFC7B2] px-2.5 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Price on request.</strong>{" "}
                    {t.gardenVillas > 0
                      ? `Includes ${t.penthouses === 1 ? "one penthouse" : `${t.penthouses} penthouses`} and ${t.gardenVillas} garden villas — released separately.`
                      : `Includes ${t.penthouses} penthouses — released separately.`}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact-us"
                      className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded transition-colors"
                    >
                      Enquire About {t.name}
                    </Link>
                    <Link
                      href="/floor-plans"
                      className="inline-block bg-[#F2EEE0] hover:bg-[#DED8C6] text-[#4A5B50] text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded transition-colors"
                    >
                      View Floor Plan
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Specifications */}
          <div>
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
              Keep No Weight Unturned
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Specifications
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              &ldquo;When pacifying nature is accompanied by extraordinary
              interiors, living here has to be different.&rdquo; The palette is
              shared across all three towers &mdash; imported marble through the
              foyer, drawing, dining and kitchen; wooden flooring in the
              bedrooms; a modular kitchen on a quartz counter; 2450 mm high
              polished veneer doors and UPVC powder-coated windows. The one real
              difference is the air-conditioning:{" "}
              <strong>Amaltas is specified with VRV air-conditioning</strong>{" "}
              throughout, while <strong>Banyan and Cedar use Split ACs</strong>.
              Banyan and Cedar also get a glass railing on the drawing-room
              balcony.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <figure className="rounded-lg overflow-hidden border border-[#DCD6C2]">
                <div className="relative h-56 w-full bg-[#F6F4EC]">
                  <Image
                    src={specTowerA}
                    alt="Tower A Amaltas interior specification — imported marble and wooden flooring, NorthWind Sanctuary"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 420px"
                  />
                </div>
                <figcaption className="bg-[#F6F4EC] px-4 py-3 text-sm">
                  <span className="font-semibold text-[#123528]">
                    Tower A — Amaltas
                  </span>
                  <span className="block text-xs text-[#7C8B80]">
                    VRV air-conditioning throughout
                  </span>
                </figcaption>
              </figure>

              <figure className="rounded-lg overflow-hidden border border-[#DCD6C2]">
                <div className="relative h-56 w-full bg-[#F6F4EC]">
                  <Image
                    src={specTowerBC}
                    alt="Towers B and C, Banyan and Cedar, interior specification — NorthWind Sanctuary"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 420px"
                  />
                </div>
                <figcaption className="bg-[#F6F4EC] px-4 py-3 text-sm">
                  <span className="font-semibold text-[#123528]">
                    Towers B &amp; C — Banyan &amp; Cedar
                  </span>
                  <span className="block text-xs text-[#7C8B80]">
                    Split air-conditioning · glass railing to the drawing-room
                    balcony
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="space-y-4">
              {specifications.map((spec) => (
                <div
                  key={spec.space}
                  className="border border-[#DCD6C2] rounded-lg overflow-hidden"
                >
                  <h3 className="bg-[#0B3B2C] text-[#F0E9D6] px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    {spec.space}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-5 border-b md:border-b-0 md:border-r border-[#DCD6C2]">
                      <p className="text-[11px] uppercase tracking-[1.5px] text-[#C0A15C] font-semibold mb-3">
                        Tower A — Amaltas
                      </p>
                      <dl className="space-y-2">
                        {specEntries(spec.towerA).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <dt className="text-[#7C8B80] text-xs uppercase tracking-wider">
                              {key}
                            </dt>
                            <dd className="text-gray-800 leading-relaxed">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="p-5 bg-[#F6F4EC]">
                      <p className="text-[11px] uppercase tracking-[1.5px] text-[#C0A15C] font-semibold mb-3">
                        Towers B &amp; C — Banyan &amp; Cedar
                      </p>
                      <dl className="space-y-2">
                        {specEntries(spec.towerBC).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <dt className="text-[#7C8B80] text-xs uppercase tracking-wider">
                              {key}
                            </dt>
                            <dd className="text-gray-800 leading-relaxed">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mt-6 italic">
              Specifications are as published in the project brochure. C.P. and
              sanitary fittings are Kohler, Roca, Jaquar or equivalent. The
              developer reserves the right to alter specifications, dimensions
              and elevations without prior notice.
            </p>
          </div>

          {/* Pricing & next steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What About Price?
              </h2>
              <p className="mb-4 leading-relaxed">
                We publish only what the developer has published. {project.name}{" "}
                does not carry a public price list, so every figure you see on
                this site &mdash; area, floor count, unit count, specification
                &mdash; is drawn straight from the project brochure, and pricing
                is not.
              </p>
              <p className="mb-4 leading-relaxed">
                Prices are released against live inventory and vary by tower,
                floor, orientation and view. Rather than print a number that
                would be wrong by the time you read it, we share the current
                sheet directly:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Current price and applicable payment schedule</li>
                <li>Live availability by floor and orientation</li>
                <li>Penthouse and garden-villa releases</li>
                <li>Statutory charges, club and maintenance heads</li>
              </ul>
              <Link
                href="/contact-us"
                className="text-[#C0A15C] hover:underline font-semibold"
              >
                Request the current price sheet →
              </Link>
            </div>

            <div className="text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Choose Your Home
              </h2>
              <ul className="space-y-4 mb-6">
                <li>
                  <strong className="text-[#123528]">
                    Want the largest home on site?
                  </strong>
                  <span className="block text-sm leading-relaxed">
                    Amaltas &mdash; 3,750 sq.ft. saleable, two master suites, a
                    servant room and 705 sq.ft. of balcony, with VRV
                    air-conditioning.
                  </span>
                </li>
                <li>
                  <strong className="text-[#123528]">
                    Want four bedrooms at a lighter footprint?
                  </strong>
                  <span className="block text-sm leading-relaxed">
                    Banyan &mdash; 2,431 sq.ft. saleable around a 21&apos;-0&quot;
                    x 15&apos;-9&quot; drawing and dining hall, with four
                    balconies.
                  </span>
                </li>
                <li>
                  <strong className="text-[#123528]">
                    Want the most efficient plan?
                  </strong>
                  <span className="block text-sm leading-relaxed">
                    Cedar &mdash; 1,895 sq.ft. saleable with 957 sq.ft. carpet
                    and three balconies plus a utility balcony.
                  </span>
                </li>
                <li>
                  <strong className="text-[#123528]">
                    Want a garden, or the top of the building?
                  </strong>
                  <span className="block text-sm leading-relaxed">
                    Four garden villas sit at the base of Amaltas and Banyan;
                    five penthouses cap the three towers. Both are limited
                    releases &mdash; ask for current availability.
                  </span>
                </li>
              </ul>
              <Link
                href="/floor-plans"
                className="text-[#C0A15C] hover:underline font-semibold"
              >
                Compare the full floor plans →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-10 border-t border-[#DCD6C2]">
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
              Live Rare
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Begin Where the World Pauses
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
              Every plan, every specification and the full seven-zone master plan
              are in the brochure. Price and availability are shared on request.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/brochure.pdf"
                download
                className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
              >
                Download Brochure
              </a>
              <Link
                href="/contact-us"
                className="inline-block bg-[#0B3B2C] hover:bg-[#08251C] text-[#F0E9D6] text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
              >
                Request Price &amp; Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
      <ResidenceFeatures />
      <ReasonsToInvest />
    </>
  );
}
