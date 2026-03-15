import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding pt-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Blog
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Insights on <span className="text-gradient">Web, SaaS & AI</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tips and articles on web development, SaaS, AI tools, and startup tech from the Arshionix team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full border-border bg-card hover:border-brand-500/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <span className="text-xs font-semibold text-brand-400 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h2 className="font-heading text-xl font-bold mt-2 mb-2 group-hover:text-brand-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-brand-400 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="secondary" size="lg" className="rounded-xl">
                <Link href="/#contact">
                  Get a free consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
