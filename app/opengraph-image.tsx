import { ImageResponse } from "next/og";

export const alt = "Arshionix — Digital Agency | Web Development, Software, AI & UI/UX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
            color: "white",
            fontSize: 42,
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          AS
        </div>
        <div style={{ color: "white", fontSize: 56, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>
          Arshionix
        </div>
        <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 28, fontWeight: 500 }}>
          Web Development · Software Development · AI Solutions
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 22, marginTop: 8 }}>
          Android Apps & UI/UX Design
        </div>
      </div>
    ),
    { ...size }
  );
}
