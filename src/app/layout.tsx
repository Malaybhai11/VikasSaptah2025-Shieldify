// app/layout.tsx or src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ---- Google Fonts ----
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron, Audiowide, Exo_2, Russo_One } from "next/font/google";

// Geist Sans & Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Orbitron
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Audiowide
const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Exo 2
const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Russo One
const russoOne = Russo_One({
  variable: "--font-russo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Shieldify - AI-Powered Server Protection",
  description:
    "Advanced AI-powered Web Application Firewall that sits in front of your 24/7 hosting server. Block malicious requests, prevent attacks, and keep your infrastructure secure.",
};

// ---- Root Layout ----
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${audiowide.variable} ${exo2.variable} ${russoOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
