"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="">
                <Section className="relative min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/about_hero_v2.png"
                            alt="The Reset Cover"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
                    </div>

                    <div className="relative z-10 pt-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                            THE RESETについて
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            情報過多の時代に、脳のための休息地を創造する。
                        </p>
                    </div>
                </Section>

                {/* Mission */}
                <Section className="py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div>
                                <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Our Philosophy</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    なぜ、<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">タイ</span>なのか？
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                                <p>
                                    タイは、強烈なエネルギーと深い静寂が共存する、世界でも稀有な場所です。
                                    高層ビルが立ち並ぶビジネスの最前線から一歩路地に入れば、
                                    そこには古来からの仏教精神と、人々の温かい笑顔が息づいています。
                                </p>
                                <p>
                                    「微笑みの国」タイ特有のホスピタリティ精神「サバイ（心地よさ）」。
                                    それは、効率と成果に追われ続ける私たち日本人が、
                                    今もっとも必要としている"許し"と"癒し"かもしれません。
                                </p>
                                <p className="text-slate-200 font-medium">
                                    THE RESETは、日本人の「品質へのこだわり」と、
                                    タイ人の「心からのホスピタリティ」を融合させ、
                                    これまでにない極上の休息体験を提供します。
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative h-[500px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
                            <Image
                                src="/about_why_thailand_nature.png"
                                alt="Thai Nature Landscape"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </Section>


                {/* CTA */}
                <Section className="relative py-32 text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/cta_background_morning.png"
                            alt="Morning CTA Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-950/80" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            あなたも、<br />
                            <span className="text-gold-400">最高の休息</span>を体験しませんか？
                        </h2>
                        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-slate-950 uppercase bg-gold-500 rounded-full">
                            2026.06.27 - 28 開催決定
                        </div>
                        <p className="text-slate-200 mb-10 text-xs md:text-lg leading-relaxed">
                            現在、先行予約の受付準備を進めています。<br />
                            興味のある方は、まずはLINEにご登録ください。<br />
                            最新情報や優先案内をお届けします。
                        </p>
                        <Button variant="premium" size="lg" className="h-14 px-10 text-lg rounded-full shadow-gold-500/20 shadow-lg hover:shadow-gold-500/40" asChild>
                            <a href="https://lin.ee/ZceS23g">LINEで先行案内を受け取る</a>
                        </Button>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
