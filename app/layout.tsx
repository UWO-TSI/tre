import type { Metadata } from "next";
import "./globals.css"

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );

