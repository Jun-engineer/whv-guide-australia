import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "WH Guide Australia の利用規約。サービスの利用条件、禁止事項、免責事項、掲示板利用上の注意について記載しています。",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "第1条（適用）",
    body: [
      "本規約は、WH Guide Australia（以下「当サイト」）が提供するサービスの利用条件を定めるものです。利用者は、本規約に同意のうえ当サイトを利用するものとします。",
    ],
  },
  {
    heading: "第2条（情報の正確性と免責）",
    body: [
      "当サイトに掲載する情報（ビザ・税金・銀行・交通・送金等）は、一般的な参考情報であり、正確性・最新性を保証するものではありません。制度・料金・手続きは変更される場合があるため、最終的な判断は必ず公式情報（政府機関・各事業者の公式サイト等）に基づいて行ってください。",
      "当サイトの情報を利用したことにより生じたいかなる損害についても、当サイトは責任を負いません。",
    ],
  },
  {
    heading: "第3条（アカウント）",
    body: [
      "掲示板等の一部機能の利用には、メールアドレスおよび電話番号による本人確認を伴うアカウント登録が必要です。利用者は、登録情報を正確に提供し、自己の責任で管理するものとします。",
    ],
  },
  {
    heading: "第4条（禁止事項）",
    body: ["利用者は、当サイトの利用にあたり、次の行為をしてはなりません。"],
    list: [
      "法令または公序良俗に違反する行為",
      "他者への誹謗中傷、嫌がらせ、差別的表現",
      "虚偽の情報、スパム、宣伝・勧誘を目的とした投稿",
      "詐欺、または詐欺を誘発する行為",
      "他者の個人情報を本人の同意なく掲載する行為",
      "当サイトの運営を妨害する行為、不正アクセス",
    ],
  },
  {
    heading: "第5条（投稿の管理・利用停止）",
    body: [
      "当サイトは、投稿が禁止事項に該当すると判断した場合、事前の通知なく当該投稿を非表示・削除できます。また、悪質な利用者に対しては、電話番号・アカウントを基準に利用停止（BAN）措置を行う場合があります。",
    ],
  },
  {
    heading: "第6条（広告）",
    body: [
      "当サイトは、第三者配信の広告サービス（Google AdSense 等）を利用しています。広告に関する詳細はプライバシーポリシーをご確認ください。",
    ],
  },
  {
    heading: "第7条（規約の変更）",
    body: [
      "当サイトは、必要と判断した場合、利用者に通知することなく本規約を変更できます。変更後の規約は当ページに掲載した時点で効力を生じます。",
    ],
  },
];

export default function TermsPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">利用規約</h1>
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
