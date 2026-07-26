"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founderStats = [
  {
    value: "AI",
    label: "Automation",
  },
  {
    value: "Digital",
    label: "Systems",
  },
  {
    value: "∞",
    label: "Possibilities",
  },
];

export default function Founder() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FBFC] py-24 sm:py-32 lg:py-40"
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#6FD1D7]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#3B7597]/10 blur-[140px]" />

      {/* Subtle Grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#093C5D_1px,transparent_1px),linear-gradient(90deg,#093C5D_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* ========================================
          MAIN CONTAINER
      ======================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ========================================
            SECTION HEADER
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-16 max-w-3xl lg:mb-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#3B7597]" />

            <span className="text-xs font-semibold tracking-[0.25em] text-[#3B7597]">
              THE FOUNDER
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#093C5D] sm:text-5xl md:text-6xl lg:text-7xl">
            Building the future,
            <br />

            <span className="text-[#3B7597]">
              one system at a time.
            </span>
          </h2>
        </motion.div>

        {/* ========================================
            FOUNDER GRID
        ======================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* ========================================
              FOUNDER IMAGE
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Decorative Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-5 rounded-[2.5rem] border border-dashed border-[#3B7597]/20"
            />

            {/* Image Card */}

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#093C5D] shadow-[0_30px_100px_rgba(9,60,93,0.18)]">

              {/* Founder Image */}

              <Image
                src="/founder.png"
                alt="Kunal Kushwah — Founder of Ezzycon"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#093C5D]/80 via-transparent to-transparent" />

              {/* Founder Name */}

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <p className="text-xs font-medium tracking-[0.2em] text-white/60">
                  FOUNDER & BUILDER
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Kunal Kushwah
                </h3>
              </div>
            </div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-10 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-8"
            >
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#093C5D]/40">
                FOCUS
              </p>

              <p className="mt-1 text-sm font-semibold text-[#093C5D]">
                AI × Systems
              </p>
            </motion.div>
          </motion.div>

          {/* ========================================
              FOUNDER CONTENT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Intro */}

            <p className="text-lg leading-8 text-[#093C5D]/70 sm:text-xl">
              I&apos;m{" "}
              <span className="font-semibold text-[#093C5D]">
                Kunal Kushwah
              </span>
              , the founder behind Ezzycon.
            </p>

            {/* Main Story */}

            <div className="mt-7 space-y-5 text-base leading-8 text-[#093C5D]/55">
              <p>
                I started Ezzycon with a simple belief: technology
                should not make businesses more complicated. It should
                make them smarter, faster, and more capable.
              </p>

              <p>
                Today, I&apos;m focused on building digital experiences,
                AI-powered automation, and intelligent systems that
                solve real business problems—not just look impressive
                on a screen.
              </p>

              <p>
                From premium websites to AI automation and custom
                digital systems, the goal is always the same:
                <span className="font-medium text-[#093C5D]">
                  {" "}
                  turn ambitious ideas into systems that actually work.
                </span>
              </p>
            </div>

            {/* Quote */}

            <div className="relative mt-10 border-l-2 border-[#6FD1D7] pl-6">
              <p className="text-xl font-medium leading-8 tracking-tight text-[#093C5D] sm:text-2xl">
                &quot;The future belongs to businesses that don&apos;t
                just adopt technology—they build with it.&quot;
              </p>
            </div>

            {/* ========================================
                STATS
            ======================================== */}

            <div className="mt-12 grid grid-cols-3 border-y border-[#093C5D]/10 py-6">
              {founderStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`${
                    index !== 0
                      ? "border-l border-[#093C5D]/10"
                      : ""
                  } px-4 first:pl-0`}
                >
                  <p className="text-xl font-semibold tracking-tight text-[#093C5D] sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#093C5D]/40 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ========================================
                CTA
            ======================================== */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center justify-center gap-4 rounded-full bg-[#093C5D] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#093C5D]/15"
              >
                Let&apos;s Build Something

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#6FD1D7] group-hover:text-[#093C5D]">
                  ↗
                </span>
              </motion.a>

              <span className="text-xs text-[#093C5D]/40">
                Digital experiences.
                <br className="sm:hidden" /> Intelligent systems.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}