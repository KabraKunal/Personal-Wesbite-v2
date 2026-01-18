"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { learningNotes, getAllTags, getRandomNote } from "@/lib/learning-notes";
import type { LearningNote } from "@/lib/learning-notes";
import { Shuffle, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

function NoteCard({ note, index }: { note: LearningNote; index: number }) {
  const formattedDate = new Date(note.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="animate-fade-in-up card-hover relative border-l-2 border-primary/30 pl-6 pb-8"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />

      <div className="flex items-center gap-3 mb-2">
        <time className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {formattedDate}
        </time>
        {note.source && (
          <span className="text-xs text-primary">via {note.source}</span>
        )}
      </div>

      <p className="text-foreground leading-relaxed mb-3">{note.content}</p>

      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
            >
              <Tag className="h-2.5 w-2.5" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function RandomNoteCard({ note }: { note: LearningNote }) {
  const formattedDate = new Date(note.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <Shuffle className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-primary">Random insight</span>
        <span className="text-xs text-muted-foreground">from {formattedDate}</span>
      </div>
      <p className="text-foreground leading-relaxed text-lg">{note.content}</p>
      {note.source && (
        <p className="mt-2 text-sm text-muted-foreground">via {note.source}</p>
      )}
    </div>
  );
}

export default function LearningNotesPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [randomNote, setRandomNote] = useState<LearningNote | null>(null);
  const allTags = getAllTags();

  const filteredNotes = selectedTag
    ? learningNotes.filter((note) => note.tags?.includes(selectedTag))
    : learningNotes;

  const handleRandomNote = () => {
    setRandomNote(getRandomNote());
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="Learning Notes" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          <main className="flex-1 min-w-0 page-transition">
            <div className="max-w-3xl">
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                  Learning Notes
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Fragments of insight. One-liners, small passages, things I learn as I go.
                  Not polished essays—just thoughts worth remembering.
                </p>

                {/* Random note button */}
                <div className="flex items-center gap-4 mb-8">
                  <Button
                    onClick={handleRandomNote}
                    variant="outline"
                    className="group bg-transparent"
                  >
                    <Shuffle className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
                    Surface a random insight
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {learningNotes.length} notes collected
                  </span>
                </div>

                {/* Random note display */}
                {randomNote && (
                  <div className="mb-8">
                    <RandomNoteCard note={randomNote} />
                  </div>
                )}

                {/* Tag filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      selectedTag === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`rounded-full px-3 py-1 text-sm transition-colors ${
                        selectedTag === tag
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes timeline */}
              <div className="relative">
                {filteredNotes.map((note, index) => (
                  <NoteCard key={note.id} note={note} index={index} />
                ))}
              </div>

              <div className="mt-12">
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
