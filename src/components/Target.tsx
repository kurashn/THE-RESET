"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User, Zap, Users, BrainCircuit } from "lucide-react";

export default function Target() {
    return (
        <section className="py-24 bg-retreat-dark text-retreat-white px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

                {/* Target Audience */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <User className="text-retreat-gold" size={28} />
                        <h3 className="text-2xl font-serif">こんな方へ</h3>
                    </div>
                    <p className="text-retreat-white/60 mb-8 leading-relaxed">
                        AIやテクノロジーの進化に追われ、情報の海で溺れかけている 20代・30代の男性リーダー・クリエイターへ。<br />
                        「最近、集中力が続かない」「情報疲れしている」「自分をアップデートしたい」と感じている方。
                    </p>
                    <ul className="space-y-4">
                        {["AIとの共存・競争に疲れを感じている", "常にデジタルに接続され、脳が休まる暇がない", "20代・30代で、次のステージへの飛躍を模索している"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="text-retreat-gold/70 mt-1 shrink-0" size={18} />
                                <span className="text-sm tracking-wide">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Value Proposition */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="text-retreat-gold" size={28} />
                        <h3 className="text-2xl font-serif">得られる価値</h3>
                    </div>
                    <p className="text-retreat-white/60 mb-8 leading-relaxed">
                        ただの休息ではありません。脳のパフォーマンスを最大化し、次のステージへ進むための戦略的撤退です。
                    </p>
                    <div className="space-y-6">
                        {[
                            { title: "脳のクリアリング", desc: "情報過多による「脳疲労」の完全解消", icon: BrainCircuit },
                            { title: "意思決定力の向上", desc: "静寂の中で優先順位を整理し、視界をクリアに", icon: Zap },
                            { title: "コミュニティ", desc: "志を同じくする同世代との、利害関係のない繋がり", icon: Users },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-sm border border-white/5">
                                <item.icon className="text-retreat-gold shrink-0" size={24} />
                                <div>
                                    <h4 className="font-medium mb-1 text-retreat-white">{item.title}</h4>
                                    <p className="text-xs text-retreat-white/50">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
