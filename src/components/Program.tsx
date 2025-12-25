"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneOff, Coffee } from "lucide-react";

export default function Program() {
    const programs = [
        {
            id: "01",
            title: "Digital Detox",
            subtitle: "デジタル・ファスティング",
            desc: "到着と同時にスマートフォンを専用ボックスに封印。外部との連絡、SNS、通知から完全に解放される環境の構築。",
            icon: PhoneOff,
            image: "/images/program-digital-fasting.png",
            hasImage: true
        },
        {
            id: "02",
            title: "Sauna & Ice Bath",
            subtitle: "身体の覚醒",
            desc: "熱（サウナ）と極冷（アイスバス）の交互浴。バイオハッキング的アプローチで脳を「今、ここ」に強制集中させ、深いトランス状態（ととのい）へ導く。",
            image: "/images/program-sauna.png",
            hasImage: true
        },
        {
            id: "03",
            title: "Meditation",
            subtitle: "精神の深化",
            desc: "早朝の寺院での静座瞑想。独自のワークシートを用いたジャーナリング。過去を振り返り、未来のビジョンを言語化する。",
            image: "/images/program-meditation.png",
            hasImage: true
        },
        {
            id: "04",
            title: "Massage",
            subtitle: "伝統による癒やし",
            desc: "チェンマイ伝統の技術で、蓄積した身体の緊張を物理的に解きほぐす。",
            image: "/images/program-massage-v2.png",
            hasImage: true
        },
        {
            id: "05",
            title: "Coffee & Relax",
            subtitle: "現代の余白",
            desc: "チェンマイ特有の洗練された空間で、デトックス後のクリアな思考を整理する「余白」の時間。",
            icon: Coffee,
            image: "/images/program-coffee-v2.png",
            hasImage: true
        }
    ];

    return (
        <section id="program" className="py-24 bg-retreat-dark text-retreat-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-retreat-gold tracking-widest text-sm uppercase block mb-4">Core Program</span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">5 Pillars of Reset</h2>
                    <p className="text-white/60">精神と肉体を再生する5つの柱</p>
                </motion.div>

                <div className="space-y-32">
                    {programs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                        >
                            <div className="w-full md:w-1/2">
                                {item.hasImage ? (
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl">
                                        <Image
                                            src={item.image!}
                                            alt={item.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-[4/3] w-full bg-white/5 border border-white/10 rounded-sm flex items-center justify-center">
                                        {item.icon && <item.icon size={80} className="text-retreat-gold/50" />}
                                    </div>
                                )}
                            </div>

                            <div className="w-full md:w-1/2">
                                <span className="text-retreat-gold text-6xl font-serif opacity-30 block mb-4">{item.id}</span>
                                <h3 className="text-2xl md:text-3xl font-serif mb-2">{item.title}</h3>
                                <p className="text-retreat-gold text-sm mb-6 tracking-wider">{item.subtitle}</p>
                                <p className="text-white/70 leading-loose tracking-wide">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
