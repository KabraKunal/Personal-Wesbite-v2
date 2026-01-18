export interface LearningNote {
  id: string;
  date: string;
  content: string;
  tags?: string[];
  source?: string;
}

export const learningNotes: LearningNote[] = [
  {
    id: "1",
    date: "2026-01-18",
    content:
      "The best founders I've met don't just understand their market—they understand the physics of their business. Unit economics, operational leverage, working capital cycles. The abstractions that let them reason about scale.",
    tags: ["startups", "business"],
  },
  {
    id: "2",
    date: "2026-01-15",
    content:
      "Reading about Toyota's production system again. The insight isn't just-in-time inventory—it's that they made problems visible immediately. The whole system is an information architecture.",
    tags: ["manufacturing", "systems"],
    source: "Taiichi Ohno",
  },
  {
    id: "3",
    date: "2026-01-12",
    content:
      "Capital allocation is underrated as a skill. Most operators think about P&L. The great ones think about balance sheets and cash conversion cycles.",
    tags: ["finance", "strategy"],
  },
  {
    id: "4",
    date: "2026-01-10",
    content:
      "Why do Indian manufacturing firms struggle with the last 20% of execution? Hypothesis: it's not capability, it's coordination costs. The delta between blueprint and reality compounds.",
    tags: ["india", "manufacturing"],
  },
  {
    id: "5",
    date: "2026-01-07",
    content:
      "Compounding works in skills too. The difference between a 10-year expert and a 20-year expert isn't 2x—it's the accumulated intuition that lets them skip entire decision trees.",
    tags: ["learning", "career"],
  },
  {
    id: "6",
    date: "2026-01-04",
    content:
      "Most strategy frameworks are post-hoc rationalizations. The real work is developing taste for which variables matter in your specific context.",
    tags: ["strategy"],
  },
  {
    id: "7",
    date: "2025-12-30",
    content:
      "Electrolyzers will follow the solar learning curve, but the timeline matters. A 70% cost reduction over 10 years is very different from 70% over 5 years for project economics.",
    tags: ["energy", "technology"],
  },
  {
    id: "8",
    date: "2025-12-27",
    content:
      "The hardest part of writing isn't having ideas—it's having the discipline to kill the ones that don't serve the argument. Every paragraph should earn its place.",
    tags: ["writing"],
  },
  {
    id: "9",
    date: "2025-12-22",
    content:
      "Watched a factory line today. The bottleneck wasn't the machines—it was the handoffs. Every interface between departments was a place where information degraded.",
    tags: ["manufacturing", "operations"],
  },
  {
    id: "10",
    date: "2025-12-18",
    content:
      "Reading Drucker again. His insight that management is about making people productive hasn't aged. Everything else—the frameworks, the metrics—is in service of that.",
    tags: ["management"],
    source: "Peter Drucker",
  },
];

export function getRandomNote(): LearningNote {
  return learningNotes[Math.floor(Math.random() * learningNotes.length)];
}

export function getNotesByTag(tag: string): LearningNote[] {
  return learningNotes.filter((note) => note.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  learningNotes.forEach((note) => {
    note.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
