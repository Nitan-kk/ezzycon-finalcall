"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#093C5D]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-white"
            >
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: "-100%",
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-t from-[#3B7597] via-[#6FD1D7] to-transparent opacity-40"
              />

              <span className="relative text-4xl font-bold tracking-[-0.08em] text-[#093C5D]">
                E
              </span>
            </motion.div>

            {/* Brand */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-6 text-sm font-semibold tracking-[0.35em] text-white"
            >
              EZZYCON
            </motion.p>

            {/* Loading Line */}
            <div className="mt-8 h-px w-32 overflow-hidden bg-white/10">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-full bg-[#6FD1D7]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}