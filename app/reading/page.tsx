import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

interface ReadingItem {
  title: string;
  author?: string;
  annotation: string;
  link?: string;
}

const books: ReadingItem[] = [
  {
    title: "How Asia Works",
    author: "Joe Studwell",
    annotation:
      "The best explanation of why some Asian economies industrialized successfully while others didn't. Essential for understanding development policy.",
  },
  {
    title: "The Making of an Economic Superpower",
    author: "Yi Wen",
    annotation:
      "A rigorous economic analysis of China's industrial revolution. Changes how you think about state capacity.",
  },
  {
    title: "Seeing Like a State",
    author: "James C. Scott",
    annotation:
      "Why top-down planning fails. Essential reading for anyone building systems that interact with messy reality.",
  },
  {
    title: "The Revolt of the Public",
    author: "Martin Gurri",
    annotation:
      "Prescient analysis of how information abundance undermines institutional authority.",
  },
];

const papers: ReadingItem[] = [
  {
    title: "The Mundell-Fleming Trilemma",
    annotation:
      "Foundational framework for thinking about macroeconomic policy constraints.",
  },
  {
    title: "Learning by Doing",
    author: "Kenneth Arrow",
    annotation:
      "Why manufacturing experience compounds. Explains productivity gains in industrial economies.",
  },
  {
    title: "The Nature of the Firm",
    author: "Ronald Coase",
    annotation:
      "Why companies exist. Still the best framework for thinking about organizational boundaries.",
  },
];

const tools: ReadingItem[] = [
  {
    title: "Obsidian",
    annotation:
      "Where I do all my thinking and writing. The graph view is underrated for finding connections.",
    link: "https://obsidian.md",
  },
  {
    title: "Linear",
    annotation:
      "Best-in-class project management. The design philosophy is worth studying.",
    link: "https://linear.app",
  },
  {
    title: "Cursor",
    annotation:
      "AI-assisted coding that actually works. Changed how I prototype ideas.",
    link: "https://cursor.sh",
  },
];

function ReadingSection({
  title,
  items,
}: {
  title: string;
  items: ReadingItem[];
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-foreground">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="border-b border-border pb-4 last:border-b-0">
            <div className="flex items-baseline gap-2">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {item.title}
                </a>
              ) : (
                <span className="font-medium text-foreground">{item.title}</span>
              )}
              {item.author && (
                <span className="text-sm text-muted-foreground">
                  by {item.author}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.annotation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="Reading & resources" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-prose">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                Reading & resources
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Books, papers, links, and notes that have shaped how I think.
                Curated, not comprehensive.
              </p>

              <ReadingSection title="Books" items={books} />
              <ReadingSection title="Papers & Essays" items={papers} />
              <ReadingSection title="Tools" items={tools} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
