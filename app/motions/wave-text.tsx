"use client";

import { motion } from "motion/react";

type WordSegment = {
  text: string;
  className?: string;
};

type WaveTextProps = {
  segments: WordSegment[];
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
};

const WaveText = ({
  segments,
  className,
  baseDelay = 0.2,
  staggerDelay = 0.08,
}: WaveTextProps) => {
  const words: { id: number; word: string; className?: string }[] = [];
  let nextId = 0;

  for (const segment of segments) {
    const parts = segment.text.split(/\s+/).filter(Boolean);
    for (const word of parts) {
      words.push({ id: nextId++, word, className: segment.className });
    }
  }

  return (
    <span className={className}>
      {words.map(({ id, word, className: wordClass }, idx) => (
        <motion.span
          key={id}
          initial={{ opacity: 0, y: 10, x: -5 }}
          animate={{
            opacity: 1,
            y: [10, -8, 10],
            x: [-5, 5, -5],
          }}
          transition={{
            opacity: { duration: 0.25, delay: baseDelay + idx * staggerDelay },
            y: {
              duration: 2.2,
              delay: baseDelay + idx * staggerDelay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 2.2,
              delay: baseDelay + idx * staggerDelay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={wordClass}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {word}
          {idx < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
};

export default WaveText;
