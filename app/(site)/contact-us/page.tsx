import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project, contact, rera, developerInfo } from "@/data/project";

const PAGE_URL = `${SITE_URL}/contact-us`;
const PAGE_TITLE =
  "Contact NorthWind Estates | Sales Office & Site Visit, Sector Pi-1 Greater Noida";
const PAGE_DESCRIPTION = `Contact NorthWind Estates — call ${contact.phone} for current pricing, availability and site visits at Plot 07, Sector Pi-1, Greater Noida 201306. Enquiries answered the same working day.`;

const PHONE_HREF = `tel:${contact.phone.replace(/\s+/g, "")}`;
const WHATSAPP_HREF = `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sector+Pi-1%2C+Greater+Noida%2C+Uttar+Pradesh+201306";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Contact NorthWind Estates — Sector Pi-1, Greater Noida",
    description:
      "Call, email or book a site visit. Plot 07, Sector Pi-1, Greater Noida 201306 — 2 km from GNIDA Metro Station.",
    url: PAGE_URL,
    type: "website",
    images: [`${SITE_URL}/northwind-hero.webp`],
  },
};

const askUsFor = [
  "Current price and payment schedule for a specific unit",
  "Floor plans, the master plan and the project brochure",
  "What's still available on the floor or facing you want",
  "Home loan options and approved lenders",
  "A site visit at a time that works for you",
];

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#residence`,
      name: project.name,
      description:
        "NorthWind Estates — a 4.48-acre, 185-home development in Sector Pi-1, Greater Noida: three towers, 80% of the site left as landscape, IGBC Pre-Certified Platinum.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/northwind-hero.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 07, Sector Pi-1",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201306",
        addressCountry: "IN",
      },
      ...(contact.phone ? { telephone: contact.phone } : {}),
      ...(contact.email ? { email: contact.email } : {}),
    },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <h1 className="sr-only">
        Contact NorthWind Estates — Plot 07, Sector Pi-1, Greater Noida
      </h1>

      <PageBanner
        eyebrow="Get in Touch"
        title="Contact NorthWind Estates"
        subtitle="Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306 — call, write, or come and see it. Whichever suits you."
      />

      {/* Speak to us / visit the site */}
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Speak to us */}
            <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6 flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                Speak to Us
              </h2>
              <ul className="flex flex-col gap-1.5 text-sm text-[#4A5B50]">
                <li>
                  <span className="font-semibold text-[#0B3B2C]">Phone: </span>
                  <a
                    href={PHONE_HREF}
                    className="text-[#C0A15C] hover:underline"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[#0B3B2C]">Email: </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[#C0A15C] hover:underline"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[#0B3B2C]">
                    WhatsApp:{" "}
                  </span>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C0A15C] hover:underline"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[#0B3B2C]">Hours: </span>
                  All seven days — enquiries answered the same working day
                </li>
              </ul>
              <p className="text-sm text-[#4A5B50] leading-relaxed mt-1">
                If you&apos;re calling about a specific configuration, mention
                which one and we&apos;ll have the current availability and
                pricing in front of us before the conversation starts.
              </p>
            </div>

            {/* Visit the site */}
            <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6 flex flex-col gap-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                Visit the Site
              </h2>
              <p className="text-lg font-semibold text-[#0B3B2C] leading-snug">
                NorthWind Estates
              </p>
              <address className="not-italic text-sm text-[#4A5B50] leading-relaxed">
                Plot 07, Sector Pi-1
                <br />
                Greater Noida, Uttar Pradesh 201306
              </address>
              <p className="text-xs text-[#7C8B80] leading-relaxed">
                About 2 km from GNIDA Metro Station on the Aqua Line, and 5 km
                from Pari Chowk.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start mt-1 bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors duration-300"
              >
                Get Directions →
              </a>
              <p className="text-sm text-[#4A5B50] leading-relaxed mt-2">
                Site visits run seven days a week. Tell us roughly when
                you&apos;re planning to come and we&apos;ll make sure someone
                who knows the inventory is there — not just someone who can
                unlock the sample flat.
              </p>
            </div>
          </div>

          {/* Send an enquiry */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Send an Enquiry
            </h2>
            <ContactForm extended />
            <p className="text-sm text-[#4A5B50] leading-relaxed mt-4">
              Enquiries received on a working day are answered the same day.
              We&apos;ll send current pricing for the configuration you&apos;ve
              asked about, what&apos;s available in it right now, and the
              applicable payment schedule.
            </p>
            <p className="text-sm font-semibold text-[#0B3B2C] leading-relaxed mt-2">
              No callback loops, no &quot;our executive will get in touch.&quot;
              You&apos;ll get the information.
            </p>
          </div>

          {/* What you can ask us for */}
          <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C] mb-4">
              What You Can Ask Us For
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {askUsFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#123528]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C0A15C]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* About the developer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6 flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                About the Developer
              </h2>
              <p className="text-lg font-semibold text-[#0B3B2C]">
                {project.developer}
              </p>
              <p className="text-xs text-[#7C8B80] leading-relaxed">
                Registered office: {developerInfo.registeredOffice}
                <br />
                CIN: {developerInfo.cin}
              </p>
              <p className="text-sm text-[#4A5B50] leading-relaxed">
                NorthWind Estates is a 4.48-acre, 185-home development in
                Sector Pi-1, Greater Noida — three towers, 80% of the site left
                as landscape, and IGBC Pre-Certified Platinum. If you&apos;re
                weighing apartments in Greater Noida at this level, the{" "}
                <Link
                  href="/floor-plans"
                  className="text-[#C0A15C] hover:underline font-semibold"
                >
                  floor plans
                </Link>{" "}
                and{" "}
                <Link
                  href="/location-connectivity"
                  className="text-[#C0A15C] hover:underline font-semibold"
                >
                  location page
                </Link>{" "}
                will tell you more than we can over the phone in five minutes.
              </p>
              <p className="text-xs text-[#7C8B80] leading-relaxed">
                UP RERA Registration No.:{" "}
                {rera.number || "shared with the price sheet on request"} ·
                RERA Portal:{" "}
                <a
                  href={rera.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C0A15C] hover:underline"
                >
                  up-rera.in
                </a>
              </p>
            </div>

            {/* Explore before you call */}
            <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6 flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                Explore Before You Call
              </h2>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link
                    href="/floor-plans"
                    className="text-[#C0A15C] hover:underline font-semibold"
                  >
                    Floor plans &amp; master plan →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/price"
                    className="text-[#C0A15C] hover:underline font-semibold"
                  >
                    Price &amp; availability →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amenities"
                    className="text-[#C0A15C] hover:underline font-semibold"
                  >
                    Amenities &amp; Club Roots →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/location-connectivity"
                    className="text-[#C0A15C] hover:underline font-semibold"
                  >
                    Location &amp; connectivity →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-[#7C8B80] leading-relaxed italic">
            Disclaimer: This is not the official website of {project.developer}.
            It is operated by an authorised channel partner of {project.name}{" "}
            for information and marketing purposes only. Imagery, plans and
            specifications shown are indicative and subject to change as
            approved by the competent authority. See our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#C0A15C] hover:underline not-italic"
            >
              privacy policy and full disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <EnquirySection />

      <div className="relative">
        <StickyDownloadButton />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
