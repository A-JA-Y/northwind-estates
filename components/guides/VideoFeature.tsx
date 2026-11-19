import type { StaticImageData } from "next/image";
import LazyVideo from "@/components/guides/LazyVideo";

type VideoFeatureProps = {
  src: string;
  poster: StaticImageData;
  label: string;
  caption: string;
  detail?: string;
  aspect?: "video" | "wide";
};

// Inline ambient clip with an overlaid caption, used to break up long copy.
export default function VideoFeature({
  src,
  poster,
  label,
  caption,
  detail,
  aspect = "video",
}: VideoFeatureProps) {
  return (
    <figure className="relative my-10 overflow-hidden rounded-2xl bg-[#08251C] shadow-lg">
      <div className={aspect === "wide" ? "aspect-[21/9]" : "aspect-video"}>
        <LazyVideo
          src={src}
          poster={poster.src}
          label={label}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Below the clip on phones; overlaid from md up. Reduced-motion visitors
          get native controls, so the overlay lifts clear of them. */}
      <figcaption className="px-5 py-4 md:pointer-events-none md:absolute md:inset-x-0 md:bottom-0 md:bg-linear-to-t md:from-[#08251C]/90 md:via-[#08251C]/50 md:to-transparent md:px-7 md:pb-6 md:pt-16 md:motion-reduce:pb-16">
        <p className="text-white text-base md:text-lg font-semibold leading-snug">{caption}</p>
        {detail ? (
          <p className="text-[#F0E9D6] text-xs md:text-sm mt-1 leading-relaxed max-w-2xl">
            {detail}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
