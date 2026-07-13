import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, project } from "@/data/project";



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
    "NorthWind Sanctuary | 3 & 4 BHK Luxury Residences in Sector Pi-1, Greater Noida",
  description:
    "NorthWind Sanctuary is a 4.48-acre IGBC Pre-Certified Platinum rated address in Sector Pi-1, Greater Noida — 3 towers, 3 & 4 BHK residences from 1,895 to 3,750 sq.ft., 5 penthouses, seven landscaped zones across 80% green cover and Club Roots. Live Rare.",
  keywords: [
    "NorthWind Sanctuary",
    "NorthWind Sanctuary Greater Noida",
    "Northwind Estates",
    "3 BHK Greater Noida",
    "4 BHK Greater Noida",
    "luxury apartments Sector Pi-1",
    "penthouses Greater Noida",
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

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "NorthWind Sanctuary | 3 & 4 BHK Residences, Sector Pi-1 Greater Noida",
    description:
      "Live Rare. 4.48 acres, 3 towers, 180 luxury apartments and 5 penthouses wrapped in 80% green landscape — with Club Roots at its heart.",
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
    title: "NorthWind Sanctuary | 3 & 4 BHK Residences, Greater Noida",
    description:
      "Your Rare Living — 3 & 4 BHK residences and penthouses across 4.48 acres in Sector Pi-1, Greater Noida.",
    images: ["/northwind-hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

import { ModalProvider } from "@/components/ModalContext";

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
      <Analytics />
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
        </ModalProvider>
      </body>
    </html>
  );
}
