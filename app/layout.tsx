import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "WASHIT | Smart Laundry Ecosystem",
  description: "Futuristic SaaS + marketplace website for laundry platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-deep-navy text-white min-h-screen font-inter overflow-x-hidden selection:bg-neon-cyan selection:text-deep-navy">
        {children}
      </body>
    </html>
  );
}
