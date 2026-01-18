import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { TagPill } from "@/components/tag-pill";
import { NewsletterCTA } from "@/components/newsletter-cta";
import { ReadingProgress } from "@/components/reading-progress";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getEssayBySlug, essays } from "@/lib/essays";
import { ArrowLeft, Clock } from "lucide-react";

export function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export default async function EssayPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  // Calculate reading time from actual content
  const wordCount = essay.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header currentPage="Essays" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-3xl">
              <Link
                href="/essays"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                All essays
              </Link>

              <article className="prose prose-invert max-w-none">
                <header className="mb-8 not-prose">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <time className="text-sm text-muted-foreground">
                      {essay.date}
                    </time>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {readingTime} min read
                    </span>
                    <span className="text-muted-foreground">·</span>
                    {essay.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {essay.title}
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {essay.description}
                  </p>
                </header>

                {/* Essay content rendered from markdown */}
                <MarkdownRenderer content={essay.content} />
              </article>

{/* Newsletter CTA */}
              <div className="mt-12">
                <NewsletterCTA variant="compact" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
