"use client";

import { motion } from "framer-motion";

interface RevealHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealHeading({
  text,
  className = "",
  delay = 0,
}: RevealHeadingProps) {
  const words = text.split(" ");

  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.25em] inline-block overflow-hidden align-bottom"
        >
          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: "100%",
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}