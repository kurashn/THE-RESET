"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Atmospheric sauna and nature retreat"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/60 via-transparent to-retreat-dark/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-retreat-gold tracking-[0.2em] font-medium mb-6 uppercase"
                >
                    The Reset - Chiang Mai
                </motion.p>

                <h1 className="font-serif text-lg md:text-2xl lg:text-4xl leading-loose text-retreat-white mb-8 drop-shadow-lg tracking-[0.2em] font-light">
                    情報のノイズを断ち、<br />
                    本来の「個」を取り戻す24時間
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="https://tzvbxig2.autosns.app/line"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#06C755] text-white px-8 py-3 rounded-sm hover:bg-[#05b34c] hover:scale-105 transition-all duration-300 tracking-widest text-sm shadow-lg font-medium"
                        >
                            LINEで優先案内を受け取る
                        </a>
                        <a
                            href="#program"
                            className="inline-block border border-retreat-white/30 bg-white/10 backdrop-blur-sm text-retreat-white px-8 py-3 rounded-sm hover:bg-retreat-gold hover:border-retreat-gold hover:text-retreat-dark hover:scale-105 transition-all duration-300 tracking-widest text-sm"
                        >
                            PROGRAM
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-retreat-white/50 animate-bounce"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
