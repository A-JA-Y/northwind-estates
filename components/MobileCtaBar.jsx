"use client";

import { useModal } from "./ModalContext";

// Sticky bottom action bar, mobile only. Sits below the modal (z-40 < z-50)
// so an open enquiry form covers it.
export default function MobileCtaBar() {
  const { openModal } = useModal();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-stretch bg-white/95 backdrop-blur-md border-t border-[#DCD6C2] shadow-[0_-6px_24px_rgba(8,37,28,0.15)] pb-[env(safe-area-inset-bottom)]">
      <a
        href="/#plans"
        className="flex-1 flex items-center justify-center py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0B3B2C] active:bg-[#F2EEE0] transition-colors"
      >
        Floor Plans
      </a>
      <button
        onClick={() => openModal()}
        className="cta-shine flex-1 flex items-center justify-center py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white bg-[#C0A15C] active:bg-[#A2854A] transition-colors cursor-pointer"
      >
        Enquire Now
      </button>
    </div>
  );
}
