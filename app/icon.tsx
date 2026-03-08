import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: 900,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-0.04em",
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          AS
        </span>
      </div>
    ),
    { ...size }
  );
}
