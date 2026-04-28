import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "FINANCEGUY · Track. Quest. Hoard your gold.",
  description:
    "Build your treasury, protect your rations, and complete quests that level up your money habits.",
  icons: {
    icon: "/images/Logo.png",
    shortcut: "/images/Logo.png",
    apple: "/images/Logo.png",
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
        className={`${jetBrainsMono.className} ${pressStart2P.variable} ${jetBrainsMono.variable} font-sans`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
