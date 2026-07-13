"use client";
import React, { useState } from "react";
import submitForm from "../api/submitform";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const BlogContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const validate = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      email: formData.email.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setStatus(null);

      await submitForm({ data: formData });
      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.setAttribute("download", "NorthWind-Sanctuary-Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      router.push("/thank-you");
      setFormData({ name: "", phone: "", email: "" });

    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-2.5 text-sm border rounded-md outline-none 
     placeholder-gray-400 text-gray-700 transition-all duration-200
     focus:border-[#C0A15C] focus:ring-1 focus:ring-[#C0A15C]
     ${hasError ? "border-red-500" : "border-gray-300"}`;

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5">

      {/* Heading */}
      <h3 className="text-base font-semibold text-gray-900">
        NorthWind Sanctuary — 3 &amp; 4 BHK Residences, Sector Pi-1 Greater Noida
      </h3>
      <p className="text-xs text-[#C0A15C] mt-1">
        Live Rare — three towers on 4.48 acres, 80% lush green landscape
      </p>
      <p className="text-xs text-gray-500 mb-4 mt-1">
        Brochure, floor plans &amp; site-visit assistance. Price on request.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className={inputClass(errors.name)}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            maxLength={15}
            className={inputClass(errors.phone)}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID *"
            className={inputClass(errors.email)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-widest uppercase px-4 py-3 rounded-md transition-all duration-300"
        >
          {loading ? "Submitting..." : "Get Callback"}
        </button>

        {/* Privacy */}
        <p className="text-[10px] text-center text-gray-400 mt-1">
          100% safe & secure
        </p>
      </form>

      {/* Status */}
      {status === "success" && (
        <p className="text-green-600 mt-3 text-xs flex items-center gap-2">
          <FaCheckCircle /> Submitted successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 mt-3 text-xs flex items-center gap-2">
          <FaTimesCircle /> Try again later
        </p>
      )}
    </div>
  );
};

export default BlogContactForm;