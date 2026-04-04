import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  LayoutTemplate,
  Lightbulb,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { ServiceVertical } from "@/lib/service-verticals";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import VerticalFeaturedProductSection from "@/components/VerticalFeaturedProductSection";

type Props = { vertical: ServiceVertical };

const whatWeBuildIcons = [Building2, LayoutTemplate, Users, MapPin, Calendar, BookOpen] as const;

function SectionEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3",
        className
      )}
    >
      {children}
    </p>
  );
}

export default function ServiceVerticalPage({ vertical }: Props) {
  const bookHref = site.calendly || "/contact";
  const bookExternal = Boolean(site.calendly);

  const hasExtendedFlow = Boolean(vertical.howWeHelp || vertical.whatWeBuild);
  const showJumpNav = hasExtendedFlow || Boolean(vertical.featuredProduct);
  const featuresTitle = vertical.featuresTitle ?? "What you get";
  const featuresSubhead =
    vertical.featuresSubhead ?? "Features we focus on for this type of project.";

  const jumpLinks = [
    ...(vertical.featuredProduct ? [{ href: "#featured-product", label: "Featured product" }] : []),
    { href: "#challenge", label: "Challenge" },
    { href: "#approach", label: "Approach" },
    ...(vertical.howWeHelp ? [{ href: "#how-we-help", label: "How we help" }] : []),
    ...(vertical.whatWeBuild ? [{ href: "#what-we-build", label: "What we build" }] : []),
    { href: "#what-you-get", label: featuresTitle },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(124,58,237,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(139,92,246,0.1),transparent)]"
            aria-hidden
          />
          <div className="container relative mx-auto px-6 py-14 md:py-20 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm md:text-sm">
                <li>
                  <Link href="/" className="transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                    Home
                  </Link>
                </li>
                <li className="text-border" aria-hidden>
                  /
                </li>
                <li className="font-medium text-foreground">{vertical.pageTitle}</li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,380px)] lg:items-start lg:gap-16">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-brand-600 dark:text-brand-400">
                  <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="text-sm font-medium">Service detail</span>
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                  {vertical.headline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {vertical.subhead}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button size="lg" className="group rounded-xl shadow-lg shadow-brand-500/20" asChild>
                    <a
                      href={bookHref}
                      {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      Book a call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-xl border-border bg-background/50 backdrop-blur-sm" asChild>
                    <Link href="/contact">
                      Send a message
                      <ArrowUpRight className="ml-2 h-4 w-4 opacity-70" />
                    </Link>
                  </Button>
                </div>
              </div>

              <aside className="rounded-2xl border border-border/90 bg-card/80 p-6 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.12)] backdrop-blur-md dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]">
                <div className="flex items-start gap-3 border-b border-border/70 pb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-md">
                    <Compass className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">Typical engagement</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Discovery → structure & content → design → build → launch. Timelines depend on scope; we&apos;ll
                      outline a realistic plan on a short call.
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Clear proposal and milestones before kickoff</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Mobile-first, fast pages, SEO-ready structure</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Handoff you can own — or ongoing support if you prefer</span>
                  </li>
                </ul>
              </aside>
            </div>

            {showJumpNav && (
              <nav
                className="mt-12 border-t border-border/80 pt-8"
                aria-label="On this page"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
                <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {jumpLinks.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:bg-brand-500/[0.06] hover:text-brand-700 dark:hover:text-brand-300"
                    >
                      {label}
                      <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />
                    </a>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </section>

        {vertical.featuredProduct ? <VerticalFeaturedProductSection product={vertical.featuredProduct} /> : null}

        {/* Challenge */}
        <section id="challenge" className="scroll-mt-24 border-b border-border/60 bg-muted/15">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <SectionEyebrow>Context</SectionEyebrow>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Lightbulb className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="font-heading mt-6 text-2xl font-bold tracking-tight md:text-3xl">{vertical.problemTitle}</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{vertical.problemBody}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="scroll-mt-24">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/[0.07] via-card to-violet-500/[0.06] p-8 md:p-12">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl dark:bg-violet-500/10"
                  aria-hidden
                />
                <div className="relative">
                  <SectionEyebrow>Strategy</SectionEyebrow>
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-background/80 text-brand-600 shadow-inner dark:text-brand-400">
                      <Target className="h-7 w-7" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{vertical.solutionTitle}</h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{vertical.solutionBody}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {vertical.howWeHelp && (
          <section id="how-we-help" className="scroll-mt-24 border-y border-border bg-muted/20">
            <div className="container mx-auto px-6 py-16 md:py-20">
              <div className="mx-auto max-w-4xl text-center">
                <SectionEyebrow className="text-center">Partnership</SectionEyebrow>
                <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                  {vertical.howWeHelp.title}
                </h2>
                {vertical.howWeHelp.subhead && (
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {vertical.howWeHelp.subhead}
                  </p>
                )}
              </div>
              <ol className="mx-auto mt-12 grid max-w-4xl gap-5">
                {vertical.howWeHelp.items.map((item, i) => (
                  <li
                    key={item.title}
                    className="group relative flex gap-5 rounded-2xl border border-border/80 bg-card p-6 transition-all duration-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 md:gap-6 md:p-8"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-base font-bold text-white shadow-lg shadow-brand-500/25 ring-4 ring-background transition-transform group-hover:scale-[1.02]"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-heading text-lg font-bold md:text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {vertical.whatWeBuild && (
          <section id="what-we-build" className="scroll-mt-24">
            <div className="container mx-auto px-6 py-16 md:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <SectionEyebrow className="text-center">Deliverables</SectionEyebrow>
                <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                  {vertical.whatWeBuild.title}
                </h2>
                {vertical.whatWeBuild.subhead && (
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {vertical.whatWeBuild.subhead}
                  </p>
                )}
              </div>
              <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {vertical.whatWeBuild.items.map((item, i) => {
                  const Icon = whatWeBuildIcons[i % whatWeBuildIcons.length];
                  return (
                    <div
                      key={item.title}
                      className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/25 hover:shadow-lg md:p-7"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-violet-500/10 text-brand-600 dark:text-brand-400">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="font-heading text-base font-bold md:text-lg">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* What you get */}
        <section id="what-you-get" className="scroll-mt-24 border-t border-border bg-muted/15">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow className="text-center">Quality</SectionEyebrow>
              <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">{featuresTitle}</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">{featuresSubhead}</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
              {vertical.features.map((f) => (
                <div
                  key={f.title}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 pl-6 transition-all hover:border-brand-500/25 md:p-8 md:pl-8"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-500 to-violet-600"
                    aria-hidden
                  />
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-0.5 h-8 w-8 shrink-0 text-brand-500" aria-hidden />
                    <div>
                      <h3 className="font-heading text-lg font-bold">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-b from-transparent via-brand-500/[0.06] to-violet-500/[0.05] py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl rounded-3xl border border-border/80 bg-card/90 p-8 text-center shadow-[0_24px_60px_-24px_rgba(37,99,235,0.2)] backdrop-blur-sm dark:bg-card/80 md:p-12">
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Ready to talk?</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Tell us about your practice, business, or brand — we&apos;ll suggest a simple next step.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" className="rounded-xl" asChild>
                  <a href={bookHref} {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    Book a call
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-xl" asChild>
                  <Link href="/contact">Contact form</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                <Link href="/#services" className="inline-flex items-center gap-1 text-brand-600 transition-colors hover:underline dark:text-brand-400">
                  <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
                  Back to all services
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
