import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = hasSupabaseEnv
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        // /auth/callback で手動でコード/トークンを処理するため自動検出は無効化する
        // （有効だと code が二重に消費され OAuth ログインが失敗する）
        detectSessionInUrl: false,
        flowType: "pkce",
      },
    })
  : null;
