"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDE_MS = 5500;

/**
 * Full-bleed autoplay carousel used as the hero backdrop.
 * Crossfades infinitely through the slides with a slow ken-burns drift;
 * fills its parent, so the parent keeps the layout (height, scrims, text).
 */
export default function HeroCarousel({ slides, priorityFirst = true }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={priorityFirst && index === 0}
          quality={82}
          sizes="100vw"
          className={`object-cover object-center will-change-transform [transition:opacity_1.6s_ease-in-out,transform_8s_ease-out] ${
            index === current
              ? "opacity-100 z-[1] scale-[1.08]"
              : "opacity-0 z-0 scale-100"
          }`}
        />
      ))}

      {/* Slide indicators */}
      <div className="absolute z-[2] flex gap-2 max-md:top-4 max-md:right-4 md:bottom-5 md:right-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
              index === current
                ? "w-7 bg-[#C0A15C]"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
