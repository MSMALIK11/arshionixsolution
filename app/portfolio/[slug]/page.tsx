import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import VoiceAgentProductPage from "@/components/VoiceAgentProductPage";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Arshionix Portfolio`,
      description: project.description,
      images: project.screenshot ? [project.screenshot] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  if (project.showFullProductPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <VoiceAgentProductPage project={project} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Breadcrumb — same as Careers / Voice Agent page */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card/30">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{project.title}</li>
            </ol>
          </div>
        </nav>

        {/* Top section — same pattern as Careers */}
        <section className="py-24 md:py-32 text-center">
          <div className="container mx-auto px-6">
            <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
              <span className="w-5 h-0.5 bg-brand-400 inline-block" />
              {project.category}
              <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 leading-tight">
              {project.title}
            </h1>
            {project.outcome && (
              <p className="text-brand-400 font-medium text-lg mb-6">{project.outcome}</p>
            )}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {project.description}
            </p>
            <Button asChild size="lg" className="rounded-2xl shadow-xl">
              <Link href="#details">
                View project details <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <article id="details" className="section-padding pt-0 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {project.screenshot && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-muted mb-8">
                <Image
                  src={project.screenshot}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription ?? project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-muted/80 text-muted-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.showYourAnalysis && (
              <div className="mt-10 p-6 rounded-2xl border border-brand-500/30 bg-brand-500/5">
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">Get a custom assessment</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Tell us your use case and volume; we’ll outline where voice AI fits, suggest flow ideas, and give you a realistic timeline and scope.
                </p>
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/#contact">Request assessment</Link>
                </Button>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
              {project.liveUrl ? (
                <Button asChild size="lg" className="rounded-xl" variant="default">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View live
                  </a>
                </Button>
              ) : null}
              <Button asChild size="lg" variant="secondary" className="rounded-xl">
                <Link href="/#contact">Get a free consultation</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
