"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterCTAProps {
  variant?: "default" | "compact";
  title?: string;
  description?: string;
}

export function NewsletterCTA({
  variant = "default",
  title = "Newsletter",
  description = "Monthly email on what I'm learning and building. No spam, unsubscribe anytime.",
}: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to Substack or your email service
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (variant === "compact") {
    return (
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          Stay updated
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Get the latest essays delivered to your inbox. No spam, unsubscribe
          anytime.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background"
            required
          />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
        {status === "success" && (
          <p className="mt-2 text-sm text-green-500">
            Thanks for subscribing!
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-background"
          required
        />
        <Button type="submit" variant="secondary">
          Subscribe
        </Button>
      </form>
      {status === "success" && (
        <p className="mt-2 text-sm text-green-500">Thanks for subscribing!</p>
      )}
      <p className="mt-3 text-xs text-primary">
        Powered by{" "}
        <a
          href="https://substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Substack
        </a>
      </p>
    </div>
  );
}
