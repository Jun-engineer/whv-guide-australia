type AdBannerProps = {
  slotName: string;
};

export function AdBanner({ slotName }: AdBannerProps) {
  return (
    <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-4 text-center text-sm text-amber-900">
      広告枠: {slotName} (AdSenseコードをここに挿入)
    </div>
  );
}
