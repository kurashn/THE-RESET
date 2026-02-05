import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";
import { getArticleBySlug, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Calendar, ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} | THE RESET Articles`,
        description: article.description,
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Header */}
                <article className="max-w-4xl mx-auto px-6 pt-10">
                    <Link href="/articles" className="inline-flex items-center text-slate-500 hover:text-gold-400 transition-colors mb-8 text-sm group">
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Articles
                    </Link>

                    <div className="mb-8">
                        <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-b border-white/10 pb-8">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {article.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {article.readTime} Read
                            </span>

                        </div>
                    </div>

                    {/* Thumbnail */}
                    {article.thumbnail && (
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/5">
                            <Image
                                src={article.thumbnail}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-3xl mx-auto pt-8 pb-20 article-content">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>

                    {/* Share / Author Footer */}
                    <div className="pt-10 flex justify-between items-center">
                        <div className="text-slate-400 text-sm">
                            {/* Author removed */}
                        </div>
                        <Button variant="outline" size="sm" className="gap-2 text-slate-400 hover:text-white border-white/10 hover:border-gold-500/50 hover:bg-gold-500/10">
                            <Share2 className="w-4 h-4" /> Share Article
                        </Button>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}

// Temporary Button import for this file since I used it above
import { Button } from "@/components/ui/Button";
