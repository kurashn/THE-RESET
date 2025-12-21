"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function Schedule() {
    const schedule = [
        {
            day: "DAY 1: 断絶",
            items: [
                { time: "13:00", title: "集合・スマホ封印・オリエンテーション", desc: "外部ノイズの遮断" },
                { time: "15:00", title: "Extreme Sauna & Ice Bath", desc: "思考の強制停止・身体の覚醒" },
                { time: "18:00", title: "マインドフル・ディナー", desc: "五感の回復（地産地消）" },
                { time: "20:00", title: "ナイト・ジャーナリング", desc: "内面の言語化" },
            ]
        },
        {
            day: "DAY 2: 統合",
            items: [
                { time: "06:30", title: "寺院での朝瞑想・托鉢体験", desc: "精神性の向上・伝統への接続" },
                { time: "09:00", title: "リフレッシュ・タイマッサージ", desc: "身体の最終調整" },
                { time: "11:00", title: "プレミアムカフェでの「対話」と「振り返り」", desc: "日常への接続準備" },
                { time: "13:00", title: "スマホ返却・解散", desc: "新しい視点での再出発" },
            ]
        }
    ];

    return (
        <section id="schedule" className="py-24 bg-retreat-black text-retreat-white px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-retreat-gold tracking-widest text-sm uppercase block mb-4">Schedule</span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">1 Night 2 Days</h2>
                    <p className="text-white/60">超短期的・高密度のプログラム構成</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {schedule.map((day, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-white/5 p-8 rounded-sm border border-white/5"
                        >
                            <h3 className="text-xl font-serif text-retreat-gold mb-8 pb-4 border-b border-white/10">{day.day}</h3>
                            <div className="space-y-8 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10"></div>

                                {day.items.map((item, i) => (
                                    <div key={i} className="flex gap-4 relative pl-8">
                                        {/* Dot */}
                                        <div className="absolute left-0 top-1.5 w-4 h-4 bg-retreat-dark border border-retreat-gold rounded-full z-10"></div>

                                        <div>
                                            <div className="flex items-center gap-2 text-retreat-gold/80 text-sm font-medium mb-1">
                                                <Clock size={14} />
                                                {item.time}
                                            </div>
                                            <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                                            <p className="text-sm text-white/50">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
