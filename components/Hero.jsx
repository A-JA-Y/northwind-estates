import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import heroDusk from "../assets/hero-dusk.webp";
import heroDay from "../assets/hero-desktop.webp";
import heroMobile from "../assets/hero-mobile.webp";
import poolSerenity from "../assets/pool-serenity-walk.webp";
import livingLounge from "../assets/living-lounge.webp";
import masterBedroom from "../assets/master-bedroom.webp";
import sanctuaryLogo from "../assets/sanctuary-logo.webp";

const desktopSlides = [
  {
    src: heroDusk,
    alt: "NorthWind Sanctuary at dusk — lit pools, lawns and sports courts beneath the towers",
  },
  {
    src: heroDay,
    alt: "NorthWind Sanctuary — aerial view of the three towers above the central landscape",
  },
  {
    src: poolSerenity,
    alt: "The pools and Serenity Walk at NorthWind Sanctuary",
  },
  {
    src: livingLounge,
    alt: "Luxury living lounge at NorthWind Sanctuary",
  },
  {
    src: masterBedroom,
    alt: "Master bedroom at NorthWind Sanctuary",
  },
];

const mobileSlides = [
  {
    src: heroMobile,
    alt: "NorthWind Sanctuary — swimming pool and landscaped deck, Sector Pi-1, Greater Noida",
  },
  {
    src: heroDusk,
    alt: "NorthWind Sanctuary at dusk — lit pools and lawns beneath the towers",
  },
  {
    src: livingLounge,
    alt: "Luxury living lounge at NorthWind Sanctuary",
  },
];

const Hero = () => {
  return (
    <section className="w-full">
      {/* Mobile & Tablet */}
      <div className="block md:hidden relative aspect-[3/4]">
        <HeroCarousel slides={mobileSlides} />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#08251C]/85 via-[#08251C]/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 z-[2] p-6 text-center pointer-events-none">
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
        <HeroCarousel slides={desktopSlides} />

        {/* Legibility scrim */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#08251C]/80 via-[#08251C]/40 to-transparent pointer-events-none" />

        <div className="relative z-[2] max-w-7xl mx-auto w-full px-6 pointer-events-none">
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

          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#overview"
          aria-label="Scroll down to the project overview"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] text-white/70 hover:text-white transition-colors animate-scroll-cue"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
