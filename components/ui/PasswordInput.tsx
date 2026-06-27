"use client";

import { forwardRef, useState } from "react";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput({ invalid, className, ...props }, ref) {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative mt-1">
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          className={`w-full rounded-lg border px-3 py-2 pr-11 ${
            invalid ? "border-rose-400" : "border-slate-300"
          } ${className ?? ""}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? "パスワードを隠す" : "パスワードを表示"}
          aria-pressed={visible}
          tabIndex={-1}
          className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-slate-500 transition hover:text-slate-700"
        >
          {visible ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 3l18 18" />
              <path d="M10.58 10.58a2 2 0 002.83 2.83" />
              <path d="M9.36 5.18A9.46 9.46 0 0112 5c5 0 9 4.5 9 7a12.3 12.3 0 01-2.16 3.19M6.61 6.61C4.62 7.97 3 10.07 3 12c0 0 4 7 9 7a8.9 8.9 0 003.39-.66" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    );
  },
);
