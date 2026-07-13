"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/utils/theme";
import logo from "@/assets/northwind-logo.webp";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Record that a form was submitted
    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true");
    }

    // 2. Redirect back to home page after a short pause
    const timeout = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme.bg} px-4`}>
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-lg w-full text-center flex flex-col items-center">
        {/* Brand Logo */}
        <Image
          src={logo}
          alt="North Wind Estates"
          width={150}
          height={133}
          className="w-auto object-contain mb-6"
          priority
        />

        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Messaging */}
        <h1 className={`${theme.fontHeading} text-2xl md:text-3xl font-bold ${theme.textPrimary} mb-3`}>
          Thank you — your enquiry is with us
        </h1>
        <p className={`${theme.fontBody} text-gray-600 mb-2`}>
          Welcome to NorthWind Sanctuary. Our team will call you back shortly with
          availability across Amaltas, Banyan and Cedar, floor plans, and a site
          visit at Sector Pi-1, Greater Noida.
        </p>
        <p className={`${theme.fontBody} text-gray-500 mb-6`}>
          Your brochure download should have started automatically. If it
          didn&rsquo;t, use the button below.
        </p>

        {/* Brochure CTA */}
        <a
          href="/brochure.pdf"
          download="NorthWind-Sanctuary-Brochure.pdf"
          className="inline-block bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-7 py-3 rounded-md transition-colors duration-300 mb-4"
        >
          Download Brochure
        </a>

        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-[#0B3B2C] hover:text-[#C0A15C] transition-colors mb-6"
        >
          Back to Home
        </Link>

        {/* Loading Spinner */}
        <div className="w-6 h-6 border-2 border-[#C0A15C] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[11px] text-gray-400 mt-3">
          Redirecting you to the home page…
        </p>
      </div>
    </div>
  );
}
