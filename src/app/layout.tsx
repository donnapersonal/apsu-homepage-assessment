import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Work_Sans } from "next/font/google";

import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apsu | Healthcare in your language",
  description:
    "Online care from US-licensed physicians, supported in more than 40 languages.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
