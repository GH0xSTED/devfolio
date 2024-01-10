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
  title: "Jason Levy Developer Portfolio",
  description:
    "Welcome to a portfolio of my ever-expanding software devleopment portfolio! Thanks for taking the time to view my work, please reach out if interested in working with me.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Jason Levy - Full-Stack Developer Portfolio</title>
        <meta
          property="og:title"
          content="Jason Levy - Full-Stack Developer Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={HGIcon} />
        <meta property="og:url" content="https://j13.dev" />
        <meta
          property="og:description"
          content="Discover the portfolio of Jason Levy, a multimedia wizard turned Full-Stack Developer."
        />
        <meta
          property="og:site_name"
          content="Jason Levy Developer Portfolio"
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body
        className={cn(
          "min-h-screen w-screen overflow-hidden bg-background font-sans antialiased",
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
