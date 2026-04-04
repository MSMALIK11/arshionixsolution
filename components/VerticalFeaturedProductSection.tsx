import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Stethoscope } from "lucide-react";
import type { VerticalFeaturedProduct } from "@/lib/service-verticals";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProductGalleryCarousel from "@/components/ProductGalleryCarousel";

type Props = { product: VerticalFeaturedProduct };

export default function VerticalFeaturedProductSection({ product }: Props) {
  return (
    <section
      id="featured-product"
      className="scroll-mt-24 border-b border-border/60 bg-gradient-to-b from-brand-500/[0.04] via-transparent to-transparent"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            {product.eyebrow}
          </p>
          <div className="mb-4 flex justify-center gap-2">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-rose-600 text-white shadow-lg shadow-brand-500/25">
              <Stethoscope className="h-6 w-6" aria-hidden />
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-brand-600 dark:text-brand-400">
              <LayoutDashboard className="h-6 w-6" aria-hidden />
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {product.title}
          </h2>
          <p className="mt-3 text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-base">{product.subtitle}</p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{product.description}</p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {product.highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border/90 bg-card/80 p-6 text-left shadow-sm backdrop-blur-sm transition-colors hover:border-brand-500/25"
            >
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>

        {product.imageGalleryLayout === "carousel" ? (
          <ProductGalleryCarousel images={product.images} />
        ) : (
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:gap-10">
            {product.images.map((img, i) => (
              <figure
                key={img.src}
                className={cn(
                  "overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]",
                  i === 0 && "sm:col-span-2",
                  i % 2 === 1 && "lg:translate-y-4"
                )}
              >
                <div
                  className={cn(
                    "relative w-full bg-muted",
                    i === 0 ? "aspect-[21/9] sm:aspect-[2.4/1]" : "aspect-[16/10]"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes={
                      i === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1152px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 576px"
                    }
                    priority={i === 0}
                  />
                </div>
                <figcaption className="border-t border-border bg-card/95 px-4 py-3 text-center text-xs font-medium text-muted-foreground md:text-sm">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="rounded-xl shadow-lg shadow-brand-500/20" asChild>
            <Link href={`/portfolio/${product.portfolioSlug}`} className="inline-flex items-center gap-2">
              View product in portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl border-border" asChild>
            <Link href="/contact">Discuss healthcare builds</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
