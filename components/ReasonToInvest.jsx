import {
  FaSubway,
  FaPlane,
  FaLeaf,
  FaBuilding,
  FaDraftingCompass,
  FaHospital,
  FaSwimmingPool,
  FaCity,
} from "react-icons/fa";

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#F6F4EC] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why NorthWind Estates Greater Noida Makes Sense
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            Real estate in Greater Noida is moving fast — the airport, the
            expressway grid, the universities and the Alpha commercial belt are
            all pulling demand toward this corridor. Sector Pi-1 sits right in
            the middle of it.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">
          {/* Left */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Location &amp; Connectivity
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaSubway />, text: "GNIDA Metro Station — 2 km / 5 min" },
                { icon: <FaCity />, text: "Pari Chowk — 5 km / 7 min" },
                { icon: <FaHospital />, text: "Fortis Hospital — 5 km / 7 min" },
                { icon: <FaPlane />, text: "Noida International Airport — 30 km / 30 min" },
                { icon: <FaBuilding />, text: "Delhi — 30 km / 30 min" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#C0A15C] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              The Product
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaLeaf />, text: "IGBC Pre-Certified Platinum" },
                { icon: <FaSwimmingPool />, text: "80% of 4.48 acres kept as landscape" },
                { icon: <FaBuilding />, text: "Only 180 apartments and 5 penthouses across 3 towers" },
                { icon: <FaDraftingCompass />, text: "Architecture by Confluence" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#C0A15C] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center">
          Low density isn&apos;t a marketing line here — it&apos;s the plan.
          Among Greater Noida apartments for sale, homes on this much green with
          this few neighbours tend to hold value longer and rent easier.
        </p>
      </div>
    </section>
  );
}
