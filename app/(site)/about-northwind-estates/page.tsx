import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/northwind-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project, rera, developerInfo } from "@/data/project";

const PAGE_URL = `${SITE_URL}/about-northwind-estates`;
const PAGE_TITLE =
  "About NorthWind Estates | Developer & Builder, Sector Pi-1 Greater Noida";
const PAGE_DESCRIPTION =
  "NorthWind Estates is the developer behind a 4.48-acre, IGBC Pre-Certified Platinum residential project in Sector Pi-1, Greater Noida — designed by Confluence, built on design integrity, sustainability and transparency.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About NorthWind Estates — Developer, Greater Noida",
    description:
      "The developer behind a 4.48-acre, 185-home IGBC Platinum project in Sector Pi-1. Design by Confluence. Low density by choice.",
    url: PAGE_URL,
    type: "website",
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
          name: "About NorthWind Estates",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#developer`,
      name: project.developer,
      alternateName: "NorthWind Estates",
      legalName: "Northwind Estates Private Limited",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "CIN",
        value: "U68100UP2024PTC197903",
      },
      foundingDate: "2024-02-19",
      founder: [
        { "@type": "Person", name: "Shaurya Garg" },
        { "@type": "Person", name: "Samyak Jain" },
        { "@type": "Person", name: "Anubhav Jain" },
      ],
      description:
        "NorthWind Estates Pvt. Ltd. is a Greater Noida-based residential developer working on a deliberately narrow front: fewer projects, lower density, longer time spent on each one. Backed by a promoter group with over 20 years in real estate and 1 million+ sq.ft. delivered across Delhi NCR, its current project is a 4.48-acre, 185-home, IGBC Pre-Certified Platinum development in Sector Pi-1, designed by Confluence.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/northwind-hero.webp`,
      logo: `${SITE_URL}/northwind-hero.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "E-93, Site-4, Kasna Industrial Area, Surajpur",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201306",
        addressCountry: "IN",
      },
      areaServed: { "@type": "City", name: "Greater Noida" },
    },
  ],
};

const commitments = [
  {
    title: "Design integrity at the centre of every decision.",
    body: "Not as a tagline — as a sequencing rule. Architecture and landscape are settled before unit counts, not after. It's why the balconies at NorthWind run to 705 sq.ft. on the largest configuration, and why the seven landscaped zones exist as designed spaces rather than leftover ground between towers.",
  },
  {
    title: "Environmental responsibility, verified externally.",
    body: "The project holds IGBC Pre-Certified Platinum — among the first group housing societies in Greater Noida to do so. We chose external certification specifically because it can be checked. Water management, energy performance, waste handling and material selection are audited against a published standard rather than described in a brochure.",
  },
  {
    title: "Transparency with every home buyer.",
    body: "We publish carpet, built-up, balcony and saleable areas separately for every configuration, when the industry norm is to quote saleable alone. We don't print a rate card we'd have to caveat — we quote the actual unit. And where something isn't finalised, we say so rather than filling the gap with an estimate.",
  },
];

const projectFacts = [
  "NorthWind Sanctuary — Plot 07, Sector Pi-1, Greater Noida 201306",
  "4.48 acres, three towers up to 20 floors",
  "185 homes — 176 apartments, 5 penthouses, 4 garden villas",
  "3 BHK (1,895 sq.ft.) and 4 BHK (2,431 sq.ft. and 3,750 sq.ft.)",
  "80% of the site as landscape, across seven zones",
  "Club Roots — private theatre, banquet halls, gymnasium, four pools",
  "IGBC Pre-Certified Platinum",
  "2 km from GNIDA Metro Station, 5 km from Pari Chowk",
];

export default function AboutNorthWindEstatesPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About NorthWind Estates"
        subtitle="The developer behind NorthWind Sanctuary, Sector Pi-1, Greater Noida"
      />

      {/* The developer */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="NorthWind Estates"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-900 font-semibold text-base leading-relaxed">
              Most developers tell you how many square feet they&apos;ve
              delivered. We&apos;d rather tell you what we chose not to build.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              The Developer
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              {project.developer} is a Greater Noida-based residential
              developer working on a deliberately narrow front: fewer
              projects, lower density, longer time spent on each one.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Incorporated in February 2024, the company is backed by a
              promoter group with over 20 years in real estate and more than
              1 million sq.ft. delivered across Delhi NCR — which is where the
              &quot;two decades of legacy&quot; behind a young company comes
              from. It is led by three directors:
            </p>

            <ul className="flex flex-col gap-3">
              {developerInfo.directors.map((d) => (
                <li key={d.name} className="text-sm leading-relaxed">
                  <span className="font-semibold text-[#0B3B2C]">
                    {d.name}
                  </span>
                  <span className="text-[#C0A15C]"> · {d.role}</span>
                  <span className="text-gray-600"> — {d.background}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed">
              The current project — a 4.48-acre development in Sector Pi-1 —
              carries 185 homes across three towers, with 80% of the ground
              left as landscape. On the same land, at prevailing FAR, most
              developers in this market would put up 500 to 600 units.
            </p>

            <p className="text-gray-800 text-sm leading-relaxed font-semibold">
              That&apos;s the decision the company is built around. Everything
              below follows from it.
            </p>
          </div>
        </div>
      </section>

      {/* Three commitments */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6 border-t border-[#DCD6C2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8 text-center">
            Three Commitments
          </h2>
          <div className="space-y-6">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-[#DCD6C2] rounded-lg p-6"
              >
                <h3 className="text-base md:text-lg font-bold text-[#0B3B2C] mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-8 text-center italic">
            That last one costs us leads. It&apos;s still the right way to sell
            a home someone will spend twenty years paying for.
          </p>
        </div>
      </section>

      {/* Architect */}
      <section className="w-full bg-white py-16 px-6 border-t border-[#DCD6C2]">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
            The Architects
          </h6>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {project.architect} — Where Dreams Take Shape
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            The project&apos;s architecture, interiors and landscape are by
            Confluence, one of India&apos;s established multidisciplinary
            practices — founded in 1999 by Vineeta and Vishal, with 25+ years
            across architecture, interiors and landscape design and a studio
            of 200+ architects and designers.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            Confluence was appointed at master-planning stage rather than
            brought in to dress a completed layout. The tower placement, the
            80% open-ground figure and the seven-zone landscape structure are
            theirs — decisions made before the first unit was counted, which
            is the only point at which they can be made.
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

      {/* The project */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6 border-t border-[#DCD6C2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8 text-center">
            The Project
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {projectFacts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-2 text-sm text-[#123528]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C0A15C]"
                />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-center">
            <Link
              href="/floor-plans"
              className="text-[#C0A15C] hover:underline font-semibold"
            >
              Floor plans →
            </Link>{" "}
            ·{" "}
            <Link
              href="/amenities"
              className="text-[#C0A15C] hover:underline font-semibold"
            >
              Amenities →
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

      {/* Why density can't be renegotiated */}
      <section className="w-full bg-[#0B3B2C] py-16 px-6 text-[#F0E9D6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5 text-center">
            Why Density Is the Only Thing You Can&apos;t Renegotiate
          </h2>
          <p className="text-base leading-relaxed text-[#EDE9DA] mb-4">
            A point worth making plainly, because it&apos;s the argument for
            choosing a developer rather than a floor plan.
          </p>
          <p className="text-base leading-relaxed text-[#EDE9DA] mb-4">
            After possession, almost everything is fixable. Fittings get
            replaced. Interiors get redone. Management committees improve.
            Even the clubhouse gets refurbished eventually.
          </p>
          <p className="text-base leading-relaxed text-[#EDE9DA] mb-4">
            What can&apos;t be changed is how many families share the land. If
            a developer put 600 homes on 4.48 acres, no amount of later
            investment converts that back into open ground. The lift wait at
            8:40 am is permanent. The pool on a Sunday is permanent.
          </p>
          <p className="text-base leading-relaxed text-[#EDE9DA]">
            Among real estate developers in Greater Noida, that number — homes
            per acre — tells you more about how you&apos;ll actually live than
            any specification sheet.{" "}
            <strong className="text-[#C0A15C]">Ours is 41.</strong> We&apos;d
            encourage you to check the same figure for every project on your
            shortlist.
          </p>
        </div>
      </section>

      {/* Talk to us */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
            Talk to Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Questions about the company, the project, or what&apos;s currently
            available are all answered the same way — directly, by someone who
            knows.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors mb-8"
          >
            Contact NorthWind Estates →
          </Link>
          <p className="text-sm text-gray-600">
            Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306
          </p>
          <p className="text-xs text-[#7C8B80] mt-2">
            UP RERA Registration No.:{" "}
            {rera.number || "shared on request"} ·{" "}
            <a
              href={rera.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0A15C] hover:underline"
            >
              Verify on UP-RERA
            </a>
          </p>
          <p className="text-xs text-[#7C8B80] mt-1">
            CIN: {developerInfo.cin} · Registered office:{" "}
            {developerInfo.registeredOffice}
          </p>
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
