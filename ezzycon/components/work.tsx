"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Chandil Sir Classes",
    category: "EDUCATION • DIGITAL PLATFORM",
    description:
      "A premium digital platform designed to strengthen the institute's online presence, showcase academic results, and create a stronger lead-generation journey.",
    result: "Website + Lead System",
    tags: ["Next.js", "React", "Lead Generation"],
    url: "https://www.chandilsirclasses.com/",
    type: "website",
    gradient:
      "from-[#093C5D] via-[#3B7597] to-[#6FD1D7]",
  },
  {
    number: "02",
    title: "Ezzycon",
    category: "AI • DIGITAL • SYSTEMS",
    description:
      "Our own digital laboratory — a high-performance brand experience built to represent the future of AI, automation, and intelligent business systems.",
    result: "Digital Experience",
    tags: ["Next.js", "AI", "Systems"],
    url: "#home",
    type: "ezzycon",
    gradient:
      "from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8]",
  },
];

function BrowserMockup({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#F7FCFC]">
      {/* Browser Header */}
      <div className="relative z-10 flex h-11 items-center gap-3 border-b border-[#093C5D]/10 bg-white/90 px-4 backdrop-blur-xl">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#093C5D]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#093C5D]/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#093C5D]/10" />
        </div>

        <div className="mx-auto flex h-6 max-w-[220px] flex-1 items-center justify-center rounded-full bg-[#093C5D]/5 px-3">
          <span className="truncate text-[8px] font-medium text-[#093C5D]/40">
            {project.type === "website"
              ? "chandilsirclasses.com"
              : "ezzycon.com"}
          </span>
        </div>

        <Globe
          size={13}
          className="text-[#093C5D]/30"
        />
      </div>

      {/* Website Preview Placeholder */}
      <div
        className={`relative h-[calc(100%-44px)] overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#ffffff20_1px,transparent_1px),linear-gradient(90deg,#ffffff20_1px,transparent_1px)] [background-size:35px_35px]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

        {/* Fake Website Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-xl">
              <Sparkles size={24} />
            </div>

            <p className="text-[9px] font-bold tracking-[0.25em] text-white/60">
              {project.type === "website"
                ? "EDUCATION PLATFORM"
                : "AI • DIGITAL • SYSTEMS"}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              {project.title}
            </h3>

            <div className="mx-auto mt-6 h-px w-24 bg-white/30" />

            <p className="mt-5 text-xs leading-6 text-white/60">
              {project.result}
            </p>
          </motion.div>
        </div>

        {/* Floating Label */}
        <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[8px] font-semibold tracking-[0.15em] text-white/80 backdrop-blur-xl">
          LIVE PROJECT
        </div>
      </div>
    </div>
  );
}

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
        y: 40,
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
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* Project Visual */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#6FD1D7]/20 bg-white p-2 shadow-[0_25px_80px_rgba(9,60,93,0.08)] transition-shadow duration-500 group-hover:shadow-[0_30px_100px_rgba(9,60,93,0.15)] sm:p-3">
        <BrowserMockup project={project} />

        {/* Open Project */}
        <motion.a
          href={project.url}
          target={
            project.url.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            project.url.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          aria-label={`View ${project.title}`}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#093C5D] shadow-xl"
        >
          <ArrowUpRight size={19} />
        </motion.a>
      </div>

      {/* Details */}
      <div className="mt-7 px-1 sm:px-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#3B7597]">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#093C5D] sm:text-3xl">
              {project.title}
            </h3>
          </div>

          <a
            href={project.url}
            target={
              project.url.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              project.url.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="flex w-fit items-center gap-2 rounded-full border border-[#3B7597]/20 px-4 py-2 text-xs font-medium text-[#3B7597] transition-colors hover:bg-[#093C5D] hover:text-white"
          >
            View Project
            <ExternalLink size={13} />
          </a>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#093C5D]/55">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#093C5D]/10 bg-white px-3 py-1.5 text-[9px] font-medium text-[#093C5D]/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#F7FCFC] py-24 sm:py-32 lg:py-40"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-20%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#6FD1D7]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
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
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6FD1D7]/30 bg-white/70 px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#3B7597] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8] shadow-[0_0_10px_#5DF8D8]" />
            SELECTED WORK
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#093C5D] sm:text-5xl lg:text-7xl">
            We build
            <br />
            <span className="text-[#3B7597]">
              digital systems.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#093C5D]/55 sm:text-base">
            From high-converting websites to intelligent automation,
            we turn complex business problems into digital experiences
            that create measurable impact.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 grid gap-16 sm:mt-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-24">
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
            y: 25,
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
          className="mt-20 flex flex-col gap-7 rounded-[2rem] border border-[#6FD1D7]/25 bg-white p-7 shadow-[0_10px_50px_rgba(9,60,93,0.05)] sm:p-10 lg:mt-28 lg:flex-row lg:items-center lg:justify-between lg:p-12"
        >
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-[#093C5D] sm:text-3xl">
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
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#093C5D] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#093C5D]/15 sm:w-fit"
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