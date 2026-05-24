import { CtaStrip } from "@/components/footer/CtaStrip";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { SiteNav } from "@/components/nav/SiteNav";
import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono, Lato } from "next/font/google";
import "./globals.css";

const fontSerif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const fontSans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const fontLato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nazmus Shakib — Product Strategy & Venture Building",
  description:
    "Founder of UpscaleBD, CSMO at MAAC, Product Strategy Lead at TorontoCreatives. Strategy, marketing, and AI ventures across Bangladesh and Canada.",
  metadataBase: new URL("https://mnshakib.com"),
  openGraph: {
    title: "Nazmus Shakib — Product Strategy & Venture Building",
    description:
      "A decade-plus building B2B SaaS, retail, and AI ventures across two continents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable} ${fontLato.variable}`}
    >
      <body>
        <SiteNav />
        <main>{children}</main>
        <CtaStrip />
        <SiteFooter />
      </body>
    </html>
  );
}
