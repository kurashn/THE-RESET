"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/Section";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500/30">
            <Navbar />

            <main className="pt-24 pb-20">
                <Section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-white/10 pb-6">
                            利用規約
                        </h1>

                        <div className="prose prose-invert prose-slate max-w-none">
                            <p>
                                この利用規約（以下，「本規約」といいます。）は，THE RESET（以下，「当方」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第1条（適用）</h3>
                            <p>
                                本規約は，ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                                当方は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
                                本規約の規定が前項の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第2条（利用登録）</h3>
                            <p>
                                本サービスにおいては，登録希望者が本規約に同意の上，当方の定める方法によって利用登録を申請し，当方がこれを承認することによって，利用登録が完了するものとします。
                                当方は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                                <li>本規約に違反したことがある者からの申請である場合</li>
                                <li>その他，当方が利用登録を相当でないと判断した場合</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第3条（禁止事項）</h3>
                            <p>
                                ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>法令または公序良俗に違反する行為</li>
                                <li>犯罪行為に関連する行為</li>
                                <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                                <li>当方，ほかのユーザー，のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                                <li>当方のサービスの運営を妨害するおそれのある行為</li>
                                <li>不正アクセスをし，またはこれを試みる行為</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第4条（本サービスの提供の停止等）</h3>
                            <p>
                                当方は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                                <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                                <li>その他，当方が本サービスの提供が困難と判断した場合</li>
                            </ul>
                            <p>
                                当方は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第5条（免責事項）</h3>
                            <p>
                                当方の債務不履行責任は，当方の故意または重過失によらない場合には免責されるものとします。
                                当方は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">第6条（準拠法・裁判管轄）</h3>
                            <p>
                                本規約の解釈にあたっては，日本法を準拠法とします。
                                本サービスに関して紛争が生じた場合には，当方の本店所在地を管轄する裁判所を専属的合意管轄とします。
                            </p>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
