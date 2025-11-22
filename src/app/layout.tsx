import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Cormorant_Garamond } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ana Zabala | Architectural Designer",
  description: "Portfolio of Ana Zabala - Architectural Designer & 3D Visualizer. Specialized in residential interiors and photorealistic rendering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAFAFA] text-gray-900">{children}</body>
    </html>
  );
}
