"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Rocket,
  Search,
  Settings2,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, your audience, your challenges, and the opportunity ahead.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We turn insights into a clear digital strategy, defining the right technology and direction.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team designs and develops your digital experience and systems with precision.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, refine, optimize, and launch your solution with everything ready to perform.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Scale",
    description:
      "We continuously improve your digital ecosystem so it can evolve alongside your business.",
    icon: TrendingUp,
  },
];

function ProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
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
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Number */}
      <div className="mb-7 flex items-center gap-4">
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#6FD1D7]/40 bg-white text-sm font-bold text-[#093C5D] shadow-lg shadow-[#093C5D]/5"
        >
          <span className="absolute inset-1 rounded-full border border-[#6FD1D7]/20" />

          <span className="relative">
            {step.number}
          </span>
        </motion.div>

        {/* Connector */}
        {index !== steps.length - 1 && (
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#6FD1D7]/50 to-[#6FD1D7]/10 lg:block">
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: index * 0.15 + 0.4,
              }}
              className="h-full origin-left bg-[#3B7597]/40"
            />
          </div>
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.4,
        }}
        className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-[#6FD1D7]/25 bg-white p-7 shadow-[0_15px_50px_rgba(9,60,93,0.05)] transition-shadow duration-500 group-hover:shadow-[0_25px_70px_rgba(9,60,93,0.12)] sm:p-8"
      >
        {/* Background Glow */}
        <motion.div
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.4,
          }}
          transition={{
            duration: 1,
          }}
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#6FD1D7]/10 blur-3xl"
        />

        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#093C5D] text-white shadow-lg shadow-[#093C5D]/15"
        >
          <Icon size={21} />
        </motion.div>

        {/* Content */}
        <div className="relative mt-10">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#093C5D]">
            {step.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#093C5D]/55">
            {step.description}
          </p>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{
            scaleX: 0.15,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#093C5D] via-[#3B7597] to-[#5DF8D8]"
        />
      </motion.div>

      {/* Mobile Connector */}
      {index !== steps.length - 1 && (
        <div className="flex justify-center py-5 lg:hidden">
          <ArrowDown
            size={20}
            className="text-[#6FD1D7]"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-28 sm:py-36"
    >
      {/* Ambient Background */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#6FD1D7]/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 20, 0],
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6FD1D7]/30 bg-[#6FD1D7]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#3B7597]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8] shadow-[0_0_10px_#5DF8D8]" />
            HOW WE WORK
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#093C5D] sm:text-5xl lg:text-7xl">
            From idea
            <br />

            <span className="text-[#3B7597]">
              to impact.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#093C5D]/55 sm:text-lg">
            A clear, collaborative process designed to turn ambitious
            ideas into powerful digital systems that deliver real results.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="mt-20 grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Statement */}
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
            delay: 0.2,
          }}
          className="mx-auto mt-20 flex max-w-3xl items-center justify-center gap-5 text-center"
        >
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[#6FD1D7]/40 sm:block" />

          <div className="flex items-center gap-2 text-sm font-medium text-[#093C5D]/45">
            <span>One vision</span>

            <ArrowRight
              size={16}
              className="text-[#3B7597]"
            />

            <span className="text-[#3B7597]">
              One powerful system.
            </span>
          </div>

          <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-[#6FD1D7]/40 sm:block" />
        </motion.div>
      </div>
    </section>
  );
}