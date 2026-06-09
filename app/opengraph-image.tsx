import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "WH Guide Australia - オーストラリアワーホリ完全ガイド";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 55%, #0f172a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            opacity: 0.85,
          }}
        >
          WORKING HOLIDAY · AUSTRALIA
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          オーストラリアワーホリを、
          <br />
          迷わず進める。
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 34,
            fontWeight: 600,
            color: "#bae6fd",
          }}
        >
          WH Guide Australia
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
