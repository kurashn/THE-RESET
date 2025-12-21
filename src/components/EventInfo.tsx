"use client";

import { motion } from "framer-motion";

export default function EventInfo() {
    return (
        <section className="py-16 bg-retreat-gold text-retreat-dark px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-y-2 border-retreat-dark py-8"
                >
                    <span className="text-sm tracking-[0.3em] uppercase block mb-4 font-bold opacity-70">Next Retreat</span>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">2026年4月ごろ<br /> 開催予定</h2>
                    <div className="flex items-center justify-center gap-4 text-lg font-medium opacity-90">
                        <span>1 Night 2 Days</span>
                        <span className="w-1 h-1 bg-retreat-dark rounded-full" />
                        <span>First Edition</span>
                    </div>
                </motion.div>
                <p className="mt-6 text-sm md:text-base tracking-wide opacity-80 max-w-2xl mx-auto leading-relaxed">
                    記念すべき第1回開催が決定いたしました。<br />
                    乾季の終わりの最も美しい季節、チェンマイでお待ちしております。
                </p>
            </div>
        </section>
    );
}
