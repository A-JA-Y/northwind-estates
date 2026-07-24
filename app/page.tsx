import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import HomePageHeader from "@/components/HomePageHeader";
import { SITE_URL, project, contact } from "@/data/project";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const ZonesSection = dynamic(() => import("@/components/ZonesSection"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const ResidenceFeatures = dynamic(() => import("@/components/ResidenceFeatures"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        {project.name} — 3 &amp; 4 BHK Luxury Residences &amp; Penthouses in{" "}
        {project.locality}
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: project.name,
            image: `${SITE_URL}/northwind-hero.webp`,
            "@id": `${SITE_URL}/`,
            url: `${SITE_URL}/`,
            ...(contact.phone ? { telephone: contact.phone } : {}),
            ...(contact.email ? { email: contact.email } : {}),
            description:
              "NorthWind Sanctuary is a 4.48-acre IGBC Pre-Certified Platinum rated residential development in Sector Pi-1, Greater Noida — three towers holding 180 luxury apartments and 5 penthouses, set within 80% green landscape and served by Club Roots.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot 07, Sector Pi-1",
              addressLocality: "Greater Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201306",
              addressCountry: "IN",
            },
            areaServed: [
              { "@type": "Place", name: "Greater Noida" },
              { "@type": "Place", name: "Noida" },
              { "@type": "Place", name: "Delhi NCR" },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is NorthWind Sanctuary located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "NorthWind Sanctuary stands at Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306 — a 4.48-acre address by Northwind Estates Pvt. Ltd.",
                },
              },
              {
                "@type": "Question",
                name: "What configurations and sizes are available at NorthWind Sanctuary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Three residence types are offered. Tower A (Amaltas) is a 4 BHK + Servant home of 3,750 sq.ft. saleable area (1,956 sq.ft. carpet, 705 sq.ft. balcony). Tower B (Banyan) is a 4 BHK of 2,431 sq.ft. saleable area (1,286 sq.ft. carpet, 394 sq.ft. balcony). Tower C (Cedar) is a 3 BHK of 1,895 sq.ft. saleable area (957 sq.ft. carpet, 382 sq.ft. balcony).",
                },
              },
              {
                "@type": "Question",
                name: "How many towers, floors and homes does NorthWind Sanctuary have?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are 3 towers across 4.48 acres, rising to 20 floors (Tower A rises to 17). Together they hold 185 homes — 180 luxury apartments and garden villas plus 05 penthouses. Tower A has 31 units, Tower B has 76 and Tower C has 78.",
                },
              },
              {
                "@type": "Question",
                name: "Is NorthWind Sanctuary a green-certified project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. NorthWind Sanctuary is one of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida, with 80% of the site given over to lush green landscape.",
                },
              },
              {
                "@type": "Question",
                name: "What amenities are planned at NorthWind Sanctuary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The landscape is organised into seven zones: The Arrival Zone, The Recreational Zone, The Active Zone, the Fun & Entertainment Zone, the Sports Zone, The Serenity Walk and Under the Serenity Walk. Between them they hold a main pool, party pool and kids' pool, a waterfall from the sky bridge, a banquet lawn and central lawn, badminton, pickle ball and cricket facilities, a jogging track, yoga and dance deck, a tree house, sky gazing deck and pet park.",
                },
              },
              {
                "@type": "Question",
                name: "What is Club Roots?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Club Roots is the clubhouse at NorthWind Sanctuary — a retreat within a retreat, designed for those who seek the finest in life. It brings together a club banquet hall, a double-height entrance lobby, a lounge, an AV room, a restaurant with its own waiting area, a games room and a gymnasium.",
                },
              },
              {
                "@type": "Question",
                name: "How well connected is Sector Pi-1, Greater Noida?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GNIDA Metro Station is 02 km (about 05 min) away and Pari Chowk is 05 km (07 min). Fortis Hospital is 05 km (07 min), Delhi Public School 08 km (10 min), and both Delhi and the Noida International Airport are roughly 30 km (about 30 min). Distances and times are approximate.",
                },
              },
              {
                "@type": "Question",
                name: "Who has designed NorthWind Sanctuary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The project is designed by Confluence, an award-winning multidisciplinary architecture firm founded in 1999 by Vineeta and Vishal, with 25+ years of practice and a team of over 200 architects and designers.",
                },
              },
              {
                "@type": "Question",
                name: "What are the prices, RERA details and possession timeline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pricing is on request, and the RERA registration and possession schedule have not been published yet. Share your details through the enquiry form and our team will send you the current price sheet, approval details and timelines as soon as they are released.",
                },
              },
            ],
          }),
        }}
      />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="px-4 py-6 md:px-[30px] md:py-[45px]">
          <div className="max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>


        <AboutProject  heading={false}/>
        <Amenities />
        <ZonesSection />
        <ReasonsToInvest />
        <ResidenceFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <Footer />
    </div>
  );
}
