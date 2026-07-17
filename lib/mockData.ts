import type { ArticleCategory } from "@/types/article";
import type { ForumCategory, ForumComment, ForumPost } from "@/types/forum";
import type { Report } from "@/types/report";
import type { FeedbackRequest } from "@/types/feedback";

export const articleCategories: Array<{ slug: ArticleCategory; name: string }> = [
  { slug: "visa", name: "ビザ" },
  { slug: "preparation", name: "渡航前準備" },
  { slug: "arrival", name: "渡航後" },
  { slug: "tfn", name: "TFN" },
  { slug: "abn", name: "ABN" },
  { slug: "super", name: "Superannuation" },
  { slug: "tax-return", name: "タックスリターン" },
  { slug: "bank", name: "銀行口座" },
  { slug: "money", name: "送金・両替" },
  { slug: "sim", name: "SIM・通信" },
  { slug: "transport", name: "交通・決済" },
  { slug: "license", name: "運転免許" },
  { slug: "housing", name: "家探し" },
  { slug: "jobs", name: "仕事探し" },
  { slug: "farm", name: "ファーム" },
  { slug: "second-visa", name: "セカンドビザ" },
  { slug: "uber-eats", name: "Uber Eats" },
  { slug: "doordash", name: "DoorDash" },
  { slug: "cars", name: "車・交通" },
  { slug: "food", name: "食事" },
  { slug: "clothing", name: "服装" },
  { slug: "area", name: "エリアガイド" },
  { slug: "english", name: "英語学習" },
  { slug: "health", name: "健康・安全" },
];

export { articles } from "@/lib/content/articles";

export const forumCategories: ForumCategory[] = [
  { id: "c1", name: "家探し", slug: "housing", description: "シェアハウスや内見情報を共有" },
  { id: "c2", name: "仕事探し", slug: "jobs", description: "求人、面接、履歴書の相談" },
  { id: "c3", name: "ファームジョブ", slug: "farm", description: "地域や時給、体験談" },
  { id: "c4", name: "車・レンタカー", slug: "cars", description: "車購入・売買・トラブル相談" },
  { id: "c5", name: "ビザ", slug: "visa", description: "ビザ申請や条件の質問" },
  { id: "c6", name: "セカンドビザ", slug: "second-visa", description: "Specified Workや申請の情報" },
  { id: "c7", name: "ギグワーク", slug: "gig", description: "Uber Eats・DoorDashの相談" },
  { id: "c8", name: "税金", slug: "tax", description: "TFN・ABN・確定申告の相談" },
  { id: "c9", name: "生活相談", slug: "life", description: "現地生活の困りごと" },
  { id: "c10", name: "売ります・買います", slug: "buy-sell", description: "不用品の売買" },
  { id: "c11", name: "旅行", slug: "travel", description: "国内旅行や観光情報" },
  { id: "c12", name: "英語学習", slug: "english", description: "語学学校・勉強法・英語の悩み" },
  { id: "c13", name: "健康・医療", slug: "health", description: "病院・保険・メンタルヘルスの相談" },
  { id: "c14", name: "恋愛・出会い", slug: "relationships", description: "友達作り・恋愛・コミュニティ" },
  { id: "c15", name: "雑談", slug: "general", description: "自由な雑談スペース" },
  { id: "c16", name: "その他", slug: "other", description: "どのジャンルにも当てはまらない投稿" },
];

export const forumPosts: ForumPost[] = [
  {
    id: "p1",
    categorySlug: "housing",
    userId: "u1",
    authorName: "Mika",
    title: "シドニーで女性向けシェアハウスを探しています",
    body: "City周辺で週350ドル前後の物件情報を探しています。",
    isHidden: false,
    likeCount: 4,
    createdAt: "2026-06-08",
  },
  {
    id: "p2",
    categorySlug: "jobs",
    userId: "u2",
    authorName: "Ken",
    title: "カフェのトライアル面接で準備すべきこと",
    body: "英語自己紹介とトレー持ち運びは事前練習が有効でした。",
    isHidden: false,
    likeCount: 7,
    createdAt: "2026-06-07",
  },
  {
    id: "p3",
    categorySlug: "gig",
    userId: "u3",
    authorName: "Sho",
    title: "Uber Eatsの稼ぎ時を教えてください",
    body: "ブリスベンでの平日と週末の差を知りたいです。",
    isHidden: false,
    likeCount: 2,
    createdAt: "2026-06-06",
  },
];

export const forumComments: ForumComment[] = [
  {
    id: "cm1",
    postId: "p1",
    userId: "u2",
    authorName: "Ken",
    body: "Facebook Marketplaceでも見つかります。内見前に写真確認がおすすめです。",
    isHidden: false,
    createdAt: "2026-06-08",
  },
];

export const reports: Report[] = [
  {
    id: "r1",
    reporterName: "Mika",
    targetType: "post",
    targetId: "p3",
    reason: "スパムの可能性があります。",
    status: "pending",
    createdAt: "2026-06-08",
  },
];

export const feedbackRequests: FeedbackRequest[] = [
  {
    id: "f1",
    userId: "u1",
    authorName: "Mika",
    type: "article_request",
    pageUrl: "/farm",
    title: "ファームの地域別時給情報がほしい",
    body: "地域ごとの時給目安をまとめた記事を希望します。",
    status: "pending",
    createdAt: "2026-06-08",
  },
];
