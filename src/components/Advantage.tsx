"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wallet, Sparkles, Sun } from "lucide-react";

export default function Advantage() {
    const advantages = [
        {
            icon: Wallet,
            title: "Cost Performance",
            subtitle: "圧倒的なコストパフォーマンス",
            desc: "バリ島などの他リゾート地に比べ、同等の高級ヴィラやサービスを安価に提供可能。",
            image: "/images/advantage-cost.png"
        },
        {
            icon: Sparkles,
            title: "Spiritual",
            subtitle: "精神性の本場",
            desc: "300以上の寺院が存在し、「祈り」や「静寂」が日常に溶け込んでいる環境。",
            image: "/images/advantage-spirit.png"
        },
        {
            icon: Sun,
            title: "Climate & Safety",
            subtitle: "気候と治安",
            desc: "乾季（11月〜2月）の涼しさは、サウナや屋外活動に最適。治安も良く安心。",
            image: "/images/advantage-climate.png"
        }
    ];

    return (
        <section id="advantage" className="py-24 bg-retreat-black text-retreat-white px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-retreat-gold tracking-widest text-sm uppercase block mb-4">Why Chiang Mai?</span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">Advantage</h2>
                    <p className="text-white/60">チェンマイという選択</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {advantages.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group relative h-[400px] overflow-hidden rounded-sm border border-white/10 hover:border-retreat-gold/50 transition-all"
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <item.icon size={40} className="text-retreat-gold mb-4" strokeWidth={1.5} />
                                <h3 className="text-xl font-serif mb-1">{item.title}</h3>
                                <p className="text-sm text-retreat-gold/80 mb-4">{item.subtitle}</p>
                                <p className="text-white/80 text-sm leading-loose opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
