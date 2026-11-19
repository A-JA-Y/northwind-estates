import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  children: ReactNode;
  tone?: "dark" | "light";
  image?: StaticImageData;
  imageAlt?: string;
};

// Mid-article call to action. "dark" sits on brand green (optionally over a
// photo); "light" is a cream card with a gold rule for quieter prompts.
export default function CtaBanner({
  eyebrow,
  title,
  body,
  children,
  tone = "dark",
  image,
  imageAlt = "",
}: CtaBannerProps) {
  if (tone === "light") {
    return (
      <aside className="my-12 rounded-2xl border border-[#DCD6C2] border-l-4 border-l-[#C0A15C] bg-[#F6F4EC] px-6 py-7 md:px-8">
        {eyebrow ? (
          <p className="uppercase text-[11px] tracking-[0.25em] text-[#8A6D2F] mb-2">
            {eyebrow}
          </p>
        ) : null}
        <p className="text-xl md:text-2xl font-semibold text-[#0B3B2C] [font-family:var(--font-work-sans)] mb-2">
          {title}
        </p>
        <div className="text-sm md:text-[15px] text-gray-700 leading-relaxed mb-5">
          {body}
        </div>
        <div className="flex flex-wrap gap-3">{children}</div>
      </aside>
    );
  }

  return (
    <aside className="relative isolate my-12 overflow-hidden rounded-2xl bg-[#0B3B2C] text-white shadow-lg">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover -z-20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-r from-[#08251C]/95 via-[#0B3B2C]/85 to-[#0B3B2C]/55"
          />
        </>
      ) : null}
      <div className="px-6 py-9 md:px-10 md:py-11">
        {eyebrow ? (
          <p className="uppercase text-[11px] tracking-[0.25em] text-[#C0A15C] mb-3">
            {eyebrow}
          </p>
        ) : null}
        <p className="text-2xl md:text-3xl font-semibold [font-family:var(--font-work-sans)] mb-3 max-w-xl">
          {title}
        </p>
        <div className="text-[#F0E9D6] text-sm md:text-base leading-relaxed max-w-xl mb-7">
          {body}
        </div>
        <div className="flex flex-wrap gap-3">{children}</div>
      </div>
    </aside>
  );
}
