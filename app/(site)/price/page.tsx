import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import EnquirySection from "@/components/EnquirySection";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project, towers, rera, contact } from "@/data/project";

const PAGE_URL = `${SITE_URL}/price`;
const OG_TITLE =
  "Northwind Sanctuary Price & Availability | Sector Pi-1, Greater Noida";

export const metadata: Metadata = {
  title:
    "Northwind Sanctuary Price List & Availability | Sector Pi-1, Greater Noida",
  description:
    "Northwind Sanctuary price list and current availability — 3 BHK and 4 BHK in Sector Pi-1, Greater Noida. Unit-wise quotes, verified saleable areas and payment schedule shared on request.",
  alternates: { canonical: PAGE_URL },
  keywords:
    "Northwind Sanctuary price list, Northwind Sanctuary price, Northwind Estates Greater Noida, Greater Noida flat rates, apartments in Greater Noida, property for sale in Greater Noida, Sector Pi-1 price",
  openGraph: {
    title: OG_TITLE,
    description:
      "185 homes across three towers. Get the current price, availability and payment schedule for the exact unit you're considering.",
    url: PAGE_URL,
    siteName: project.name,
    images: ["/northwind-hero.webp"],
    type: "website",
  },
};

const quoteFactors = [
  {
    title: "Tower",
    body: "Amaltas, Banyan and Cedar are priced independently. The 4 BHK + Servant in Amaltas and the 3 BHK in Cedar are different products, not different sizes of the same one.",
  },
  {
    title: "Floor",
    body: "Standard floor-rise applies. The towers rise to 20 floors, and the view genuinely changes past the tenth.",
  },
  {
    title: "Orientation",
    body: "Homes facing the seven landscaped zones are priced differently from those facing the sector road.",
  },
  {
    title: "Unit type",
    body: "Apartments, the five penthouses and the four garden villas each sit in their own band. The nine non-apartment homes are priced on request only.",
  },
  {
    title: "Timing",
    body: "Inventory and applicable schemes shift. The price we quote is the price on the day we quote it.",
  },
];

const areaMeasures = [
  {
    term: "Carpet area",
    definition: "The usable floor inside your walls, as defined under RERA.",
  },
  {
    term: "Built-up area",
    definition: "Carpet plus the walls and internal structure.",
  },
  {
    term: "Balcony area",
    definition: "Stated separately here, not folded into carpet.",
  },
  {
    term: "Saleable area",
    definition:
      "Built-up plus your proportionate share of common areas, lobbies and amenities.",
  },
];

const investCase = [
  {
    lead: "Only 185 homes on 4.48 acres.",
    body: "Most projects competing for the same buyer put three to four times the density on comparable land. Density is the one thing you cannot renegotiate after possession.",
  },
  {
    lead: "80% of the site left as landscape,",
    body: "across seven planted zones. Not a marketing figure — it's what's left when you build only three towers on 4.48 acres.",
  },
  {
    lead: "IGBC Pre-Certified Platinum,",
    body: "among the first residential projects in Greater Noida to hold it. Green certification is beginning to affect resale pricing in NCR, and it's a differentiator that gets harder to replicate as sectors fill in.",
  },
  {
    lead: "Sector Pi-1,",
    body: "which is the planned, low-density side of Greater Noida rather than the side that grew outward. Among apartments in Greater Noida at this price level, that address is the part that's hardest to buy back later.",
  },
  {
    lead: "Architecture by Confluence,",
    body: "and a clubhouse — Club Roots — that carries banquet halls, a private theatre, restaurant, gymnasium, games room, four pools, a yoga deck, pickleball, badminton and cricket courts, and a pet park.",
  },
];

const PHONE_HREF = `tel:${contact.phone.replace(/\s+/g, "")}`;
const ENQUIRE_HREF = "#book-site-visit";

const ctaButtonClass =
  "inline-flex justify-center items-center rounded bg-[#C0A15C] hover:bg-[#A2854A] transition-colors duration-200 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white";

export default function PricePage() {
  const totalUnits = towers.reduce((sum, t) => sum + t.units, 0);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Price List & Availability",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageBanner
        eyebrow="Price List & Availability"
        title="Northwind Sanctuary Price List & Availability"
        subtitle="Sector Pi-1, Greater Noida — 3 BHK and 4 BHK across Amaltas, Banyan and Cedar"
      />

      <h1 className="sr-only">
        Northwind Sanctuary Price List &amp; Availability — Sector Pi-1,
        Greater Noida
      </h1>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* Why there's no printed price list */}
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg font-semibold text-gray-900 mb-6">
              You came here for a number. Let&apos;s deal with that first.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 border-b border-[#DCD6C2] pb-4">
              Why There&apos;s No Printed Price List
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Northwind Sanctuary does not publish a rate card, and we&apos;re
              not going to invent one.
            </p>
            <p className="text-base leading-relaxed mb-4">
              That isn&apos;t evasiveness — it&apos;s arithmetic. There are{" "}
              {totalUnits} homes on this site. Not 1,200. At that scale, the
              difference between a third-floor Cedar facing the internal green
              and a seventeenth-floor Cedar facing open sector land is real
              money, and a single &quot;starting from&quot; figure would
              misrepresent both.
            </p>
            <p className="text-base leading-relaxed mb-6">
              What we will do is give you the current, exact figure for the
              specific unit you&apos;re considering, with the applicable payment
              schedule — usually within the same working day.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a href={ENQUIRE_HREF} className={ctaButtonClass}>
                Get the current price list &rarr;
              </a>
              <p className="text-sm text-gray-600">
                If you&apos;d rather speak to someone:{" "}
                <a
                  href={PHONE_HREF}
                  className="text-[#C0A15C] hover:underline font-semibold whitespace-nowrap"
                >
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* What shapes your quote */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Shapes Your Quote
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Five things move the number, in roughly this order of impact:
            </p>
            <ol className="space-y-4 list-none pl-0">
              {quoteFactors.map((f, i) => (
                <li
                  key={f.title}
                  className="flex gap-4 bg-[#F6F4EC] border border-[#DCD6C2] rounded-lg p-5"
                >
                  <span className="text-[#C0A15C] font-bold text-lg leading-none pt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{f.title}.</strong>{" "}
                    {f.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Areas at a glance */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Areas at a Glance
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#DCD6C2] shadow-sm mb-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#F6F4EC] text-[#C0A15C] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4 whitespace-nowrap">
                      Saleable Area
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {towers.map((t) => (
                    <tr key={t.id} className="border-t border-[#DCD6C2]">
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        {t.name} ({t.tower.replace("Tower ", "")})
                      </td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {t.config}
                      </td>
                      <td className="px-5 py-4 text-gray-900 font-semibold whitespace-nowrap">
                        {t.saleable.toLocaleString("en-IN")} sq.ft.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Carpet, built-up and balcony areas for every configuration are on
              the full{" "}
              <Link
                href="/floor-plans"
                className="text-[#C0A15C] hover:underline font-semibold"
              >
                floor plan and configurations page &rarr;
              </Link>
            </p>
          </div>

          {/* Current availability */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Current Availability
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {totalUnits} homes in total, distributed as:
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#DCD6C2] shadow-sm mb-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#F6F4EC] text-[#C0A15C] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Homes</th>
                  </tr>
                </thead>
                <tbody>
                  {towers.map((t) => (
                    <tr key={t.id} className="border-t border-[#DCD6C2]">
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        {t.name}
                      </td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {t.config}
                      </td>
                      <td className="px-5 py-4 text-gray-900 font-semibold">
                        {t.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Included in those numbers: 5 penthouses and 4 garden villas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unit-by-unit availability — which floors and which facings are
              still open — changes weekly and is shared on enquiry. If you have
              a specific floor band in mind, tell us and we&apos;ll confirm
              what&apos;s left before you visit.
            </p>
          </div>

          {/* How the areas are measured */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How the Areas Are Measured
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Worth reading if you&apos;re comparing Greater Noida flat rates
              across a shortlist, because not everyone measures the same way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {areaMeasures.map((d) => (
                <div
                  key={d.term}
                  className="bg-[#F2EEE0] p-5 rounded-lg border border-[#DCD6C2]"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {d.term}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {d.definition}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              We publish all four. When you compare our per-sq.ft. figure
              against another project&apos;s, check which of these four
              they&apos;ve quoted before concluding anything. A lower rate on a
              larger saleable area can easily be the more expensive home.
            </p>
          </div>

          {/* EMI intro */}
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EMI Calculator — Plan Around Your Own Number
            </h2>
            <p className="mb-4">
              Enter the amount you&apos;re working with and the calculator
              below gives you the monthly figure at current rates. Most buyers
              here find it more useful in reverse — start from the EMI
              you&apos;re comfortable with, and it tells you the ticket size
              that fits.
            </p>
            <p>
              Bring that number to the conversation and we can tell you
              immediately which tower and floor band it maps to.
            </p>
          </div>
        </div>
      </section>

      <EmiCalculator />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* How to get the price */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Get the Price
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Three ways, all of which end with an actual figure rather than a
              callback promise:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-gray-700 leading-relaxed">
              <li>
                <strong className="text-gray-900">Fill the form below</strong>{" "}
                — tell us the configuration and, if you have one, a floor
                preference. Quote goes out the same working day.
              </li>
              <li>
                <strong className="text-gray-900">Call directly</strong> —{" "}
                <a
                  href={PHONE_HREF}
                  className="text-[#C0A15C] hover:underline font-semibold whitespace-nowrap"
                >
                  {contact.phone}
                </a>
                , and we&apos;ll talk you through what&apos;s currently open.
              </li>
              <li>
                <strong className="text-gray-900">Visit the site</strong> —
                Sector Pi-1, Greater Noida 201306, about 2 km from GNIDA Metro
                Station. Pricing and availability are discussed on site with
                current inventory in front of you.
              </li>
            </ol>
            <a href={ENQUIRE_HREF} className={ctaButtonClass}>
              Request Price &amp; Availability &rarr;
            </a>
          </div>

          {/* Why it makes sense */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Northwind Estates Greater Noida Makes Sense
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Setting the number aside for a moment — here&apos;s what
              you&apos;re actually buying into.
            </p>
            <ul className="list-none pl-0 space-y-4 mb-6">
              {investCase.map((item) => (
                <li key={item.lead} className="flex gap-3">
                  <span className="text-[#C0A15C] mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C0A15C]" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{item.lead}</strong>{" "}
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If you&apos;re weighing property for sale in Greater Noida right
              now, that combination — low density, green certification,
              established sector — is the one that holds its value when the
              next 5,000 units come online around it.
            </p>
          </div>

          {/* Project fact box */}
          <div className="bg-[#F6F4EC] p-6 rounded-lg border border-[#DCD6C2] text-sm text-gray-600 space-y-2">
            <p>
              <strong>Project:</strong> {project.name}, {project.address}
            </p>
            <p>
              <strong>Developer:</strong> {project.developer} &middot;{" "}
              <strong>Architect:</strong> {project.architect}
            </p>
            <p>
              <strong>Certification:</strong> {project.certification}
            </p>
            <p>
              <strong>Price:</strong> On request — no price list, rate card or
              payment plan is published for this project.
            </p>
            <p>
              <strong>RERA:</strong>{" "}
              {rera.number ? (
                <>{rera.number} &middot; </>
              ) : (
                <>Registration details are shared with the price sheet on request. </>
              )}
              <a
                href={rera.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0A15C] hover:underline"
              >
                Verify on UP-RERA
              </a>
            </p>
            <p>
              <strong>Page last reviewed:</strong> September 2026
            </p>
          </div>

          {/* Closing CTA */}
          <div className="rounded-2xl bg-[#0B3B2C] text-white px-6 py-10 md:px-12 md:py-12 shadow-sm">
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
              Begin Where the World Pauses
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {totalUnits} homes. Three towers. No second phase.
            </h2>
            <p className="text-[#F0E9D6] leading-relaxed max-w-2xl mb-8">
              Tell us which configuration you&apos;re considering and
              we&apos;ll send the current price, what&apos;s still available in
              it, and the payment schedule.
            </p>
            <a href={ENQUIRE_HREF} className={ctaButtonClass}>
              Get Price List &amp; Availability &rarr;
            </a>
          </div>
        </div>
      </section>

      <EnquirySection />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
