import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "編集方針・情報の作り方",
  description:
    "オーストラリアワーホリコンパスの編集方針。トピックの選び方、公式情報の確認方法、確認日の扱い、州ごとの違いの扱い、体験ベース情報と公式情報の区別、修正の受付、AIを活用した制作の確認方法を説明します。",
  alternates: { canonical: "/editorial-policy" },
};

const sections = [
  {
    heading: "1. このページについて",
    body: [
      "オーストラリアワーホリコンパスは、オーストラリアのワーキングホリデーに関する情報を日本語でわかりやすく届けることを目的としたメディアです。当サイトがどのように記事を作り、どのように正確性を保とうとしているかをこのページで説明します。読者が情報の性質を理解し、安心して判断できるようにするための方針です。",
    ],
  },
  {
    heading: "2. トピックの選び方",
    body: [
      "取り上げるトピックは、ワーキングホリデーの渡航前準備から帰国までの実際の流れ（ビザ・準備・到着後の手続き・お金・仕事・ファーム・住居・交通・医療・日常生活・英語・エリア情報・帰国準備など）に沿って選んでいます。読者からのリクエストやフィードバック、実際につまずきやすいポイントを優先し、単に記事数を増やすことを目的とした作成は行いません。",
    ],
  },
  {
    heading: "3. 公式情報の確認方法",
    body: [
      "ビザ・税金・スーパーアニュエーション・銀行・医療などの重要トピック（正確性が生活や手続きに影響する分野）では、オーストラリア政府機関や各事業者の公式一次情報を確認したうえで記載しています。金額・条件・手続きなどの可変情報は断定を避け、最終的な判断は必ず公式情報で確認するよう案内しています。該当記事には公式ソースへのリンクを掲載しています。",
    ],
  },
  {
    heading: "4. 確認日（verifiedAt）の扱い",
    body: [
      "公式情報に基づく重要記事には、内容を公式ソースと照合した「確認日」を記載しています。制度や料金は予告なく変更されるため、確認日はあくまで「その時点で確認した」ことを示すもので、常に最新であることを保証するものではありません。確認日が古い場合は、公式情報で最新の内容をご確認ください。",
    ],
  },
  {
    heading: "5. 州ごとの違いの扱い",
    body: [
      "オーストラリアでは、運転免許・州税・季節労働の地域・各種手続きなどが州・準州（NSW・VIC・QLD・SA・WA・TAS・NT・ACT）ごとに異なります。当サイトでは、州によって異なる情報はできるだけその旨を明記し、一般論と州固有の情報を区別して伝えるようにしています。",
    ],
  },
  {
    heading: "6. 体験ベース情報と公式情報の区別",
    body: [
      "当サイトには、実際の生活・仕事・手続きの流れに基づく実務的な解説や体験ベースの情報が含まれます。こうした情報は、公式に定められた事実（法令・料金・条件など）とは性質が異なります。体験や一般的な傾向として述べている内容は公式な保証ではないため、両者を混同しないように記述し、公式な判断が必要な事項は公式情報へ誘導しています。実在しない体験談・口コミ・利用者数などを創作して掲載することはありません。",
    ],
  },
  {
    heading: "7. AIを活用した制作の確認",
    body: [
      "当サイトの記事制作には、下書きや構成の作成などでAI（生成AI）を活用しています。AIが生成した内容をそのまま公開することはせず、重要トピックについては公式一次情報との照合を行い、可変情報の断定を避け、確認日と公式ソースを付す方針で運営しています。当サイトは、弁護士・移民（ビザ）コンサルタント・税理士・会計士・医療従事者などの専門家による個別の内容確認を受けていると称することはありません。専門的な判断が必要な場合は、必ず有資格の専門家や公式機関にご相談ください。",
    ],
  },
  {
    heading: "8. 修正・フィードバックの受付",
    body: [
      "内容の誤りや古くなった情報にお気づきの場合、また記事のリクエストや体験談の共有は、リクエスト／お問い合わせフォームから受け付けています。いただいたご指摘は運営が確認し、必要に応じて記事を更新します。",
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">編集方針・情報の作り方</h1>
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
          </section>
        ))}

        <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6 text-sm">
          <Link href="/about" className="text-sky-700 underline hover:text-sky-800">
            運営者情報
          </Link>
          <Link href="/privacy" className="text-sky-700 underline hover:text-sky-800">
            プライバシーポリシー
          </Link>
          <Link href="/request" className="text-sky-700 underline hover:text-sky-800">
            修正・リクエスト
          </Link>
        </div>
      </div>
    </Container>
  );
}
