import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Godrej Golf Links",
  description:
    "Stay updated with the latest news, developments, and infrastructure updates around Greater Noida and Yamuna Expressway.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
