"use client";

import { useEffect, useRef, useState } from "react";

// Counts a stat up from zero the first time it scrolls into view.
// Renders the final value on the server (SEO-safe) and preserves the
// original formatting — decimals ("4.48"), leading zeros ("03"),
// suffixes ("80%").
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = parseFloat(match[1]);
    const suffix = match[2] || "";
    const decimals = (match[1].split(".")[1] || "").length;
    const intWidth = match[1].startsWith("0")
      ? match[1].split(".")[0].length
      : 0;

    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          let text = (target * eased).toFixed(decimals);
          if (intWidth) {
            const [i, d] = text.split(".");
            text = i.padStart(intWidth, "0") + (d ? `.${d}` : "");
          }
          setDisplay(p < 1 ? text + suffix : value);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
