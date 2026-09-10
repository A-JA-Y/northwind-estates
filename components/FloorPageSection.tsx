"use client";
import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";

import amaltas from "@/assets/floorplan-amaltas.webp";
import banyan from "@/assets/floorplan-banyan.webp";
import cedar from "@/assets/floorplan-cedar.webp";
import masterPlan from "@/assets/master-plan.webp";

import { towers } from "@/data/project";
import { useModal } from "./ModalContext";

const planImages: Record<string, StaticImageData> = { amaltas, banyan, cedar };

// Page-specific narrative for each typical unit plan.
const planCopy: Record<string, { body: string; suited: string }> = {
  amaltas: {
    body: "Four bedrooms with attached baths, dedicated servant quarters with separate access, and a wrap of balcony space that connects the living and dining areas to the landscape below. This is the largest format on site and the only one with formal staff provision.",
    suited:
      "Suited to joint families, or to anyone who's decided that space is the thing they're no longer negotiating on.",
  },
  banyan: {
    body: "Four bedrooms without the servant block, which is what makes it the efficient 4 BHK — you're paying for bedrooms and living space rather than support areas. 1,286 sq.ft. of carpet with 394 sq.ft. of balcony.",
    suited:
      "The natural choice for a family upgrading from a 3 BHK who wants the fourth room without buying half again as much home.",
  },
  cedar: {
    body: "957 sq.ft. carpet, 382 sq.ft. balcony, three properly sized bedrooms. Not a stretched 2 BHK with a study attached — a 3 BHK designed as one from the start.",
    suited:
      "If you've been shortlisting apartments in Greater Noida, this is a useful benchmark to measure the others against on carpet rather than saleable area.",
  },
};

const chooserRows = [
  { who: "Family of 3–4, first premium purchase", pick: "Cedar — 3 BHK" },
  {
    who: "Family of 4–5, want a guest room or study",
    pick: "Banyan — 4 BHK",
  },
  {
    who: "Joint family, or live-in help",
    pick: "Amaltas — 4 BHK + Servant",
  },
  {
    who: "Want maximum outdoor space",
    pick: "Amaltas — 705 sq.ft. of balcony",
  },
  { who: "Want the top floor and a terrace", pick: "One of the 5 penthouses" },
  {
    who: "Want ground-level garden access",
    pick: "One of the 4 garden villas",
  },
];

const areaMeasures = [
  {
    term: "Carpet area",
    definition:
      "The usable floor inside your walls, as defined under RERA. The only figure that describes the space you actually live in.",
  },
  {
    term: "Built-up area",
    definition: "Carpet plus internal walls and structure.",
  },
  {
    term: "Balcony area",
    definition:
      "Stated separately here. Not folded into carpet, and not quietly counted twice.",
  },
  {
    term: "Saleable area",
    definition:
      "Built-up plus your proportionate share of lobbies, common areas and amenities. This is the number most Greater Noida flat rate comparisons are built on, and it's the least comparable of the four.",
  },
];

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

  const totalUnits = towers.reduce((sum, t) => sum + t.units, 0);
  const totalApartments = towers.reduce((sum, t) => sum + t.apartments, 0);
  const totalPenthouses = towers.reduce((sum, t) => sum + t.penthouses, 0);
  const totalVillas = towers.reduce((sum, t) => sum + t.gardenVillas, 0);

  return (
    <section
      className="w-full py-16 px-6"
      id="floor-plans"
      aria-label="Northwind Sanctuary floor plans"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Intro */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Northwind Sanctuary Floor Plans — Amaltas, Banyan &amp; Cedar
          </h1>
          <p className="text-[#C0A15C] font-semibold max-w-3xl mx-auto text-sm md:text-base mb-6">
            Every unit plan, the master plan and the full area chart for all{" "}
            {totalUnits} homes in Sector Pi-1, Greater Noida
          </p>
          <p className="text-gray-900 font-semibold max-w-3xl mx-auto text-base md:text-lg mb-3">
            Three towers. Three layouts. No variants, no &quot;type A through
            type H&quot; confusion to work through.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            That&apos;s deliberate. At {totalUnits} homes across 4.48 acres,
            Northwind Sanctuary was planned around a small number of
            well-resolved layouts rather than a catalogue of near-identical
            ones. It makes the floor plans below unusually easy to compare —
            you&apos;re choosing between three homes, not thirty.
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

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#0B3B2C] text-[#F0E9D6]">
                  <th className="px-4 py-3 text-left">Tower</th>
                  <th className="px-4 py-3 text-left">Configuration</th>
                  <th className="px-4 py-3 text-right">Carpet Area</th>
                  <th className="px-4 py-3 text-right">Balcony</th>
                  <th className="px-4 py-3 text-right">Built-up Area</th>
                  <th className="px-4 py-3 text-right">Saleable Area</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((t, idx) => (
                  <tr
                    key={t.id}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#F6F4EC]"} hover:bg-[#F2EEE0] transition`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">
                      {t.name} ({t.tower.replace("Tower ", "")})
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {t.config}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.carpet.toLocaleString("en-IN")} sq.ft.
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.balcony} sq.ft.
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.builtUp.toLocaleString("en-IN")} sq.ft.
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-[#C0A15C]">
                      {t.saleable.toLocaleString("en-IN")} sq.ft.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Areas as per approved plans. All four measurements are published —{" "}
            <a href="#measured" className="text-[#C0A15C] hover:underline">
              see how areas are measured
            </a>{" "}
            below for what each one means.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-6 text-center">
            The balcony column is the one worth pausing on. Amaltas carries 705
            sq.ft. of balcony against 1,956 sq.ft. of carpet — over a third of
            the home opening outward. Cedar carries 382 sq.ft. against 957. For
            context, most 3 BHK flats for sale in Greater Noida at this size
            treat the balcony as a 40 sq.ft. utility ledge.
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
                  <th className="px-4 py-3 text-right">Total Homes</th>
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
                      {t.name} ({t.tower.replace("Tower ", "")})
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      Up to {t.floors}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.units}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.apartments}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{t.penthouses}</td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {t.gardenVillas || "—"}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#0B3B2C] text-[#F0E9D6] font-semibold">
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3 text-right">—</td>
                  <td className="px-4 py-3 text-right">{totalUnits}</td>
                  <td className="px-4 py-3 text-right">{totalApartments}</td>
                  <td className="px-4 py-3 text-right">{totalPenthouses}</td>
                  <td className="px-4 py-3 text-right">{totalVillas}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-6 text-center">
            Nine of the {totalUnits} homes — the {totalPenthouses} penthouses
            and {totalVillas} garden villas — sit outside the typical plans
            shown below. Their layouts are shared individually on request.
          </p>
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-[#DCD6C2] flex flex-col"
                onClick={() => (isUnlocked ? setActivePlan(plan) : openModal())}
              >
                <div className="relative h-56 bg-[#F6F4EC]">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} typical unit plan — ${plan.config}, ${plan.saleable} sq.ft. saleable, Northwind Sanctuary`}
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

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.name}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      — {plan.config},{" "}
                      {plan.saleable.toLocaleString("en-IN")} sq.ft.
                    </span>
                  </h3>
                  <p className="text-xs text-gray-600 mt-2">
                    {planCopy[plan.id].body}
                  </p>
                  <p className="text-xs text-[#6E5B2E] italic mt-2">
                    {planCopy[plan.id].suited}
                  </p>
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
                  <p className="mt-auto pt-4 text-sm font-semibold text-[#C0A15C]">
                    {isUnlocked
                      ? `View the ${plan.name} floor plan →`
                      : `Unlock the ${plan.name} floor plan →`}
                  </p>
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
                  <th className="px-4 py-3 text-left">If this is you</th>
                  <th className="px-4 py-3 text-left">Look at</th>
                </tr>
              </thead>
              <tbody>
                {chooserRows.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#F6F4EC]"} hover:bg-[#F2EEE0] transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.who}</td>
                    <td className="px-4 py-3 font-semibold text-[#C0A15C]">
                      {item.pick}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-6 text-center">
            A plan tells you the dimensions. It doesn&apos;t tell you what the
            light does at four in the afternoon, or how the internal green
            reads from the eleventh floor. Fifteen minutes on site settles
            questions the drawings can&apos;t.
          </p>
        </div>

        {/* Master plan */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Northwind Sanctuary Master Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-4">
            The 4.48-acre site is organised into seven landscaped zones, with
            the three towers placed so that 80% of the ground stays open. Club
            Roots anchors the centre.
          </p>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            What the master plan shows that the unit plans can&apos;t: the
            distance between towers, and how the planted zones sit between
            them. It&apos;s the drawing to look at if you want to understand
            why this doesn&apos;t feel like a {totalUnits}-home project when
            you&apos;re standing in it.
          </p>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer max-w-4xl mx-auto"
            onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
          >
            <Image
              src={masterPlan}
              alt="Northwind Sanctuary master plan — three towers, Club Roots and seven landscaped zones"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[2px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#08251C]/60 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button className="mt-4 bg-[#C0A15C] text-white text-xs px-6 py-2 rounded uppercase tracking-widest hover:bg-[#A2854A] transition">
                Download the master plan &amp; brochure →
              </button>
            </div>
          </div>
        </div>

        {/* Area definitions */}
        <div
          id="measured"
          className="bg-[#F6F4EC] rounded-lg p-6 md:p-8 border border-[#DCD6C2] scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How Areas Are Measured
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Read this before comparing our per-sq.ft. figure against anyone
            else&apos;s, because the industry doesn&apos;t measure
            consistently.
          </p>
          <dl className="space-y-4">
            {areaMeasures.map((d) => (
              <div key={d.term}>
                <dt className="text-sm font-bold text-[#0B3B2C] mb-1">{d.term}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">
                  {d.definition}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-gray-600 leading-relaxed mt-5">
            We publish all four for every configuration. If another project
            quotes you only a saleable area and a rate, ask for the carpet
            figure before you draw a conclusion. A lower rate on an inflated
            saleable area is frequently the more expensive home.
          </p>
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
              alt={`${activePlan.name} typical unit plan — Northwind Sanctuary`}
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
          aria-label="Northwind Sanctuary master plan"
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
              Northwind Sanctuary Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="Northwind Sanctuary master plan — complete site layout"
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
