export interface Essay {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export interface EssayMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

// Import all essay content files
// To add a new essay: create a new .ts file in /content/essays/ with metadata and content exports
import * as moats from "@/content/essays/why-moats-matter-more-than-innovation";
import * as manufacturing from "@/content/essays/last-mile-problem-indian-manufacturing";
import * as agency from "@/content/essays/agency-and-leverage-building-compounding-systems";
import * as capital from "@/content/essays/capital-allocation-in-emerging-markets";
import * as engineering from "@/content/essays/the-engineering-mindset-in-strategy";

// Essay registry - add new essays here after creating the content file
const essayModules = {
  "why-moats-matter-more-than-innovation": moats,
  "last-mile-problem-indian-manufacturing": manufacturing,
  "agency-and-leverage-building-compounding-systems": agency,
  "capital-allocation-in-emerging-markets": capital,
  "the-engineering-mindset-in-strategy": engineering,
};

// Build essays array from modules
export const essays: Essay[] = Object.entries(essayModules)
  .map(([slug, module]) => ({
    slug,
    title: module.metadata.title,
    description: module.metadata.description,
    date: module.metadata.date,
    tags: module.metadata.tags,
    content: module.content,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getEssaysByTag(tag: string): Essay[] {
  if (tag === "all") return essays;
  return essays.filter((essay) =>
    essay.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((essay) => essay.slug === slug);
}

export const categories = [
  { id: "all", label: "All" },
  { id: "business", label: "Business & Strategy" },
  { id: "technology", label: "Technology" },
  { id: "manufacturing", label: "India & Manufacturing" },
  { id: "philosophy", label: "Philosophy" },
];
