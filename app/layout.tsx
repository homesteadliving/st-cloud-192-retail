import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theshoppesstcloud.com"),
  title: "The Shoppes at St. Cloud",
  description: "High-exposure retail opportunity at 201 E 13th Street in St. Cloud, Florida. For lease or ground lease.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Shoppes at St. Cloud",
    description: "High-exposure retail opportunity at 201 E 13th Street in St. Cloud, Florida.",
    url: "/",
    siteName: "The Shoppes at St. Cloud",
    type: "website",
    images: [{ url: "/st-cloud-aerial-render-v3.webp", width: 1450, height: 1085 }],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
