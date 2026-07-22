"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Heart,
  Rocket,
  Target,
} from "lucide-react";

const differences = [
  {
    number: "01",
    title: "AI-Native",
    description:
      "We think beyond traditional digital solutions. AI and intelligent automation are considered from the very beginning, helping businesses move faster and work smarter.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Human-Centered",
    description:
      "Technology only matters when people can use it effortlessly. Every experience we build is designed around real users and real human behavior.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Built to Scale",
    description:
      "We build with the future in mind. Our systems are designed to evolve as your business grows, so today's solution doesn't become tomorrow's limitation.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Outcome-Driven",
    description:
      "Beautiful design is only the beginning. We focus on measurable outcomes, stronger customer experiences, better efficiency, and sustainable growth.",
    icon: Target,
  },
];

function DifferenceCard({
  item,
  index,
}: {
  item: (typeof differences)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative min-h-[400px] overflow-hidden rounded-[2rem] border border-[#6FD1D7]/25 bg-white p-8 shadow-[0_15px_60px_rgba(9,60,93,0.05)] transition-shadow duration-700 hover:shadow-[0_30px_90px_rgba(9,60,93,0.14)] sm:p-10"
    >
      {/* Ambient Glow */}
      <motion.div
        initial={{
          scale: 1,
          opacity: 0.4,
        }}
        whileHover={{
          scale: 1.5,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6FD1D7]/10 blur-3xl"
      />

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#093C5D08_1px,transparent_1px),linear-gradient(90deg,#093C5D08_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      {/* Top */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-[0.2em] text-[#3B7597]">
            {item.number}
          </span>

          <div className="h-px w-8 bg-[#6FD1D7]" />
        </div>

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#093C5D] text-white shadow-lg shadow-[#093C5D]/20"
        >
          <Icon size={21} />
        </motion.div>
      </div>

      {/* Main */}
      <div className="relative mt-16">
        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#093C5D] sm:text-4xl">
          {item.title}
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#093C5D]/55 sm:text-base">
          {item.description}
        </p>
      </div>

      {/* Hover Arrow */}
      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
        className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#3B7597]/20 text-[#3B7597] transition-all duration-500 group-hover:bg-[#093C5D] group-hover:text-white"
      >
        <ArrowUpRight size={17} />
      </motion.div>

      {/* Bottom Gradient */}
      <motion.div
        initial={{
          scaleX: 0.1,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#093C5D] via-[#3B7597] to-[#5DF8D8]"
      />
    </motion.div>
  );
}

export default function Difference() {
  return (
    <section
      id="difference"
      className="relative overflow-hidden bg-[#F7FCFC] py-28 sm:py-36"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#6FD1D7]/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[-15%] h-[500px] w-[500px] rounded-full bg-[#5DF8D8]/10 blur-3xl"
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
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6FD1D7]/30 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wider text-[#3B7597] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8] shadow-[0_0_10px_#5DF8D8]" />
            WHY EZZYCON
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#093C5D] sm:text-5xl lg:text-7xl">
            Technology with
            <br />

            <span className="text-[#3B7597]">
              a reason to exist.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#093C5D]/55 sm:text-lg">
            We believe the best technology is not the most complicated.
            It is the technology that makes your business better.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {differences.map((item, index) => (
            <DifferenceCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Statement */}
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
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#093C5D] sm:text-3xl">
            We don't build technology
            <span className="text-[#3B7597]">
              {" "}
              for technology's sake.
            </span>
          </p>

          <p className="mt-4 text-sm leading-7 text-[#093C5D]/50">
            We build it to create something better.
          </p>
        </motion.div>
      </div>
    </section>
  );
}