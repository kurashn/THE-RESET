"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
            {/* Background with Blur */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Atmospheric background"
                    fill
                    className="object-cover blur-sm opacity-50"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-4xl md:text-6xl text-retreat-white mb-8 leading-tight">
                        本来のあなたを<br />取り戻す<br />旅に出よう。
                    </h2>
                    <p className="text-retreat-white/80 mb-8 text-lg tracking-wide border-l-2 border-retreat-gold pl-6 inline-block text-left">
                        必要なのは、<br />
                        わずか24時間の勇気ある撤退。
                    </p>

                    <div className="mb-10 text-retreat-white">
                        <p className="text-xl md:text-2xl font-serif mb-4 text-retreat-gold">
                            2026年4月ごろ 開催予定
                        </p>
                        <p className="text-sm tracking-widest text-retreat-white/60 mb-2 uppercase">Luxury Villa Included</p>
                        <p className="text-4xl md:text-5xl font-serif">
                            7.7<span className="text-2xl">万円</span>
                            <span className="text-sm block text-white/50 mt-1 font-sans tracking-wide">(税込)</span>
                        </p>
                    </div>

                    <div>
                        <a
                            href="https://tzvbxig2.autosns.app/line"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#06C755] hover:bg-[#05b34c] text-white px-12 py-4 rounded-sm font-medium text-lg tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,199,85,0.3)]"
                        >
                            公式LINEで告知を受け取る
                        </a>
                        <p className="mt-6 text-xs text-retreat-white/40">
                            ※ 詳細な日程や募集開始はLINEにてお知らせします
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
