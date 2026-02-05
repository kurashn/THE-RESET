import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google"; // Import Inter and Noto Sans JP
import "./globals.css";

// Configure Inter (English)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Configure Noto Sans JP (Japanese)
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"], // Noto Sans JP might need 'latin' or just be fine as is, but usually we just load it. 
  preload: false, // Sometimes preloading JP fonts causes issues with subsets, but usually fine. Let's try default or preload: false if subset issue.
  // Actually, 'subsets' for Noto Sans JP usually includes 'latin'. Let's check docs if needed, but 'latin' is safe.
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "THE RESET - Digital Detox Retreat",
  description: "Reclaim your focus. A digital detox retreat in Thailand for executives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
