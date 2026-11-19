import Image from "next/image";
import Link from "next/link";
import { guides } from "@/data/guides";
import { blogData } from "@/data/blogData";

// Cross-links: the other stand-alone guide(s) plus the long-form blog guides.
export default function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const cards = [
    ...guides
      .filter((g) => g.slug !== currentSlug)
      .map((g) => ({
        href: g.href,
        title: g.title,
        excerpt: g.description,
        image: g.image,
        alt: g.imageAlt,
        tag: "Buyer Guide",
      })),
    ...blogData.slice(0, 2).map((b) => ({
      href: `/blogs/${b.slug}`,
      title: b.title,
      excerpt: b.excerpt,
      image: b.image,
      alt: b.altText || b.title,
      tag: b.category,
    })),
  ];

  return (
    <section className="w-full bg-[#F6F4EC] border-t border-[#DCD6C2] py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.25em] text-[#C0A15C] mb-3 text-center">
          Keep Reading
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-[#0B3B2C] text-center mb-10 [font-family:var(--font-work-sans)]">
          More NorthWind Sanctuary Buyer Guides
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group overflow-hidden rounded-xl border border-[#DCD6C2] bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-widest text-[#8A6D2F] mb-2">
                  {c.tag}
                </p>
                <p className="font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#0B3B2C]">
                  {c.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{c.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
