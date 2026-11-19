import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import LazyVideo from "@/components/guides/LazyVideo";

type Stat = { value: string; label: string };

type GuideHeroProps = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  breadcrumb: string;
  videoSrc: string;
  poster: StaticImageData;
  posterAlt: string;
  videoLabel: string;
  stats?: Stat[];
  children?: ReactNode;
};

// Full-bleed hero with an ambient background clip. The poster is a real
// <Image> underneath so the first paint (and LCP) never waits on the video.
export default function GuideHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  videoSrc,
  poster,
  posterAlt,
  videoLabel,
  stats = [],
  children,
}: GuideHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#08251C] text-white">
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      <LazyVideo
        src={videoSrc}
        poster={poster.src}
        label={videoLabel}
        eager
        decorative
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#08251C]/90 via-[#08251C]/70 to-[#08251C]/25"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[#F0E9D6]/80">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#C0A15C] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#C0A15C]">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="uppercase text-xs tracking-[0.25em] text-[#C0A15C] mb-4">
            {eyebrow}
          </p>
          <h1 className="text-[1.85rem] leading-tight sm:text-4xl md:text-5xl font-semibold [font-family:var(--font-work-sans)] text-white">
            {title}
          </h1>
          <div className="mt-5 text-base md:text-lg leading-relaxed text-[#F0E9D6] space-y-3">
            {intro}
          </div>
          {children ? (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          ) : null}
        </div>

        {stats.length > 0 ? (
          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 max-w-4xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#08251C]/70 backdrop-blur-sm px-5 py-4">
                <dt className="text-[11px] uppercase tracking-widest text-[#F0E9D6]/75">
                  {s.label}
                </dt>
                <dd className="mt-1 text-xl md:text-2xl font-semibold text-[#C0A15C]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
