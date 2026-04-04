"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type FocusEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5500;

export type CarouselImage = { src: string; alt: string; caption: string };

type Props = { images: CarouselImage[] };

export default function ProductGalleryCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focusedWithin, setFocusedWithin] = useState(false);
  const pauseAutoplay = hovered || focusedWithin;
  const n = images.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((prev) => (prev + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (n <= 1 || pauseAutoplay) return;
    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % n);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [n, pauseAutoplay]);

  if (n === 0) return null;

  const current = images[index];

  return (
    <div
      className="mx-auto mt-14 max-w-4xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusedWithin(true)}
      onBlurCapture={(e: FocusEvent<HTMLDivElement>) => {
        const next = e.relatedTarget as Node | null;
        if (!next || !e.currentTarget.contains(next)) setFocusedWithin(false);
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Product screenshots"
      >
        <div className="relative aspect-[16/10] w-full bg-muted">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover object-top transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority={index === 0}
          />
        </div>

        {n > 1 ? (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-border/80 bg-background/90 shadow-md backdrop-blur-sm hover:bg-background"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-border/80 bg-background/90 shadow-md backdrop-blur-sm hover:bg-background"
              onClick={() => go(1)}
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </Button>
          </>
        ) : null}
      </div>

      <p
        className="mt-4 text-center text-sm font-medium text-muted-foreground md:text-base"
        aria-live="polite"
      >
        {current.caption}
      </p>

      {n > 1 ? (
        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Screenshot">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show screenshot ${i + 1} of ${n}`}
              className={cn(
                "h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                i === index ? "w-8 bg-brand-500" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
