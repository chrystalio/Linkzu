import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkZu - Kristoff",
  description: "A simple and modern list of links, built by Kristoff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className="antialiased subpixel-antialiased bg-[#FFECC8]"
      >
        {children}
      </body>
    </html>
  );
}
