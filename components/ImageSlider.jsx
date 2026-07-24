"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="group/slider relative w-full h-full overflow-hidden rounded shadow-2xl"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Images — crossfade with a slow ken-burns drift on the active slide */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Amenity ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
            index === current
              ? "opacity-100 z-10 scale-[1.06]"
              : "opacity-0 scale-100"
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}
        />
      ))}

      {/* Soft bottom scrim for dot legibility */}
      <div className="absolute inset-x-0 bottom-0 h-20 z-10 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />

      {/* Left Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/35 text-white text-xl backdrop-blur-sm border border-white/20 opacity-70 md:opacity-0 md:group-hover/slider:opacity-100 hover:bg-black/60 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/35 text-white text-xl backdrop-blur-sm border border-white/20 opacity-70 md:opacity-0 md:group-hover/slider:opacity-100 hover:bg-black/60 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer ${
              index === current
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
