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
                            src="/about_hero_cover.png"
                            alt="The Reset Cover"
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80" />
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

                {/* Team */}
                <Section className="bg-slate-900/50 border-y border-white/5 py-32 mt-10">
                    <div className="text-center mb-20">
                        <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Our Team</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            チームメンバー
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            各分野のプロフェッショナルが、あなたのリセットの旅をサポートします。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
                        {[
                            {
                                role: "Founder",
                                title: "代表 / プロデューサー",
                                desc: "自身の燃え尽き症候群の経験から、デジタルデトックスの重要性を痛感し起業。日本のビジネスパーソンや現代人の課題を熟知。",
                                initial: "F"
                            },
                            {
                                role: "Local Partner",
                                title: "現地パートナー",
                                desc: "タイの主要なコミュニティ、病院、ウェルネス施設との強固なコネクションを持つ現地のエキスパート。",
                                initial: "L"
                            },
                            {
                                role: "Mindfulness Coach",
                                title: "認定インストラクター",
                                desc: "科学的アプローチに基づいた瞑想と休息法を指導。脳のパフォーマンス最大化をサポート。",
                                initial: "M"
                            }
                        ].map((member, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-gold-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                                <div className="w-24 h-24 mx-auto rounded-full bg-slate-800 mb-8 border border-white/10 flex items-center justify-center text-3xl font-serif text-gold-500/50 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-300 shadow-inner">
                                    {member.initial}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">{member.role}</h3>
                                <p className="text-gold-500 text-sm font-medium mb-4 tracking-wide uppercase font-xs">{member.title}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {member.desc}
                                </p>
                            </div>
                        ))}
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
                            2026年6月 開催予定
                        </div>
                        <p className="text-slate-200 mb-10 text-lg leading-relaxed">
                            現在、先行予約の受付準備を進めています。<br />
                            興味のある方は、まずはLINEにご登録ください。<br />
                            最新情報や優先案内をお届けします。
                        </p>
                        <Button variant="premium" size="lg" className="h-14 px-10 text-lg rounded-full shadow-gold-500/20 shadow-lg hover:shadow-gold-500/40" asChild>
                            <a href="https://lin.ee/ZceS23g">LINEで最新情報を受け取る</a>
                        </Button>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
