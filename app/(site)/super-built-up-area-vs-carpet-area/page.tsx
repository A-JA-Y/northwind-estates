import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquirySection from "@/components/EnquirySection";
import StickyDownloadButton from "@/components/StickyButton";
import GuideHero from "@/components/guides/GuideHero";
import GuideSidebar from "@/components/guides/GuideSidebar";
import CtaBanner from "@/components/guides/CtaBanner";
import VideoFeature from "@/components/guides/VideoFeature";
import FaqAccordion, { faqSchema, type Faq } from "@/components/guides/FaqAccordion";
import RelatedGuides from "@/components/guides/RelatedGuides";
import CarpetRateConverter from "@/components/guides/CarpetRateConverter";
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
import { SITE_URL, project, towers, rera, contact } from "@/data/project";

import blueprintPoster from "@/assets/guides/posters/blueprint-review.webp";
import terracePoster from "@/assets/guides/posters/room-with-terrace.webp";
import structurePoster from "@/assets/guides/posters/building-structure.webp";
import emptyRoomImg from "@/assets/guides/carpet-area-empty-room.webp";
import floorPlanImg from "@/assets/guides/floor-plan-drawing.webp";
import balconiesImg from "@/assets/guides/apartment-tower-balconies.webp";
import liftLobbyImg from "@/assets/guides/common-area-lift-lobby.webp";
import receptionImg from "@/assets/guides/common-area-reception.webp";
import documentsImg from "@/assets/guides/before-you-sign-documents.webp";
import towerImg from "@/assets/guides/green-residential-tower.webp";

const SLUG = "super-built-up-area-vs-carpet-area";
const PAGE_URL = `${SITE_URL}/${SLUG}`;
const TITLE = "Super Built-Up Area vs Carpet Area: A Step-by-Step Example";
const DESCRIPTION =
  "Super built-up area vs carpet area vs built-up area, shown step by step on NorthWind Sanctuary’s own figures, with loading worked out both ways.";
const HEADLINE =
  "Super Built-Up Area vs Carpet Area vs Built-Up Area: A Step-by-Step Example from NorthWind Sanctuary";
const PUBLISHED = "2026-11-18";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "super built-up area vs carpet area",
    "carpet area vs built-up area vs super built-up area",
    "built-up area vs carpet area",
    "saleable area",
    "loading on carpet area",
    "loading on built-up area",
    "price per sq ft on carpet area",
    "NorthWind Sanctuary carpet area",
    "NorthWind Sanctuary floor plans",
    "NorthWind Sanctuary price",
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
    images: [{ url: floorPlanImg.src, width: floorPlanImg.width, height: floorPlanImg.height, alt: "Architectural floor plan drawing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [floorPlanImg.src],
  },
};

/* ── Figures ─────────────────────────────────────────────────────────────
   Carpet, balcony, built-up and saleable are the project's published areas
   (data/project.ts). Walls/structure and common-area share are the
   differences between them, exactly as the copy explains. */
const rows = [...towers].reverse().map((t) => {
  const walls = t.builtUp - t.carpet - t.balcony;
  const common = t.saleable - t.builtUp;
  return {
    ...t,
    label:
      t.id === "amaltas"
        ? "Amaltas 4 BHK + servant"
        : `${t.name} ${t.config}`,
    walls,
    common,
    loadingOnCarpet: (t.saleable - t.carpet) / t.carpet,
    loadingOnBuiltUp: common / t.builtUp,
  };
});

const n = (v: number) => v.toLocaleString("en-IN");
const pct = (v: number) => `${Math.round(v * 100)}%`;

const faqs: Faq[] = [
  {
    question: "What is the difference between carpet area, built-up area and super built-up area?",
    answer:
      "Carpet area is the floor inside the home. Built-up area adds the balconies and outer walls. Super built-up area, also called saleable area, adds a share of common areas such as lobbies, lifts and amenities.",
  },
  {
    question: "Is super built-up area the same as saleable area?",
    answer: "Yes. Super built-up area, super area and saleable area are three names for the same figure.",
  },
  {
    question: "Is a balcony part of built-up area or carpet area?",
    answer:
      "A balcony is part of built-up area and outside carpet area. At NorthWind Sanctuary the balcony area is stated separately for each tower.",
  },
  {
    question: "What is the carpet area at NorthWind Sanctuary?",
    answer:
      "It is 957 sq. ft. in the Cedar 3 BHK, 1,286 sq. ft. in the Banyan 4 BHK and 1,956 sq. ft. in the Amaltas 4 BHK with servant room.",
  },
  {
    question: "How much of the saleable area is carpet at NorthWind Sanctuary?",
    answer:
      "About half: 51% to 53%, depending on the tower. Carpet and balconies together come to about 70%.",
  },
  {
    question: "Why do two people quote different loading figures for the same flat?",
    answer:
      "Because they start from different bases. At NorthWind Sanctuary, loading is 89% to 98% when measured from carpet and 29% to 35% when measured from built-up area. Always ask which base is being used.",
  },
  {
    question: "Which area goes on the builder-buyer agreement in UP?",
    answer:
      "Carpet area. A January 2024 order from UP RERA limits apartment sales in the state to carpet area.",
  },
  {
    question: "How do I convert a rate on saleable area to a rate on carpet?",
    answer:
      "Multiply it by saleable area ÷ carpet area. For the Cedar 3 BHK that factor is about 1.98, so ₹1,000 on saleable area is about ₹1,980 on carpet.",
  },
];

const toc = [
  { id: "three-terms", label: "Carpet vs built-up vs super built-up" },
  { id: "three-areas", label: "The three areas at NorthWind Sanctuary" },
  { id: "loading", label: "Loading on carpet vs built-up" },
  { id: "price-per-sq-ft", label: "Price per sq. ft. on carpet" },
  { id: "before-you-sign", label: "Before you sign" },
  { id: "northwind-sanctuary", label: "NorthWind Sanctuary" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const segments = [
  { key: "carpet", label: "Carpet", color: "bg-[#0B3B2C]" },
  { key: "balcony", label: "Balconies", color: "bg-[#4E7A5A]" },
  { key: "walls", label: "Outer walls & structure", color: "bg-[#C0A15C]" },
  { key: "common", label: "Share of common areas", color: "bg-[#DCD6C2]" },
] as const;

export default function SuperBuiltUpVsCarpetAreaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: HEADLINE,
        description: DESCRIPTION,
        url: PAGE_URL,
        mainEntityOfPage: PAGE_URL,
        image: `${SITE_URL}${floorPlanImg.src}`,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: "en-IN",
        author: { "@type": "Organization", name: "Dealbridge" },
        publisher: { "@type": "Organization", name: "Dealbridge", url: `${SITE_URL}/` },
      },
      faqSchema(faqs),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Super Built-Up Area vs Carpet Area", item: PAGE_URL },
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
        eyebrow="Buyer Guide · Area Explained"
        breadcrumb="Super Built-Up Area vs Carpet Area"
        title={HEADLINE}
        intro={
          <p>
            Most guides define the three areas and stop. It is easier to follow
            them on one real flat, with every step in numbers.
          </p>
        }
        videoSrc="/videos/blueprint-review.mp4"
        poster={blueprintPoster}
        posterAlt="A hand tracing an architectural floor plan"
        videoLabel="Architect reviewing a floor plan"
        stats={[
          { value: "51–53%", label: "Carpet share of saleable" },
          { value: "89–98%", label: "Loading measured on carpet" },
          { value: "29–35%", label: "Loading measured on built-up" },
        ]}
      >
        <EnquireButton label="Get the Area Statement" />
        <BrochureButton variant="ghostLight" />
        <CallButton variant="ghostLight" />
      </GuideHero>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <p className={`${bodyClass} text-lg!`}>
            This guide explains super built-up area vs carpet area, and the
            built-up area that sits between them, using NorthWind Sanctuary in
            Sector Pi-1, Greater Noida. The project publishes carpet, balcony,
            built-up and saleable area for each tower, so nothing here is
            estimated.
          </p>

          {/* ── Definitions ─────────────────────────────────────────── */}
          <section id="three-terms" className="mt-14 scroll-mt-28">
            <h2 className={h2Class}>Carpet Area vs Built-Up Area vs Super Built-Up Area</h2>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px] items-start">
              <ul className="space-y-4">
                <li className="rounded-xl border border-[#DCD6C2] bg-white p-5">
                  <p className={h3Class}>
                    <span className="inline-block h-3 w-3 rounded-sm bg-[#0B3B2C] mr-2" aria-hidden="true" />
                    Carpet area
                  </p>
                  <p className={bodyClass}>
                    is the floor inside the home. Rooms and internal walls count.
                    Outer walls, shafts, balconies and terraces don’t.
                  </p>
                </li>
                <li className="rounded-xl border border-[#DCD6C2] bg-white p-5">
                  <p className={h3Class}>
                    <span className="inline-block h-3 w-3 rounded-sm bg-[#4E7A5A] mr-2" aria-hidden="true" />
                    Built-up area
                  </p>
                  <p className={bodyClass}>
                    is carpet area plus the balconies, the outer walls and the
                    structure. It is everything that belongs to your home alone.
                  </p>
                </li>
                <li className="rounded-xl border border-[#DCD6C2] bg-white p-5">
                  <p className={h3Class}>
                    <span className="inline-block h-3 w-3 rounded-sm bg-[#DCD6C2] border border-[#C0A15C] mr-2" aria-hidden="true" />
                    Super built-up area
                  </p>
                  <p className={bodyClass}>
                    is built-up area plus your share of the lobbies, lifts,
                    staircases and amenities. In Greater Noida it is usually
                    called saleable area or super area.
                  </p>
                </li>
              </ul>

              {/* Nested diagram: each area wraps the one before it */}
              <figure aria-label="How the three areas nest inside each other" className="rounded-2xl bg-[#F2EEE0] border border-[#DCD6C2] p-3">
                <div className="rounded-xl border-2 border-dashed border-[#C0A15C] bg-[#EDE9DA] p-3 pt-8 relative">
                  <span className="absolute top-2 left-3 text-[10px] font-semibold uppercase tracking-widest text-[#8A6D2F]">
                    Super built-up
                  </span>
                  <div className="rounded-lg bg-[#4E7A5A] p-3 pt-8 relative">
                    <span className="absolute top-2 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/90">
                      Built-up
                    </span>
                    <div className="rounded-md bg-[#0B3B2C] px-3 py-10 text-center">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#C0A15C]">
                        Carpet
                      </span>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-3 text-xs text-gray-600 leading-relaxed px-1">
                  Each area contains the one before it. The gaps are balconies and
                  walls, then common areas.
                </figcaption>
              </figure>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={emptyRoomImg}
                  alt="Empty room with a wooden floor and white walls — the floor you actually walk on is carpet area"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className={bodyClass}>
                  A January 2024 order from UP RERA limits apartment sales in the
                  state to carpet area. The other two still appear on price lists
                  and plans, so it helps to see how they connect.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <EnquireButton label="Ask for the Carpet Area Statement" variant="green" />
                </div>
              </div>
            </div>
          </section>

          {/* ── The three areas, step by step ───────────────────────── */}
          <section id="three-areas" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>The Three Areas at NorthWind Sanctuary</h2>
            <p className={`${bodyClass} mb-6`}>
              Here is each tower’s typical home, built up one step at a time. All
              figures are in sq. ft.
            </p>

            <div className={tableWrapClass}>
              <table className="w-full min-w-[560px]">
                <caption className="sr-only">
                  Carpet, built-up and saleable area for each tower at NorthWind Sanctuary, in sq. ft.
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className={thClass}>Step</th>
                    {rows.map((r) => (
                      <th key={r.id} scope="col" className={`${thClass} text-right`}>
                        {r.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className={`${tdClass} text-left font-normal`}>Carpet area</th>
                    {rows.map((r) => <td key={r.id} className={`${tdClass} text-right`}>{n(r.carpet)}</td>)}
                  </tr>
                  <tr>
                    <th scope="row" className={`${tdClass} text-left font-normal`}>+ Balconies</th>
                    {rows.map((r) => <td key={r.id} className={`${tdClass} text-right`}>{n(r.balcony)}</td>)}
                  </tr>
                  <tr>
                    <th scope="row" className={`${tdClass} text-left font-normal`}>+ Outer walls and structure</th>
                    {rows.map((r) => <td key={r.id} className={`${tdClass} text-right`}>{n(r.walls)}</td>)}
                  </tr>
                  <tr className="bg-[#F6F4EC]">
                    <th scope="row" className={`${tdClass} text-left font-bold text-gray-900`}>= Built-up area</th>
                    {rows.map((r) => <td key={r.id} className={`${tdClass} text-right font-bold text-gray-900`}>{n(r.builtUp)}</td>)}
                  </tr>
                  <tr>
                    <th scope="row" className={`${tdClass} text-left font-normal`}>+ Share of common areas</th>
                    {rows.map((r) => <td key={r.id} className={`${tdClass} text-right`}>{n(r.common)}</td>)}
                  </tr>
                  <tr className="bg-[#0B3B2C]">
                    <th scope="row" className="px-4 py-3.5 text-left text-sm font-bold text-white">= Saleable area</th>
                    {rows.map((r) => <td key={r.id} className="px-4 py-3.5 text-right text-sm font-bold text-[#C0A15C]">{n(r.saleable)}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm italic text-gray-500">
              Carpet, balcony, built-up and saleable areas are the project’s
              published figures. The wall and common-area lines are the
              differences between them.
            </p>

            {/* Proportion bars */}
            <div className="mt-10 rounded-2xl border border-[#DCD6C2] bg-[#F6F4EC] p-5 md:p-6">
              <p className="text-sm font-semibold text-gray-900 mb-4">
                Where every sq. ft. of saleable area goes
              </p>
              <div className="space-y-4">
                {rows.map((r) => (
                  <div key={r.id}>
                    <div className="flex justify-between text-xs text-gray-600 mb-1.5">
                      <span className="font-semibold text-gray-900">{r.label}</span>
                      <span>{n(r.saleable)} sq. ft.</span>
                    </div>
                    <div className="flex h-7 overflow-hidden rounded-md" role="img" aria-label={`${r.label}: carpet ${pct(r.carpet / r.saleable)}, balconies ${pct(r.balcony / r.saleable)}, outer walls and structure ${pct(r.walls / r.saleable)}, common areas ${pct(r.common / r.saleable)} of saleable area`}>
                      {segments.map((s) => {
                        const share = r[s.key] / r.saleable;
                        return (
                          <div
                            key={s.key}
                            className={`${s.color} flex items-center justify-center text-[10px] font-semibold ${s.key === "common" ? "text-[#0B3B2C]" : "text-white"}`}
                            style={{ width: `${share * 100}%` }}
                          >
                            {share >= 0.08 ? pct(share) : ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-700">
                {segments.map((s) => (
                  <li key={s.key} className="flex items-center gap-1.5">
                    <span className={`inline-block h-2.5 w-2.5 rounded-sm ${s.color}`} aria-hidden="true" />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className={`${h3Class} mt-10`}>What the steps show:</h3>
            <ul className="mt-3 space-y-3">
              {[
                ["Carpet is about half of saleable area.", "It is 51% in Cedar, 53% in Banyan and 52% in Amaltas."],
                ["Balconies are the second-largest piece.", "Cedar’s add 382 sq. ft., which is 40% on top of its carpet."],
                ["Outer walls and structure are small.", "They come to about 5% to 7% of saleable area."],
                ["Common areas take about a quarter.", "The share is 23% to 26% of saleable area."],
              ].map(([lead, rest]) => (
                <li key={lead} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C0A15C]" aria-hidden="true" />
                  <p className={bodyClass}>
                    <strong className="text-gray-900">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>

            <VideoFeature
              src="/videos/room-with-terrace.mp4"
              poster={terracePoster}
              label="Bright room opening onto a private terrace"
              caption="Carpet + balconies ≈ 70% of saleable area"
              detail="Add carpet and balconies together and you get about 70% of saleable area in every tower. That is the space you can stand in."
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={floorPlanImg}
                  alt="Architectural floor plan drawing showing rooms and internal walls"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={balconiesImg}
                  alt="Apartment tower with a column of private balconies — balconies sit inside built-up area but outside carpet"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </section>

          <CtaBanner
            eyebrow="Unit-wise area statement"
            title="Want this breakdown for the exact home you’re considering?"
            body="We’ll send the carpet, balcony, built-up and saleable areas for the specific unit, floor and facing — with the cost sheet alongside."
            image={floorPlanImg}
            imageAlt=""
          >
            <EnquireButton label="Request Area Statement" />
            <WhatsAppButton variant="ghostLight" />
          </CtaBanner>

          {/* ── Loading ─────────────────────────────────────────────── */}
          <section id="loading" className="mt-4 scroll-mt-28">
            <h2 className={h2Class}>Loading on Carpet vs Loading on Built-Up</h2>
            <p className={`${bodyClass} mb-6`}>
              Loading is the extra area added on top of your home. The catch is
              that people measure it from two different starting points.
            </p>

            <div className={tableWrapClass}>
              <table className="w-full min-w-[560px]">
                <caption className="sr-only">Loading at NorthWind Sanctuary measured on carpet and on built-up area</caption>
                <thead>
                  <tr>
                    <th scope="col" className={thClass}><span className="sr-only">Measure</span></th>
                    {rows.map((r) => (
                      <th key={r.id} scope="col" className={`${thClass} text-right`}>{r.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className={`${tdClass} text-left font-normal`}>
                      <strong className="text-gray-900">Loading on carpet:</strong>{" "}
                      (saleable − carpet) ÷ carpet
                    </th>
                    {rows.map((r) => (
                      <td key={r.id} className={`${tdClass} text-right text-lg font-bold text-[#0B3B2C]`}>{pct(r.loadingOnCarpet)}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className={`${tdClass} text-left font-normal`}>
                      <strong className="text-gray-900">Loading on built-up:</strong>{" "}
                      (saleable − built-up) ÷ built-up
                    </th>
                    {rows.map((r) => (
                      <td key={r.id} className={`${tdClass} text-right text-lg font-bold text-[#8A6D2F]`}>{pct(r.loadingOnBuiltUp)}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={`${bodyClass} mt-6`}>
              Both rows describe the same flats. A broker who says “loading is
              about 30%” is probably counting from built-up area. ANAROCK’s 41%
              average for NCR is counted from carpet, and on that measure these
              homes are at roughly twice the average. The large balconies
              explain much of the difference.
            </p>

            <blockquote className="my-8 rounded-2xl bg-[#0B3B2C] px-6 py-7 md:px-8 text-white">
              <p className="text-xl md:text-2xl font-semibold [font-family:var(--font-work-sans)] leading-snug">
                So when someone quotes a loading figure, ask one question first:{" "}
                <span className="text-[#C0A15C]">loading on what?</span>
              </p>
            </blockquote>

            <VideoFeature
              src="/videos/building-structure.mp4"
              poster={structurePoster}
              label="Aerial view of towers under construction"
              caption="Walls, structure and shared spaces are what loading adds"
              detail="Outer walls and structure take about 5–7% of saleable area at NorthWind Sanctuary; lobbies, lifts, staircases and amenities take about a quarter."
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={liftLobbyImg}
                    alt="Marble-clad lift lobby — one of the common areas counted in super built-up area"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-gray-500">Lift lobbies count towards your share of common area.</figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={receptionImg}
                    alt="Residential reception and lift lobby with a wood-slat feature wall"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-gray-500">So do entrance lobbies, staircases and amenities.</figcaption>
              </figure>
            </div>

            <CtaBanner
              tone="light"
              eyebrow="Loading on what?"
              title="Get the exact loading for the floor you want"
              body="Tell us the tower and floor band. We’ll confirm the areas behind the quote, so you can compare like with like."
            >
              <EnquireButton label="Check My Unit’s Loading" variant="green" />
              <CallButton />
            </CtaBanner>
          </section>

          {/* ── Price per sq. ft. on carpet ─────────────────────────── */}
          <section id="price-per-sq-ft" className="mt-4 scroll-mt-28">
            <h2 className={h2Class}>Price per Sq. Ft. on Carpet Area</h2>
            <p className={bodyClass}>
              Prices at NorthWind Sanctuary are shared on request. When you get a
              rate on saleable area, convert it by multiplying by saleable ÷
              carpet:
            </p>
            <ul className="mt-5 grid grid-cols-3 gap-3 max-w-lg">
              {rows.map((r) => (
                <li key={r.id} className="rounded-xl border border-[#DCD6C2] bg-white p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{r.name}</p>
                  <p className="mt-1 text-2xl font-semibold text-[#0B3B2C]">× {(r.saleable / r.carpet).toFixed(2)}</p>
                </li>
              ))}
            </ul>
            <p className={`${bodyClass} mt-6`}>
              So ₹1,000 per sq. ft. on saleable area is about ₹1,890 to ₹1,980 per
              sq. ft. of carpet. Then add the other lines on the cost sheet and
              divide the full amount by carpet. Ask for the sheet through the{" "}
              <Link href="/price" className={linkClass}>NorthWind Sanctuary price</Link> page.
            </p>

            <CarpetRateConverter />
          </section>

          {/* ── Before you sign ─────────────────────────────────────── */}
          <section id="before-you-sign" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Before You Sign</h2>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_280px] items-start">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C0A15C] text-sm font-bold text-white">1</span>
                  <p className={bodyClass}>
                    <strong className="text-gray-900">Check the UP RERA record.</strong>{" "}
                    Search {rera.number} on{" "}
                    <a href={rera.verifyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>up-rera.in</a>.
                    Carpet is listed in sq. m, so multiply by 10.764 and match it
                    with the figures above.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C0A15C] text-sm font-bold text-white">2</span>
                  <p className={bodyClass}>
                    <strong className="text-gray-900">Read the area on the agreement.</strong>{" "}
                    It should be the carpet area. Ask for the balcony area
                    alongside it.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C0A15C] text-sm font-bold text-white">3</span>
                  <p className={bodyClass}>
                    <strong className="text-gray-900">Ask which area each charge is billed on.</strong>{" "}
                    Maintenance is the one that repeats every month.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C0A15C] text-sm font-bold text-white">4</span>
                  <p className={bodyClass}>
                    <strong className="text-gray-900">Compare like with like.</strong>{" "}
                    Put carpet against carpet and balcony against balcony when you
                    look at another project.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C0A15C] text-sm font-bold text-white">5</span>
                  <p className={bodyClass}>
                    <strong className="text-gray-900">Study the plan.</strong>{" "}
                    Start with the{" "}
                    <Link href="/floor-plans" className={linkClass}>NorthWind Sanctuary floor plans</Link>.
                  </p>
                </li>
              </ol>
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={documentsImg}
                  alt="Folder of house drawings and keys — check every area on paper before you sign"
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <SiteVisitButton label="Book a Site Visit" />
              <BrochureButton label="Get Floor Plans & Brochure" />
            </div>
          </section>

          {/* ── Project ─────────────────────────────────────────────── */}
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
                  <Link href="/about-northwind-sanctuary" className={linkClass}>NorthWind Sanctuary</Link>{" "}
                  is a 4.48-acre project at Plot 07, Sector Pi-1, Greater Noida, by{" "}
                  <Link href="/about-northwind-estates" className={linkClass}>Northwind Estates</Link>.
                  Its three towers, Amaltas, Banyan and Cedar, hold 185 homes.
                </p>
                <ul className="mt-5 space-y-3">
                  <li className={bodyClass}>
                    <strong className="text-gray-900">Homes:</strong> 3 and 4 BHK{" "}
                    <Link href="/apartments-configurations" className={linkClass}>apartments and configurations</Link>,
                    plus penthouses and garden villas
                  </li>
                  <li className={bodyClass}>
                    <strong className="text-gray-900">More:</strong>{" "}
                    <Link href="/amenities" className={linkClass}>amenities</Link>,{" "}
                    <Link href="/location-connectivity" className={linkClass}>location and connectivity</Link>,
                    and the{" "}
                    <Link href="/blogs/northwind-sanctuary-greater-noida-buyers-guide" className={linkClass}>NorthWind Sanctuary buyer’s guide</Link>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <EnquireButton label="Enquire Now" />
                  <Link
                    href="/garden-villa-vs-flat-greater-noida"
                    className="inline-flex items-center justify-center rounded px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider border border-[#C0A15C] text-[#0B3B2C] hover:bg-[#C0A15C] hover:text-white transition-colors"
                  >
                    Garden Villa vs Flat →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQs ────────────────────────────────────────────────── */}
          <section id="faqs" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>FAQs</h2>
            <FaqAccordion faqs={faqs} />
          </section>

          {/* ── Conclusion ──────────────────────────────────────────── */}
          <section id="conclusion" className="mt-16 scroll-mt-28">
            <h2 className={h2Class}>Conclusion</h2>
            <p className={bodyClass}>
              On super built-up area vs carpet area, the built-up figure is the
              missing step. Carpet plus balconies and outer walls gives built-up
              area. Built-up plus your share of the building gives saleable area.
              Once you can see each step, a loading figure or a rate per sq. ft.
              stops being a mystery, and you can compare two homes on the floor
              you get.
            </p>
          </section>

          <CtaBanner
            eyebrow="Cost sheet & area statement"
            title="See the numbers for the home you want"
            body={
              <>
                For the cost sheet and area statement of any home at NorthWind
                Sanctuary, <Link href="/contact-us" className="text-[#C0A15C] underline underline-offset-4">contact us</Link>{" "}
                or call {contact.phone}.
              </>
            }
          >
            <EnquireButton label="Get Cost Sheet" />
            <CallButton variant="ghostLight" />
            <SiteVisitButton variant="ghostLight" />
          </CtaBanner>

          <p className="text-xs italic text-gray-500 leading-relaxed">
            This page comes from an authorised channel partner and not from the
            developer. Areas are the project’s published figures and are
            approximate. Verify all areas on up-rera.in and in the builder-buyer
            agreement.
          </p>
        </article>

        <GuideSidebar
          toc={toc}
          ctaTitle="Get the area statement"
          ctaBody="Carpet, balcony, built-up and saleable area for any unit — with the current cost sheet. Price on request."
          ctaLabel="Request Now"
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
