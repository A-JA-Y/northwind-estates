import { towers, clubFacilities } from "@/data/project";

const interiorFeatures = [
  "Imported marble in foyer, drawing, dining & kitchen",
  "Wooden flooring in all bedrooms",
  "Modular kitchen with quartz stone counter",
  "Modular wardrobes with motion-sensor lights",
  "2450 mm high UPVC powder-coated windows",
  "Kohler / Roca / Jaquar (or equivalent) C.P. fittings",
];

const nearby = {
  Education: ["Delhi Public School", "Sharda University", "Bennett University", "Knowledge Park"],
  Healthcare: ["Fortis Hospital"],
  "Retail & Business": ["Alpha Commercial Belt", "India Expo Mart", "Radisson Blu Hotel"],
};

export default function ResidenceFeatures() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8"
      style={{ backgroundColor: "#F2EEE0" }}
      id="residences"
    >
      <div className="max-w-5xl mx-auto">
        <h6
          className="text-center uppercase mb-3"
          style={{
            color: "#C0A15C",
            letterSpacing: "2.5px",
            fontSize: "11px",
            fontWeight: 600,
          }}
        >
          The Expansive Interiors
        </h6>
        <h2
          className="text-center font-bold mb-10"
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
            lineHeight: "1.25",
            color: "#123528",
          }}
        >
          Residence Features &amp; Specifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1 — Interiors */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #C0A15C" }}>
            <p className="uppercase" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#C0A15C", marginBottom: "8px" }}>
              Interiors &amp; Finishes
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#123528" }}>
              Let your inner soul feel the soothe
            </h3>
            <ul className="space-y-2 mb-4">
              {interiorFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    className="rounded-full flex-shrink-0 mt-1.5"
                    style={{ width: 5, height: 5, background: "#C0A15C", display: "inline-block" }}
                  />
                  <span style={{ fontSize: "13px", color: "#4A5B50" }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "0.5px solid #DED8C6", paddingTop: "10px" }}>
              <p className="uppercase" style={{ fontSize: "11px", fontWeight: 600, color: "#7C8B80", letterSpacing: "1px", marginBottom: "6px" }}>
                Air-conditioning
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Tower A — VRV", "Towers B & C — Split AC"].map((item) => (
                  <span
                    key={item}
                    style={{ fontSize: "12px", background: "#F2EEE0", color: "#6E5B2E", padding: "3px 10px", borderRadius: "20px", border: "0.5px solid #CFC7B2" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Configurations */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #C0A15C" }}>
            <p className="uppercase" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#C0A15C", marginBottom: "8px" }}>
              Space &amp; Layout
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#123528" }}>
              Three towers, three formats
            </h3>
            <div className="flex gap-2 mb-4">
              {towers.map((t) => (
                <div
                  key={t.id}
                  className="flex-1 text-center py-3"
                  style={{ background: "#F2EEE0", border: "0.5px solid #CFC7B2" }}
                >
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#C0A15C" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#7C8B80" }}>{t.config}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {towers.map((t) => (
                <li key={t.id} className="flex items-start gap-2">
                  <span
                    className="rounded-full flex-shrink-0 mt-1.5"
                    style={{ width: 5, height: 5, background: "#C0A15C", display: "inline-block" }}
                  />
                  <span style={{ fontSize: "13px", color: "#4A5B50" }}>
                    <strong>{t.name}</strong> — {t.saleable.toLocaleString("en-IN")} sq.ft.
                    saleable, {t.carpet.toLocaleString("en-IN")} sq.ft. carpet,{" "}
                    {t.balcony} sq.ft. balcony
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Club & Neighbourhood */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #C0A15C" }}>
            <p className="uppercase" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#C0A15C", marginBottom: "8px" }}>
              Club Roots &amp; Around
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#123528" }}>
              A retreat within a retreat
            </h3>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {clubFacilities.map((item) => (
                <span
                  key={item}
                  style={{ fontSize: "12px", color: "#6E5B2E", background: "#F2EEE0", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #CFC7B2" }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3" style={{ borderTop: "0.5px solid #DED8C6", paddingTop: "10px" }}>
              {Object.entries(nearby).map(([category, items]) => (
                <div key={category}>
                  <p className="uppercase" style={{ fontSize: "11px", fontWeight: 600, color: "#7C8B80", letterSpacing: "1px", marginBottom: "5px" }}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        style={{ fontSize: "12px", color: "#4A5B50", background: "#F2EEE0", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #CFC7B2" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
