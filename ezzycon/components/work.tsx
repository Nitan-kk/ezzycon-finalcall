"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Chandil Sir Classes",
    category: "EDUCATION • DIGITAL PLATFORM",
    description:
      "A modern digital platform designed to strengthen the institute's online presence and streamline student lead generation.",
    result: "Website + Lead System",
    gradient:
      "from-[#093C5D] via-[#3B7597] to-[#6FD1D7]",
  },
  {
    number: "02",
    title: "Hospitality Experience",
    category: "HOTEL • DIGITAL EXPERIENCE",
    description:
      "A premium hospitality experience focused on direct bookings, better customer journeys, and intelligent guest interactions.",
    result: "Website + AI Automation",
    gradient:
      "from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8]",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#6FD1D7]/25 bg-[#093C5D] shadow-[0_20px_70px_rgba(9,60,93,0.1)]">
        {/* Gradient Background */}
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#ffffff20_1px,transparent_1px),linear-gradient(90deg,#ffffff20_1px,transparent_1px)] [background-size:50px_50px]" />

        {/* Decorative Orb */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full border border-white/20 bg-white/10 blur-sm"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-25%] left-[-10%] h-64 w-64 rounded-full border border-white/20"
        />

        {/* Project Number */}
        <div className="absolute left-7 top-7 flex items-center gap-3 text-white/70">
          <span className="text-xs font-bold tracking-[0.2em]">
            {project.number}
          </span>

          <div className="h-px w-8 bg-white/40" />
        </div>

        {/* Center Visual */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
          className="absolute left-1/2 top-1/2 flex w-[65%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
        >
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-xl">
            <Sparkles size={26} />
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
            SELECTED PROJECT
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            {project.title}
          </h3>
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="absolute inset-0 bg-[#093C5D]/20 backdrop-blur-[2px]"
        />

        {/* Open Button */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
          className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#093C5D] shadow-xl"
        >
          <ArrowUpRight size={20} />
        </motion.div>

        {/* Bottom Label */}
        <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-white/80 backdrop-blur-xl">
            {project.result}
          </span>

          <ExternalLink
            size={18}
            className="text-white/60 transition-colors group-hover:text-white"
          />
        </div>
      </div>

      {/* Details */}
      <div className="mt-7 px-2">
        <p className="text-[10px] font-bold tracking-[0.18em] text-[#3B7597]">
          {project.category}
        </p>

        <div className="mt-3 flex items-start justify-between gap-6">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#093C5D] sm:text-3xl">
            {project.title}
          </h3>

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3B7597]/20 text-[#3B7597]"
          >
            <ArrowUpRight size={17} />
          </motion.div>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#093C5D]/55">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#F7FCFC] py-28 sm:py-36"
    >
      {/* Background */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#6FD1D7]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6FD1D7]/30 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wider text-[#3B7597] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8] shadow-[0_0_10px_#5DF8D8]" />
              SELECTED WORK
            </div>

            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#093C5D] sm:text-5xl lg:text-7xl">
              Ideas into
              <br />

              <span className="text-[#3B7597]">
                digital reality.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#093C5D]/55 lg:pb-2">
            Every project begins with a problem worth solving. We combine
            design, technology, and strategy to build experiences that
            create meaningful business impact.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-[#6FD1D7]/25 bg-white p-8 text-center shadow-[0_10px_50px_rgba(9,60,93,0.04)] sm:p-12 lg:flex-row lg:text-left"
        >
          <div>
            <p className="text-2xl font-semibold tracking-tight text-[#093C5D]">
              Your project could be next.
            </p>

            <p className="mt-2 text-sm text-[#093C5D]/50">
              Let&apos;s turn your idea into something exceptional.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-3 rounded-full bg-[#093C5D] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#093C5D]/15"
          >
            Start Your Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}