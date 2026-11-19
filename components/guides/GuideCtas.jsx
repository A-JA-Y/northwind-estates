"use client";

import { FaDownload, FaPhoneAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { useModal } from "@/components/ModalContext";
import { contact } from "@/data/project";

export const PHONE_HREF = `tel:${contact.phone.replace(/\s+/g, "")}`;
export const WHATSAPP_HREF = `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`;

const base =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C0A15C]";

const variants = {
  gold: "cta-shine bg-[#C0A15C] text-white hover:bg-[#A2854A] shadow-md",
  green: "bg-[#0B3B2C] text-[#F0E9D6] hover:bg-[#08251C] shadow-md",
  outline:
    "border border-[#C0A15C] text-[#0B3B2C] bg-transparent hover:bg-[#C0A15C] hover:text-white",
  ghostLight:
    "border border-white/60 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B3B2C]",
};

const cls = (variant, className = "") =>
  [base, variants[variant] ?? variants.gold, className].join(" ");

// Opens the site-wide enquiry modal (InvestmentModal via ModalContext).
export function EnquireButton({ label = "Enquire Now", variant = "gold", className = "" }) {
  const { openModal } = useModal();
  return (
    <button type="button" onClick={() => openModal()} className={cls(variant, className)}>
      {label}
      <FaArrowRight aria-hidden="true" className="text-[0.8em]" />
    </button>
  );
}

// Same behaviour as the sticky brochure tab: download straight away once the
// visitor has already shared their details, otherwise ask for them first.
export function BrochureButton({ label = "Download Brochure", variant = "outline", className = "" }) {
  const { openModal } = useModal();
  const handleClick = () => {
    let unlocked = false;
    try {
      unlocked = localStorage.getItem("plansUnlocked") === "true";
    } catch {
      unlocked = false;
    }
    if (unlocked) {
      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.download = "NorthWind-Sanctuary-Brochure.pdf";
      link.click();
    } else {
      openModal();
    }
  };
  return (
    <button type="button" onClick={handleClick} className={cls(variant, className)}>
      <FaDownload aria-hidden="true" className="text-[0.85em]" />
      {label}
    </button>
  );
}

export function CallButton({ label = "", variant = "outline", className = "" }) {
  return (
    <a href={PHONE_HREF} className={cls(variant, className)}>
      <FaPhoneAlt aria-hidden="true" className="text-[0.85em]" />
      {label || `Call ${contact.phone}`}
    </a>
  );
}

export function WhatsAppButton({ label = "WhatsApp Us", variant = "outline", className = "" }) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={cls(variant, className)}
    >
      <FaWhatsapp aria-hidden="true" className="text-[1.05em]" />
      {label}
    </a>
  );
}

// Anchor to the on-page enquiry form (EnquirySection, id="book-site-visit").
export function SiteVisitButton({ label = "Book a Site Visit", variant = "green", className = "" }) {
  return (
    <a href="#book-site-visit" className={cls(variant, className)}>
      {label}
      <FaArrowRight aria-hidden="true" className="text-[0.8em]" />
    </a>
  );
}
