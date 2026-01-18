import Link from "next/link";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ProfileCard } from "@/components/profile-card";
import { NewsletterCTA } from "@/components/newsletter-cta";
import { Footer } from "@/components/footer";
import { QuoteHighlight } from "@/components/quote-highlight";
import { CurrentlyStatus } from "@/components/currently-status";
import { TypingTagline } from "@/components/typing-tagline";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="Builder · Writing about business, tech, India, ideas" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
              {/* Left column - intro and content */}
              <div className="flex-1">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up">
                  {"Hi, I'm Kunal Kabra."}
                </h1>

                <div className="mb-6 text-lg animate-fade-in-up delay-100">
                  <p className="text-muted-foreground mb-2">
                    This is my home for articles, learning notes, and reading.
                  </p>
                  <p className="h-7">
                    <TypingTagline />
                  </p>
                </div>

                {/* Currently status */}
                <div className="mb-8 animate-fade-in-up delay-200">
                  <CurrentlyStatus />
                </div>

                {/* Start here section */}
                <section className="mb-12">
                  <h2 className="mb-4 text-lg font-semibold text-foreground">
                    Start here
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    If you are new here, you can start going through the following:
                  </p>

                  <div className="space-y-4 animate-fade-in-up delay-300">
                    <Link
                      href="/essays"
                      className="group block rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:bg-card/50"
                    >
                      <span className="text-lg font-semibold text-primary group-hover:underline">
                        Essays
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Business & strategy · Technology · India & manufacturing · Philosophy
                      </p>
                    </Link>

                    <Link
                      href="/problems"
                      className="group block rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:bg-card/50"
                    >
                      <span className="text-lg font-semibold text-primary group-hover:underline">
                        {"Problems I'm exploring"}
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Real questions with constraints and economics attached
                      </p>
                    </Link>

                    <Link
                      href="/reading"
                      className="group block rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:bg-card/50"
                    >
                      <span className="text-lg font-semibold text-primary group-hover:underline">
                        Reading & resources
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Books, papers, links, and notes that have shaped how I think
                      </p>
                    </Link>

                    <Link
                      href="/notes"
                      className="group block rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:bg-card/50"
                    >
                      <span className="text-lg font-semibold text-primary group-hover:underline">
                        Learning notes
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Fragments of insight, one-liners, and things I learn as I go
                      </p>
                    </Link>
                  </div>
                </section>

                {/* Now section */}
                <section className="mb-12">
                  <h2 className="mb-4 text-lg font-semibold text-foreground">Now</h2>
                  <p className="mb-4 text-sm italic text-muted-foreground">
                    {"Example \"now\" section:"}
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-foreground">
                    <li>
                      <span className="font-medium">
                        {"Exploring India's manufacturing stack:"}
                      </span>{" "}
                      <span className="text-muted-foreground">
                        incentives, automation, and execution bottlenecks
                      </span>
                    </li>
                    <li>
                      <span className="font-medium">Studying</span>{" "}
                      <span className="text-muted-foreground">
                        how teams build durable, capital-efficient businesses
                      </span>
                    </li>
                    <li>
                      <span className="font-medium">Writing:</span>{" "}
                      <span className="text-muted-foreground">
                        1 essay monthly on strategy and execution
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Quote Highlight */}
                <section className="mb-12 animate-fade-in-up delay-400">
                  <QuoteHighlight />
                </section>

                {/* Newsletter */}
                <section className="mb-12">
                  <NewsletterCTA />
                </section>

                <Footer />
              </div>

              {/* Profile card - visible on mobile */}
              <div className="order-first lg:order-none lg:w-64">
                <ProfileCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
