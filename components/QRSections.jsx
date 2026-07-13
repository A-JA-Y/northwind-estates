import { project, rera } from "@/data/project";

// The brochure carries no RERA registration. Set `rera.number` in data/project.ts
// and the registration line below will render.
const QRSection = () => {
  return (
    <section className="w-full bg-[#08251C] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto">
        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">
          <p className="mb-1">
            <strong className="tracking-widest">{project.developer}</strong>
          </p>
          <p className="mb-3 text-[#cccccc]">{project.address}</p>

          {rera.number ? (
            <>
              <p className="mb-0.5">
                <strong className="tracking-widest">RERA NO.:</strong>{" "}
                <span itemProp="identifier">{rera.number}</span>
              </p>
              <p className="mb-2 text-[#cccccc] text-[12px]">
                <a
                  href={rera.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-white no-underline"
                >
                  {rera.verifyUrl}
                </a>
              </p>
            </>
          ) : (
            <p className="mb-2 text-[#cccccc] text-[12px]">
              RERA registration details available on request. Verify any project
              at{" "}
              <a
                href={rera.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0A15C] hover:text-white no-underline"
              >
                {rera.verifyUrl}
              </a>
            </p>
          )}

          <p className="text-[#cccccc] text-[12px]">
            Architect: {project.architect} &middot; {project.certification}
          </p>
        </address>
      </div>
    </section>
  );
};

export default QRSection;
