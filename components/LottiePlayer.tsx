"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import type { CSSProperties } from "react";

type Props = {
  src: object | string;
  className?: string;
  style?: CSSProperties;
  loop?: boolean;
};

export default function LottiePlayer({ src, className, style, loop = true }: Props) {
  const [data, setData] = useState<object | null>(typeof src === "object" ? src : null);

  useEffect(() => {
    if (typeof src !== "string") return;
    let cancelled = false;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (data === null && typeof src === "string") return null;
  const animationData = typeof src === "object" ? src : data!;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
      style={style}
    />
  );
}
