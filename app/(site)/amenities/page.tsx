import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Amenities from "@/components/Amenities";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, project, zones, clubFacilities } from "@/data/project";

import masterPlan from "@/assets/master-plan.webp";
import mainEntrance from "@/assets/main-entrance.webp";
import centralLawn from "@/assets/central-lawn.webp";
import yogaDeck from "@/assets/yoga-deck.webp";
import poolSerenityWalk from "@/assets/pool-serenity-walk.webp";
import badmintonCourt from "@/assets/badminton-court.webp";
import aerialLandscape from "@/assets/aerial-landscape.webp";
import kidsPlayArena from "@/assets/kids-play-arena.webp";
import aerialTowers from "@/assets/aerial-towers.webp";
import clubLounge from "@/assets/club-lounge.webp";
import clubGym from "@/assets/club-gym.webp";
import clubRestaurant from "@/assets/club-restaurant.webp";
import banquetHall from "@/assets/banquet-hall.webp";
import gamesArcade from "@/assets/games-arcade.webp";
import restaurantWaiting from "@/assets/restaurant-waiting.webp";
import fineDining from "@/assets/fine-dining.webp";
import cafe from "@/assets/cafe.webp";
import celebrations from "@/assets/celebrations.webp";

export const metadata: Metadata = {
  title:
    "Amenities at NorthWind Sanctuary | Seven Zones & Club Roots, Greater Noida",
  description:
    "Explore the amenities at NorthWind Sanctuary, Sector Pi-1, Greater Noida — seven landscaped zones across a 4.48-acre site with 80% lush green landscape, four pools, a full sports zone, the Serenity Walk and Club Roots.",
  alternates: { canonical: `${SITE_URL}/amenities` },
};

// Every zone below is rendered from `zones` in @/data/project (the master-plan
// legend). Each zone is paired here with an image, a brochure headline phrase
// and a short descriptive line — no facilities beyond the legend are claimed.
const zoneImages: Record<string, StaticImageData> = {
  arrival: mainEntrance,
  recreational: centralLawn,
  active: yogaDeck,
  fun: poolSerenityWalk,
  sports: badmintonCourt,
  serenity: aerialLandscape,
  "under-serenity": kidsPlayArena,
};

const zoneEyebrows: Record<string, string> = {
  arrival: "An Impression to Inspire",
  recreational: "Your Everyday Green Escape",
  active: "Sweat Naturally",
  fun: "The Cascading Happiness",
  sports: "Play It Like a Pro",
  serenity: "Where Peace Beckons",
  "under-serenity": "Where Dreams Take Shape",
};

const zoneCopy: Record<string, string> = {
  arrival:
    "Everything at Sanctuary begins here. The Entrance Plaza opens onto a feature wall flaunted with a water feature, with separate drop-offs for the club and for Towers A, B and C so that arrivals never collide. A commercial plaza sits close to the gate, surface parking is kept to a minimum and a ramp carries the rest of the traffic down to the basement — leaving the ground to the palmetum and to people on foot.",
  recreational:
    "The green heart of the 4.48-acre site. The Central Lawn stretches out beside the Banquet Lawn for evenings that turn into occasions, while the café spills over onto the grass for slower mornings. Wander the Bamboo Walk, cross the Callistemon Garden, let the Reflexology Pathway work on tired feet, then settle into the Sculpture Court and reading area with a book.",
  active:
    "A compact, purposeful pocket of the landscape for the part of the day that belongs to you. The Yoga / Dance Deck catches the early light, the Exercise Station is a few paces away, and the Hedge Garden screens both from the rest of the community — motivation, without an audience.",
  fun:
    "Four bodies of water, one mood. The Main Pool for laps, the Party Pool for the evenings that run long, the Kids' Pool and Shallow Pool for the youngest swimmers, parasols for the ones who would rather watch. Above it all, a waterfall drops from the sky bridge, and the Party Deck keeps the food and drink coming.",
  sports:
    "A full sporting calendar inside your own gate. Badminton, pickle ball and a multi-purpose play court for the competitive; a cricket pitch, a skating rink and putting golf for the weekends; a jogging track for the everyday. The Kids' Play Arena and a shaded tree court with a pet park round out the zone, so the whole household — the four-legged members included — has somewhere to be.",
  serenity:
    "An elevated walkway that threads the landscape and slows it down. The route passes a waterfall, a tree orchard and a tree house, opens out at the pet park, and ends at the Sky Gazing Deck — a place to stand still, look up, and let the day settle.",
  "under-serenity":
    "The shaded level beneath the walkway is given over to play and gathering. Hopscotch and swings for the children, a Musical Garden for the curious, table tennis and an outdoor gym for the restless, and a chaupal with seating where the neighbourhood ends up talking long after the game is over.",
};

// Club Roots gallery — captions are limited to the club spaces the brochure shows.
const clubGallery: { image: StaticImageData; caption: string; note: string }[] = [
  {
    image: clubLounge,
    caption: "Lounge Area",
    note: "A Welcome Wrapped in Warmth",
  },
  {
    image: banquetHall,
    caption: "Club Banquet Hall",
    note: "Where Celebrations Clink",
  },
  {
    image: clubRestaurant,
    caption: "Restaurant",
    note: "The World on Your Platter",
  },
  {
    image: fineDining,
    caption: "Restaurant — Fine Dining",
    note: "Dine and Unwind",
  },
  {
    image: restaurantWaiting,
    caption: "Restaurant Waiting Area",
    note: "Step In, Settle In",
  },
  {
    image: clubGym,
    caption: "Gymnasium",
    note: "Keep No Weight Unturned",
  },
  {
    image: gamesArcade,
    caption: "Games Room",
    note: "The Champion's Deck",
  },
  {
    image: cafe,
    caption: "Café Spill-Over Space",
    note: "Where Leisure Is an Art",
  },
];

const totalElements = zones.reduce((count, zone) => count + zone.items.length, 0);

const faqs = [
  {
    question: "What amenities does NorthWind Sanctuary offer?",
    answer:
      "The 4.48-acre landscape at NorthWind Sanctuary is organised into seven zones — the Arrival Zone, the Recreational Zone, the Active Zone, the Fun & Entertainment Zone, the Sports Zone, the Serenity Walk and the level beneath it, Under the Serenity Walk. Together they hold the four pools, the banquet and central lawns, the yoga and dance deck, the courts and jogging track, the kids' play arena and the pet park, alongside Club Roots, the project's clubhouse.",
  },
  {
    question: "What are the seven amenity zones at NorthWind Sanctuary?",
    answer: zones.map((zone) => `${zone.number}: ${zone.title}`).join(" · "),
  },
  {
    question: "What is Club Roots?",
    answer:
      "Club Roots is the clubhouse at NorthWind Sanctuary — a retreat within a retreat, designed for those who seek the finest in life. It houses a club banquet hall, a double-height entrance lobby, a lounge area, an AV room, a restaurant with its own waiting area, a games room and a gymnasium.",
  },
  {
    question: "Are there swimming pools at NorthWind Sanctuary?",
    answer:
      "Yes. The Fun & Entertainment Zone holds four pools — a main pool, a party pool, a kids' pool and a shallow pool — with parasols, a waterfall falling from the sky bridge and a party deck with food and beverage service alongside.",
  },
  {
    question: "What sports facilities are available at NorthWind Sanctuary?",
    answer:
      "The Sports Zone includes a badminton court, a pickle ball court, a multi-purpose play court, a cricket pitch, a skating rink, putting golf, a jogging track, a kids' play arena and a tree court with a pet park. An outdoor gym, table tennis and an exercise station sit in the Active Zone and Under the Serenity Walk.",
  },
  {
    question: "What is there for children at NorthWind Sanctuary?",
    answer:
      "Children have a kids' pool and a shallow pool in the Fun & Entertainment Zone, a kids' play arena in the Sports Zone, and hopscotch, swings, a musical garden and table tennis Under the Serenity Walk. The Serenity Walk itself has a tree house and a sky gazing deck.",
  },
  {
    question: "How much of NorthWind Sanctuary is landscaped green space?",
    answer:
      "80% of the 4.48-acre site is lush green landscape. NorthWind Sanctuary is also one of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida.",
  },
  {
    question: "What is the Serenity Walk?",
    answer:
      "The Serenity Walk is the sixth zone of the master plan — a raised walkway past a waterfall, a tree orchard, a tree house and a pet park, ending at a sky gazing deck. The shaded level beneath it, Under the Serenity Walk, holds hopscotch, a musical garden, an outdoor gym, table tennis, swings and a chaupal with seating.",
  },
  {
    question: "Where is NorthWind Sanctuary located?",
    answer: `NorthWind Sanctuary is at ${project.address}, developed by ${project.developer} with architecture by ${project.architect}.`,
  },
  {
    question: "What is the price of an apartment at NorthWind Sanctuary?",
    answer:
      "Price is on request. Share your requirement with our authorised channel-partner team and the current, unit-specific quote and payment details will be sent to you. The project brochure is available to download on this site.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Amenities",
                item: `${SITE_URL}/amenities`,
              },
            ],
          }),
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Schema Markup - Local Business / RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": `${SITE_URL}/#realestateagent`,
            name: `${project.name} - Authorised Channel Partner`,
            description: `Authorised channel partner for ${project.name}, a ${project.certification.toLowerCase()} by ${project.developer} at ${project.locality} — three towers on a 4.48-acre site with 80% lush green landscape and Club Roots.`,
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/northwind-hero.webp`,
            areaServed: {
              "@type": "Place",
              name: "Greater Noida, Uttar Pradesh",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot 07, Sector Pi-1",
              addressLocality: "Greater Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201306",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <PageBanner
        eyebrow="Lifestyle"
        title="Amenities"
        subtitle="Seven zones, one landscape — the amenities at NorthWind Sanctuary, Sector Pi-1, Greater Noida."
      />

      <h1 className="sr-only">Amenities at NorthWind Sanctuary</h1>


      {/* Lead - The Quiet Reflections of Life */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-4">
              The Quiet Reflections of Life
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123528] leading-tight mb-6">
              In the heart of the city, yet a world apart
            </h2>
            <p className="text-lg leading-relaxed text-[#4A5B50] mb-5">
              At Sanctuary, every amenity is more than a feature, it&apos;s a
              feeling. Every space you tread is crafted with care and intention.
              These spaces add warmth to your everyday, offering moments of joy
              and connection. Here, leisure embraces lifestyle, wellness meets
              wonder and every path leads you closer to what truly matters.
              Tucked within the city&apos;s embrace, Sanctuary is a tranquil
              retreat where recreation, reflection, and togetherness find their
              perfect rhythm.
            </p>
            <p className="text-base leading-relaxed text-[#4A5B50]">
              The master plan by {project.architect} divides the 4.48-acre site
              into seven zones and {totalElements} named elements — from the
              Entrance Plaza to the Sky Gazing Deck — held together by a
              landscape that keeps 80% of the ground green.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="px-6 py-3 bg-[#C0A15C] text-white rounded-lg hover:bg-[#A2854A] transition-colors font-medium"
              >
                Enquire Now
              </Link>
              <a
                href="/brochure.pdf"
                className="px-6 py-3 border-2 border-[#C0A15C] text-[#C0A15C] rounded-lg hover:bg-[#C0A15C] hover:text-white transition-colors font-medium"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className="relative w-full h-[320px] md:h-[440px] rounded-2xl overflow-hidden border border-[#DCD6C2]">
            <Image
              src={masterPlan}
              alt={`${project.name} master plan — the seven amenity zones across the 4.48-acre site`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <Amenities />

      {/* The Seven Zones */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-4">
              The Master Plan
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123528] leading-tight mb-5">
              The Seven Zones of NorthWind Sanctuary
            </h2>
            <p className="text-lg leading-relaxed text-[#4A5B50]">
              There&apos;s those thinking more or less, and there&apos;s you
              believing in less is more. Every element of the landscape has a
              place in one of seven zones — arrival, recreation, activity, fun,
              sport, serenity, and the shaded world beneath it.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {zones.map((zone, index) => (
              <article
                key={zone.id}
                id={zone.id}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center scroll-mt-24"
              >
                <div
                  className={`relative w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden border border-[#DCD6C2] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={zoneImages[zone.id]}
                    alt={`${zone.title} at ${project.name}, Greater Noida`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <span className="absolute top-4 left-4 bg-[#0B3B2C]/90 text-[#F0E9D6] text-xs uppercase tracking-widest px-3 py-1.5 rounded-md">
                    {zone.number}
                  </span>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
                    {zoneEyebrows[zone.id]}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#123528] mb-4">
                    {zone.title}
                  </h3>
                  <p className="text-base md:text-lg italic leading-relaxed text-[#6E5B2E] border-l-2 border-[#C0A15C] pl-4 mb-5">
                    {zone.intro}
                  </p>
                  <p className="text-base leading-relaxed text-[#4A5B50] mb-6">
                    {zoneCopy[zone.id]}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {zone.items.map((item) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Club Roots */}
      <section
        id="club-roots"
        className="w-full bg-[#0B3B2C] py-16 px-6 md:px-12 lg:px-20 text-[#F0E9D6] scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <div>
              <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-4">
                Step Into Extravagance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                {project.clubName}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[#EDE9DA]">
                A retreat within a retreat, Club Roots is designed for those who
                seek the finest in life. Thoughtfully curated to provide an
                elite lifestyle, it is a space where indulgence meets
                sophistication, offering an array of world-class experiences at
                your doorstep.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-[#C0A15C] mb-5">
                Inside the Club
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {clubFacilities.map((facility) => (
                  <li
                    key={facility}
                    className="flex items-start gap-3 text-sm md:text-base border-b border-white/10 pb-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C0A15C]"
                    />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#CFC7B2] mt-5 leading-relaxed">
                Reception on arrival, a lounge to linger in, and a banquet hall
                for the evenings that deserve one — the club is the social
                address of the community.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubGallery.map((entry) => (
              <figure
                key={entry.caption}
                className="relative h-[220px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={entry.image}
                  alt={`${entry.caption} at ${project.clubName}, ${project.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/90 via-[#08251C]/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[11px] uppercase tracking-widest text-[#C0A15C]">
                    {entry.note}
                  </p>
                  <p className="text-sm font-semibold text-[#F0E9D6]">
                    {entry.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Green credentials */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden border border-[#DCD6C2]">
            <Image
              src={aerialTowers}
              alt={`${project.name} — three towers set within 80% lush green landscape at ${project.locality}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-4">
              Luxury Living Naturally
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123528] leading-tight mb-6">
              Green Is Not a Feature Here. It Is the Plan.
            </h2>
            <p className="text-lg leading-relaxed text-[#4A5B50] mb-5">
              80% of the 4.48-acre site is lush green landscape. Cars descend to
              the basement at the gate, the towers are set back into the
              planting, and what is left at ground level is a walkable
              landscape — lawns, orchards, a bamboo walk and a raised serenity
              walkway rather than driveways.
            </p>
            <div className="rounded-xl border border-[#DCD6C2] bg-[#F2EEE0] p-6">
              <p className="text-xs uppercase tracking-widest text-[#6E5B2E] mb-2">
                Certification
              </p>
              <p className="text-base md:text-lg text-[#123528] leading-relaxed">
                {project.certification}.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/about-northwind-sanctuary"
                className="text-[#C0A15C] hover:underline font-medium"
              >
                About NorthWind Sanctuary &rarr;
              </Link>
              <Link
                href="/location-connectivity"
                className="text-[#C0A15C] hover:underline font-medium"
              >
                Location &amp; Connectivity &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full bg-[#F6F4EC] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-4 text-center">
            Good to Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#123528] text-center mb-10">
            Amenities — Frequently Asked Questions
          </h2>

          <div className="divide-y divide-[#DCD6C2] border-t border-b border-[#DCD6C2]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 text-base md:text-lg font-semibold text-[#123528]">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#C0A15C] transition-transform duration-200 group-open:rotate-45 text-xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-[#4A5B50]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <Image
          src={celebrations}
          alt={`Celebrations at ${project.clubName}, ${project.name}`}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#08251C]/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-[#F0E9D6]">
          <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-4">
            Begin Where the World Pauses
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            See the Seven Zones for Yourself
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-[#EDE9DA]">
            From the water feature at the Entrance Plaza to the Sky Gazing Deck
            at the end of the Serenity Walk, every space at {project.name} was
            drawn to be lived in, not just looked at. Walk the master plan with
            our team, and see where your home sits within it.
          </p>
          <p className="text-sm text-[#CFC7B2] mb-8">
            Price on request. Share your requirement and our authorised
            channel-partner team will get back to you with current availability
            across Amaltas, Banyan and Cedar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#C0A15C] text-white font-semibold rounded-lg hover:bg-[#A2854A] transition-colors text-lg"
            >
              Enquire Now
            </Link>
            <a
              href="/brochure.pdf"
              className="px-8 py-4 border-2 border-[#C0A15C] text-[#F0E9D6] font-semibold rounded-lg hover:bg-[#C0A15C] hover:text-white transition-colors text-lg"
            >
              Download Brochure
            </a>
            <Link
              href="/floor-plans"
              className="px-8 py-4 border-2 border-[#F0E9D6]/40 text-[#F0E9D6] font-semibold rounded-lg hover:border-[#F0E9D6] transition-colors text-lg"
            >
              Floor Plans
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
