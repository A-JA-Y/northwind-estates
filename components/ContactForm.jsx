
"use client"
import React, { useState } from "react";
import submitForm from "../api/submitform";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactForm = () => {
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

    setFormData({
      name: "",
      phone: "",
      email: "",
    });

  } catch (error) {
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

  const inputClass = (hasError) =>
    `w-full px-4 py-3 text-sm border rounded-md outline-none placeholder-gray-400 text-gray-700 transition-colors duration-200 focus:border-[#C0A15C] focus:ring-1 focus:ring-[#C0A15C] ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="bg-white rounded-xl shadow-lg px-5 md:p-[55px] py-6 w-full">

      <div className="flex flex-col md:flex-row md:items-center gap-6">

        {/* LEFT: Text Block */}
        <div className="md:w-1/3 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            NorthWind Sanctuary — 3 &amp; 4 BHK Residences, Sector Pi-1 Greater
            Noida
          </h3>
          <h6 className="text-[#C0A15C] mt-1 text-[0.9375rem]">
            Live Rare — 30 minutes from Noida International Airport
          </h6>
          <p className="text-gray-700 text-sm mt-1">
            Three towers on 4.48 acres, 80% lush green landscape. Price on
            request.
          </p>
        </div>

        {/* RIGHT: Fields + Button */}
        <div className="flex-1 flex flex-col md:flex-row md:items-start gap-3">

          {/* Name */}
          <div className="flex-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              className={inputClass(errors.name)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                This field is required.
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="flex-1">
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
              <p className="text-red-500 text-xs mt-1">
                This field is required.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID *"
              className={inputClass(errors.email)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                This field is required.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full md:w-auto bg-[#C0A15C] hover:bg-[#A2854A] text-white text-sm font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap"
            >
              {loading ? "Submitting..." : "Book Site Visit"}
            </button>
          </div>

        </div>
      </div>

      {/* STATUS MESSAGES */}
      {status === "success" && (
        <p className="text-green-600 mt-4 text-sm">
          <FaCheckCircle className="text-green-600" />
         Form submitted successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 mt-4 text-sm">
           <FaTimesCircle className="text-red-600" />
            Failed to submit. Please try again.
        </p>
      )}
    </div>
  );
};

export default ContactForm;