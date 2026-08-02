import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "オーストラリアワーホリコンパスのプライバシーポリシー。取得する情報、利用目的、第三者提供、Cookie、お問い合わせ窓口について記載しています。",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "1. 取得する情報",
    body: [
      "当サイトは、アカウント登録・掲示板の利用にあたり、次の情報を取得します。",
    ],
    list: [
      "メールアドレス（認証・連絡のため）",
      "表示名（掲示板での表示のため）",
      "電話番号（本人確認・不正利用防止のため。SMS認証に使用）",
      "投稿・コメント・通報などの利用に伴い入力された内容",
      "アクセス情報（IPアドレス、ブラウザ種別、Cookie等）",
    ],
  },
  {
    heading: "2. 利用目的",
    body: ["取得した情報は、次の目的で利用します。"],
    list: [
      "本人確認、ログイン認証、アカウント管理",
      "掲示板の運営、投稿・コメントの表示",
      "迷惑行為・不正利用の防止、通報対応、必要に応じた利用停止（BAN）",
      "サービスの改善、統計分析、お問い合わせへの対応",
    ],
  },
  {
    heading: "3. 第三者サービスの利用",
    body: [
      "当サイトは、運営にあたり以下の外部サービスを利用しており、各サービスのプライバシーポリシーが適用されます。",
    ],
    list: [
      "Supabase（認証・データベース）",
      "Vercel（ホスティング）",
      "Twilio（SMS認証の送信）",
      "Google Analytics 4（アクセス解析。Google LLC が提供）",
    ],
  },
  {
    heading: "4. アクセス解析（Google Analytics）について",
    body: [
      "当サイトは、サイトの利用状況を把握し、コンテンツと使い勝手を改善する目的で、Google LLC が提供するアクセス解析ツール「Google Analytics 4」を利用しています。Google Analytics は Cookie などの識別技術を用いて、閲覧ページ、参照元、滞在時間、おおよその地域、利用端末・ブラウザ種別といった利用情報を収集します。収集される情報は匿名で統計的に処理され、個人を特定するものではありません。",
      "これらの情報の取り扱いは Google のプライバシーポリシーおよび利用規約に従います。Google によるデータ利用については Google の「ポリシーと規約」ページをご確認ください。ユーザーは、ブラウザの Cookie 設定や「Google アナリティクス オプトアウト アドオン」の利用により、アクセス解析による収集を無効にできます。",
    ],
  },
  {
    heading: "5. Cookie・広告について",
    body: [
      "当サイトでは、利便性の向上およびアクセス解析のために Cookie を使用することがあります。ユーザーはブラウザの設定により Cookie を無効化できます。",
      "なお、当サイトでは現時点で広告は配信していません。将来的に Google AdSense などの広告配信を開始する場合は、広告配信のための Cookie や広告のパーソナライズについて本ポリシーで改めて開示し、必要な地域（EEA・英国・スイス等）では同意管理の仕組みを導入します。",
    ],
  },
  {
    heading: "6. 情報の管理・保管",
    body: [
      "取得した個人情報は、漏洩・滅失・改ざんを防ぐために適切に管理します。法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。",
    ],
  },
  {
    heading: "7. 開示・訂正・削除の請求",
    body: [
      "ご本人からの個人情報の開示・訂正・削除のご希望には、合理的な範囲で速やかに対応します。アカウントの削除をご希望の場合は、お問い合わせ窓口よりご連絡ください。",
    ],
  },
  {
    heading: "8. お問い合わせ",
    body: [
      "本ポリシーに関するお問い合わせは、サイト内のリクエスト／お問い合わせフォームよりご連絡ください。",
    ],
  },
  {
    heading: "9. 改定",
    body: [
      "本ポリシーは、法令の変更やサービス内容の変更に応じて予告なく改定する場合があります。改定後の内容は当ページに掲載した時点で効力を生じます。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">プライバシーポリシー</h1>
          <p className="text-sm text-slate-500">最終更新日: 2026年8月2日</p>
        </header>
        {sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="ml-5 list-disc space-y-1 text-sm text-slate-700">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </Container>
  );
}
