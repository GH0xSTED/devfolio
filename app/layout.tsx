import type { Metadata } from "next";
import React from "react";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import HGIcon from "@/images/brands/hg-purplegrad.svg";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jason Levy Developer Portfolio",
    default: "Jason Levy Developer Portfolio",
  },
  description:
    "Welcome to a portfolio of my ever-expanding software devleopment portfolio! Thanks for taking the time to view my work, please reach out if interested in working with me.",
  openGraph: {
    title: "Jason Levy - Full-Stack Developer Portfolio",
    description:
      "Discover the portfolio of Jason Levy, a multimedia wizard turned Full-Stack Developer.",
    url: "https://j13.dev",
    siteName: "J13.dev",
    images: [
      {
        url: "https://www.j13.dev/_next/static/media/hg-purplegrad.a91d6445.svg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen w-screen overflow-y-auto overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
