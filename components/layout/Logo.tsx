import Link from "next/link";

type LogoProps = {
  /** Pixel size of the square badge mark. */
  size?: number;
  /** Whether to show the wordmark text next to the mark. */
  showText?: boolean;
  /** Use lighter text colors for dark backgrounds. */
  variant?: "default" | "light";
  className?: string;
};

function LogoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="0.55" stopColor="#0369a1" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <clipPath id="logoRounded">
          <rect width="512" height="512" rx="112" />
        </clipPath>
      </defs>
      <g clipPath="url(#logoRounded)">
        <rect width="512" height="512" fill="url(#logoBg)" />
        <circle cx="256" cy="214" r="84" fill="#fbbf24" />
        <circle cx="256" cy="214" r="84" fill="#fde68a" opacity="0.25" />
        <path
          d="M-20 372 L120 252 L206 322 L300 230 L392 318 L460 268 L540 332 L540 540 L-20 540 Z"
          fill="#ffffff"
        />
        <path
          d="M-20 408 L96 320 L188 384 L286 300 L380 376 L470 318 L540 372 L540 540 L-20 540 Z"
          fill="#e2e8f0"
        />
      </g>
    </svg>
  );
}

export function Logo({ size = 36, showText = true, variant = "default", className }: LogoProps) {
  const primary = variant === "light" ? "text-white" : "text-sky-900";
  const secondary = variant === "light" ? "text-sky-200" : "text-sky-600";

  return (
    <Link href="/" aria-label="WH Guide Australia ホームへ" className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} />
      {showText ? (
        <span className="flex flex-col leading-none">
          <span className={`text-base font-extrabold tracking-tight ${primary}`}>WH Guide</span>
          <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${secondary}`}>
            Australia
          </span>
        </span>
      ) : null}
    </Link>
  );
}
