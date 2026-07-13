"use client";
import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";

import amaltas from "@/assets/floorplan-amaltas.webp";
import banyan from "@/assets/floorplan-banyan.webp";
import cedar from "@/assets/floorplan-cedar.webp";
import masterPlan from "@/assets/master-plan.webp";

import { towers, areaDefinitions, zones } from "@/data/project";
import { useModal } from "./ModalContext";

const planImages: Record<string, StaticImageData> = { amaltas, banyan, cedar };

type Plan = (typeof towers)[number] & { image: StaticImageData };

const plans: Plan[] = towers.map((t) => ({ ...t, image: planImages[t.id] }));

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<Plan | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  return (
    <section
      className="w-full py-16 px-6"
      id="floor-plans"
      aria-label="NorthWind Sanctuary floor plans"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Intro */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            NorthWind Sanctuary Floor Plans — Amaltas, Banyan &amp; Cedar
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Sanctuary is built as three towers on a 4.48-acre site in Sector
            Pi-1, Greater Noida. Each tower has a single typical unit plan:{" "}
            <strong>Amaltas</strong> (Tower A) is the largest at 3,750 sq.ft.
            saleable, <strong>Banyan</strong> (Tower B) is a 2,431 sq.ft. four-
            bedroom home, and <strong>Cedar</strong> (Tower C) is a 1,895 sq.ft.
            three-bedroom residence. Penthouses and garden villas sit above and
            below these typical floors.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#C0A15C] text-white text-sm px-8 py-3 rounded uppercase font-semibold tracking-widest hover:bg-[#A2854A] transition"
          >
            Download Floor Plan PDF
          </button>
        </div>

        {/* Area chart */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Unit Area Chart
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            Saleable, carpet, balcony and built-up areas for the typical unit in
            each tower, exactly as published in the project brochure.
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#0B3B2C] text-[#F0E9D6]">
                  <th className="px-4 py-3 text-left">Tower</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Config</th>
                  <th className="px-4 py-3 text-right">Saleable</th>
                  <th className="px-4 py-3 text-right">Carpet</th>
                  <th className="px-4 py-3 text-right">Balcony</th>
                  <th className="px-4 py-3 text-right">Built-up</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((t, idx) => (
                  <tr
                    key={t.id}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#F6F4EC]"} hover:bg-[#F2EEE0] transition`}
                  >
                    <td className="px-4 py-3 text-gray-600">{t.tower}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.config}</td>
                    <td className="px-4 py-3 text-right font-semibold text-[#C0A15C]">
                      {t.saleable.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.carpet.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.balcony}</td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.builtUp.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            All areas in sq.ft. 1 sq.ft. = 0.0929 sq.m. Areas are for the typical
            unit in each tower and are subject to the definitions below.
          </p>
        </div>

        {/* Tower composition */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Tower Composition
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#C0A15C] text-white">
                  <th className="px-4 py-3 text-left">Tower</th>
                  <th className="px-4 py-3 text-right">Floors</th>
                  <th className="px-4 py-3 text-right">Total Units</th>
                  <th className="px-4 py-3 text-right">Apartments</th>
                  <th className="px-4 py-3 text-right">Penthouses</th>
                  <th className="px-4 py-3 text-right">Garden Villas</th>
                </tr>
              </thead>
              <tbody>
                {towers.map((t, idx) => (
                  <tr
                    key={t.id}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#F6F4EC]"} hover:bg-[#F2EEE0] transition`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {t.tower} — {t.name}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.floors}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.units}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.apartments}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.penthouses}</td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.gardenVillas || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Plan cards */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Typical Unit Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-[#DCD6C2]"
                onClick={() => (isUnlocked ? setActivePlan(plan) : openModal())}
              >
                <div className="relative h-56 bg-[#F6F4EC]">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} typical unit plan — ${plan.config}, ${plan.saleable} sq.ft. saleable, NorthWind Sanctuary`}
                    fill
                    className={`object-contain p-2 transition duration-500 ${
                      !isUnlocked ? "blur-[3px] scale-105" : "hover:scale-105"
                    }`}
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#08251C]/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#C0A15C] text-white text-[10px] px-2 py-1 rounded uppercase tracking-wider">
                    {plan.tower}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.name}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      ({plan.config})
                    </span>
                  </h3>
                  <p className="text-sm text-[#C0A15C] font-semibold">
                    {plan.saleable.toLocaleString("en-IN")} sq.ft. saleable ·{" "}
                    {plan.carpet.toLocaleString("en-IN")} sq.ft. carpet
                  </p>
                  <p className="text-xs text-gray-600 mt-2">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.highlights.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] bg-[#F2EEE0] text-[#4A5B50] px-2 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Which home suits you */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Choosing Between Amaltas, Banyan and Cedar
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#0B3B2C] text-[#F0E9D6]">
                  <th className="px-4 py-3 text-left">If you want…</th>
                  <th className="px-4 py-3 text-left">Consider</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    want: "The largest home at Sanctuary",
                    pick: "Amaltas — 4 BHK + Servant",
                    why: "3,750 sq.ft. saleable, two master suites, 705 sq.ft. of balcony and VRV air-conditioning",
                  },
                  {
                    want: "Four bedrooms at a lighter footprint",
                    pick: "Banyan — 4 BHK",
                    why: "2,431 sq.ft. saleable around a 21' x 15'-9\" drawing and dining hall",
                  },
                  {
                    want: "The most efficient plan",
                    pick: "Cedar — 3 BHK",
                    why: "1,895 sq.ft. saleable with 957 sq.ft. carpet and three balconies",
                  },
                  {
                    want: "A ground-level garden",
                    pick: "Garden Villas",
                    why: "Four garden villas in total — two in Amaltas, two in Banyan",
                  },
                  {
                    want: "The top of the building",
                    pick: "Penthouses",
                    why: "Five penthouses across the three towers — one in Amaltas, two each in Banyan and Cedar",
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#F6F4EC]"} hover:bg-[#F2EEE0] transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.want}</td>
                    <td className="px-4 py-3 font-semibold text-[#C0A15C]">{item.pick}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Master plan */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            NorthWind Sanctuary Master Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            The master plan organises the 4.48-acre site into seven zones around
            the three towers and Club Roots — 80% of it landscaped green.
          </p>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-1 max-w-3xl mx-auto text-sm mb-6">
            {zones.map((z) => (
              <div key={z.id} className="flex gap-2 py-1">
                <span className="text-[#C0A15C] text-xs font-semibold uppercase tracking-wider w-16 flex-shrink-0 pt-0.5">
                  {z.number}
                </span>
                <span className="text-gray-700">{z.title}</span>
              </div>
            ))}
          </div>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer max-w-4xl mx-auto"
            onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
          >
            <Image
              src={masterPlan}
              alt="NorthWind Sanctuary master plan — three towers, Club Roots and seven landscaped zones"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[2px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#08251C]/60 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button className="mt-4 bg-[#C0A15C] text-white text-xs px-6 py-2 rounded uppercase tracking-widest hover:bg-[#A2854A] transition">
                {isUnlocked ? "View Master Plan" : "Unlock Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Area definitions */}
        <div className="bg-[#F6F4EC] rounded-lg p-6 md:p-8 border border-[#DCD6C2]">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            How Areas Are Measured
          </h2>
          <dl className="space-y-4">
            {areaDefinitions.map((d) => (
              <div key={d.term}>
                <dt className="text-sm font-bold text-[#0B3B2C] mb-1">{d.term}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  {d.definition}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-500 mt-5 leading-relaxed italic">
            Disclaimer: While every attempt has been made to ensure the accuracy
            of the plans shown, all measurements, positioning, fixtures and
            fittings are an approximate interpretation for illustrative purposes
            only and are not to scale. The company reserves the right to make
            changes in plans, specifications, dimensions and elevations without
            prior notice.
          </p>
        </div>
      </div>

      {/* UNIT PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-[#08251C]/80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.name} unit plan`}
          onClick={() => setActivePlan(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.name} — {activePlan.config}
              </h3>
              <p className="text-sm text-gray-600">
                Saleable {activePlan.saleable.toLocaleString("en-IN")} sq.ft. ·
                Carpet {activePlan.carpet.toLocaleString("en-IN")} sq.ft. ·
                Balcony {activePlan.balcony} sq.ft. · Built-up{" "}
                {activePlan.builtUp.toLocaleString("en-IN")} sq.ft.
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`${activePlan.name} typical unit plan — NorthWind Sanctuary`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-[#08251C]/80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="NorthWind Sanctuary master plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close master plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              NorthWind Sanctuary Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="NorthWind Sanctuary master plan — complete site layout"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/master-plan.pdf"
                download
                className="bg-[#C0A15C] text-white text-sm px-6 py-3 rounded uppercase tracking-widest hover:bg-[#A2854A] transition"
              >
                Download Master Plan PDF
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-[#F2EEE0] text-[#4A5B50] text-sm px-6 py-3 rounded uppercase tracking-widest hover:bg-[#DED8C6] transition"
              >
                Request Full Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
