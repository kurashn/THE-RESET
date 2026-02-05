"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Luxury Villa in Bangkok"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-950/90" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-gold-300 uppercase border border-gold-500/30 rounded-full bg-black/20 backdrop-blur-sm">
                        Thailand Digital Detox Retreat
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl mx-auto text-[1.65rem] md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.3]"
                >
                    情報疲れした脳を
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 inline-block">
                        タイで強制<span className="inline-block">リセットする。</span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200"
                >
                    デジタルに浸かりすぎたすべての人へ。
                    <br />
                    スマホのない環境で、本来のパフォーマンスを取り戻す旅を。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Button variant="premium" size="lg" className="w-full md:w-auto text-base px-8 h-12" asChild>
                        <Link href="/retreats">
                            プログラムを見る
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full md:w-auto h-12 border-white/20 text-white hover:bg-white/10 hover:text-white glass" asChild>
                        <Link href="/about">
                            THE RESETとは
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
            </motion.div>
        </section>
    );
}
