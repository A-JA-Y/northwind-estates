"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import NewsData from "@/data/newsData";
import { project } from "@/data/project";
import StickyDownloadButton from "@/components/StickyButton";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
};

export default function NewsPage() {
  const sorted: News[] = useMemo(
    () =>
      [...NewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const categories = ["All", ...Array.from(new Set(NewsData.map((n) => n.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? rest : rest.filter((n) => n.category === active);

  if (!featured) return null;

  return (
    <section className="w-full min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="bg-[#F6F4EC] border-b border-[#DED8C6] px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs uppercase tracking-widest text-[#7C8B80] mb-3">
            News &amp; Updates
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#0B3B2C] mb-4 leading-tight">
            What&apos;s happening at Sanctuary
          </h1>

          <p className="text-sm md:text-base text-[#4A5B50] leading-relaxed max-w-2xl mb-8">
            Green certification, the masterplan, the landscape and the making of{" "}
            {project.name} at {project.locality} — reported as it happens.
          </p>

          {/* Featured */}
          <Link href={`/news/${featured.slug}`}>
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-[#DCD6C2] overflow-hidden group hover:border-[#C0A15C] transition-colors bg-white">
              <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-[#F2EEE0] to-[#E7EFD8]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-wide text-[#0B3B2C] bg-[#E7EFD8] rounded-full px-3 py-1 mb-4 w-fit">
                  {featured.category}
                </span>

                <h2 className="text-xl md:text-2xl font-semibold text-[#08251C] leading-snug group-hover:text-[#0B3B2C] transition-colors mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-[#4A5B50] leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <p className="text-xs text-[#7C8B80]">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>

          {/* ── FILTERS ── */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all ${active === cat
                    ? "bg-[#0B3B2C] text-[#F0E9D6] border-[#0B3B2C]"
                    : "border-[#DCD6C2] text-[#4A5B50] hover:border-[#C0A15C] hover:text-[#0B3B2C]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-[#7C8B80] mb-6">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"}
          {active !== "All" && ` in ${active}`}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-[#7C8B80] py-16">
            No further stories in this category yet. More updates from {project.name} are on the way.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`}>
                <div className="group bg-white border border-[#DCD6C2] rounded-2xl overflow-hidden hover:border-[#C0A15C] transition-colors h-full flex flex-col">
                  <div className="relative w-full h-40 bg-gradient-to-br from-[#F2EEE0] to-[#E7EFD8]">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#6E5B2E] mb-2">
                      {news.category}
                    </p>

                    <h3 className="text-sm font-semibold text-[#08251C] leading-snug group-hover:text-[#0B3B2C] transition-colors mb-2 flex-1">
                      {news.title}
                    </h3>

                    <p className="text-xs text-[#4A5B50] leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>

                    <p className="text-xs text-[#7C8B80] mt-3">
                      {new Date(news.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <StickyDownloadButton />
      </div>

    </section>
  );
}
