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
            Why NorthWind Sanctuary, Sector Pi-1
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            A low-density, green-certified address on the Noida–Greater Noida
            corridor — two kilometres from the metro and half an hour from the
            new airport.
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
                { icon: <FaSubway />, text: "02 km / 05 min to GNIDA Metro Station" },
                { icon: <FaCity />, text: "05 km / 07 min to Pari Chowk" },
                { icon: <FaHospital />, text: "05 km / 07 min to Fortis Hospital" },
                { icon: <FaPlane />, text: "30 km / 30 min to Noida International Airport" },
                { icon: <FaBuilding />, text: "30 km / 30 min to Delhi" },
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
                { icon: <FaLeaf />, text: "IGBC Pre-Certified Platinum rated" },
                { icon: <FaSwimmingPool />, text: "80% of 4.48 acres kept as green landscape" },
                { icon: <FaBuilding />, text: "Only 180 apartments and 5 penthouses across 3 towers" },
                { icon: <FaDraftingCompass />, text: "Designed by Confluence, established 1999" },
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
          Low density is the point. Fewer homes on a larger green footprint means
          more light, more air and a quieter address — for residents, and for
          long-term value.
        </p>
      </div>
    </section>
  );
}
