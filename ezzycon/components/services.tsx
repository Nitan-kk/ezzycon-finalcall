"use client";

import { motion } from "framer-motion";
import RevealHeading from "@/components/reveal-heading";
import RevealText from "@/components/reveal-text";

const services = [
  {
    number: "01",
    title: "Digital Experiences",
    description:
      "High-performance websites and digital platforms designed to make your brand stand out and convert attention into action.",
    tags: ["Web Design", "Next.js", "UX/UI"],
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Intelligent automation systems that reduce repetitive work, improve efficiency, and help your business operate smarter.",
    tags: ["AI Agents", "Workflows", "Automation"],
  },
  {
    number: "03",
    title: "Intelligent Systems",
    description:
      "Connected digital systems that bring your data, tools, and operations together into one efficient ecosystem.",
    tags: ["CRM", "Integrations", "APIs"],
  },
  {
    number: "04",
    title: "Growth Infrastructure",
    description:
      "Scalable technology infrastructure built to support your business as it grows, evolves, and reaches new markets.",
    tags: ["Analytics", "Scalability", "Strategy"],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6FD1D7]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <RevealText>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#5DF8D8]" />

                <span className="text-xs font-semibold tracking-[0.2em] text-[#3B7597]">
                  WHAT WE BUILD
                </span>
              </div>
            </RevealText>

            <RevealHeading
              text="Technology with purpose."
              className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-[#093C5D] sm:text-5xl lg:text-6xl"
              delay={0.1}
            />
          </div>

          <RevealText
            delay={0.2}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-base leading-7 text-[#093C5D]/50 lg:text-lg">
              We combine design, technology, and artificial
              intelligence to create digital systems that solve
              real business problems and unlock new possibilities.
            </p>
          </RevealText>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
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
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group h-full"
            >
              <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[2rem] border border-[#093C5D]/10 bg-[#F8FBFC] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#3B7597]/25 hover:shadow-[0_30px_80px_rgba(9,60,93,0.10)] sm:p-9">
                {/* Hover Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6FD1D7]/10 via-transparent to-[#3B7597]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#3B7597]/50">
                    {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#093C5D]/10 text-lg text-[#3B7597] transition-all duration-300 group-hover:border-[#6FD1D7] group-hover:bg-[#6FD1D7] group-hover:text-[#093C5D]">
                    ↗
                  </span>
                </div>

                {/* Main Content */}
                <div className="relative mt-auto">
                  <h3 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-[#093C5D] transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-[#093C5D]/50 sm:text-base">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#093C5D]/10 bg-white/70 px-3 py-1.5 text-[10px] font-medium text-[#093C5D]/50 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#3B7597] to-[#6FD1D7] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <RevealText
          delay={0.2}
          className="mt-16"
        >
          <div className="flex flex-col gap-5 border-t border-[#093C5D]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-[#093C5D]/40">
              From your first digital touchpoint to the systems
              behind your business, we build technology that
              works together.
            </p>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-3 text-sm font-semibold text-[#093C5D]"
            >
              Let&apos;s build together

              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}