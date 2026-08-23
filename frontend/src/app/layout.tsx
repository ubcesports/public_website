import type { Metadata } from "next";
import { Cascadia_Mono, Lexend_Exa, Nata_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

// UBCEA Wordmark
const stretchPro = localFont({
  src: "./fonts/StretchPro.otf",
  variable: "--font-stretch-pro",
  display: "swap",
});

// Titles
const ethnocentric = localFont({
  src: "./fonts/Ethnocentric.otf",
  variable: "--font-ethnocentric",
  display: "swap",
});

// Headers
const haverbrooke = localFont({
  src: "./fonts/Haverbrooke.otf",
  variable: "--font-haverbrooke",
  display: "swap",
});

const haverbrookeHollow = localFont({
  src: "./fonts/HaverbrookeHollow.otf",
  variable: "--font-haverbrooke-hollow",
  display: "swap",
});

// Game dept headers
const lexendExa = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
  weight: "variable",
});

// Body
const nataSans = Nata_Sans({
  variable: "--font-nata-sans",
  subsets: ["latin"],
  weight: "variable",
  adjustFontFallback: false,
});

// Monospace
const cascadiaMono = Cascadia_Mono({
  variable: "--font-cascadia-mono",
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "UBCEA",
  description: "UBC Esports Association",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={[
        stretchPro.variable,
        ethnocentric.variable,
        haverbrooke.variable,
        haverbrookeHollow.variable,
        lexendExa.variable,
        nataSans.variable,
        cascadiaMono.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
