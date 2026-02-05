"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Users } from "lucide-react";
import Image from "next/image";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="">
                <Section className="relative min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/community_hero_cover.png"
                            alt="Community Cover"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
                    </div>

                    <div className="relative z-10 pt-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                            コミュニティ
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            THE RESETは、リトリートで終わりではありません。<br />
                            ここから始まる、国境を超えた本質のつながりを。
                        </p>
                    </div>
                </Section>

                {/* Concept Box */}
                <Section className="py-10">
                    <div className="max-w-5xl mx-auto relative">
                        <div className="absolute inset-0 bg-gold-500/5 blur-3xl -z-10 rounded-full w-3/4 mx-auto" />

                        <div className="text-center space-y-10 p-10 md:p-16 rounded-[2.5rem] bg-slate-900/50 glass-dark border border-white/10 shadow-2xl backdrop-blur-xl">
                            <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-gold-900/20 rotate-3 hover:rotate-6 transition-transform duration-500">
                                <Users className="w-10 h-10 text-white" />
                            </div>

                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    日本人 × タイ人<br className="md:hidden" /> コミュニティ
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
                            </div>

                            <div className="space-y-6 text-lg text-slate-300 leading-loose max-w-3xl mx-auto">
                                <p>
                                    THE RESETのコミュニティは、
                                    タイで活躍する<span className="text-white font-medium border-b border-gold-500/30">日本人</span>と、
                                    現地のトレンドを牽引する<span className="text-white font-medium border-b border-gold-500/30">タイ人コミュニティ</span>が
                                    フラットに交流できる場を目指しています。
                                </p>
                                <p>
                                    共通言語は「ウェルネス」と「ビジネス」。
                                    利害関係を超えた本質のつながりが、
                                    新たなビジネスの種を生み出します。
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button variant="premium" size="lg" className="rounded-full h-14 px-8 text-base shadow-xl shadow-gold-900/10 hover:shadow-gold-500/20 transition-shadow">
                                    コミュニティに参加する（審査制）
                                </Button>
                                <p className="mt-4 text-xs text-slate-500">
                                    ※参加にはリトリートプログラムの修了、または既存メンバーの紹介が必要です。
                                </p>
                            </div>
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
                            2026年6月 開催予定
                        </div>
                        <p className="text-slate-200 mb-10 text-xs md:text-lg leading-relaxed">
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
