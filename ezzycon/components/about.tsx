"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const founders = [
  {
    id: "founder-1",
    name: "Your Name",
    role: "Founder",
    image: "/founder-1.jpg",
    description:
      "Building Ezzycon with a vision to create meaningful digital products, AI-powered systems, and technology solutions that solve real business problems.",
  },
  {
    id: "founder-2",
    name: "Co-Founder Name",
    role: "Co-Founder",
    image: "/founder-2.jpg",
    description:
      "Working alongside the team to turn ideas into practical solutions and build a company focused on innovation, execution, and long-term impact.",
  },
];

const certifications = [
  {
    id: "certificate-1",
    title: "Certification / Achievement",
    issuer: "Organization Name",
    image: "/certificate-1.jpg",
  },
  {
    id: "certificate-2",
    title: "Certification / Achievement",
    issuer: "Organization Name",
    image: "/certificate-2.jpg",
  },
  {
    id: "certificate-3",
    title: "Certification / Achievement",
    issuer: "Organization Name",
    image: "/certificate-3.jpg",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28 sm:py-36"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#6FD1D7]/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#3B7597]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

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
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6FD1D7]/30 bg-[#F7FCFC] px-4 py-2 text-xs font-semibold tracking-wider text-[#3B7597]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8] shadow-[0_0_10px_#5DF8D8]" />
            ABOUT EZZYCON
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#093C5D] sm:text-5xl lg:text-7xl">
            Built by people
            <br />
            <span className="text-[#3B7597]">
              who love building.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#093C5D]/55 sm:text-lg">
            Ezzycon is a technology and digital solutions company focused on
            building customized digital experiences, intelligent systems, and
            AI-powered solutions that help businesses move forward.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* COMPANY STORY + VISION */}
        {/* ================================= */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mt-20 grid gap-6 lg:grid-cols-2"
        >
          {/* Story Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#093C5D] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6FD1D7]/15 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#6FD1D7]">
                <Sparkles size={22} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-white/40">
                OUR STORY
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                From ideas to
                <br />
                real-world impact.
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                We believe technology should not be complicated for the sake
                of being complicated. The best solutions are the ones that
                understand the real problem first and then use the right
                technology to solve it.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                That is why we focus on understanding every client&apos;s
                unique challenges before creating a customized solution.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#093C5D]/10 bg-[#F7FCFC] p-8 sm:p-10 lg:p-12">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#5DF8D8]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#093C5D] text-[#6FD1D7]">
                <Award size={22} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-[#3B7597]">
                OUR VISION
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#093C5D] sm:text-4xl">
                Build boldly.
                <br />
                Think beyond.
              </h3>

              <p className="mt-6 text-sm leading-7 text-[#093C5D]/55">
                Our long-term vision is to build technology that goes beyond
                conventional digital services—exploring AI, intelligent
                automation, robotics, and emerging technologies to create
                solutions with lasting impact.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Customized solutions",
                  "Technology with purpose",
                  "Long-term partnerships",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#3B7597]"
                    />

                    <span className="text-sm font-medium text-[#093C5D]/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================= */}
        {/* FOUNDERS */}
        {/* ================================= */}

        <div className="mt-28 sm:mt-36">
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
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-[#3B7597]">
              THE PEOPLE BEHIND EZZYCON
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#093C5D] sm:text-5xl">
              Two founders.
              <br />
              <span className="text-[#3B7597]">
                One ambitious vision.
              </span>
            </h3>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.id}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className="group"
              >
                {/* Founder Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#093C5D]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#093C5D]/80 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 text-xs font-bold tracking-[0.2em] text-white/60">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-6 left-6">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#6FD1D7]">
                      {founder.role}
                    </p>

                    <h4 className="mt-2 text-2xl font-semibold text-white">
                      {founder.name}
                    </h4>
                  </div>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#093C5D]/55">
                  {founder.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ================================= */}
        {/* CERTIFICATIONS */}
        {/* ================================= */}

        <div className="mt-28 sm:mt-36">
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
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#3B7597]">
                CERTIFICATIONS & ACHIEVEMENTS
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#093C5D] sm:text-5xl">
                Proof of the
                <br />
                <span className="text-[#3B7597]">
                  journey so far.
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#093C5D]/50">
              A growing collection of certifications, achievements, awards,
              and milestones that represent our continuous learning and
              progress.
            </p>
          </motion.div>

          {/* Certificate Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate, index) => (
              <motion.div
                key={certificate.id}
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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-[1.5rem] border border-[#093C5D]/10 bg-[#F7FCFC]"
              >
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#093C5D]/0 transition-colors duration-500 group-hover:bg-[#093C5D]/10" />
                </div>

                {/* Certificate Details */}
                <div className="p-5">
                  <p className="text-sm font-semibold text-[#093C5D]">
                    {certificate.title}
                  </p>

                  <p className="mt-2 text-xs text-[#093C5D]/40">
                    {certificate.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================================= */}
        {/* FINAL CTA */}
        {/* ================================= */}

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
          }}
          className="mt-28 overflow-hidden rounded-[2rem] bg-[#093C5D] p-8 text-center sm:mt-36 sm:p-12 lg:p-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#6FD1D7]">
            LET&apos;S BUILD THE FUTURE
          </p>

          <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Have a problem worth solving?
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">
            Tell us what you&apos;re trying to achieve. We&apos;ll understand
            your challenge and explore a customized solution with you.
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#093C5D]"
          >
            Start a Conversation

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