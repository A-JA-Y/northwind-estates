"use client";
import { useState, useMemo } from "react";

function SliderField({ label, min, max, step, value, onChange, pillLabel, rightLabel }) {
  const pct = (value - min) / (max - min);
  const fillWidth = pct * 100;
  const pillLeft = pct * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1.5">
        <p className="text-[11px] uppercase tracking-widest text-gray-400">{label}</p>
        <div className="flex items-baseline gap-2">
          {rightLabel}
        </div>
      </div>

      <div className="relative h-9">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2 rounded" />
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-gray-900 -translate-y-1/2 rounded"
          style={{ width: `${fillWidth}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap pointer-events-none text-gray-900"
          style={{ left: `${pillLeft}%` }}
        >
          {pillLabel}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function EmiCalculator() {
  // Deliberately starts empty. No price is published for NorthWind Sanctuary,
  // so the calculator is seeded with nothing — the user enters their own figure.
  const [amount, setAmount] = useState("");
  const [downPercent, setDownPercent] = useState(20);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(8);

  // Empty input, junk input or a negative number all collapse to 0.
  const loan = useMemo(() => {
    const parsed = Number(amount);
    if (!Number.isFinite(parsed) || parsed <= 0) return 0;
    return parsed;
  }, [amount]);

  const emi = useMemo(() => {
    const principal = loan * (1 - downPercent / 100);
    const r = rate / 12 / 100;
    const n = years * 12;
    if (!principal || !n) return 0;
    if (r === 0) return Math.round(principal / n);
    return Math.round(
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );
  }, [loan, downPercent, years, rate]);

  const fmt = (n) => Math.round(n).toLocaleString("en-IN");
  const downAmt = (loan * downPercent) / 100;
  const financed = loan - downAmt;

  return (
    <section className="w-full min-h-screen bg-[#F6F4EC] flex justify-center items-start p-6 box-border">
      <div className="w-full max-w-[480px] bg-white p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.07)]">
        <h3 className="text-[11px] font-bold tracking-[0.1em] uppercase mb-1.5 text-gray-900">
          EMI Calculator
        </h3>
        <p className="text-xs text-[#7C8B80] leading-relaxed mb-6">
          A planning tool, not a quote. Enter the amount you are budgeting for — pricing
          at NorthWind Sanctuary is shared on enquiry, so nothing here is pre-filled for
          you.
        </p>

        {/* Loan Amount — user supplied, no default */}
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1.5">
            Amount You Are Planning For
          </p>
          <div className="flex items-center border-b-2 border-gray-900 pb-1">
            <input
              type="number"
              min="0"
              inputMode="numeric"
              value={amount}
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Amount you are planning for, in rupees"
              className="flex-1 min-w-0 border-none outline-none text-[clamp(20px,5vw,28px)] font-bold bg-transparent text-gray-900 placeholder:text-gray-300 placeholder:font-normal placeholder:text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-gray-300 text-lg ml-1.5">₹</span>
          </div>
        </div>

        {/* Advance Payment — shows % + ₹ amount */}
        <SliderField
          label="Advance Payment"
          min={0}
          max={100}
          step={1}
          value={downPercent}
          onChange={setDownPercent}
          pillLabel={`${downPercent}%`}
          rightLabel={
            <>
              <span className="text-sm font-bold text-gray-900">{downPercent}%</span>
              <span className="text-xs text-gray-400">₹{fmt(downAmt)}</span>
            </>
          }
        />

        {/* Duration */}
        <SliderField
          label="Duration"
          min={1}
          max={30}
          step={1}
          value={years}
          onChange={setYears}
          pillLabel={`${years} Yrs`}
          rightLabel={
            <span className="text-sm font-bold text-gray-900">{years} Years</span>
          }
        />

        {/* Interest Rate */}
        <SliderField
          label="Interest Rate"
          min={5}
          max={15}
          step={0.1}
          value={rate}
          onChange={setRate}
          pillLabel={`${rate.toFixed(1)}%`}
          rightLabel={
            <span className="text-sm font-bold text-gray-900">{rate.toFixed(1)}%</span>
          }
        />

        {/* Result */}
        <div className="border-t border-gray-100 pt-4 mt-2">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1.5">
            Estimated Monthly EMI
          </p>
          {loan > 0 ? (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[clamp(26px,6vw,36px)] font-bold text-gray-900">
                  {fmt(emi)}
                </span>
                <span className="text-gray-400 text-sm">₹ / month</span>
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                On ₹{fmt(financed)} financed over {years} years at {rate.toFixed(1)}%.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[clamp(26px,6vw,36px)] font-bold text-gray-300">
                  &mdash;
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                Enter an amount above to see your monthly outflow.
              </p>
            </>
          )}
          <p className="text-[11px] text-gray-400 leading-relaxed mt-4">
            Indicative only. Your actual EMI depends on your lender, eligibility and the
            rate you are sanctioned.
          </p>
        </div>
      </div>
    </section>
  );
}
