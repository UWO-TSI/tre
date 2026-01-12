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
<<<<<<< HEAD
      <body>
=======
      <body className="antialiased">
>>>>>>> 8d713c169e9c04bf01690d9487fd70ece2afac5c
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
