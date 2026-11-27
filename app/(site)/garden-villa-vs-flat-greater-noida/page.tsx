import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import EnquirySection from "@/components/EnquirySection";
import StickyDownloadButton from "@/components/StickyButton";
import GuideHero from "@/components/guides/GuideHero";
import GuideSidebar from "@/components/guides/GuideSidebar";
import CtaBanner from "@/components/guides/CtaBanner";
import VideoFeature from "@/components/guides/VideoFeature";
import FaqAccordion, { faqSchema, type Faq } from "@/components/guides/FaqAccordion";
import RelatedGuides from "@/components/guides/RelatedGuides";
import {
  EnquireButton,
  BrochureButton,
  CallButton,
  WhatsAppButton,
  SiteVisitButton,
} from "@/components/guides/GuideCtas";
import {
  h2Class,
  h3Class,
  bodyClass,
  linkClass,
  tableWrapClass,
  thClass,
  tdClass,
} from "@/components/guides/styles";
import { SITE_URL, project, towers, distances, rera, contact } from "@/data/project";

import parkPoster from "@/assets/guides/posters/park-at-sunset.webp";
import wateringPoster from "@/assets/guides/posters/garden-watering.webp";
import apartmentPoster from "@/assets/guides/posters/apartment-tower.webp";
import cityLightsPoster from "@/assets/guides/posters/city-lights-view.webp";
import familyPoster from "@/assets/guides/posters/family-in-garden.webp";
import gardenVillaImg from "@/assets/guides/garden-villa-lawn.webp";
import standaloneVillaImg from "@/assets/guides/standalone-villa.webp";
import apartmentImg from "@/assets/guides/apartment-tower-balconies.webp";
import outdoorDiningImg from "@/assets/guides/balcony-outdoor-dining.webp";
import emptyRoomImg from "@/assets/guides/carpet-area-empty-room.webp";
import poolImg from "@/assets/guides/pool-garden-amenities.webp";
import kidsImg from "@/assets/guides/kids-garden-play.webp";
import petImg from "@/assets/guides/pet-on-lawn.webp";
import penthouseImg from "@/assets/guides/penthouse-terrace-sunset.webp";
import towerImg from "@/assets/guides/green-residential-tower.webp";

const SLUG = "garden-villa-vs-flat-greater-noida";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const TITLE = "Villa vs Flat: Is a Garden Villa the Best of Both Worlds?";
const DESCRIPTION =
  "Villa vs flat in Greater Noida: how garden villas, 3 and 4 BHK apartments and penthouses compare on space, outdoor area, upkeep and green living.";
const HEADLINE = "Villa vs Flat in Greater Noida: Garden Villa, Apartment or Penthouse?";
const PUBLISHED = "2026-11-18";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "villa vs flat",
    "garden villa vs flat",
    "what is a garden villa",
    "villa or flat which is better",
    "difference between villa and flat",
    "penthouse vs villa",
    "villa vs flat in Greater Noida",
    "IGBC Platinum apartments Greater Noida",
    "4 BHK with servant room in Greater Noida",
    "NorthWind Sanctuary",
    "Sector Pi-1 Greater Noida",
  ],
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: project.name,
    locale: "en_IN",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [{ url: gardenVillaImg.src, width: gardenVillaImg.width, height: gardenVillaImg.height, alt: "Modern home with a private green lawn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [gardenVillaImg.src],
  },
};

// Largest home first, as in the copy.
const byTower = (id: string) => towers.find((t) => t.id === id)!;
const amaltas = byTower("amaltas");
const banyan = byTower("banyan");
const cedar = byTower("cedar");
const homes = [
  { ...amaltas, label: "Amaltas 4 BHK + Servant" },
  { ...banyan, label: "Banyan 4 BHK" },
  { ...cedar, label: "Cedar 3 BHK" },
];
const n = (v: number) => v.toLocaleString("en-IN");
const km = (d: string) => d.replace(/^0/, "");

const faqs: Faq[] = [
  {
    question: "Villa vs flat: which is better in Greater Noida?",
    answer:
      "A standalone villa suits families who want land and full control and are happy to maintain a house. A flat suits those who want low upkeep, security and amenities. A garden villa sits in between, with a private garden at ground level inside a gated apartment community.",
  },
  {
    question: "What is a garden villa?",
    answer:
      "A ground-level home inside an apartment project with private garden space attached. You get a lawn of your own, while the building, security and amenities are shared with the community.",
  },
  {
    question: "How many garden villas and penthouses are there at NorthWind Sanctuary?",
    answer: "Four garden villas and five penthouses. Both are priced on request.",
  },
  {
    question: "What are the apartment sizes at NorthWind Sanctuary?",
    answer:
      "The Cedar 3 BHK is 1,895 sq. ft. saleable with 957 sq. ft. carpet. The Banyan 4 BHK is 2,431 sq. ft. saleable with 1,286 sq. ft. carpet. The Amaltas 4 BHK + Servant is 3,750 sq. ft. saleable with 1,956 sq. ft. carpet.",
  },
  {
    question: "What is the price of NorthWind Sanctuary?",
    answer:
      "Prices are on request. No public price list, rate card or payment plan has been published for the project.",
  },
  {
    question: "What does IGBC Pre-Certified Platinum mean?",
    answer:
      "It’s a green-building rating given at the design stage, for buildings planned to use energy and water efficiently. Final certification follows once construction is complete.",
  },
  {
    question: "How far is NorthWind Sanctuary from the metro and Pari Chowk?",
    answer:
      "GNIDA Metro Station is about 2 km (5 minutes) away, and Pari Chowk is about 5 km (7 minutes).",
  },
  {
    question: "Is NorthWind Sanctuary RERA registered?",
    answer: "Yes, under UP RERA number UPRERAPRJ798312. You can verify it on up-rera.in.",
  },
];

const toc = [
  { id: "what-is-a-garden-villa", label: "What is a garden villa?" },
  { id: "side-by-side", label: "Side by side" },
  { id: "outdoor-space", label: "Outdoor space" },
  { id: "indoor-space", label: "Indoor space" },
  { id: "price", label: "Price" },
  { id: "upkeep", label: "Upkeep & green living" },
  { id: "amenities", label: "Amenities" },
  { id: "penthouse-vs-villa", label: "Penthouse vs villa" },
  { id: "investment", label: "Villa vs flat investment" },
  { id: "which-home", label: "Which home fits you?" },
  { id: "questions", label: "Questions to ask" },
  { id: "faqs", label: "FAQs" },
];

const comparison: { point: string; villa: string; garden: string; apartment: string }[] = [
  { point: "Garden", villa: "Your plot", garden: "Private garden at ground level", apartment: "Balcony only" },
  { point: "Stairs", villa: "Usually several floors", garden: "Ground level", apartment: "Lift" },
  { point: "Neighbours", villa: "None attached", garden: "Homes above", apartment: "On the same floor and above" },
  { point: "Security", villa: "Depends on the community", garden: "Shared, gated", apartment: "Shared, gated" },
  { point: "Upkeep", villa: "All yours", garden: "Garden yours, building shared", apartment: "Mostly shared" },
  { point: "Amenities", villa: "Varies", garden: "Full club access", apartment: "Full club access" },
  { point: "Availability", villa: "Varies", garden: "Very few", apartment: "Most homes" },
];

const formats = [
  {
    name: "Standalone villa",
    image: standaloneVillaImg,
    alt: "Modern standalone villa on its own landscaped plot",
    body: "is its own building on its own plot. You get all the space and all the responsibility.",
  },
  {
    name: "Flat",
    image: apartmentImg,
    alt: "Apartment tower with private balconies on every floor",
    body: "is a unit in a tower. You share the land and common areas, and the society runs the building.",
  },
  {
    name: "Garden villa",
    image: gardenVillaImg,
    alt: "Ground-level home opening onto a private green lawn",
    body: "sits between the two. You get ground-level living and a garden, while the building, security and amenities are shared.",
    highlight: true,
  },
];

const fits = [
  {
    title: "Pick a garden villa if",
    points: [
      "You want your own lawn without running a standalone house",
      "Grandparents or young children need ground-level living",
      "You garden, or you have a pet that loves the outdoors",
    ],
    cta: "Ask About Garden Villas",
  },
  {
    title: "Pick an apartment if",
    points: [
      "You want the lowest upkeep and a home you can lock and leave",
      "You’d like a big balcony and views rather than a lawn",
      "You may rent it out or sell later",
    ],
    cta: "Ask About Apartments",
  },
  {
    title: "Pick a penthouse if",
    points: [
      "Views and height matter more to you than a garden",
      "You want one of the rarest homes in the project",
      "You’ll pay a premium for exclusivity",
    ],
    cta: "Ask About Penthouses",
  },
];

export default function GardenVillaVsFlatPage() {
  const metro = distances.find((d) => d.place === "GNIDA Metro Station")!;
  const pari = distances.find((d) => d.place === "Pari Chowk")!;
  const fortis = distances.find((d) => d.place === "Fortis Hospital")!;
  const airport = distances.find((d) => d.place === "Noida International Airport")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: HEADLINE,
        description: DESCRIPTION,
        url: PAGE_URL,
        mainEntityOfPage: PAGE_URL,
        image: `${SITE_URL}${gardenVillaImg.src}`,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: "en-IN",
        author: { "@type": "Organization", name: "Dealbridge" },
        publisher: { "@type": "Organization", name: "Dealbridge" },
      },
      faqSchema(faqs),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Villa vs Flat in Greater Noida", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <GuideHero
        eyebrow="Buyer Guide · Villa vs Flat"
        breadcrumb="Villa vs Flat in Greater Noida"
        title={HEADLINE}
        intro={
          <p>
            The usual villa vs flat debate assumes there are only two choices.
            Some boutique projects offer a third: a garden villa at ground level,
            with a lawn of your own and the security and clubhouse of a gated
            apartment community around it. At NorthWind Sanctuary in Sector
            Pi-1, Greater Noida, there are four garden villas and five
            penthouses alongside the apartments.
          </p>
        }
        videoSrc="/videos/park-at-sunset.mp4"
        poster={parkPoster}
        posterAlt="Green lawn and trees at sunset"
        videoLabel="Sunlight through trees over a green lawn"
        stats={[
          { value: "4", label: "Garden villas" },
          { value: "5", label: "Penthouses" },
          { value: "80%", label: "Green & landscape on 4.48 acres" },
        ]}
      >
        <EnquireButton label="Check Garden Villa Availability" />
        <EnquireButton label="Ask About Penthouses" variant="ghostLight" />
        <CallButton variant="ghostLight" />
      </GuideHero>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <p className={`${bodyClass} text-lg!`}>
            This guide answers villa vs flat in Greater Noida for buyers who’ve
            seen all three formats and still can’t decide. If you’re asking
            “villa or flat, which is better?”, it might be neither. The middle
            option is worth a look.
          </p>

          {/* ── What is a garden villa ─────────────────────────────── */}
          <section id="what-is-a-garden-villa" className="mt-14 scroll-mt-28">
            <h2 className={h2Class}>What Is a Garden Villa?</h2>
            <p className={bodyClass}>
              A garden villa is a ground-level home inside a gated apartment
              project, with private garden space attached. It gives you a lawn at
              your door without owning a standalone house. NorthWind Sanctuary
              describes a small number of garden villas at ground level.
            </p>
            <p className={`${bodyClass} mt-6 font-semibold text-gray-900`}>
              Here’s how the three formats differ:
            </p>
            <ul className="mt-4 grid gap-5 sm:grid-cols-3">
              {formats.map((f) => (
                <li
                  key={f.name}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${f.highlight ? "border-[#C0A15C] ring-2 ring-[#C0A15C]/30" : "border-[#DCD6C2]"}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 260px"
                      className="object-cover"
                      placeholder="blur"
                    />
                    {f.highlight ? (
                      <span className="absolute top-3 left-3 rounded-full bg-[#C0A15C] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        Middle ground
                      </span>
                    ) : null}
                  </div>
                  <p className="p-4 text-sm leading-relaxed text-gray-700">
                    A <strong className="text-gray-900">{f.name.toLowerCase()}</strong> {f.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className={`${bodyClass} mt-6`}>
              Put simply, the difference between villa and flat is how much land
              and upkeep you take on. A garden villa gives you some of both
              without all of either.
            </p>
          </section>

          {/* ── Side by side ───────────────────────────────────────── */}
          <section id="side-by-side" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Garden Villa vs Flat vs Villa: Side by Side</h2>
            <div className={tableWrapClass}>
              <table className="w-full min-w-[620px]">
                <caption className="sr-only">Standalone villa, garden villa and apartment compared</caption>
                <thead>
                  <tr>
                    <th scope="col" className={thClass}>Point</th>
                    <th scope="col" className={thClass}>Standalone Villa</th>
                    <th scope="col" className={`${thClass} bg-[#0B3B2C]! text-[#C0A15C]!`}>Garden Villa</th>
                    <th scope="col" className={thClass}>Apartment</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.point}>
                      <th scope="row" className={`${tdClass} text-left font-semibold text-gray-900`}>{row.point}</th>
                      <td className={tdClass}>{row.villa}</td>
                      <td className={`${tdClass} bg-[#F6F4EC] font-semibold text-[#0B3B2C]`}>{row.garden}</td>
                      <td className={tdClass}>{row.apartment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <CtaBanner
            eyebrow="Very few, by design"
            title="Only four garden villas and five penthouses"
            body="Availability in these formats changes quickly. Ask what’s open today, with the garden or terrace size and the current price."
            image={gardenVillaImg}
            imageAlt=""
          >
            <EnquireButton label="Check Availability" />
            <WhatsAppButton variant="ghostLight" />
          </CtaBanner>

          {/* ── Outdoor space ──────────────────────────────────────── */}
          <section id="outdoor-space" className="mt-4 scroll-mt-28">
            <h2 className={h2Class}>Outdoor Space</h2>
            <p className={bodyClass}>
              Many people want a villa for the outdoor space. At NorthWind, some
              apartments offer a lot of it too. The Amaltas 4 BHK + Servant has
              705 sq ft of balcony area, the Banyan 4 BHK 394 sq ft, and the Cedar
              3 BHK 382 sq ft. A 705 sq. ft. balcony is a proper outdoor room,
              with space for a dining table, plants and a reading corner.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {homes.map((h) => (
                <div key={h.id} className="rounded-xl border border-[#DCD6C2] bg-[#F6F4EC] p-4 text-center">
                  <p className="text-2xl md:text-3xl font-semibold text-[#0B3B2C]">{n(h.balcony)}</p>
                  <p className="text-[11px] uppercase tracking-widest text-gray-500 mt-1">sq. ft. balcony</p>
                  <p className="text-xs font-semibold text-gray-800 mt-2">{h.label}</p>
                </div>
              ))}
            </div>
            <figure className="mt-8">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={outdoorDiningImg}
                  alt="Outdoor dining table set with flowers — the kind of space a large balcony can hold"
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <figcaption className="mt-2 text-xs text-gray-500">
                A 705 sq. ft. balcony has room for a dining table, plants and a reading corner.
              </figcaption>
            </figure>
            <p className={`${bodyClass} mt-6`}>
              Around the buildings, 80% of the 4.48 acres is green or landscape,
              laid out as seven landscaped zones. Whichever home you choose,
              you’ll step out into gardens. What a garden villa adds is a patch
              that belongs only to you.
            </p>
          </section>

          {/* ── Indoor space ───────────────────────────────────────── */}
          <section id="indoor-space" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Indoor Space</h2>
            <p className={bodyClass}>
              Area figures can mislead, so look at all three measures. The
              Amaltas 4 BHK + Servant is 3,750 sq ft saleable, with 1,956 sq ft
              carpet and 2,839 sq ft built-up. The Banyan 4 BHK is 2,431 sq ft
              saleable, with 1,286 sq ft carpet and 1,800 sq ft built-up. The Cedar
              3 BHK is 1,895 sq ft saleable, with 957 sq ft carpet and 1,468 sq ft
              built-up.
            </p>
            <div className={`${tableWrapClass} mt-6`}>
              <table className="w-full min-w-[520px]">
                <caption className="sr-only">Carpet, built-up and saleable area of each apartment type, in sq. ft.</caption>
                <thead>
                  <tr>
                    <th scope="col" className={thClass}>Home</th>
                    <th scope="col" className={`${thClass} text-right`}>Carpet</th>
                    <th scope="col" className={`${thClass} text-right`}>Built-up</th>
                    <th scope="col" className={`${thClass} text-right`}>Saleable</th>
                  </tr>
                </thead>
                <tbody>
                  {homes.map((h) => (
                    <tr key={h.id}>
                      <th scope="row" className={`${tdClass} text-left font-semibold text-gray-900`}>{h.label}</th>
                      <td className={`${tdClass} text-right font-semibold text-[#0B3B2C]`}>{n(h.carpet)}</td>
                      <td className={`${tdClass} text-right`}>{n(h.builtUp)}</td>
                      <td className={`${tdClass} text-right`}>{n(h.saleable)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={emptyRoomImg}
                  alt="Empty room with wooden flooring — carpet area is the floor inside your walls"
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className={bodyClass}>
                  Carpet area is the floor space inside your walls. Built-up area
                  adds the walls and balconies, and saleable area adds a share of
                  the common areas. When you compare any apartment with a villa,
                  compare carpet area to carpet area. For a garden villa, ask for
                  the carpet area and the size of the garden separately.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="/super-built-up-area-vs-carpet-area" className={linkClass}>
                    See every step from carpet to saleable area →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* ── Price ──────────────────────────────────────────────── */}
          <section id="price" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Price</h2>
            <p className={bodyClass}>
              At NorthWind Sanctuary, no price list, rate card or payment plan is
              published. The garden villas and penthouses are priced on request
              only. Ask for the current figures on the{" "}
              <Link href="/price" className={linkClass}>price</Link> page. For
              context, at nearby Godrej Golf Links, a 4 BHK standalone villa on a 125 sq. yd plot is listed at an
              indicative ₹4.0 crore.
            </p>
            <p className={`${bodyClass} mt-4`}>
              Whatever the quoted price, check what it covers. Ask how the garden
              area is priced, and find out the maintenance rate, parking and club
              charges before you compare.
            </p>
            <CtaBanner
              tone="light"
              eyebrow="Price on request"
              title="Get today’s price for a garden villa, apartment or penthouse"
              body="We’ll send the current figure, what it includes, and the charges to compare it against."
            >
              <EnquireButton label="Request Price" variant="green" />
              <Link
                href="/price"
                className="inline-flex items-center justify-center rounded px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider border border-[#C0A15C] text-[#0B3B2C] hover:bg-[#C0A15C] hover:text-white transition-colors"
              >
                Price &amp; Availability →
              </Link>
            </CtaBanner>
          </section>

          {/* ── Upkeep ─────────────────────────────────────────────── */}
          <section id="upkeep" className="mt-4 scroll-mt-28">
            <h2 className={h2Class}>Upkeep and Green Living</h2>
            <p className={bodyClass}>
              A standalone villa runs on its own systems: pumps, power backup,
              waterproofing, garden care and staff. In a garden villa, the garden
              is your job and the building isn’t. In an apartment, most upkeep is
              shared.
            </p>
            <VideoFeature
              src="/videos/garden-watering.mp4"
              poster={wateringPoster}
              label="Watering young plants in a garden bed"
              caption="In a garden villa, the garden is your job — the building isn’t"
              detail="Security, structure and common areas are run by the community; your lawn is yours to plant."
            />
            <p className={bodyClass}>
              Running costs depend on the building too. NorthWind Sanctuary is
              IGBC Pre-Certified Platinum, described as one of the first such
              group housing societies in Greater Noida. Green-rated buildings are
              designed to use energy and water more efficiently, and that
              benefits every home in the project.
            </p>
          </section>

          {/* ── Amenities ──────────────────────────────────────────── */}
          <section id="amenities" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Amenities</h2>
            <p className={bodyClass}>
              People who choose a villa often do it for the children or the dog.
              Shared amenities can cover both. NorthWind Sanctuary has four pools
              (main, party, kids’ and shallow), with a waterfall from the sky
              bridge. Club Roots has a banquet hall, lounge and restaurant, and
              there’s a private theatre and games room. Sports include badminton,
              pickleball, a cricket pitch and a putting green, and the Serenity
              Walk has a tree house, an orchard and a pet park. See the full{" "}
              <Link href="/amenities" className={linkClass}>amenities</Link> list.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="relative col-span-2 aspect-[3/2] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={poolImg}
                  alt="Swimming pool with loungers set in a lush garden"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover"
                  placeholder="blur"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0B3B2C]">Four pools</span>
              </div>
              <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={kidsImg}
                  alt="Children playing with bubbles on a sunny lawn"
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover"
                  placeholder="blur"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0B3B2C]">For the children</span>
              </div>
              <div className="relative aspect-[4/5] md:col-span-3 md:aspect-[21/9] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={petImg}
                  alt="Fluffy dog standing on a green lawn"
                  fill
                  sizes="(max-width: 768px) 50vw, 760px"
                  className="object-cover object-[50%_40%]"
                  placeholder="blur"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0B3B2C]">…and the dog: pet park on the Serenity Walk</span>
              </div>
            </div>
          </section>

          {/* ── Penthouse ──────────────────────────────────────────── */}
          <section id="penthouse-vs-villa" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Penthouse vs Villa: The Sky Option</h2>
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={penthouseImg}
                  alt="Rooftop terrace overlooking the city at sunset"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <p className={bodyClass}>
                The five penthouses are the opposite of a garden villa. Instead of
                a lawn at ground level, you get height and views. The penthouse vs
                villa choice comes down to which matters more to you: a garden
                underfoot or a skyline in front of you. Details are shared on
                request, so ask about terrace size and exclusive use when you
                enquire.
              </p>
            </div>
            <VideoFeature
              src="/videos/city-lights-view.mp4"
              poster={cityLightsPoster}
              label="City lights seen from a high vantage point at night"
              caption="A garden underfoot, or a skyline in front of you?"
              aspect="wide"
            />
            <div className="flex flex-wrap gap-3">
              <EnquireButton label="Ask About Penthouse Terraces" variant="green" />
              <CallButton />
            </div>
          </section>

          {/* ── Investment ─────────────────────────────────────────── */}
          <section id="investment" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Villa vs Flat Investment</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[#DCD6C2] bg-white p-5">
                <p className={h3Class}>Rare formats.</p>
                <p className={bodyClass}>
                  With only four garden villas and five penthouses, these homes
                  are scarce, and that helps them hold value. The flip side is a
                  smaller group of buyers when you sell.
                </p>
              </div>
              <div className="rounded-xl border border-[#DCD6C2] bg-white p-5">
                <p className={h3Class}>Apartments.</p>
                <p className={bodyClass}>
                  The 3 and 4 BHK apartments have a wider buyer pool and more
                  comparable homes, so they’re easier to price and sell.
                </p>
              </div>
              <div className="rounded-xl border border-[#DCD6C2] bg-white p-5">
                <p className={h3Class}>Location.</p>
                <p className={bodyClass}>
                  Every home shares the same address. GNIDA Metro Station is about{" "}
                  {km(metro.distance)} ({km(metro.time).replace("min", "minutes")}) away,
                  Pari Chowk about {km(pari.distance)} ({km(pari.time).replace("min", "minutes")}),
                  Fortis Hospital about {km(fortis.distance)} ({km(fortis.time).replace("min", "minutes")}),
                  and Noida International Airport about {km(airport.distance)} ({km(airport.time).replace("min", "minutes")}).
                </p>
              </div>
            </div>
            <p className={`${bodyClass} mt-5`}>
              Read the{" "}
              <Link href="/blogs/sector-pi-1-greater-noida-connectivity-guide" className={linkClass}>
                Sector Pi-1 connectivity guide
              </Link>{" "}
              for more.
            </p>
            <VideoFeature
              src="/videos/apartment-tower.mp4"
              poster={apartmentPoster}
              label="Residential tower against a moving evening sky"
              caption="Apartments: the widest buyer pool and the easiest to price"
            />
          </section>

          {/* ── Which home fits ────────────────────────────────────── */}
          <section id="which-home" className="mt-12 scroll-mt-28">
            <h2 className={h2Class}>Which Home Fits You?</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {fits.map((f) => (
                <div key={f.title} className="flex flex-col rounded-2xl border border-[#DCD6C2] bg-[#F6F4EC] p-5">
                  <p className="font-semibold text-[#0B3B2C] text-lg mb-4">{f.title}</p>
                  <ul className="space-y-3 flex-1">
                    {f.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                        <FaCheck aria-hidden="true" className="mt-1 flex-shrink-0 text-[#C0A15C]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <EnquireButton label={f.cta} variant="outline" className="mt-5 w-full" />
                </div>
              ))}
            </div>
          </section>

          <CtaBanner
            eyebrow="See all three formats in person"
            title="Walk the lawns, the towers and the terraces"
            body="A site visit is the quickest way to feel the difference between a garden underfoot and a view from the top. We’ll line up the formats you want to see."
            image={familyPoster}
            imageAlt=""
          >
            <SiteVisitButton label="Book a Site Visit" variant="gold" />
            <BrochureButton variant="ghostLight" />
          </CtaBanner>

          {/* ── Questions to ask ───────────────────────────────────── */}
          <section id="questions" className="mt-4 scroll-mt-28">
            <h2 className={h2Class}>Questions to Ask Before You Buy</h2>
            <ul className="space-y-4">
              {[
                ["Garden villa:", "Is the garden sold as part of the home, or given as an exclusive right to use part of the common area? How is it priced?"],
                ["Garden villa:", "How is drainage handled at ground level, and how private is the garden from the balconies above?"],
                ["IGBC rating:", "Pre-certification is based on the design. Ask when final certification is expected."],
                ["RERA and possession:", `Check the possession date filed under UP RERA registration ${rera.number} on up-rera.in.`],
                ["Running costs:", "What are the maintenance rate, parking allotment and club charges?"],
              ].map(([lead, rest], i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-[#DCD6C2] bg-white p-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0B3B2C] text-xs font-bold text-[#C0A15C]">?</span>
                  <p className={bodyClass}>
                    <strong className="text-gray-900">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>
            <p className={`${bodyClass} mt-6`}>
              Our{" "}
              <Link href="/blogs/northwind-sanctuary-greater-noida-buyers-guide" className={linkClass}>
                NorthWind Sanctuary buyer’s guide
              </Link>{" "}
              covers the three towers in detail.{" "}
              <a href={rera.verifyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Verify RERA on up-rera.in
              </a>
              .
            </p>
          </section>

          {/* ── Project ────────────────────────────────────────────── */}
          <section id="northwind-sanctuary" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>NorthWind Sanctuary</h2>
            <div className="grid gap-8 md:grid-cols-[240px_minmax(0,1fr)] items-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={towerImg}
                  alt="Contemporary residential tower with planted balconies set in landscaped grounds"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className={bodyClass}>
                  NorthWind Sanctuary is a project by{" "}
                  <Link href="/about-northwind-estates" className={linkClass}>Northwind Estates Pvt. Ltd.</Link>{" "}
                  at Plot 07, Sector Pi-1, Greater Noida, on 4.48 acres. It has three
                  towers, Amaltas, Banyan and Cedar, with 180 luxury apartments and
                  5 penthouses. The architect is Confluence (est. 1999), which also
                  master-planned the project. The Amaltas tower is one of the few
                  options for a 4 BHK with servant room in Greater Noida in a
                  green-rated building.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className={bodyClass}>
                    <strong className="text-gray-900">Homes:</strong>{" "}
                    <Link href="/apartments-configurations" className={linkClass}>apartments and configurations</Link>{" "}
                    and <Link href="/floor-plans" className={linkClass}>floor plans</Link>
                  </li>
                  <li className={bodyClass}>
                    <strong className="text-gray-900">More:</strong>{" "}
                    <Link href="/about-northwind-sanctuary" className={linkClass}>About NorthWind Sanctuary</Link>{" "}
                    and <Link href="/location-connectivity" className={linkClass}>location and connectivity</Link>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <EnquireButton label="Enquire Now" />
                  <BrochureButton />
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQs ───────────────────────────────────────────────── */}
          <section id="faqs" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>FAQs</h2>
            <FaqAccordion faqs={faqs} />
          </section>

          {/* ── Conclusion ─────────────────────────────────────────── */}
          <section id="conclusion" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Conclusion</h2>
            <p className={bodyClass}>
              Villa vs flat doesn’t have to be a choice between two extremes. A
              standalone villa gives you land and full control, along with all
              the upkeep. An apartment gives you ease, a big balcony and shared
              amenities. A garden villa gives you a private lawn at ground level
              inside a green-rated, gated community, which is a rare middle
              ground. Pick the outdoor space you’ll actually use every day.
            </p>
            <VideoFeature
              src="/videos/family-in-garden.mp4"
              poster={familyPoster}
              label="Mother and daughter reading together on a lawn"
              caption="Pick the outdoor space you’ll actually use every day"
            />
          </section>

          <CtaBanner
            eyebrow="Garden villas & penthouses"
            title="Ask what’s available before it’s gone"
            body={
              <>
                To ask about garden villa or penthouse availability,{" "}
                <Link href="/contact-us" className="text-[#C0A15C] underline underline-offset-4">contact us</Link>{" "}
                or call {contact.phone}.
              </>
            }
          >
            <EnquireButton label="Check Availability" />
            <CallButton variant="ghostLight" />
            <WhatsAppButton variant="ghostLight" />
          </CtaBanner>

          <p className="text-xs italic text-gray-500 leading-relaxed">
            This is not the official website of the developer. It belongs to the
            authorised channel partner and is for information and marketing only.
          </p>
        </article>

        <GuideSidebar
          toc={toc}
          ctaTitle="Garden villa or penthouse?"
          ctaBody="Only four garden villas and five penthouses. Ask what’s open, with garden or terrace size and today’s price."
          ctaLabel="Check Availability"
        />
      </div>

      <RelatedGuides currentSlug={SLUG} />
      <EnquirySection />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
