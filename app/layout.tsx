import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinanceGuy - Your Personal Financial Assistant",
  description:
    "Build smarter money habits through simple tracking, smart nudges, and long-term financial awareness. For students.",
  icons: {
    // icon: [
    //   {
    //     url: "/icon-light-32x32.png",
    //     media: "(prefers-color-scheme: light)",
    //   },
    //   {
    //     url: "/icon-dark-32x32.png",
    //     media: "(prefers-color-scheme: dark)",
    //   },
    //   {
    //     url: "/icon.svg",
    //     type: "image/svg+xml",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
