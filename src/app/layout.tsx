import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE RESET - Chiang Mai",
  description: "情報のノイズを断ち、本来の「個」を取り戻す24時間",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-retreat-dark text-retreat-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
