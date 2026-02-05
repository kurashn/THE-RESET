"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Calendar, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getRecentArticles } from "@/lib/articles";

const events = [
    {
        date: "2024.08.15",
        title: "Thailand Networking Dinner",
        location: "Sathorn, Thailand",
        type: "Networking",
    },
    {
        date: "2024.09.01",
        title: "Mindfulness Morning Session",
        location: "Lumphini Park",
        type: "Activity",
    },
];

const recentArticles = getRecentArticles(3);

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
                                    日本人 × タイ人 コミュニティ
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 container mx-auto px-6 max-w-6xl mt-24 mb-32">
                    {/* Upcoming Events */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10">
                                    <Calendar className="w-4 h-4 text-gold-500" />
                                </div>
                                今後のイベント
                            </h3>
                            <a href="#" className="text-sm text-gold-400 hover:text-gold-300 flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></a>
                        </div>

                        <div className="space-y-4">
                            {events.map((event, i) => (
                                <div key={i} className="group p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-gold-500/30 hover:bg-slate-900 transition-all duration-300 cursor-pointer">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-gold-400 text-sm font-bold tracking-wide">{event.date}</div>
                                        <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[10px] font-medium text-slate-300 border border-white/5 uppercase tracking-wider">{event.type}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">{event.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Articles */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10">
                                    <span className="text-gold-500 font-serif font-bold italic">A</span>
                                </div>
                                記事・コラム
                            </h3>
                            <Link href="/articles" className="text-sm text-gold-400 hover:text-gold-300 flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link>
                        </div>

                        <div className="space-y-4">
                            {recentArticles.map((article, i) => (
                                <Link href={`/articles/${article.slug}`} key={i} className="group cursor-pointer block p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 hover:border-white/10 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 uppercase tracking-widest">{article.category}</span>
                                        <span className="text-slate-500 text-xs font-medium">{article.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors mb-4 leading-snug">
                                        {article.title}
                                    </h4>
                                    <div className="flex items-center text-sm text-slate-400 font-medium group-hover:translate-x-1 transition-transform group-hover:text-white">
                                        続きを読む <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

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
