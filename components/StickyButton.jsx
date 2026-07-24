"use client";
import { FaDownload } from "react-icons/fa";

import { useModal } from "./ModalContext";

export default function StickyDownloadButton() {
  const { openModal } = useModal();
  const handleClick = (e) => {
    e.preventDefault();
    const unlocked = localStorage.getItem("plansUnlocked") === "true";
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
    <button
      onClick={handleClick}
      title="Download the NorthWind Sanctuary brochure"
      aria-label="Download the NorthWind Sanctuary brochure"
      className="
        fixed bottom-24 md:bottom-16 right-0
        flex flex-col items-center justify-center
        bg-[#C0A15C] text-white font-semibold
        shadow-lg transition-colors duration-200
        hover:bg-[#A2854A]
        px-[7px] py-[10px] z-[1000]
        rounded-l-md rounded-r-none
      "
    >
      <FaDownload size={16} className="rotate-90" />

      <div className="mt-[6px] flex flex-col items-center text-[11px] font-semibold leading-[1.1]">
        {"Brochure".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </button>
  );
}
