import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  GraduationCap,
  LayoutGrid,
  Sparkles,
  Stethoscope,
  Store,
  Target,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceVerticals } from "@/lib/service-verticals";

const slugIcon = {
  "healthcare-websites": Stethoscope,
  "business-websites": Store,
  "personal-branding-websites": UserRound,
  "school-websites": GraduationCap,
} as const;

const trustChips = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: Target, text: "Clear scope before kickoff" },
  { icon: Sparkles, text: "Mobile-first & fast" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative scroll-mt-24 overflow-hidden border-y border-border bg-gradient-to-b from-muted/30 via-background to-muted/20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(37,99,235,0.08),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]"
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold tracking-[0.2em] uppercase dark:text-brand-400">
            <span className="h-px w-8 bg-brand-500/60" aria-hidden />
            About us
            <span className="h-px w-8 bg-brand-500/60" aria-hidden />
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[2.75rem] lg:leading-tight">
            Websites that earn trust —{" "}
            <span className="text-gradient">before the first call</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Arshionix is a focused studio: we build high-trust sites for practices, businesses, schools, and personal
            brands. You always know which door to open.
          </p>
        </div>

        {/* Trust strip */}
        <div className="mx-auto mb-14 flex max-w-4xl flex-wrap justify-center gap-3 md:mb-16 md:gap-4">
          {trustChips.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden />
              {text}
            </div>
          ))}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Story + CTAs */}
          <div className="lg:col-span-6 xl:col-span-7">
            <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">Why clients choose us</h3>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                <strong className="font-semibold text-foreground">Arshionix</strong> builds sites for{" "}
                <Link href="/healthcare-websites" className="font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300">
                  healthcare
                </Link>
                ,{" "}
                <Link href="/business-websites" className="font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300">
                  local business
                </Link>
                ,{" "}
                <Link href="/school-websites" className="font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300">
                  schools
                </Link>
                , and{" "}
                <Link href="/personal-branding-websites" className="font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300">
                  personal brands
                </Link>
                . Same team, same quality bar — different playbooks so your site fits how you actually win work.
              </p>
              <p>
                We&apos;re not a “we do everything” agency. If you match one of our tracks, you get a clear path: what
                we build, how we work, and what happens when you reach out — no vague retainers or mystery pricing
                dance.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="group rounded-xl shadow-lg shadow-brand-500/15" asChild>
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-border bg-background/50" asChild>
                <Link href="/services">
                  Browse services
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-70" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="rounded-xl text-muted-foreground hover:text-foreground" asChild>
                <Link href="/about">More about our story</Link>
              </Button>
            </div>
          </div>

          {/* Four doors */}
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground lg:text-left">
              Four ways we help
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceVerticals.map((v) => {
                const Icon = slugIcon[v.slug as keyof typeof slugIcon] ?? LayoutGrid;
                return (
                  <Link
                    key={v.slug}
                    href={`/${v.slug}`}
                    className="group relative flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/35 hover:shadow-lg hover:shadow-brand-500/10 md:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-md shadow-brand-500/20 ring-1 ring-white/10 transition-transform group-hover:scale-[1.03]">
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block font-heading text-sm font-bold text-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400 md:text-base">
                        {v.navLabel}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-2">{v.headline}</span>
                    </span>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
