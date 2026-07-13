"use client";
import {
  FaSwimmingPool,
  FaLeaf,
  FaDumbbell,
  FaTableTennis,
  FaGlassCheers,
  FaFilm,
  FaDog,
  FaRunning,
  FaChild,
  FaShieldAlt,
} from "react-icons/fa";

import mainPool from "@/assets/pool-serenity-walk.webp";
import centralLawn from "@/assets/central-lawn.webp";
import clubLounge from "@/assets/club-lounge.webp";
import clubGym from "@/assets/club-gym.webp";
import badminton from "@/assets/badminton-court.webp";
import banquetHall from "@/assets/banquet-hall.webp";
import kidsPlay from "@/assets/kids-play-arena.webp";

const images = [
  mainPool,
  centralLawn,
  clubLounge,
  clubGym,
  badminton,
  banquetHall,
  kidsPlay,
];

import ImageSlider from "@/components/ImageSlider";

// Drawn from the seven amenity zones in the master plan legend (brochure p.8)
// and the Club Roots pages (pp.31–35).
const amenities = [
  { icon: <FaSwimmingPool />, text: "Main, party, kids' & shallow pools with a waterfall from the sky bridge" },
  { icon: <FaGlassCheers />, text: "Club Roots — banquet hall, lounge & restaurant" },
  { icon: <FaFilm />, text: "AV room and games room" },
  { icon: <FaDumbbell />, text: "Gymnasium, outdoor gym & exercise station" },
  { icon: <FaLeaf />, text: "Yoga / dance deck and reflexology pathway" },
  { icon: <FaTableTennis />, text: "Badminton, pickle ball, cricket pitch & putting golf" },
  { icon: <FaRunning />, text: "Jogging track, skating rink & multi-purpose play court" },
  { icon: <FaChild />, text: "Kids' play arena, hopscotch, swings & musical garden" },
  { icon: <FaDog />, text: "Serenity Walk with tree house, tree orchard & pet park" },
  { icon: <FaShieldAlt />, text: "Gated community with 24×7 security & surveillance" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#0B3B2C] py-16 px-6 md:px-12 lg:px-20 text-[#F0E9D6] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#C0A15C] uppercase tracking-widest text-xs mb-4">
            Seven Zones of Amenity
          </h6>
          <h2 className="text-[#F0E9D6] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            The Quiet Reflections of Life
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              At Sanctuary, every amenity is more than a feature — it&apos;s a
              feeling. The 4.48-acre site is organised into seven zones, from the
              Arrival Zone through to the Serenity Walk, with 80% of the
              landscape given over to green.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg text-[#C0A15C]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              Tucked within the city&apos;s embrace, Sanctuary is a tranquil
              retreat where recreation, reflection and togetherness find their
              perfect rhythm.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#C0A15C] text-white text-xs rounded-[8px] font-bold uppercase tracking-widest px-7 py-3 cursor-pointer hover:bg-[#A2854A] transition"
              >
                Explore All Amenities
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] h-[300px] md:h-[550px] flex-shrink-0">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
