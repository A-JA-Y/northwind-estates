import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | NorthWind Sanctuary",
  description:
    "Buyer's guides, floor-plan explainers and location insights for NorthWind Sanctuary — 3 & 4 BHK residences and penthouses in Sector Pi-1, Greater Noida.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
