import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkZu - Kristoff",
  description: "A simple linktree clone for Kristoff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased text-white bg-gradient-to-r from-slate-900 to-slate-700"
      >
        {children}
      </body>
    </html>
  );
}
