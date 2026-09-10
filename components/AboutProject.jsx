"use client";
import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

import aerialTowers from "../assets/aerial-towers.webp";
import mainEntrance from "../assets/main-entrance.webp";
import poolSerenity from "../assets/pool-serenity-walk.webp";
import clubLounge from "../assets/club-lounge.webp";
import openAmphitheatre from "../assets/open-amphitheatre.webp";
import livingLounge from "../assets/living-lounge.webp";
import masterBedroom from "../assets/master-bedroom.webp";

import { useModal } from "./ModalContext";
import { highlights } from "@/data/project";
import CountUp from "./CountUp";

const AboutProject = ({ heading }) => {
  const { openModal } = useModal();
  const Title = heading ? "h1" : "h2";

  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">
        {/* Left: Images */}
        <div className="flex flex-col items-start relative w-full md:w-1/2 h-[280px] md:h-[500px]">
          <ImageSlider
            images={[
              aerialTowers,
              livingLounge,
              mainEntrance,
              masterBedroom,
              poolSerenity,
              clubLounge,
              openAmphitheatre,
            ]}
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h6 className="text-[#C0A15C] font-semibold text-xs tracking-widest uppercase">
            Welcome to Sanctuary
          </h6>

          <Title className="text-4xl font-bold text-gray-900 leading-tight">
            About NorthWind Sanctuary by NorthWind Estates
          </Title>

          <p className="text-gray-600 text-sm leading-relaxed">
            NorthWind Sanctuary is the flagship residential project of NorthWind
            Estates — a gated, low-density address in Sector Pi-1 designed on a
            simple belief: fewer homes, more life around them.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Three towers — Amaltas, Banyan and Cedar — hold just 180 luxury
            apartments and five penthouses in 3 and 4 BHK formats, with a small
            number of garden villas at ground level. Every residence opens onto
            a deep balcony, and every walkway leads into one of the seven
            landscaped zones that stretch across the site.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Master-planned by Confluence (est. 1999) and IGBC Pre-Certified
            Platinum, Sanctuary already ranks among the best housing societies
            in Greater Noida for buyers who want green-certified living without
            leaving the city.
          </p>

          {/* Headline figures from the brochure */}
          <dl className="grid grid-cols-3 gap-3 mt-2">
            {highlights.map((h) => (
              <div key={h.label} className="border-t-2 border-[#C0A15C] pt-2">
                <dt className="text-xl font-bold text-[#0B3B2C] leading-none tabular-nums">
                  <CountUp value={h.value} />
                  {h.unit ? (
                    <span className="text-[11px] font-semibold ml-1 text-[#7C8B80]">
                      {h.unit}
                    </span>
                  ) : null}
                </dt>
                <dd className="text-[10px] uppercase tracking-wider text-[#7C8B80] mt-1.5 leading-tight">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-3">
            {[
              "IGBC Pre-Certified Platinum rated",
              "Club Roots — a private clubhouse at the centre of the site",
              "Seven amenity zones across 80% green cover",
              "2 km from GNIDA Metro Station",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#C0A15C] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="cta-shine inline-block bg-[#C0A15C] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#A2854A] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
