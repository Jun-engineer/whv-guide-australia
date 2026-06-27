import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * サーバーコンポーネントからの公開データ読み取り用クライアント。
 * セッションを保持しない anon クライアント（RLSの公開SELECTポリシーに従う）。
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  if (!hasSupabaseEnv) return null;
  return createClient(supabaseUrl as string, supabaseAnonKey as string, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
