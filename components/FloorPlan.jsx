"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import amaltas from "@/assets/floorplan-amaltas.webp";
import banyan from "@/assets/floorplan-banyan.webp";
import cedar from "@/assets/floorplan-cedar.webp";
import masterPlan from "@/assets/master-plan.webp";

import { towers } from "@/data/project";
import { useModal } from "./ModalContext";

const planImages = { amaltas, banyan, cedar };

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
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

  const plans = towers.map((t) => ({ ...t, image: planImages[t.id] }));

  return (
    <section className="w-full py-16 px-6" id="plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
            Floor Plans
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Amaltas, Banyan &amp; Cedar
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            Typical unit plans for each of the three towers, from a 1,895 sq.ft.
            three-bedroom home to a 3,750 sq.ft. four-bedroom residence.
          </p>
        </div>

        {/* TYPICAL UNIT PLANS */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 -mx-6 px-6 pb-2 md:grid md:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:pb-0 md:overflow-visible">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg overflow-hidden shadow-md border border-[#DCD6C2] bg-white cursor-pointer group shrink-0 w-[85%] snap-center md:w-auto md:shrink transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#C0A15C]/50"
              onClick={() => (isUnlocked ? setActivePlan(plan) : openModal())}
            >
              <div className="relative h-[190px] bg-[#F6F4EC]">
                <Image
                  src={plan.image}
                  alt={`${plan.name} typical unit plan — ${plan.config}, ${plan.saleable} sq.ft. saleable`}
                  fill
                  className={`object-contain p-2 transition duration-500 ${
                    !isUnlocked ? "blur-[3px] scale-105" : "group-hover:scale-105"
                  }`}
                  sizes="(max-width: 768px) 100vw, 360px"
                />

                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#08251C]/50 text-white text-xs font-semibold uppercase tracking-widest">
                    Unlock to View
                  </div>
                )}

                <span className="absolute top-3 left-3 bg-[#C0A15C] text-white text-[10px] px-2 py-1 rounded uppercase tracking-wider">
                  {plan.tower}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900">
                  {plan.name}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    · {plan.config}
                  </span>
                </h3>
                <p className="text-sm text-[#C0A15C] font-semibold mt-1">
                  {plan.saleable.toLocaleString("en-IN")} sq.ft. saleable
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Carpet {plan.carpet.toLocaleString("en-IN")} · Balcony{" "}
                  {plan.balcony} · Built-up {plan.builtUp.toLocaleString("en-IN")}{" "}
                  sq.ft.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MASTER PLAN */}
        <div className="flex flex-col items-center text-center mt-6">
          <h6 className="text-xl md:text-2xl font-semibold mb-2 text-[#C0A15C]">
            Master Plan
          </h6>

          <p className="text-gray-600 text-sm mb-6 max-w-lg">
            The full site layout — three towers, the club, and all seven
            landscaped zones across 4.48 acres.
          </p>

          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
          >
            <Image
              src={masterPlan}
              alt="NorthWind Sanctuary master plan"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[2px] scale-105"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#08251C]/60 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>

              <button className="mt-4 bg-[#C0A15C] text-white text-xs px-6 py-2 rounded uppercase tracking-widest">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UNIT PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-[#08251C]/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActivePlan(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl"
              aria-label="Close plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {activePlan.name} — {activePlan.config}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Saleable {activePlan.saleable.toLocaleString("en-IN")} sq.ft. ·
              Carpet {activePlan.carpet.toLocaleString("en-IN")} sq.ft. · Balcony{" "}
              {activePlan.balcony} sq.ft. · Built-up{" "}
              {activePlan.builtUp.toLocaleString("en-IN")} sq.ft.
            </p>

            <Image
              src={activePlan.image}
              alt={`${activePlan.name} typical unit plan`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-[#08251C]/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsMasterOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl"
              aria-label="Close master plan"
            >
              ✕
            </button>

            <Image
              src={masterPlan}
              alt="NorthWind Sanctuary master plan"
              className="w-full h-auto object-contain mb-4"
            />

            <a
              href="/master-plan.pdf"
              download
              className="inline-block bg-[#C0A15C] text-white text-xs px-6 py-3 rounded uppercase tracking-widest"
            >
              Download Master Plan
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
