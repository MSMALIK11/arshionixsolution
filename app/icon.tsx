import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon: same orbital A mark as main logo (ellipse + triangle).
 */
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
          background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #6366f1 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <svg
          width="28"
          height="32"
          viewBox="0 0 48 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <g transform="translate(2, 2) scale(0.92)">
            <ellipse
              cx="24"
              cy="24"
              rx="20"
              ry="10"
              transform="rotate(-18 24 24)"
              stroke="white"
              strokeWidth="2.4"
              fill="none"
            />
            <path
              d="M24 10 L36 38 H30 L27 30 H21 L18 38 H12 L24 10 Z M22.5 25 H25.5 L24 16.5 L22.5 25 Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
