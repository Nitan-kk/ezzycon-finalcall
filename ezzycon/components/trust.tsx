"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Rocket,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "AI-First",
    label: "Technology",
    description:
      "We integrate intelligent technology into digital experiences and business workflows.",
    icon: BrainCircuit,
  },
  {
    value: "End-to-End",
    label: "Execution",
    description:
      "From strategy and design to development and launch, we handle the complete journey.",
    icon: Layers3,
  },
  {
    value: "Performance",
    label: "Focused",
    description:
      "Fast, responsive and conversion-focused experiences built with performance in mind.",
    icon: Zap,
  },
  {
    value: "Built to",
    label: "Scale",
    description:
      "Digital systems designed to evolve with your business as you grow.",
    icon: Rocket,
  },
];

function SpotlightCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-3xl border border-[#6FD1D7]/25 bg-white/70 p-7 shadow-[0_10px_40px_rgba(9,60,93,0.05)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(9,60,93,0.12)]"
    >
      {/* Mouse Spotlight */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="pointer-events-none absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6FD1D7]/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Top Row */}
      <div className="relative flex items-start justify-between">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#093C5D] text-white shadow-lg shadow-[#093C5D]/15"
        >
          <Icon size={21} />
        </motion.div>

        <ArrowUpRight
          size={20}
          className="text-[#093C5D]/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3B7597]"
        />
      </div>

      {/* Content */}
      <div className="relative mt-10">
        <p className="text-2xl font-semibold tracking-tight text-[#093C5D]">
          {stat.value}
        </p>

        <p className="mt-1 text-sm font-medium text-[#3B7597]">
          {stat.label}
        </p>

        <p className="mt-4 text-sm leading-6 text-[#093C5D]/55">
          {stat.description}
        </p>
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{ width: "20%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8]"
      />
    </motion.div>
  );
}

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-[#F7FCFC] py-24 sm:py-32">
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6FD1D7]/15 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#5DF8D8]/10 blur-3xl"
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#093C5D06_1px,transparent_1px),linear-gradient(to_bottom,#093C5D06_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6FD1D7]/30 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wider text-[#3B7597] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8] shadow-[0_0_10px_#5DF8D8]" />
            THE EZzycon APPROACH
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#093C5D] sm:text-5xl lg:text-6xl">
            Technology that works
            <span className="text-[#3B7597]"> for your business.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#093C5D]/55 sm:text-lg">
            We combine strategy, design, technology, and intelligent
            automation to create digital systems that are built for real
            business growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <SpotlightCard
              key={stat.value}
              stat={stat}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-16 flex max-w-3xl items-center justify-center gap-4 text-center"
        >
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[#6FD1D7]/40 sm:block" />

          <p className="text-sm font-medium text-[#093C5D]/45">
            Strategy meets technology.
            <span className="text-[#3B7597]">
              {" "}
              Ideas become systems.
            </span>
          </p>

          <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-[#6FD1D7]/40 sm:block" />
        </motion.div>
      </div>
    </section>
  );
}