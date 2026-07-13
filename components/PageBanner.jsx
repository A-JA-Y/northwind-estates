export default function PageBanner({ title, subtitle, eyebrow }) {
  return (
    <section className="w-full bg-[#E7EFD8] lg:bg-[#F6F4EC] py-12 px-6 border-b border-[#DCD6C2]">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow ? (
          <p className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
