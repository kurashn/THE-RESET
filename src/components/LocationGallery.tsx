"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LocationGallery() {
    const images = [
        {
            src: "/images/gallery-villa-exterior.png",
            alt: "Luxury Private Villa",
            title: "Private Villa",
            desc: "熱帯雨林に囲まれた、完全プライベートな空間"
        },
        {
            src: "/images/gallery-temple.png",
            alt: "Chiang Mai Temple",
            title: "Temple",
            desc: "街全体を包み込む、静謐な祈りの気配"
        },
        {
            src: "/images/gallery-food.png",
            alt: "Northern Thai Cuisine",
            title: "Food",
            desc: "五感を刺激する、美食の数々"
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
                    <span className="text-retreat-gold tracking-widest text-sm uppercase block mb-4">Location</span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">Chiang Mai</h2>
                    <p className="text-white/60">世界中のノマドと旅人を魅了する、「北方の薔薇」</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-serif text-retreat-white mb-2">{img.title}</h3>
                                <p className="text-sm text-white/70 tracking-wide">{img.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
