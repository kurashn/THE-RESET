import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Concept } from "@/components/home/Concept";
import { Target } from "@/components/home/Target";
import { SuccessSteps } from "@/components/home/SuccessSteps";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "THE RESET | Digital Detox in Thailand",
  description: "情報疲れした脳を、タイで強制リセット。現代人のためのデジタルデトックスリトリート。",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-gold-500/30">
      <Navbar />

      <main>
        <Hero />
        <Concept />
        <Target />
        <SuccessSteps />

        {/* CTA Section */}
        <section className="relative py-32 text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cta_background_evening.png"
              alt="Luxury Retreat Evening"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-gold-400">Reset</span>?
            </h2>
            <p className="text-slate-300 mb-10 max-w-lg mx-auto text-lg">
              まずはLINEで最新情報を受け取るか、<br />リトリートプログラムの詳細を<span className="inline-block">ご覧ください。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/retreats"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gold-500 px-8 text-base font-bold text-slate-950 shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:scale-105 hover:shadow-gold-500/40"
              >
                プログラムを見る
              </a>
              <a
                href="https://lin.ee/ZceS23g"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 text-base font-bold text-white shadow-sm transition-all hover:bg-white/20 hover:scale-105 hover:border-white/50"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
