"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  "AI-powered business automation",
  "Premium digital experiences",
  "Intelligent systems & workflows",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FBFC] py-28 sm:py-36 lg:py-44"
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#6FD1D7]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#3B7597]/10 blur-[120px]"
      />

      {/* Subtle Grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#093C5D_1px,transparent_1px),linear-gradient(90deg,#093C5D_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* ========================================
          CONTAINER
      ======================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#6FD1D7]/30 bg-white/60 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#3B7597] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5DF8D8] opacity-70" />

              <span className="relative h-2 w-2 rounded-full bg-[#3B7597]" />
            </span>

            THE FOUNDER
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#093C5D] sm:text-5xl md:text-6xl lg:text-7xl">
            Building the future,
            <br />

            <span className="text-[#3B7597]">
              one system at a time.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#093C5D]/55 sm:text-lg">
            Ezzycon was built with a simple belief: technology should
            make businesses smarter, faster, and more capable—not more
            complicated.
          </p>
        </motion.div>

        {/* ========================================
            FOUNDER SECTION
        ======================================== */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* ========================================
              FOUNDER IMAGE
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Rotating Ring */}

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

            {/* Image */}

            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#093C5D] shadow-[0_30px_100px_rgba(9,60,93,0.18)]">
              <Image
                src="/founder.png"
                alt="Kunal Kushwah — Founder of Ezzycon"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#093C5D]/90 via-transparent to-transparent" />

              {/* Founder Details */}

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-[#6FD1D7]">
                  FOUNDER & BUILDER
                </p>

                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">
                  Kunal Kushwah
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Founder, Ezzycon
                </p>
              </div>
            </div>

            {/* Floating AI Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-10 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#093C5D] text-[#6FD1D7]">
                <BrainCircuit size={18} />
              </div>

              <div>
                <p className="text-[9px] font-semibold tracking-[0.15em] text-[#093C5D]/40">
                  FOCUS
                </p>

                <p className="mt-1 text-xs font-semibold text-[#093C5D]">
                  AI × Systems
                </p>
              </div>
            </motion.div>

            {/* Floating Number */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6FD1D7] shadow-xl shadow-[#3B7597]/10 sm:-left-8"
            >
              <span className="text-2xl font-bold tracking-[-0.05em] text-[#093C5D]">
                E
              </span>
            </motion.div>
          </motion.div>

          {/* ========================================
              FOUNDER CONTENT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Intro */}

            <p className="text-xl leading-8 text-[#093C5D]/70 sm:text-2xl">
              I&apos;m{" "}
              <span className="font-semibold text-[#093C5D]">
                Kunal Kushwah
              </span>
              , the founder behind Ezzycon.
            </p>

            {/* Story */}

            <div className="mt-7 space-y-5 text-base leading-8 text-[#093C5D]/55">
              <p>
                I started Ezzycon with a vision to build technology that
                solves real problems. Not just websites that look good,
                but digital experiences and intelligent systems that
                create measurable value for businesses.
              </p>

              <p>
                My focus is on bringing together{" "}
                <span className="font-medium text-[#093C5D]">
                  AI, automation, digital experiences, and intelligent
                  systems
                </span>{" "}
                to help ambitious businesses operate smarter and move
                faster.
              </p>

              <p>
                The goal is simple: understand the problem first,
                then build the right technology around it.
              </p>
            </div>

            {/* Quote */}

            <div className="relative mt-10 border-l-2 border-[#6FD1D7] pl-6">
              <Sparkles
                size={18}
                className="absolute -left-[10px] -top-1 rounded-full bg-[#F8FBFC] text-[#3B7597]"
              />

              <p className="text-xl font-medium leading-8 tracking-[-0.02em] text-[#093C5D] sm:text-2xl">
                &quot;The future belongs to businesses that don&apos;t
                just adopt technology—they build with it.&quot;
              </p>
            </div>

            {/* Focus Areas */}

            <div className="mt-10 space-y-4">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#3B7597]"
                  />

                  <span className="text-sm font-medium text-[#093C5D]/70">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Founder Stats */}

            <div className="mt-12 grid grid-cols-3 border-y border-[#093C5D]/10 py-6">
              <div className="pr-4">
                <Cpu
                  size={20}
                  className="text-[#3B7597]"
                />

                <p className="mt-3 text-sm font-semibold text-[#093C5D]">
                  AI
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#093C5D]/40">
                  Automation
                </p>
              </div>

              <div className="border-l border-[#093C5D]/10 px-4">
                <BrainCircuit
                  size={20}
                  className="text-[#3B7597]"
                />

                <p className="mt-3 text-sm font-semibold text-[#093C5D]">
                  Smart
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#093C5D]/40">
                  Systems
                </p>
              </div>

              <div className="border-l border-[#093C5D]/10 pl-4">
                <Sparkles
                  size={20}
                  className="text-[#3B7597]"
                />

                <p className="mt-3 text-sm font-semibold text-[#093C5D]">
                  Digital
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#093C5D]/40">
                  Experiences
                </p>
              </div>
            </div>

            {/* CTA */}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group mt-10 flex w-fit items-center gap-4 rounded-full bg-[#093C5D] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#093C5D]/15"
            >
              Let&apos;s Build Something

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#6FD1D7] group-hover:text-[#093C5D]">
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* ========================================
            BOTTOM VISION CARD
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-28 overflow-hidden rounded-[2rem] bg-[#093C5D] p-8 sm:mt-36 sm:p-12 lg:p-16"
        >
          {/* Glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#6FD1D7]/15 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#6FD1D7]">
                THE EZzyCON VISION
              </p>

              <h3 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Build boldly.
                <br />
                Think beyond.
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                We are building Ezzycon to become more than a digital
                solutions company. The vision is to explore AI,
                automation, robotics, and emerging technologies to
                create systems that shape how businesses work in the
                future.
              </p>
            </div>

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
              className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-4xl font-bold text-[#6FD1D7] backdrop-blur-xl sm:h-32 sm:w-32 sm:text-5xl"
            >
              E
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}