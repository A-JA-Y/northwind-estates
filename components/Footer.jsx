import Link from "next/link";
import { footerNavLinks } from "@/data/siteNav";

export default function Footer() {
  const half = Math.ceil(footerNavLinks.length / 2);
  const col1 = footerNavLinks.slice(0, half);
  const col2 = footerNavLinks.slice(half);

  return (
    <footer className="w-full bg-[#08251C] border-t border-[rgba(242,242,242,0.11)] px-[30px] py-[20px] font-[400]">
      <div className="flex flex-col m-auto max-w-5xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-2">
          <div>
            <p className="text-[#C0A15C] text-[11px] font-semibold tracking-widest uppercase mb-3">
              NorthWind Sanctuary
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              3 &amp; 4 BHK luxury residences and penthouses across 4.48 acres in
              Sector Pi-1, Greater Noida, by Northwind Estates Pvt. Ltd.
            </p>
          </div>

          {/* Quick Links — two sub-columns */}
          <div className="lg:col-span-2">
            <p className="text-[#C0A15C] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="flex flex-col gap-2">
                {col1.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#C0A15C] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {col2.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#C0A15C] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[#C0A15C] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Site Address
            </p>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-2">
              <svg className="w-3 h-3 text-[#C0A15C] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Northwind Estates Pvt. Ltd., Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
              <svg className="w-3 h-3 text-[#C0A15C] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 9810890353
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            Disclaimer : This is not the official website of developer, it belongs
            to the authorised channel partner for information & marketing purposes
            only. All rights for logo & images are reserved by the developer. By
            using or accessing this website you agree with the disclaimer without
            any limitation. By accessing this website, the viewer confirms that
            the information including brochures and marketing collaterals on this
            website are solely for informational purposes only, and the viewer has
            not relied on this information for making any booking/purchase in any
            project of the company.
          </p>
          <hr className="border-t border-gray-700 mt-3" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <p className="text-[#fff] text-xs tracking-wide">
            Copyright &copy; 2026{" "}
            <span className="font-bold">NorthWind Sanctuary</span> All Rights Reserved
          </p>
          <span className="text-white/20 hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="text-[#fff] text-xs hover:text-[#C0A15C] transition-colors">
            Privacy Policy / Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}