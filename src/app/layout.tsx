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
        className="antialiased text-white bg-gradient-to-r from-slate-900 to-slate-700 subpixel-antialiased"
        style={{ fontFamily: "'Reenie Beanie', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
