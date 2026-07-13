"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import walkthroughStill from "@/assets/aerial-towers.webp";
import { project } from "@/data/project";

const LiteYT = dynamic(() => import("@/components/LiteYT"), {
  ssr: false,
});

/**
 * YouTube id of the official NorthWind Sanctuary walkthrough film.
 *
 * There is no walkthrough film yet, so this is deliberately empty and the
 * section falls back to a still render from the project. To publish the film
 * later, paste its YouTube id here (the part after `v=` in the watch URL) —
 * e.g. "dQw4w9WgXcQ" — and the embed replaces the still automatically. Leave
 * it as "" to keep the still.
 */
const WALKTHROUGH_VIDEO_ID = "";

export default function WalkthroughSection() {
  const videoId = WALKTHROUGH_VIDEO_ID.trim();
  const hasVideo = videoId.length > 0;

  return (
    <section className="w-full bg-[#F6F4EC] py-16 px-6" id="walkthrough">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
            {hasVideo ? "Project Walkthrough" : "Your View to the World"}
          </h6>

          <h2 className="text-3xl   md:text-4xl font-bold text-gray-900">
            {hasVideo
              ? "Experience Sanctuary Virtually"
              : "Begin Where the World Pauses"}
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            {hasVideo
              ? `Take a guided tour of the three towers, ${project.clubName} and the seven landscaped zones that thread through Sanctuary.`
              : "In the heart of the city, yet a world apart. Amaltas, Banyan and Cedar rise over 4.48 acres in Sector Pi-1 — with 80% of the ground given back to lush green landscape and seven amenity zones woven between the towers."}
          </p>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto">
          <div className="aspect-video w-full h-full">
            {hasVideo ? (
              <LiteYT
                videoid={videoId}
                title={`${project.name} walkthrough`}
              />
            ) : (
              <figure className="relative w-full h-full m-0">
                <Image
                  src={walkthroughStill}
                  alt={`Aerial render of the three towers at ${project.name}, Sector Pi-1, Greater Noida`}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#08251C]/80 via-[#08251C]/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-left">
                  <p className="text-white text-base md:text-lg font-semibold leading-snug">
                    The Most Surreal Living
                  </p>
                  <p className="text-[#F0E9D6] text-xs md:text-sm mt-1 leading-relaxed">
                    03 towers · 20 floors · 180 luxury apartments and 05
                    penthouses · 80% lush green landscape
                  </p>
                </figcaption>
              </figure>
            )}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Want the complete picture — floor plans, specifications and the full
            brochure? Price on request.
          </p>

          <a
            href="#book-site-visit"
            className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] transition-colors duration-200 text-white text-xs px-6 py-3 rounded uppercase"
          >
            Get Full Details
          </a>
        </div>

      </div>
    </section>
  );
}
