"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// A simple, static "pinned thought" that feels more natural than rotating quotes
export function QuoteHighlight() {
  return (
    <div className="rounded-lg border border-border/50 bg-card/30 p-5">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        A thought I keep returning to
      </p>
      <p className="text-foreground leading-relaxed">
        Strategy without engineering is hand-waving. Engineering without strategy
        is local optimization. The edge comes from combining both—patiently,
        rigorously, and over long time horizons.
      </p>
      <Link
        href="/notes"
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
      >
        More thoughts like this
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
