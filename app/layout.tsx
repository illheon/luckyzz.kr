import type { Metadata } from "next";
import { ppLettraMono, aritaBuri, mulche } from "@/lib/fonts";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "luckyzz.kr",
  description: "Minimal portfolio and blog by luckyzz",
  keywords: ["portfolio", "blog", "design", "works"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${ppLettraMono.variable} ${aritaBuri.variable} ${mulche.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="pt-[73px]">
          {children}
        </main>
      </body>
    </html>
  );
}
