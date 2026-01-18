"use client";

import { useEffect, useState } from "react";

const taglines = [
  "I write to clarify my own thinking, not to perform certainty.",
  "Building things that scale in complex environments.",
  "Strategy, technology, and India's industrial future.",
  "Where first-principles thinking meets messy reality.",
];

export function TypingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = taglines[currentIndex];
    const typingSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && displayedText === currentText) {
      // Pause at the end of typing
      const timeout = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      // Move to next tagline
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentText.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <span className="text-muted-foreground">
      {displayedText}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] bg-primary animate-typing-cursor" />
    </span>
  );
}
