import Image from "next/image";
import heroDesktop from "../assets/hero-desktop.webp";
import heroMobile from "../assets/hero-mobile.webp";
import sanctuaryLogo from "../assets/sanctuary-logo.webp";

const Hero = () => {
  return (
    <section className="w-full">
      {/* Mobile & Tablet */}
      <div className="block md:hidden relative">
        <Image
          src={heroMobile}
          alt="NorthWind Sanctuary — swimming pool and landscaped deck, Sector Pi-1, Greater Noida"
          width={828}
          height={1100}
          priority
          sizes="100vw"
          quality={80}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08251C]/85 via-[#08251C]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <p className="text-[#C0A15C] text-[10px] tracking-[0.3em] uppercase mb-2">
            Live Rare
          </p>
          <h2 className="text-white text-2xl font-semibold leading-tight">
            NorthWind Sanctuary
          </h2>
          <p className="text-white/80 text-xs mt-2">
            3 &amp; 4 BHK residences &middot; Sector Pi-1, Greater Noida
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex w-full md:h-[70vh] items-center relative overflow-hidden">
        <Image
          src={heroDesktop}
          alt="NorthWind Sanctuary — aerial view of the three towers above the central landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={80}
        />

        {/* Legibility scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08251C]/80 via-[#08251C]/40 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full px-6">
          <div className="max-w-xl">
            <Image
              src={sanctuaryLogo}
              alt="NorthWind Sanctuary"
              width={132}
              height={121}
              priority
              className="mb-5 brightness-0 invert opacity-95"
            />
            <p className="text-[#C0A15C] text-xs tracking-[0.35em] uppercase mb-4">
              Your Rare Living
            </p>
            <h2 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
              In the heart of the city,
              <br />
              yet a world apart
            </h2>
            <p className="text-white/85 text-sm mt-5 leading-relaxed max-w-md">
              4.48 acres. Three towers. 80% lush green landscape. A limited
              collection of 3 &amp; 4 BHK residences and five penthouses in
              Sector Pi-1, Greater Noida.
            </p>
            <a
              href="#book-site-visit"
              className="inline-block mt-7 bg-[#C0A15C] hover:bg-[#A2854A] text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3.5 transition-colors"
            >
              Book a Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
