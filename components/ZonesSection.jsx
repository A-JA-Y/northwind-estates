"use client";

import Image from "next/image";

import arrival from "@/assets/main-entrance.webp";
import recreational from "@/assets/central-lawn.webp";
import active from "@/assets/yoga-deck.webp";
import fun from "@/assets/pool-serenity-walk.webp";
import sports from "@/assets/badminton-court.webp";
import serenity from "@/assets/aerial-landscape.webp";
import underSerenity from "@/assets/kids-play-arena.webp";

// The seven zones of the master plan (brochure p.8).
const cards = [
  { title: "The Arrival Zone", note: "Entrance plaza & water feature", image: arrival },
  { title: "The Recreational Zone", note: "Central lawn & bamboo walk", image: recreational },
  { title: "The Active Zone", note: "Yoga deck & exercise station", image: active },
  { title: "Fun & Entertainment", note: "Four pools & party deck", image: fun },
  { title: "Sports Zone", note: "Pickle ball, cricket & putting golf", image: sports },
  { title: "The Serenity Walk", note: "Tree house, orchard & pet park", image: serenity },
  { title: "Under the Serenity Walk", note: "Musical garden & outdoor gym", image: underSerenity },
];

export default function ZonesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8" id="zones">
      <div className="max-w-6xl mx-auto">
        <h6 className="text-center uppercase mb-3 text-[#C0A15C] tracking-widest text-sm">
          The Master Plan
        </h6>

        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight">
          Seven Zones Across 4.48 Acres
        </h2>

        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
          The grounds at Sanctuary are planned as seven distinct zones — from the
          arrival plaza through the pools and sports courts to the elevated
          Serenity Walk. Eighty percent of the site stays green.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                quality={80}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/85 via-[#08251C]/20 to-transparent" />

              <div className="absolute bottom-0 p-4">
                <p className="text-white text-sm font-semibold leading-snug">
                  {card.title}
                </p>
                <p className="text-white/70 text-xs mt-0.5 leading-snug">
                  {card.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
