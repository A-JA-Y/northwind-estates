"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { theme } from "@/utils/theme";
import { InputField, TextareaField } from "@/components/form/InputFields";
import Image from "next/image";
import logo from "@/assets/northwind-logo.webp";

export default function EnquirySection({
  logoSrc = logo,
  logoAlt = "North Wind Estates",
  heading = "Live Rare — Your Rare Living",
  body = "North Wind Estates is a refined expression of modern living, rooted in over two decades of real estate legacy. With an unwavering focus on design integrity, sustainability and transparency, the brand is shaping elevated spaces that resonate with purpose and elegance. Our flagship development in Greater Noida — NorthWind Sanctuary, three towers set across 4.48 acres with 80% of the ground given back to landscape — offers a thoughtfully crafted lifestyle amidst expansive greens, where architecture meets harmony and every detail is designed to enrich the way you live.",
}) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!form.phone.trim()) e.phone = "This field is required.";
    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const e2 = validate();
  if (Object.keys(e2).length > 0) {
    setErrors(e2);
    return;
  }

  try {
    setLoading(true);
    setApiError("");

    await submitForm({ data: form });
    const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.setAttribute("download", "NorthWind-Sanctuary-Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    router.push('/thank-you');

  } catch (err) {
    setApiError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="book-site-visit" className={`${theme.bg} w-full md:px-[30px] md:py-[45px] px-[25px] py-5`}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:gap-16">
        {/* Left: Brand info */}
        <div className="flex flex-col gap-5 md:w-1/2">
          {/* Logo */}
          <div className="max-w-[300px] md:w-[50%]">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={100}
              height={89}
              className="w-auto object-contain self-start max-w-[100px]"
              priority
            />
          </div>

          {/* Heading */}
          <h4 className={`${theme.textPrimary} font-semibold`}>{heading}</h4>

          {/* Body */}
          <p className={`${theme.fontBody} ${theme.textSecondary}`}>{body}</p>

          <hr className="border-[#CFC7B2] w-[30%] mt-2 hidden lg:block" />
        </div>

        <hr className="border-[#CFC7B2] my-6 lg:hidden" />

        {/* Right: Enquiry form */}
        <div className="lg:w-1/2">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className={`${theme.fontHeading} ${theme.textPrimary}`}>Thank you!</p>
              <p className={`${theme.fontBody} ${theme.textMuted}`}>Our team will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h6 className={`${theme.fontLabel} uppercase ${theme.accent} mb-3`}>Enquire Now</h6>
              <h6 className={`${theme.fontSubheading} ${theme.textPrimary} mb-4`}>
                Wish to get a call back from our team? Fill in your details and we&apos;ll
                share the brochure, floor plans and site-visit details. Price on request.
              </h6>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <InputField
                  id="enquiry-name"
                  type="text"
                  placeholder="Enter your name *"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  maxLength={100}
                />

                <InputField
                  id="enquiry-phone"
                  type="tel"
                  placeholder="Phone number *"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  maxLength={15}
                />

                <InputField
                  id="enquiry-email"
                  type="email"
                  placeholder="Email ID *"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />

                {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className={[
                      "px-7 py-2.5 rounded bg-[#C0A15C]",
                      theme.fontButton,
                      "text-white uppercase",
                      "transition-colors duration-200",
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    ].join(" ")}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
