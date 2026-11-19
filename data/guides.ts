import type { StaticImageData } from "next/image";
import { SITE_URL } from "@/data/project";
import carpetGuideImage from "@/assets/guides/floor-plan-drawing.webp";
import villaGuideImage from "@/assets/guides/garden-villa-lawn.webp";

// Stand-alone buyer guides. These live at the site root (not under /blogs) and
// are linked from the footer and from each other.
export type GuideMeta = {
  slug: string;
  href: string;
  url: string;
  label: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export const guides: GuideMeta[] = [
  {
    slug: "super-built-up-area-vs-carpet-area",
    href: "/super-built-up-area-vs-carpet-area",
    url: `${SITE_URL}/super-built-up-area-vs-carpet-area`,
    label: "Super Built-Up vs Carpet Area",
    title: "Super Built-Up Area vs Carpet Area: A Step-by-Step Example",
    description:
      "One real flat taken from carpet to saleable area, with loading worked out both ways and a quick way to convert a saleable rate to carpet.",
    image: carpetGuideImage,
    imageAlt: "Architectural floor plan drawing of a home",
  },
  {
    slug: "garden-villa-vs-flat-greater-noida",
    href: "/garden-villa-vs-flat-greater-noida",
    url: `${SITE_URL}/garden-villa-vs-flat-greater-noida`,
    label: "Villa vs Flat in Greater Noida",
    title: "Villa vs Flat: Is a Garden Villa the Best of Both Worlds?",
    description:
      "Garden villas, 3 and 4 BHK apartments and penthouses compared on space, outdoor area, upkeep and green living.",
    image: villaGuideImage,
    imageAlt: "Modern home with a private green lawn",
  },
];

export const guideLinks = guides.map((g) => ({ label: g.label, href: g.href }));
