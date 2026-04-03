"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Overall visual height (width scales) */
  height?: number;
  className?: string;
  /** Show wordmark + SOLUTIONS (false = icon mark only) */
  wordmark?: boolean;
  "aria-label"?: string;
  /** Hide from AT when wrapped in a labeled link */
  "aria-hidden"?: boolean;
};

/**
 * Clean vector logo (orbital A + Arshionix Solutions).
 * Colors follow --logo-* CSS variables in globals.css (light/dark).
 */
export function ArshionixLogoSvg({
  height = 40,
  wordmark = true,
  className,
  "aria-label": ariaLabel = "Arshionix Solutions",
  "aria-hidden": ariaHidden,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const gOrbit = `lo_${uid}_orbit`;
  const gTri = `lo_${uid}_tri`;
  const gIx = `lo_${uid}_ix`;

  const vbW = wordmark ? 268 : 48;
  const vbH = 52;
  const w = wordmark ? (height / vbH) * vbW : height;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbW} ${vbH}`}
      width={w}
      height={height}
      className={cn("arshionix-logo shrink-0", className)}
      aria-label={ariaHidden ? undefined : ariaLabel}
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden ? true : undefined}
    >
      <defs>
        <linearGradient id={gOrbit} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--logo-orbit-start, #0ea5e9)" />
          <stop offset="100%" stopColor="var(--logo-orbit-end, #7c3aed)" />
        </linearGradient>
        <linearGradient id={gTri} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--logo-a-start, #4f46e5)" />
          <stop offset="100%" stopColor="var(--logo-a-end, #7c3aed)" />
        </linearGradient>
        <linearGradient id={gIx} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--logo-ix-start, #6366f1)" />
          <stop offset="100%" stopColor="var(--logo-ix-end, #a855f7)" />
        </linearGradient>
        <filter id={`${uid}_g`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="0.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(2, 2) scale(0.92)">
        <ellipse
          cx="24"
          cy="24"
          rx="20"
          ry="10"
          transform="rotate(-18 24 24)"
          stroke={`url(#${gOrbit})`}
          strokeWidth="2.4"
          fill="none"
          filter={`url(#${uid}_g)`}
        />
        <path
          d="M24 10 L36 38 H30 L27 30 H21 L18 38 H12 L24 10 Z M22.5 25 H25.5 L24 16.5 L22.5 25 Z"
          fill={`url(#${gTri})`}
          filter={`url(#${uid}_g)`}
        />
      </g>

      {wordmark && (
        <>
          <text
            x="54"
            y="33"
            fontFamily="var(--font-sans, ui-sans-serif, system-ui)"
            fontSize="22"
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            <tspan fill="currentColor">Arshi</tspan>
            <tspan fill={`url(#${gIx})`}>onix</tspan>
          </text>
          <text
            x="54"
            y="47"
            fontFamily="var(--font-sans, ui-sans-serif, system-ui)"
            fontSize="7.5"
            fontWeight="600"
            letterSpacing="0.28em"
            fill="currentColor"
            opacity={0.55}
          >
            SOLUTIONS
          </text>
        </>
      )}
    </svg>
  );
}
