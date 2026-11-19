// Shared class strings for the stand-alone guide pages.
//
// globals.css sets an unlayered `h2 { font-size: 2.375rem }`, which beats
// Tailwind's layered utilities, so heading sizes here use the `!` modifier.
export const h2Class =
  "text-[1.6rem]! leading-tight! md:text-[2.125rem]! font-semibold text-[#0B3B2C] mb-5 scroll-mt-28";

export const h3Class = "text-lg md:text-xl font-semibold text-gray-900 mb-2";

export const bodyClass = "text-[15px] md:text-base leading-relaxed text-gray-700";

export const eyebrowClass = "uppercase text-xs tracking-[0.25em] text-[#C0A15C] mb-3";

export const linkClass =
  "text-[#8A6D2F] font-semibold underline decoration-[#C0A15C]/50 underline-offset-4 hover:decoration-[#C0A15C] hover:text-[#0B3B2C] transition-colors";

export const tableWrapClass =
  "overflow-x-auto rounded-xl border border-[#DCD6C2] shadow-sm bg-white";

export const thClass =
  "px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-[#8A6D2F] bg-[#F6F4EC] whitespace-nowrap";

export const tdClass = "px-4 py-3.5 text-sm text-gray-700 border-t border-[#DCD6C2]";
