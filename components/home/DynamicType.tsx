"use client";

import { useEffect, useMemo, useState } from "react";

type DynamicTypeProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
};

export function DynamicType({
  words,
  typingSpeed = 85,
  deletingSpeed = 50,
  pauseMs = 1300,
  className = "",
}: DynamicTypeProps) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (safeWords.length === 0) return;
    const current = safeWords[wordIndex % safeWords.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((v) => (v + 1) % safeWords.length);
    } else {
      timeout = setTimeout(
        () => {
          const next = isDeleting
            ? current.slice(0, Math.max(0, text.length - 1))
            : current.slice(0, text.length + 1);
          setText(next);
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [deletingSpeed, isDeleting, pauseMs, safeWords, text, typingSpeed, wordIndex]);

  return (
    <span className={`inline-flex items-center ${className}`} aria-live="polite">
      <span>{text}</span>
      <span className="ml-1 h-6 w-px animate-pulse bg-accent" aria-hidden="true" />
    </span>
  );
}
