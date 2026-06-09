"use client";

import { useState } from "react";

type ShareButtonsProps = {
  title: string;
};

export function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  function getUrl() {
    if (typeof window === "undefined") {
      return "";
    }
    return window.location.href;
  }

  function openShare(href: string) {
    window.open(href, "_blank", "noopener,noreferrer");
  }

  function shareToX() {
    const url = getUrl();
    openShare(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    );
  }

  function shareToLine() {
    const url = getUrl();
    openShare(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`);
  }

  function shareToFacebook() {
    const url = getUrl();
    openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const buttonClass =
    "rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-slate-500">シェア:</span>
      <button type="button" onClick={shareToX} className={buttonClass} aria-label="Xでシェア">
        X
      </button>
      <button type="button" onClick={shareToLine} className={buttonClass} aria-label="LINEでシェア">
        LINE
      </button>
      <button
        type="button"
        onClick={shareToFacebook}
        className={buttonClass}
        aria-label="Facebookでシェア"
      >
        Facebook
      </button>
      <button type="button" onClick={copyLink} className={buttonClass} aria-label="リンクをコピー">
        {copied ? "コピーしました" : "リンクをコピー"}
      </button>
    </div>
  );
}
