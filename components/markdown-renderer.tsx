"use client";

import { useMemo } from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = useMemo(() => {
    // Simple markdown parser for common patterns
    let parsed = content
      // Escape HTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Headers
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mt-10 mb-4 text-foreground">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-12 mb-6 text-foreground">$1</h1>')
      // Bold and italic
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Blockquotes
      .replace(
        /^> (.+)$/gm,
        '<blockquote class="border-l-4 border-primary bg-muted/30 py-3 pl-6 pr-4 my-6 italic text-foreground/90">$1</blockquote>'
      )
      // Code blocks
      .replace(
        /```(\w*)\n([\s\S]*?)```/g,
        '<pre class="bg-muted rounded-lg p-4 my-6 overflow-x-auto"><code class="text-sm font-mono text-foreground">$2</code></pre>'
      )
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
      // Unordered lists
      .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc text-foreground/90">$1</li>')
      // Ordered lists
      .replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal text-foreground/90">$1</li>')
      // Horizontal rules
      .replace(/^---$/gm, '<hr class="border-border my-8" />')
      // Paragraphs (lines that aren't already wrapped)
      .split('\n\n')
      .map(block => {
        const trimmed = block.trim();
        if (!trimmed) return '';
        // Don't wrap if already has HTML tags
        if (
          trimmed.startsWith('<h') ||
          trimmed.startsWith('<blockquote') ||
          trimmed.startsWith('<pre') ||
          trimmed.startsWith('<ul') ||
          trimmed.startsWith('<ol') ||
          trimmed.startsWith('<li') ||
          trimmed.startsWith('<hr')
        ) {
          return trimmed;
        }
        return `<p class="text-foreground/90 leading-relaxed mb-4">${trimmed.replace(/\n/g, ' ')}</p>`;
      })
      .join('\n');

    // Wrap consecutive list items in ul/ol
    parsed = parsed.replace(
      /(<li class="ml-6 list-disc[^>]*>.*?<\/li>\n?)+/g,
      '<ul class="space-y-2 my-4">$&</ul>'
    );
    parsed = parsed.replace(
      /(<li class="ml-6 list-decimal[^>]*>.*?<\/li>\n?)+/g,
      '<ol class="space-y-2 my-4">$&</ol>'
    );

    return parsed;
  }, [content]);

  return (
    <div
      className="max-w-prose"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Markdown content is sanitized
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
