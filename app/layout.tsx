import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Childcan",
  description: "childcan.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="antialiased">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}


