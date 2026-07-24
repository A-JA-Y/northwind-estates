"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/data/siteNav";
import logo150 from "../assets/northwind-logo.webp";

const GOLD = "#C0A15C";
const GOLD_HOVER = "#A2854A";

export default function HomePageHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const half = Math.ceil(siteNavLinks.length / 2);
  const row1 = siteNavLinks.slice(0, half);
  const row2 = siteNavLinks.slice(half);

  return (
    <>
      {/* Main header */}
      <header className="w-full bg-white border-b border-[rgba(192,161,92,0.2)] shadow-sm fixed left-0 right-0 top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-stretch gap-0 h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center pr-6 border-r border-[rgba(192,161,92,0.2)]"
          >
            <Image
              src={logo150}
              alt="NorthWind Estates"
              priority
              style={{ width: "110px", height: "auto" }}
              sizes="110px"
            />
          </Link>

          {/* Desktop nav — two rows, fills remaining space */}
          <nav className="hidden xl:flex flex-col flex-1 justify-center px-4 font-sans">
            {/* Row 1 */}
            <div className="flex items-center">
              {row1.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] font-bold px-3 py-1.5 whitespace-nowrap tracking-widest uppercase transition-colors
                    ${isActive(item.href)
                      ? "text-[#C0A15C] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#C0A15C] after:rounded-full"
                      : "text-[#555] hover:text-[#C0A15C] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#C0A15C] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex items-center border-t border-dashed border-[rgba(192,161,92,0.18)]">
              {row2.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] font-bold px-3 py-1.5 whitespace-nowrap tracking-widest uppercase transition-colors
                    ${isActive(item.href)
                      ? "text-[#C0A15C] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#C0A15C] after:rounded-full"
                      : "text-[#555] hover:text-[#C0A15C] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#C0A15C] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Enquire Now CTA */}
          <div className="hidden xl:flex items-center pl-6 border-l border-[rgba(192,161,92,0.2)] flex-shrink-0">
            <Link
              href="/contact-us"
              className="cta-shine inline-flex items-center gap-2 bg-[#C0A15C] hover:bg-[#A2854A] hover:shadow-md text-white text-[10px] font-semibold uppercase tracking-widest px-5 py-2.5 transition-all"
            >
              Enquire Now
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="xl:hidden ml-auto flex items-center justify-center w-10 h-10 rounded flex-shrink-0 transition-colors self-center"
            style={{ backgroundColor: GOLD }}
            onClick={() => setOpen(true)}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD_HOVER; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GOLD; }}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
              <line x1="0" y1="1" x2="20" y2="1" stroke="white" strokeWidth="2" />
              <line x1="0" y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" />
              <line x1="0" y1="13" x2="20" y2="13" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Gold accent bar */}
        <div
          className="h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(192,161,92,0.4) 20%, #C0A15C 50%, rgba(192,161,92,0.4) 80%, transparent)" }}
        />
      </header>

      {/* Spacer */}
      <div className="h-[74px]" />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(90vw, 360px)", backgroundColor: "#fff" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(192,161,92,0.2)]">
          <Image src={logo150} alt="NorthWind Estates" style={{ width: "90px", height: "auto" }} sizes="90px" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="text-[#888] hover:text-[#1a1a1a] text-xl">✕</button>
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col font-sans">
          {siteNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-3.5 border-b border-[rgba(192,161,92,0.1)] text-[15px] font-bold tracking-wide uppercase transition-colors ${
                isActive(item.href)
                  ? "text-[#C0A15C] bg-[rgba(192,161,92,0.05)]"
                  : "text-[#444] hover:text-[#C0A15C]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-[rgba(192,161,92,0.2)]">
          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="flex justify-center items-center gap-2 py-3 bg-[#C0A15C] hover:bg-[#A2854A] text-white text-sm font-semibold uppercase tracking-widest transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}