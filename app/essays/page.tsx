"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { EssayCard } from "@/components/essay-card";
import { NewsletterCTA } from "@/components/newsletter-cta";
import { essays, categories } from "@/lib/essays";

export default function EssaysPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEssays =
    activeCategory === "all"
      ? essays
      : essays.filter((essay) =>
          essay.tags.some(
            (t) => t.toLowerCase() === activeCategory.toLowerCase()
          )
        );

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="Essays" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                Essays
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Thoughts on business, technology, manufacturing, and ideas.
              </p>

              {/* Category filters */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-foreground text-background"
                        : "border border-border bg-transparent text-foreground hover:bg-muted"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Essays list */}
              <div className="mb-12">
                {filteredEssays.length > 0 ? (
                  filteredEssays.map((essay) => (
                    <EssayCard key={essay.slug} essay={essay} />
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    No essays found in this category.
                  </p>
                )}
              </div>

{/* Newsletter CTA */}
              <NewsletterCTA variant="compact" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
