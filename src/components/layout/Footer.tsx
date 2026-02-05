import Link from "next/link";

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "THE RESETについて", href: "/about" },
            { name: "リトリート", href: "/retreats" },
            { name: "コミュニティ", href: "/community" },
            { name: "ジャーナル", href: "/articles" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "プライバシーポリシー", href: "/privacy" },
            { name: "利用規約", href: "/terms" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            THE <span className="text-gold-400">RESET</span>
                        </Link>
                        <p className="mt-4 text-sm max-w-sm leading-relaxed">
                            情報社会に生きるすべての人のための、デジタルデトックスリトリート。<br />
                            本来のパフォーマンスと感性を取り戻す場所。
                        </p>
                        <p className="mt-4 text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} THE RESET. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h3 className="font-semibold text-white mb-4">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm hover:text-gold-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </footer>
    );
}
