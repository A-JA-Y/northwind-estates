import type { Metadata } from "next";
import { SITE_URL, project } from "@/data/project";

export const metadata: Metadata = {
  title: `News & Updates | ${project.name}`,
  description:
    "The latest from NorthWind Sanctuary, Sector Pi-1 Greater Noida — green certification, masterplan and construction updates from Northwind Estates.",
  alternates: {
    canonical: `${SITE_URL}/news`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/news`,
    siteName: project.name,
    locale: "en_IN",
    title: `News & Updates | ${project.name}`,
    description:
      "The latest from NorthWind Sanctuary, Sector Pi-1 Greater Noida — green certification, masterplan and construction updates from Northwind Estates.",
    images: [
      {
        url: `${SITE_URL}/northwind-hero.webp`,
        width: 1200,
        height: 630,
        alt: `${project.name}, ${project.locality}`,
      },
    ],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
