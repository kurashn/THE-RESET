"use client";

import { Section } from "@/components/Section";
import Image from "next/image";

export function Concept() {
    return (
        <Section className="bg-slate-950 py-32" id="concept">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Visual - Left on Desktop */}
                <div className="order-1 lg:order-1 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden glass-dark border border-white/5 p-3 shadow-2xl">
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-slate-900 group">
                        <Image
                            src="/concept_digital_detox.png"
                            alt="Silence and Digital Detox"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2">
                                The Art of Doing Nothing
                            </p>
                        </div>
                    </div>
                </div>

                {/* Text Content - Right on Desktop */}
                <div className="order-2 lg:order-2 space-y-10">
                    <div className="relative">
                        <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-3 block">Concept</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">デジタルデトックス</span><br />
                            脳のメモリを解放する
                        </h2>
                        <div className="h-1.5 w-24 bg-gold-500 rounded-full" />
                    </div>

                    <div className="space-y-6 text-slate-300 leading-loose text-lg">
                        <p>
                            現代の私たちは、常に「情報」というノイズに晒されています。
                            通知、メール、SNS、ニュース。
                            これらは知らず知らずのうちに脳のパフォーマンスを低下させ、
                            創造性や決断力を鈍らせています。
                        </p>
                        <p>
                            THE RESETは、単なる休暇ではありません。
                            タイという異国の地で、物理的にスマートフォンを手放し、
                            強制的に「オフライン」になることで、
                            脳を本来のクリアな状態へと戻すプログラムです。
                        </p>
                        <blockquote className="border-l-4 border-gold-500 pl-6 py-2 my-8 italic text-xl text-white font-medium bg-gradient-to-r from-gold-500/10 to-transparent rounded-r-lg">
                            "本当に必要なアイデアは、<br className="md:hidden" />空白から生まれる。"
                        </blockquote>
                    </div>
                </div>
            </div>
        </Section>
    );
}
