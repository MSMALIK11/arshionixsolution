import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Arshionix Blog`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <article className="section-padding pt-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
              <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </Button>
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wide">{post.category}</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">{post.description}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Full article coming soon. In the meantime, get in touch for a free consultation on your project.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="/contact">Get a free consultation</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
