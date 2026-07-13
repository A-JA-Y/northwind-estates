import Image from "next/image";
import locationMap from "@/assets/location-map.webp";
import { distances, landmarks } from "@/data/project";

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#C0A15C] tracking-[0.2em]">
          Location &amp; Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          Sector Pi-1, Greater Noida
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT: distance chart */}
          <div className="flex-1 w-full max-w-lg">
            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Distance &amp; Time Chart
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Sanctuary sits off the Noida–Greater Noida Link Road, minutes from
              Pari Chowk and the Alpha Commercial Belt, with the Yamuna
              Expressway and Noida International Airport within a half-hour
              drive.
            </p>

            <dl className="divide-y divide-[#DCD6C2] border-y border-[#DCD6C2]">
              {distances.map((d) => (
                <div
                  key={d.place}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="text-gray-800 text-sm">{d.place}</dt>
                  <dd className="flex-shrink-0 flex items-baseline gap-3 text-sm">
                    <span className="font-semibold text-[#0B3B2C] tabular-nums">
                      {d.distance}
                    </span>
                    <span className="text-[#C0A15C] tabular-nums w-[52px] text-right">
                      {d.time}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-[11px] text-gray-500 mt-3 italic">
              Approximate distance &amp; time. Map not to scale.
            </p>

            <h3 className="font-bold text-gray-900 mt-8 mb-3 text-base">
              In the Neighbourhood
            </h3>
            <div className="flex flex-wrap gap-2">
              {landmarks.map((l) => (
                <span
                  key={l}
                  className="text-xs text-[#4A5B50] bg-[#F2EEE0] border border-[#CFC7B2] px-3 py-1 rounded-full"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: brochure location map */}
          <div className="flex-1 w-full">
            <div className="w-full rounded-lg overflow-hidden shadow-md border border-[#DCD6C2] bg-[#0B3B2C]">
              <Image
                src={locationMap}
                alt="NorthWind Sanctuary location map — Sector Pi-1, Greater Noida, showing Pari Chowk, GNIDA Metro, the Noida Expressway and the Yamuna Expressway"
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={85}
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sector+Pi-1+Greater+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#C0A15C] hover:underline"
            >
              Open Sector Pi-1 in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
