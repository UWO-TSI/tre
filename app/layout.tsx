import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

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
    <html lang="en" className={`${quicksand.variable} overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden">
        <div id="page-wrapper" className="min-h-screen">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
