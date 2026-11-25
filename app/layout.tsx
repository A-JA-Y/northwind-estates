import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, project, contact } from "@/data/project";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "NorthWind Estates Greater Noida | Luxury 3 & 4 BHK Apartments in Sector Pi-1",
  description:
    "NorthWind Estates Greater Noida brings you NorthWind Sanctuary — 180 luxury apartments and 5 penthouses on 4.48 acres in Sector Pi-1, with 80% green cover and IGBC Platinum pre-certification. Enquire for pricing.",
  keywords: [
    "NorthWind Estates",
    "NorthWind Estates Greater Noida",
    "NorthWind Sanctuary",
    "NorthWind Sanctuary Greater Noida",
    "luxury apartments in Greater Noida",
    "luxury flats in Greater Noida",
    "3 BHK Greater Noida",
    "4 BHK Greater Noida",
    "penthouses Greater Noida",
    "best housing societies in Greater Noida",
    "IGBC Platinum pre-certified group housing",
    "Club Roots",
    "Sector Pi-1 Greater Noida",
  ],

  applicationName: project.name,
  authors: [{ name: project.developer }],
  creator: project.developer,
  publisher: project.developer,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NorthWind Estates Greater Noida | Luxury 3 & 4 BHK Apartments in Sector Pi-1",
    description:
      "Live Rare. NorthWind Sanctuary by NorthWind Estates — 4.48 acres, 3 towers, 180 luxury apartments and 5 penthouses wrapped in 80% green landscape, with Club Roots at its heart.",
    url: SITE_URL,
    siteName: project.name,
    images: [
      {
        url: "/northwind-hero.webp",
        width: 1200,
        height: 630,
        alt: "NorthWind Sanctuary, Sector Pi-1, Greater Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NorthWind Estates Greater Noida | Luxury 3 & 4 BHK Apartments",
    description:
      "Your Rare Living — NorthWind Sanctuary by NorthWind Estates: 3 & 4 BHK luxury apartments and penthouses across 4.48 acres in Sector Pi-1, Greater Noida.",
    images: ["/northwind-hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

import { ModalProvider } from "@/components/ModalContext";
import ModalWrapper from "@/components/ModalWrapper";
import MobileCtaBar from "@/components/MobileCtaBar";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      {/* Vercel Analytics loads /_vercel/insights/script.js, which only exists
          on Vercel. Skip it on other hosts (e.g. the Cloudflare deploy in
          wrangler.jsonc) so it doesn't 404 on every page. */}
      {process.env.VERCEL ? <Analytics /> : null}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
          <ModalWrapper />
          <MobileCtaBar />
        </ModalProvider>
        {/* On phones the stack sits above the sticky MobileCtaBar (and the
            home-indicator inset); from md up that bar is hidden. */}
        <FloatingContactButtons
          phone={contact.phone}
          message="Hi, I am interested in NorthWind Sanctuary, Sector Pi-1, Greater Noida. Please share the price list and brochure."
          callClassName="bg-[#0B3B2C] hover:bg-[#08251C]"
          className="bottom-[calc(4rem_+_env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6"
        />
        <ScrollReveal />
      </body>
    </html>
  );
}
