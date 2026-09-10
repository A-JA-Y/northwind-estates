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
import clubExterior from "@/assets/club-exterior-dusk.webp";
import balconyView from "@/assets/balcony-view.webp";

const images = [
  mainPool,
  clubExterior,
  centralLawn,
  clubLounge,
  clubGym,
  badminton,
  banquetHall,
  balconyView,
  kidsPlay,
];

import ImageSlider from "@/components/ImageSlider";

// Drawn from the seven amenity zones in the master plan legend (brochure p.8)
// and the Club Roots pages (pp.31–35).
const amenities = [
  { icon: <FaSwimmingPool />, text: "Four pools — main, party, kids' and shallow — with a waterfall dropping from the sky bridge" },
  { icon: <FaGlassCheers />, text: "Club Roots with banquet hall, lounge and restaurant" },
  { icon: <FaFilm />, text: "AV room / private theatre and games room" },
  { icon: <FaDumbbell />, text: "Indoor gymnasium, outdoor gym and exercise station" },
  { icon: <FaLeaf />, text: "Yoga and dance deck with reflexology pathway" },
  { icon: <FaTableTennis />, text: "Badminton, pickleball, cricket pitch and putting green" },
  { icon: <FaRunning />, text: "Jogging track, skating rink and multi-purpose court" },
  { icon: <FaChild />, text: "Kids' play arena, hopscotch, swings and musical garden" },
  { icon: <FaDog />, text: "Serenity Walk with tree house, orchard and pet park" },
  { icon: <FaShieldAlt />, text: "Gated entry with 24×7 security and surveillance" },
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
            Where Every Day Has a Place to Go
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              Most projects list amenities. NorthWind Estates planned them as a
              landscape. The 4.48-acre site is divided into seven zones — from
              the Arrival Plaza to the elevated Serenity Walk — so recreation,
              fitness and quiet time each have their own corner.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 group transition-transform duration-300 hover:translate-x-1.5"
                >
                  <span className="flex-shrink-0 text-lg text-[#C0A15C] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              This is what sets the best apartments in Greater Noida apart — not
              the number of features, but how naturally they fit into a day.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="cta-shine inline-block bg-[#C0A15C] text-white text-xs rounded-[8px] font-bold uppercase tracking-widest px-7 py-3 cursor-pointer hover:bg-[#A2854A] hover:shadow-lg transition"
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
