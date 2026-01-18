"use client";

import { BookOpen, Headphones, Code } from "lucide-react";

interface CurrentlyItem {
  type: "reading" | "listening" | "building";
  title: string;
  link?: string;
}

const currentlyItems: CurrentlyItem[] = [
  {
    type: "reading",
    title: "The Hard Thing About Hard Things",
  },
  {
    type: "building",
    title: "Manufacturing Cost Models",
  },
];

const icons = {
  reading: BookOpen,
  listening: Headphones,
  building: Code,
};

const labels = {
  reading: "Reading",
  listening: "Listening",
  building: "Building",
};

export function CurrentlyStatus() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {currentlyItems.map((item, index) => {
        const Icon = icons[item.type];
        return (
          <div
            key={index}
            className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 transition-colors hover:border-primary/50"
          >
            <Icon className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">{labels[item.type]}:</span>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary"
              >
                {item.title}
              </a>
            ) : (
              <span className="font-medium text-foreground">{item.title}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
