"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Check, Clock } from "lucide-react";
import Image from "next/image";

const plans = [
    {
        name: (
            <>
                デジタルデトックス・<br className="md:hidden" />リトリート
            </>
        ),
        duration: "1泊2日 (2026.06.27 - 28)",
        description: "デジタルデバイスから離れ、心身を深くリセットする2日間。",
        features: [
            "スマホ・PC デジタルデバイス預かり",
            "豪華ヴィラ宿泊（1泊2日）",
            "マインドフルネス瞑想指導",
            "デジタルデトックス講義",
            "オーガニック食事（3食）",
            "焚き火・対話セッション"
        ],
        recommended: true,
    }
];

export default function RetreatsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="">
                <Section className="relative min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/retreats_cover_chiang_mai.png"
                            alt="Retreats Cover Chiang Mai"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
                    </div>

                    <div className="relative z-10 pt-20">
                        <h1 className="text-[2rem] md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                            <span className="inline-block">リトリートプログラム</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            日常のあらゆるノイズから離れ、<br className="hidden md:inline" />
                            本来の感覚とパフォーマンスを取り戻すための、特別な時間。
                        </p>
                    </div>
                </Section>

                {/* Plans Grid */}
                <Section className="py-10">
                    <div className="max-w-4xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col md:flex-row p-8 md:p-12 rounded-3xl border transition-all duration-500 bg-slate-900/80 border-gold-500/30 shadow-2xl shadow-gold-900/10"
                            >
                                <div className="flex-1 md:pr-10 mb-8 md:mb-0 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{plan.name}</h3>
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-slate-400 text-sm mb-6">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-gold-500" />
                                            <span className="font-medium">{plan.duration}</span>
                                        </div>
                                    </div>
                                    <p className="text-base text-slate-400 mb-8 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent mx-8" />
                                <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                                <div className="flex-1 flex flex-col">
                                    <ul className="space-y-4 mb-10 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-gold-500" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        variant="premium"
                                        className="w-full py-6 text-base"
                                        asChild
                                    >
                                        <a href="https://lin.ee/ZceS23g">
                                            LINEで先行案内を受け取る
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Location Preview */}
                <Section className="py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black transition-transform duration-700 group-hover:scale-105">
                                {/* Ideally replaced with a real image later */}
                                <div className="absolute inset-0 bg-slate-900 opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 font-serif text-4xl italic">Sanctuary</span>
                                </div>
                            </div>
                            <Image
                                src="/chiang_mai_mountain_retreat.png"
                                alt="Retreat Location Chiang Mai"
                                fill
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                タイの隠れ家で<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                                    究極の静寂
                                </span>
                                を。
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                リトリートの舞台は、タイ・チェンマイにひっそりと佇む豪華ヴィラ。
                                熱帯の植物に囲まれた静寂な空間で、誰にも邪魔されることなく、
                                自分自身の内面と深く向き合う時間を提供します。
                            </p>

                            <div className="space-y-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20">
                                        <span className="text-2xl">🌿</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">自然との調和</h4>
                                        <p className="text-slate-400 text-sm">深呼吸したくなる緑豊かな環境</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20">
                                        <span className="text-2xl">🧘</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">プライベート空間</h4>
                                        <p className="text-slate-400 text-sm">完全個室・プール完備の贅沢な設計</p>
                                    </div>
                                </div>
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
                            2026.06.27 - 28 チェンマイにて開催
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
