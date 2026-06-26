import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "WH Guide Australia のプライバシーポリシー。取得する情報、利用目的、第三者提供、Cookie、お問い合わせ窓口について記載しています。",
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
      "Google AdSense（広告配信。Cookie を用いて興味関心に基づく広告を表示する場合があります）",
    ],
  },
  {
    heading: "4. Cookie・広告について",
    body: [
      "当サイトでは、利便性向上およびアクセス解析・広告配信のために Cookie を使用することがあります。Google を含む第三者配信事業者は Cookie を使用して、ユーザーの過去のアクセス情報に基づいて広告を配信します。ユーザーはブラウザ設定や Google の広告設定により、パーソナライズ広告を無効にできます。",
    ],
  },
  {
    heading: "5. 情報の管理・保管",
    body: [
      "取得した個人情報は、漏洩・滅失・改ざんを防ぐために適切に管理します。法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。",
    ],
  },
  {
    heading: "6. 開示・訂正・削除の請求",
    body: [
      "ご本人からの個人情報の開示・訂正・削除のご希望には、合理的な範囲で速やかに対応します。アカウントの削除をご希望の場合は、お問い合わせ窓口よりご連絡ください。",
    ],
  },
  {
    heading: "7. お問い合わせ",
    body: [
      "本ポリシーに関するお問い合わせは、サイト内のリクエスト／お問い合わせフォームよりご連絡ください。",
    ],
  },
  {
    heading: "8. 改定",
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
          <p className="text-sm text-slate-500">最終更新日: 2026年6月26日</p>
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
