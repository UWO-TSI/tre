import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "TRE - Next.js TypeScript Starter",
  description: "A modern Next.js starter with TypeScript and Tailwind CSS v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <Header></Header>
      <body className="antialiased">{children}</body>
      <Footer></Footer>
    </html>
  );
}
