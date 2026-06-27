"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { useAuth } from "@/components/auth/AuthProvider";
import { PhoneVerification } from "@/components/auth/PhoneVerification";

function safeRedirect(value: string | null): string {
  if (value && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/";
}

function VerifyPhoneInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loading, isLoggedIn, phoneVerified } = useAuth();

  const target = safeRedirect(searchParams.get("redirect"));

  if (loading) {
    return <p className="text-center text-sm text-slate-500">読み込み中…</p>;
  }

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <p className="text-sm text-amber-900">
          電話番号認証にはログインが必要です。ログイン後に再度お試しください。
        </p>
        <a
          href="/login"
          className="mt-4 inline-block rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white"
        >
          ログインページへ
        </a>
      </div>
    );
  }

  if (phoneVerified) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-sm text-emerald-800">電話番号の認証は完了しています。</p>
        <button
          type="button"
          onClick={() => {
            router.replace(target);
            router.refresh();
          }}
          className="mt-4 inline-block rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white"
        >
          続ける
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">電話番号の認証</h1>
        <p className="mt-2 text-sm text-slate-600">
          ご登録の電話番号にSMSで6桁の認証コードを送信します。認証を完了すると、投稿・コメントなどの機能がご利用いただけます。
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <PhoneVerification
          onVerified={() => {
            router.replace(target);
            router.refresh();
          }}
        />
      </div>
    </div>
  );
}

export default function VerifyPhonePage() {
  return (
    <Container className="py-10">
      <Suspense
        fallback={<p className="text-center text-sm text-slate-500">読み込み中…</p>}
      >
        <VerifyPhoneInner />
      </Suspense>
    </Container>
  );
}
