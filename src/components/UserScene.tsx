"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UserScene() {
    const scenes = [
        {
            src: "/images/scene-sauna-group.png",
            alt: "Friends enjoying sauna",
            caption: "語らいと、ととのい"
        },
        {
            src: "/images/scene-lounge-relax.png",
            alt: "Relaxing in the lounge",
            caption: "何もしない贅沢な時間"
        },
        {
            src: "/images/scene-nature-walk.png",
            alt: "Walking in nature",
            caption: "自然の中での解放"
        }
    ];

    return (
        <section className="py-24 bg-retreat-dark text-retreat-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-retreat-gold tracking-widest text-sm uppercase block mb-4">The Experience</span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">共に「個」を取り戻す旅</h2>
                    <p className="text-white/60">最高の仲間と、最高の時間を。</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {scenes.map((scene, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-sm"
                        >
                            <Image
                                src={scene.src}
                                alt={scene.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-retreat-white font-serif text-lg tracking-wide">{scene.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
