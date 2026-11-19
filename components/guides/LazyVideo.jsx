"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping ambient clip that only downloads and plays while it is on
 * screen. Visitors who prefer reduced motion get the poster plus native
 * controls instead of autoplay — or just the still, for `decorative`
 * background clips.
 */
export default function LazyVideo({
  src,
  poster,
  label,
  className = "",
  eager = false,
  decorative = false,
}) {
  const ref = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReduced);
    if (prefersReduced) return;

    const play = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    if (typeof IntersectionObserver === "undefined") {
      play();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else video.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager && !reducedMotion ? "auto" : "none"}
      controls={reducedMotion && !decorative}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      title={decorative ? undefined : label}
      tabIndex={decorative ? -1 : undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
