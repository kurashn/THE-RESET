"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";
import { articles } from "@/lib/articles";
import { Clock, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="">
                <Section className="relative min-h-[400px] flex items-center justify-center text-center overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/articles_hero_cover.png"
                            alt="Articles Cover"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
                    </div>

                    <div className="relative z-10 pt-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                            記事・コラム
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            ウェルネス、ビジネス、そしてタイの深い魅力について。<br />
                            あなたの知的好奇心を満たすストーリーをお届けします。
                        </p>
                    </div>
                </Section>

                <Section className="py-20" containerClassName="px-0 md:px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-10">
                        {articles.map((article) => (
                            <Link href={`/articles/${article.slug}`} key={article.slug} className="group block h-full">
                                <div className="bg-slate-900 md:rounded-2xl overflow-hidden border-y md:border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-black/20 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-white/10 text-gold-400 text-xs font-bold uppercase tracking-wider">
                                                {article.category}
                                            </span>
                                        </div>
                                        {article.thumbnail && (
                                            <Image
                                                src={article.thumbnail}
                                                alt={article.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Tag className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors line-clamp-2">
                                            {article.title}
                                        </h2>

                                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                                            {article.description}
                                        </p>

                                        <div className="flex items-center text-gold-500 text-sm font-bold group-hover:translate-x-1 transition-transform">
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
