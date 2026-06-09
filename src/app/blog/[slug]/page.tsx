import { Button } from "@/components/ui/button";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { cn, formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Sparkles } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="size-3.5" />
            Engineering note
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <Clock3 className="size-3.5" />
            {post.readingTime} min read
          </span>
        </div>

        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            {post.metadata.title}
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
            {post.metadata.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>
              Published {formatDate(post.metadata.publishedAt)}
            </span>
            <span>•</span>
            <span>{DATA.name}</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <article
          className={cn(
            "prose max-w-none dark:prose-invert",
            "prose-headings:tracking-tight prose-headings:scroll-mt-24",
            "prose-p:leading-8 prose-li:leading-7",
            "prose-pre:rounded-2xl prose-pre:border prose-pre:bg-[#0b0b0c]",
            "prose-code:rounded-md prose-code:bg-muted prose-code:px-1 prose-code:py-0.5",
            "prose-a:font-medium prose-a:underline-offset-4",
            "prose-blockquote:border-l-primary prose-blockquote:font-medium",
          )}
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </section>

      <section className="flex flex-col gap-4 rounded-3xl border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Continue reading
          </p>
          <p className="text-sm text-muted-foreground">
            Want more notes on shipping, performance, and UI craft?
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/blog">More posts</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/">Portfolio home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
