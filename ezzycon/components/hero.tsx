"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Magnetic Button ko dynamic import kiya with SSR disabled
const MagneticButton = dynamic(() => import("@/components/magnetic-button"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8FBFC] pt-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-[15%] top-[5%] h-[650px] w-[650px] rounded-full bg-[#6FD1D7]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -left-[15%] bottom-0 h-[500px] w-[500px] rounded-full bg-[#3B7597]/15 blur-[130px]" />

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#093C5D_1px,transparent_1px),linear-gradient(90deg,#093C5D_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}
          <div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5DF8D8] opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3B7597]" />
              </span>

              <span className="text-xs font-semibold tracking-[0.2em] text-[#3B7597]">
                DIGITAL • AI • SYSTEMS
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#093C5D] sm:text-6xl md:text-7xl lg:text-[6.2rem]"
            >
              We build
              <br />

              <span>
                digital
                <span className="text-[#3B7597]">.</span>
              </span>

              <br />

              <span className="text-[#6FD1D7]">
                intelligence.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-8 max-w-xl text-base leading-7 text-[#093C5D]/55 sm:text-lg"
            >
              Ezzycon helps ambitious businesses build premium
              digital experiences, automate operations with AI,
              and create systems designed for what&apos;s next.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton
                href="#contact"
                strength={0.2}
                className="group flex items-center justify-center gap-4 rounded-full bg-[#093C5D] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#093C5D]/15 transition-all hover:shadow-2xl hover:shadow-[#093C5D]/20"
              >
                Start a Project

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#6FD1D7] group-hover:text-[#093C5D]">
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </span>
              </MagneticButton>

              <MagneticButton
                href="#work"
                strength={0.15}
                className="flex items-center justify-center gap-3 rounded-full border border-[#093C5D]/15 bg-white/50 px-7 py-4 text-sm font-semibold text-[#093C5D] backdrop-blur-xl transition-all hover:border-[#3B7597]/40 hover:bg-white"
              >
                Explore Our Work

                <span className="text-[#3B7597]">
                  ↓
                </span>
              </MagneticButton>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-[#F8FBFC] bg-[#093C5D]" />
                <div className="h-8 w-8 rounded-full border-2 border-[#F8FBFC] bg-[#3B7597]" />
                <div className="h-8 w-8 rounded-full border-2 border-[#F8FBFC] bg-[#6FD1D7]" />
              </div>

              <p className="text-xs leading-5 text-[#093C5D]/40">
                Built for ambitious businesses
                <br />
                ready to move forward.
              </p>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:justify-end"
          >
            {/* Outer Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#3B7597]/20 sm:h-[500px] sm:w-[500px]"
            />

            {/* Middle Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] rounded-full border border-[#6FD1D7]/20 sm:h-[400px] sm:w-[400px]"
            />

            {/* Main Orb */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full bg-gradient-to-br from-[#093C5D] via-[#3B7597] to-[#6FD1D7] shadow-[0_30px_100px_rgba(9,60,93,0.25)] sm:h-[380px] sm:w-[380px]"
            >
              <div className="absolute inset-[2px] rounded-full bg-[#093C5D]/80 backdrop-blur-3xl" />

              <div className="relative text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-6xl font-bold tracking-[-0.08em] text-white sm:text-8xl"
                >
                  E
                </motion.div>

                <p className="mt-2 text-[9px] font-semibold tracking-[0.35em] text-white/40">
                  EZZYCON
                </p>
              </div>

              <div className="absolute left-[15%] top-[12%] h-20 w-20 rounded-full bg-white/10 blur-2xl" />
            </motion.div>

            {/* AI Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-2 top-[15%] rounded-2xl border border-white/60 bg-white/70 p-4 shadow-xl shadow-[#093C5D]/10 backdrop-blur-xl sm:left-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#093C5D] text-sm text-white">
                  AI
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#093C5D]">
                    Intelligent
                  </p>

                  <p className="text-[10px] text-[#093C5D]/40">
                    Automation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Scale Card */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-2 right-0 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-xl shadow-[#093C5D]/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6FD1D7] text-sm font-bold text-[#093C5D]">
                  ∞
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#093C5D]">
                    Built to Scale
                  </p>

                  <p className="text-[10px] text-[#093C5D]/40">
                    Future Ready
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="text-[9px] font-semibold tracking-[0.3em] text-[#093C5D]/30">
            SCROLL TO EXPLORE
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="h-8 w-px bg-gradient-to-b from-[#3B7597] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}