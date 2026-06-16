import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ReportPayload = {
  kind: "report";
  targetType: "post" | "comment" | "user";
  targetId: string;
  reason: string;
};

type FeedbackPayload = {
  kind: "feedback";
  type: string;
  title: string;
  body: string;
  pageUrl?: string;
};

type NotifyPayload = ReportPayload | FeedbackPayload;

const targetTypeLabel: Record<ReportPayload["targetType"], string> = {
  post: "投稿",
  comment: "コメント",
  user: "ユーザー",
};

const feedbackTypeLabel: Record<string, string> = {
  correction: "情報の修正依頼",
  article_request: "記事リクエスト",
  experience: "体験談の共有",
  question: "質問",
  other: "その他",
};

function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1)}…`;
}

function buildDiscordMessage(payload: NotifyPayload) {
  if (payload.kind === "report") {
    return {
      embeds: [
        {
          title: "🚨 新しい通報が届きました",
          color: 0xe11d48,
          fields: [
            { name: "対象", value: targetTypeLabel[payload.targetType] ?? payload.targetType, inline: true },
            { name: "対象ID", value: truncate(payload.targetId || "-", 100), inline: true },
            { name: "理由", value: truncate(payload.reason || "-", 1000) },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };
  }

  return {
    embeds: [
      {
        title: "📝 新しいリクエスト／フィードバック",
        color: 0x0284c7,
        fields: [
          { name: "種類", value: feedbackTypeLabel[payload.type] ?? payload.type, inline: true },
          { name: "ページ", value: truncate(payload.pageUrl || "（指定なし）", 200), inline: true },
          { name: "タイトル", value: truncate(payload.title || "-", 256) },
          { name: "本文", value: truncate(payload.body || "-", 1500) },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

function isValidPayload(value: unknown): value is NotifyPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  if (v.kind === "report") {
    return (
      (v.targetType === "post" || v.targetType === "comment" || v.targetType === "user") &&
      typeof v.targetId === "string" &&
      typeof v.reason === "string"
    );
  }
  if (v.kind === "feedback") {
    return typeof v.type === "string" && typeof v.title === "string" && typeof v.body === "string";
  }
  return false;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  // 未設定でもフォーム送信自体は成功扱いにする（通知だけスキップ）。
  if (!webhookUrl) {
    return NextResponse.json({ ok: true, notified: false });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json({ ok: false, error: "invalid payload" }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildDiscordMessage(payload)),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, notified: false }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, notified: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true, notified: true });
}
