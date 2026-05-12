import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-deep-navy text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
