type ReportNotification = {
  kind: "report";
  targetType: "post" | "comment" | "user";
  targetId: string;
  reason: string;
};

type FeedbackNotification = {
  kind: "feedback";
  type: string;
  title: string;
  body: string;
  pageUrl?: string;
};

export type NotificationPayload = ReportNotification | FeedbackNotification;

/**
 * /api/notify 経由でDiscordへ通知を送ります。
 * 通知に失敗してもフォーム送信のUXは止めたくないため、例外は握りつぶします。
 */
export async function sendNotification(payload: NotificationPayload): Promise<void> {
  try {
    await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // 通知失敗は無視（データはSupabaseに保存済み）
  }
}
