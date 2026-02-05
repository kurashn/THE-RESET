"use client";

import { Section } from "@/components/Section";

const steps = [
    {
        number: "01",
        title: "TRUST",
        subtitle: "信頼を築く",
        description: "現地を知り尽くしたパートナーによる厳選された情報と案内。観光客にはアクセスできない「本物のタイ」を提供します。",
    },
    {
        number: "02",
        title: "EXPERIENCE",
        subtitle: "最高の体験",
        description: "スマホ没収、サウナ、瞑想。24時間〜3日間の強制デジタルデトックスで、脳と身体を完全にリセットします。",
    },
    {
        number: "03",
        title: "COMMUNITY",
        subtitle: "繋がる仲間",
        description: "プログラム修了者限定のコミュニティ。日本人と現地のメンバーが交わり、新たな価値が生まれる場へ。",
    },
];

export function SuccessSteps() {
    return (
        <Section className="bg-slate-950 relative overflow-hidden py-32">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-3 block">The Process</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        3つのステップ
                    </h2>
                    <p className="text-slate-400 text-lg">
                        THE RESETが提供する価値のプロセス
                    </p>
                </div>

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center relative group"
                        >
                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute left-[5rem] top-32 w-[2px] h-24 bg-gradient-to-b from-gold-500/20 to-transparent" />
                            )}

                            {/* Number */}
                            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center relative">
                                <div className="absolute inset-0 border border-gold-500/10 rounded-full group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-2 border border-gold-500/5 rounded-full group-hover:scale-110 transition-transform duration-700 delay-75" />
                                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-300 to-gold-700 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-4 md:pt-0">
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 flex items-end gap-2 md:gap-4 whitespace-nowrap">
                                    {step.title} <span className="text-gold-500 text-sm md:text-lg font-bold tracking-wider mb-0.5 md:mb-1.5 opacity-90">/ {step.subtitle}</span>
                                </h3>
                                <p className="text-slate-400 leading-loose text-lg max-w-2xl group-hover:text-slate-300 transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
