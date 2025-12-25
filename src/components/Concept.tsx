"use client";

import { motion } from "framer-motion";
import { PhoneOff, Flame, Brain } from "lucide-react";

export default function Concept() {
    const features = [
        {
            icon: PhoneOff,
            title: "Digital Fasting",
            desc: "情報の遮断"
        },
        {
            icon: Flame,
            title: "Physical Load",
            desc: "身体的負荷 (サウナ/氷冷)"
        },
        {
            icon: Brain,
            title: "Deep Reflection",
            desc: "徹底的な内省"
        }
    ];

    return (
        <section id="concept" className="py-24 bg-retreat-black text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <span className="text-retreat-gold tracking-widest text-sm uppercase block mb-4">Concept</span>
                <h2 className="font-serif text-3xl md:text-4xl text-retreat-white mb-10 leading-relaxed">
                    情報のノイズを断ち、<br />
                    本来の「個」を取り戻す<br />
                    24時間
                </h2>
                <p className="text-retreat-white/70 leading-loose mb-16 tracking-wide text-sm md:text-base">
                    AI時代の加速する情報速度と責任に疲弊したあなたへ。<br />
                    チェンマイの豊かな自然と精神文化の中で、<br className="hidden md:inline" />
                    <strong className="text-retreat-white font-medium">「デジタルデトックス × 身体的負荷 × 内省」</strong>を組み合わせた、<br />
                    超短期的・高密度の精神回復プログラムを提供します。
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full border border-retreat-gold/30 flex items-center justify-center text-retreat-gold mb-6">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-retreat-white font-serif text-lg mb-2">{feature.title}</h3>
                            <p className="text-retreat-white/50 text-sm tracking-wide">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
