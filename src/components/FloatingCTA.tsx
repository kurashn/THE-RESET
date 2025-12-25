"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show only after scrolling past 100vh (Hero section)
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isClosed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
                >
                    <div className="relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsClosed(true)}
                            className="absolute -top-3 -right-3 bg-white text-retreat-dark rounded-full p-1 shadow-lg z-50 border border-retreat-dark/10"
                        >
                            <X size={16} />
                        </button>

                        <a
                            href="https://lin.ee/nU6VjR0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-[#06C755] text-white text-center py-4 rounded-full shadow-2xl font-bold tracking-wider relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <span className="text-xl">LINEで優先案内を受け取る</span>
                            </span>
                            {/* Shine Effect */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
