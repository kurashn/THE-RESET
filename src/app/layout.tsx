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
  // メンテナンスモードの切り替え (true でメンテナンス画面を表示)
  const isMaintenanceMode = true;

  if (isMaintenanceMode) {
    return (
      <html lang="ja">
        <body className={`${inter.variable} ${notoSansJP.variable} min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 font-sans antialiased`}>
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-gold-400">
              MAINTENANCE
            </h1>
            <div className="space-y-2 text-slate-300">
              <p>現在、サイトのメンテナンスを行っております。</p>
              <p>完了まで今しばらくお待ちください。</p>
            </div>
            <div className="pt-8 block">
              <span className="text-xs tracking-widest text-slate-500 font-inter">THE RESET</span>
            </div>
          </div>
        </body>
      </html>
    );
  }

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
