"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
}

export function TypingEffect({
  text,
  className = "",
  speed = 50,
  showCursor = true,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          className={`ml-0.5 inline-block h-[1em] w-[2px] bg-primary ${
            isComplete ? "animate-typing-cursor" : ""
          }`}
        />
      )}
    </span>
  );
}
