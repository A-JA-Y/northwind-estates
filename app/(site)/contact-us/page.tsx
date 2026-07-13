import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project, contact } from "@/data/project";

const PAGE_URL = `${SITE_URL}/contact-us`;
const PAGE_TITLE = "Contact Us | NorthWind Sanctuary, Sector Pi-1 Greater Noida";
const PAGE_DESCRIPTION =
  "Enquire about NorthWind Sanctuary — 3 & 4 BHK residences and penthouses across 4.48 acres at Plot 07, Sector Pi-1, Greater Noida. Request the brochure, floor plans and a site visit.";

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
        "NorthWind Sanctuary — 4.48 acres, three towers, 180 luxury apartments and 05 penthouses in Sector Pi-1, Greater Noida.",
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
        Contact NorthWind Sanctuary, Sector Pi-1, Greater Noida
      </h1>

      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Share your details and our team will walk you through NorthWind Sanctuary — floor plans, tower availability, specifications and a site visit at Sector Pi-1, Greater Noida."
      />
      <ModalWrapper />

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <ContactForm />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Site address */}
            <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6 flex flex-col gap-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                Site Address
              </h2>
              <p className="text-lg font-semibold text-[#0B3B2C] leading-snug">
                {project.name}
              </p>
              <address className="not-italic text-sm text-[#4A5B50] leading-relaxed">
                Plot 07, Sector Pi-1
                <br />
                Greater Noida
                <br />
                Uttar Pradesh 201306
              </address>
              <p className="text-xs text-[#7C8B80] leading-relaxed mt-1">
                02 km from GNIDA Metro Station · 05 km from Pari Chowk · 30 km
                from Noida International Airport.
              </p>
            </div>

            {/* How to reach us */}
            <div className="border border-[#DCD6C2] bg-[#F6F4EC] rounded-xl p-6 flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                Enquiries
              </h2>
              <p className="text-sm text-[#4A5B50] leading-relaxed">
                Prices, payment options and unit availability at NorthWind
                Sanctuary are shared on request. Fill in the enquiry form above
                and an authorised representative will call you back with the
                current inventory across Amaltas, Banyan and Cedar, along with
                the brochure and floor plans.
              </p>

              {contact.phone || contact.email ? (
                <ul className="flex flex-col gap-1.5 text-sm text-[#4A5B50]">
                  {contact.phone ? (
                    <li>
                      <span className="font-semibold text-[#0B3B2C]">
                        Phone:{" "}
                      </span>
                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        className="text-[#C0A15C] hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </li>
                  ) : null}
                  {contact.email ? (
                    <li>
                      <span className="font-semibold text-[#0B3B2C]">
                        Email:{" "}
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#C0A15C] hover:underline"
                      >
                        {contact.email}
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="text-xs text-[#7C8B80] leading-relaxed">
                  Direct phone and email lines are available on request — leave
                  your details and we will reach out.
                </p>
              )}

              <a
                href="#book-site-visit"
                className="inline-block self-start mt-1 bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors duration-300"
              >
                Request a Call Back
              </a>
            </div>
          </div>
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
