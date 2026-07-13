import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";
import {
  SITE_URL,
  project,
  towers,
  areaDefinitions,
  rera,
} from "@/data/project";

export const metadata: Metadata = {
  title: "NorthWind Sanctuary Price & Availability | Greater Noida",
  description:
    "Price on request for NorthWind Sanctuary, Sector Pi-1, Greater Noida. See verified saleable, carpet, balcony and built-up areas for Amaltas (4 BHK + Servant), Banyan (4 BHK) and Cedar (3 BHK), and request the current price sheet.",
  alternates: { canonical: `${SITE_URL}/price` },
  keywords:
    "NorthWind Sanctuary price, NorthWind Sanctuary Greater Noida price, NorthWind Sanctuary Sector Pi-1, Amaltas 4 BHK area, Banyan 4 BHK area, Cedar 3 BHK area, Northwind Estates Greater Noida",
};

const priceFactors = [
  {
    title: "Tower & configuration",
    body: "Amaltas, Banyan and Cedar are three distinct products — a 4 BHK + Servant residence, a 4 BHK and a 3 BHK — and each carries its own rate.",
  },
  {
    title: "Home type",
    body: "Sanctuary has only 185 homes: luxury apartments, four garden villas and five penthouses. The rarer the format, the more the quote reflects it.",
  },
  {
    title: "Floor & orientation",
    body: "Higher floors, corner units and homes opening onto the Serenity Walk or the central green are positioned differently from internal ones.",
  },
  {
    title: "Live availability",
    body: "With 31, 76 and 78 units in Towers A, B and C, inventory in any one configuration is finite — the quote we share is against what is actually open on the day you ask.",
  },
];

export default function PricePage() {
  const totalUnits = towers.reduce((sum, t) => sum + t.units, 0);

  return (
    <>
      <PageBanner
        eyebrow="Price & Availability"
        title="Price on Request"
        subtitle="Pricing for Amaltas, Banyan and Cedar at NorthWind Sanctuary, Sector Pi-1, Greater Noida, is shared on enquiry — along with the areas, floor plans and specifications published in the brochure."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b border-[#DCD6C2] pb-4">
              NorthWind Sanctuary Price &amp; Availability
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              {project.name} does not publish a printed price list, and we will not
              invent one. Pricing for the three towers — <strong>Amaltas</strong> (4 BHK
              + Servant), <strong>Banyan</strong> (4 BHK) and <strong>Cedar</strong> (3
              BHK) — is quoted on enquiry, unit by unit, against live availability. What
              we can publish, in full and without an asterisk, is what the brochure
              actually states: the saleable, carpet, balcony and built-up area of every
              home, the number of units in each tower, and the definitions those areas
              are measured by. That is all below.
            </p>
            <p className="text-base leading-relaxed">
              Share your requirement and our team will send the current price sheet and
              payment options for the configuration you are considering. Only{" "}
              {totalUnits} homes exist across the {" "}
              <Link
                href="/apartments-configurations"
                className="text-[#C0A15C] hover:underline font-semibold"
              >
                three towers
              </Link>{" "}
              on this 4.48-acre parcel, so an enquiry is also the fastest way to find out
              what is still open.
            </p>
          </div>

          {/* Price on request — primary CTA block */}
          <div className="rounded-2xl bg-[#0B3B2C] text-white px-6 py-10 md:px-12 md:py-12 shadow-sm">
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
              Less is more
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Price on request
            </h2>
            <p className="text-[#F0E9D6] leading-relaxed max-w-2xl mb-8">
              No published rate, no expected range, no rounded-off crore figure. Tell us
              which residence interests you — Amaltas, Banyan or Cedar — and we will come
              back with an exact, unit-specific quote and the current payment options,
              direct from the developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex justify-center items-center rounded bg-[#C0A15C] hover:bg-[#A2854A] transition-colors duration-200 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Request the Price Sheet
              </Link>
              <a
                href="/brochure.pdf"
                download
                className="inline-flex justify-center items-center rounded border border-[#C0A15C] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#F0E9D6] hover:bg-[#08251C] transition-colors duration-200"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Area table — real brochure data */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Areas &amp; Unit Break-up — Amaltas, Banyan &amp; Cedar
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Every figure in this table is taken from the {project.name} brochure. These
              are the typical unit areas for each tower, in square feet, together with the
              floor count and the number of homes.
            </p>

            <div className="overflow-x-auto rounded-lg border border-[#DCD6C2] shadow-sm mb-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#F6F4EC] text-[#C0A15C] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4 whitespace-nowrap">Saleable (sq.ft.)</th>
                    <th className="px-5 py-4 whitespace-nowrap">Carpet (sq.ft.)</th>
                    <th className="px-5 py-4 whitespace-nowrap">Balcony (sq.ft.)</th>
                    <th className="px-5 py-4 whitespace-nowrap">Built-up (sq.ft.)</th>
                    <th className="px-5 py-4">Floors</th>
                    <th className="px-5 py-4">Units</th>
                    <th className="px-5 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {towers.map((t) => (
                    <tr key={t.id} className="border-t border-[#DCD6C2] align-top">
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        {t.tower}
                        <span className="block text-xs font-normal text-[#7C8B80]">
                          {t.name}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {t.config}
                      </td>
                      <td className="px-5 py-4 text-gray-900 font-semibold">
                        {t.saleable.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {t.carpet.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {t.balcony.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {t.builtUp.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-gray-600">{t.floors}</td>
                      <td className="px-5 py-4 text-gray-600">{t.units}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <Link
                          href="/contact-us"
                          className="text-[#C0A15C] hover:underline font-semibold"
                        >
                          On request
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#7C8B80] leading-relaxed italic mb-6">
              Areas are the typical unit areas stated in the brochure and are indicative.
              Floor plans and layouts are not to scale. Areas, plans and specifications
              are subject to change as approved by the competent authority.
            </p>

            <Link
              href="/floor-plans"
              className="inline-block text-[#C0A15C] hover:underline font-semibold"
            >
              See the Amaltas, Banyan &amp; Cedar floor plans &rarr;
            </Link>
          </div>

          {/* Tower-by-tower */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What You Get in Each Tower
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {towers.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#F6F4EC] p-6 rounded-lg border border-[#DCD6C2] flex flex-col"
                >
                  <p className="uppercase text-[11px] tracking-widest text-[#C0A15C] mb-2">
                    {t.tower}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.name}</h3>
                  <p className="text-sm text-[#4A5B50] mb-4">
                    {t.config} &middot; {t.saleable.toLocaleString("en-IN")} sq.ft.
                    saleable
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1.5 mb-5">
                    <li>
                      <strong>{t.floors}</strong> floors
                    </li>
                    <li>
                      <strong>{t.units}</strong> homes —{" "}
                      {t.apartments} luxury{" "}
                      {t.apartments === 1 ? "apartment" : "apartments"}
                      {t.penthouses > 0 ? (
                        <>
                          , {t.penthouses}{" "}
                          {t.penthouses === 1 ? "penthouse" : "penthouses"}
                        </>
                      ) : null}
                      {t.gardenVillas > 0 ? (
                        <>
                          , {t.gardenVillas} garden{" "}
                          {t.gardenVillas === 1 ? "villa" : "villas"}
                        </>
                      ) : null}
                    </li>
                    <li>
                      Carpet <strong>{t.carpet.toLocaleString("en-IN")}</strong> &middot;
                      balcony <strong>{t.balcony.toLocaleString("en-IN")}</strong> sq.ft.
                    </li>
                  </ul>
                  <p className="mt-auto pt-4 border-t border-[#DCD6C2] text-sm font-semibold text-gray-900">
                    Price on request &middot;{" "}
                    <Link
                      href="/contact-us"
                      className="text-[#C0A15C] hover:underline font-semibold"
                    >
                      Enquire
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What shapes the quote */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Shapes Your Quote
              </h2>
              <p className="mb-4">
                Because pricing at Sanctuary is quoted per unit rather than published as a
                list, these are the things that move it:
              </p>
              <ul className="list-none pl-0 space-y-4">
                {priceFactors.map((f) => (
                  <li key={f.title}>
                    <strong className="text-gray-900">{f.title}:</strong>{" "}
                    <span>{f.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Get the Price
              </h2>
              <ol className="list-decimal pl-5 space-y-3 mb-6">
                <li>
                  Send us your name, number and the configuration you want — 3 BHK or 4
                  BHK.
                </li>
                <li>
                  We confirm what is currently available in that tower, floor by floor.
                </li>
                <li>
                  You receive the unit-specific cost sheet and the payment options in
                  force at the time, from an authorised channel partner.
                </li>
                <li>
                  Walk the site, the {project.clubName} spaces and a sample layout before
                  you commit to anything.
                </li>
              </ol>
              <Link
                href="/contact-us"
                className="inline-block text-[#C0A15C] hover:underline font-semibold"
              >
                Start with a call back &rarr;
              </Link>
            </div>
          </div>

          {/* Area definitions */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How the Areas Are Measured
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Saleable, built-up and carpet area are not interchangeable, and a home is
              only comparable to another once you know which one you are reading. These
              are the definitions reproduced from the {project.name} brochure.
            </p>
            <div className="space-y-4">
              {areaDefinitions.map((d) => (
                <div
                  key={d.term}
                  className="bg-[#F2EEE0] p-6 rounded-lg border border-[#DCD6C2]"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-2">{d.term}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{d.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EMI intro */}
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EMI Calculator — Plan Around Your Own Number
            </h2>
            <p className="mb-4">
              The calculator below is deliberately empty when it loads. Since no price is
              published for {project.name}, we do not seed it with a figure we cannot
              stand behind. Enter the loan amount you are actually planning for, set your
              advance payment, tenure and the interest rate your bank has offered, and it
              will show the monthly outflow.
            </p>
            <p className="italic text-sm text-[#7C8B80]">
              EMI figures are indicative and for planning purposes only. Actual eligibility,
              rate and tenure depend entirely on your lender and profile.
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
              <strong>Price:</strong> On request — no price list, rate card or payment
              plan is published for this project.
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
              <strong>Page last reviewed:</strong> July 2026
            </p>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
