import { project } from "@/data/project";

// Mobile-only strip shown directly under the hero.
const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#EDE9DA] px-5 py-3 text-center">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#C0A15C] font-semibold">
        {project.tagline}
      </p>
      <p className="text-[12px] text-[#0B3B2C] mt-1 leading-snug">
        {project.certification}
      </p>
    </div>
  );
};

export default ReraStrip;
