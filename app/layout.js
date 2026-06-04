import { Cormorant_Garamond, Outfit } from "next/font/google";
import localFont from "next/font/local";
import PromoBar from "@/components/PromoBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteName, valueProposition } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const arkhip = localFont({
  src: "../public/fonts/Arkhip.otf",
  variable: "--font-arkhip",
  display: "swap",
});

export const metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: `${valueProposition.text} ${siteName} — landscape design, installation, and maintenance in Woodbury, NJ.`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${arkhip.variable}`}
    >
      <body>
        <PromoBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
