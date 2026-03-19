"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArshionixLogoSvg } from "@/components/ArshionixLogoSvg";

type Props = {
  variant?: "full" | "compact" | "icon";
  className?: string;
};

/** Icon-only mark (orbital A) — themeable via --logo-* */
export function BrandMark({ className, size = 36 }: { className?: string; size?: number }) {
  return <ArshionixLogoSvg wordmark={false} height={size} className={className} aria-hidden />;
}

export default function BrandLogo({ variant = "compact", className }: Props) {
  if (variant === "icon") {
    return (
      <Link href="/" className={cn("inline-flex", className)} aria-label="Arshionix Solutions home">
        <BrandMark size={40} />
      </Link>
    );
  }

  if (variant === "full") {
    return (
      <Link
        href="/"
        className={cn("inline-flex text-foreground hover:opacity-95 transition-opacity", className)}
        aria-label="Arshionix Solutions home"
      >
        <ArshionixLogoSvg wordmark height={56} className="max-w-full" />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center text-foreground hover:opacity-95 transition-opacity", className)}
      aria-label="Arshionix Solutions home"
    >
      <ArshionixLogoSvg wordmark height={40} className="md:h-[44px] md:w-auto" />
    </Link>
  );
}
