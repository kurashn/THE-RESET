"use client";

import { Section } from "@/components/Section";
import { Smartphone, BatteryWarning, LightbulbOff, CheckCircle, Moon, UserX } from "lucide-react";

const targets = [
    {
        icon: Smartphone,
        title: "常に通知が気になってしまう",
        subtitle: "Digital Addiction",
        description: "食事中も、寝る前も、無意識にスマホを触っている。情報の波に飲まれ、深い思考や休息の時間が取れていない。",
    },
    {
        icon: BatteryWarning,
        title: "決断疲れ・燃え尽き気味",
        subtitle: "Burnout / Fatigue",
        description: "日々の意思決定に追われ、脳が常に緊張状態にある。物理的に距離を置かないと、本当の意味で休まらない。",
    },
    {
        icon: LightbulbOff,
        title: "新しいアイデアが枯渇している",
        subtitle: "Creative Block",
        description: "アウトプットばかりでインプットの質が下がっている。クリエイティビティを取り戻すための「空白」が必要だ。",
    },
    {
        icon: CheckCircle,
        title: "完璧主義で休むのが怖い",
        subtitle: "Perfectionism",
        description: "「休んでいる間に置いていかれるのでは」という不安がある。何もしない時間を作ることに罪悪感を感じてしまう。",
    },
    {
        icon: Moon,
        title: "睡眠の質が低下している",
        subtitle: "Sleep Disorder",
        description: "ベッドに入ってもスマホを見てしまい、浅い眠りが続いている。朝起きてもスッキリしない日が続いている。",
    },
    {
        icon: UserX,
        title: "人間関係に疲れている",
        subtitle: "Social Fatigue",
        description: "SNSやチャットでのやり取りに追われ、一人の時間が持てない。誰とも繋がらない時間を作り、自分を取り戻したい。",
    },
];

export function Target() {
    return (
        <Section className="bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-3 block">Check List</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    こんな悩みは<span className="inline-block">ありませんか？</span>
                </h2>
                <p className="text-slate-400 text-lg">
                    一つでも当てはまるなら、脳の「リセット」が必要です。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {targets.map((target, index) => (
                    <div
                        key={index}
                        className="group p-10 rounded-3xl glass-dark border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/80"
                    >
                        <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500/20 transition-colors shadow-lg shadow-gold-900/10 ring-1 ring-gold-500/20 group-hover:ring-gold-500/40">
                            <target.icon className="w-8 h-8 text-gold-400 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors leading-snug">{target.title}</h3>
                        <p className="text-gold-600 text-xs font-bold uppercase tracking-wider mb-4">{target.subtitle}</p>
                        <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                            {target.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
