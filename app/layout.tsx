import type { Metadata } from "next";
import { VT323, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

const manrope = Manrope({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — IA para tu proceso creativo`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://rurali-art.ruralhackers.com"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} — IA para tu proceso creativo`,
    description: site.description,
    locale: "es_ES",
    type: "website",
    siteName: site.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — IA y arte en Anceu`,
    description: site.description,
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${vt323.variable} ${jetbrains.variable} ${manrope.variable} min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
