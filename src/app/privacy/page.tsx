"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="pt-24 pb-20">
                <Section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-white/10 pb-6">
                            プライバシーポリシー
                        </h1>

                        <div className="prose prose-invert prose-slate max-w-none">
                            <p>
                                THE RESET（以下、「当方」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第1条（個人情報）</h3>
                            <p>
                                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第2条（個人情報の収集方法）</h3>
                            <p>
                                当方は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当方の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第3条（個人情報を収集・利用する目的）</h3>
                            <p>
                                当方が個人情報を収集・利用する目的は、以下のとおりです。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>当方サービスの提供・運営のため</li>
                                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当方が提供する他のサービスの案内のメールを送付するため</li>
                                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、利用をお断りするため</li>
                                <li>上記の利用目的に付随する目的</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第4条（利用目的の変更）</h3>
                            <p>
                                当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                                利用目的の変更を行った場合には、変更後の目的について、当方所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
                            </p>

                            {/* 省略: 必要に応じて追加 */}

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第5条（お問い合わせ窓口）</h3>
                            <p>
                                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                            </p>
                            <p className="mt-4">
                                運営：THE RESET<br />
                                Eメールアドレス：contact@example.com
                            </p>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
