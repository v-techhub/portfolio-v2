import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowRight, BookOpenText, Clock3, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Notes on shipping better products, writing cleaner code, and building with intent.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <main className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,123,42,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_25%)]" />
        <div className="relative space-y-5">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full px-3 py-1">Writing</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                <Sparkles className="mr-1.5 size-3.5" />
                Engineering notes
              </Badge>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Ideas, decisions, and lessons from building real software
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                A small archive of practical notes on product thinking, frontend craft, performance, and shipping with more confidence.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5">
                <BookOpenText className="size-3.5" />
                {sortedPosts.length} posts published
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5">
                <Clock3 className="size-3.5" />
                Professional notes and design thinking
              </span>
            </div>
          </BlurFade>
        </div>
      </section>

      {featuredPost && (
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <section className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    Featured article
                  </Badge>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                    {featuredPost.metadata.title}
                  </h2>
                  <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                    {featuredPost.metadata.summary}
                  </p>
                </div>
                <div className="hidden rounded-full border bg-background p-3 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground sm:block">
                  <ArrowRight className="size-5" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{formatDate(featuredPost.metadata.publishedAt)}</span>
                <span>•</span>
                <span>{featuredPost.readingTime} min read</span>
              </div>
            </Link>

            <div className="rounded-3xl border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                What I write about
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                  <span>Frontend systems that stay clean as they scale.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                  <span>Shipping habits that keep teams moving without chaos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                  <span>UI decisions that improve trust, speed, and clarity.</span>
                </li>
              </ul>
            </div>
          </section>
        </BlurFade>
      )}

      <section className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Archive
              </p>
              <h2 className="text-xl font-bold tracking-tight">More posts</h2>
            </div>
            <Button asChild variant="ghost" className="hidden rounded-full sm:inline-flex">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-2">
          {otherPosts.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 6 + id * 0.05} key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    Article
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.readingTime} min read
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{post.metadata.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {post.metadata.summary}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                  <span>{formatDate(post.metadata.publishedAt)}</span>
                  <span className="inline-flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    Read article
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
