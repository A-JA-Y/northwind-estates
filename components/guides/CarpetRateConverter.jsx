"use client";

import { useId, useState } from "react";
import { towers } from "@/data/project";
import { EnquireButton } from "@/components/guides/GuideCtas";

const inr = (n) =>
  `₹${Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

// Converts a rate quoted on saleable (super built-up) area into the rate per
// sq. ft. of carpet for each tower: rate × saleable ÷ carpet. Prices are on
// request, so the visitor types the rate they were quoted; nothing is assumed.
export default function CarpetRateConverter() {
  const inputId = useId();
  const [raw, setRaw] = useState("1000");
  const rate = Number(raw.replace(/[^\d.]/g, ""));
  const valid = Number.isFinite(rate) && rate > 0;

  return (
    <div className="my-10 rounded-2xl border border-[#DCD6C2] bg-white shadow-sm overflow-hidden">
      <div className="bg-[#0B3B2C] px-6 py-5 text-white">
        <p className="uppercase text-[11px] tracking-[0.25em] text-[#C0A15C] mb-1">
          Quick converter
        </p>
        <p className="text-lg md:text-xl font-semibold [font-family:var(--font-work-sans)]">
          Saleable rate → carpet rate
        </p>
      </div>

      <div className="p-6">
        <label htmlFor={inputId} className="block text-sm font-semibold text-gray-900 mb-2">
          Rate you were quoted on saleable area (₹ per sq. ft.)
        </label>
        <div className="flex items-center rounded-lg border border-[#CFC7B2] bg-[#F2EEE0] px-4 max-w-xs">
          <span className="text-gray-500 mr-2" aria-hidden="true">
            ₹
          </span>
          <input
            id={inputId}
            inputMode="numeric"
            autoComplete="off"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            className="w-full bg-transparent py-3 text-lg font-semibold text-gray-900 border-0 shadow-none focus:shadow-none"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3" aria-live="polite">
          {[...towers].reverse().map((t) => {
            // Same two-decimal factor the guide quotes (Cedar × 1.98 etc.)
            const factor = Math.round((t.saleable / t.carpet) * 100) / 100;
            return (
              <div
                key={t.id}
                className="rounded-xl border border-[#DCD6C2] bg-[#F6F4EC] p-4"
              >
                <p className="text-xs uppercase tracking-widest text-[#8A6D2F] min-h-[2.5em]">
                  {t.name} · {t.config}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#0B3B2C]">
                  {valid ? inr(rate * factor) : "—"}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  per sq. ft. of carpet · × {factor.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-xs text-gray-500 leading-relaxed">
          Uses the published saleable and carpet areas of each tower&apos;s
          typical home. Add the other lines on the cost sheet and divide the full
          amount by carpet area for the true figure.
        </p>

        <div className="mt-5">
          <EnquireButton label="Get the Actual Cost Sheet" />
        </div>
      </div>
    </div>
  );
}
