"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#093C5D] py-28 sm:py-36"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#3B7597]/30 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#5DF8D8]/10 blur-[120px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
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
            duration: 0.7,
          }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#5DF8D8]" />

            LET&apos;S BUILD SOMETHING
          </div>
        </motion.div>

        {/* Heading */}
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
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 max-w-5xl text-center"
        >
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
            Have an idea?
            <br />

            <span className="text-[#6FD1D7]">
              Let&apos;s make it real.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Whether you&apos;re building something new, transforming an
            existing business, or exploring what&apos;s possible with AI,
            we&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="mailto:hello@ezzycon.co.in"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#093C5D] shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500 hover:shadow-[0_20px_70px_rgba(93,248,216,0.2)] sm:px-8 sm:py-5"
          >
            Start a Conversation

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#093C5D] text-white transition-all duration-300 group-hover:bg-[#5DF8D8] group-hover:text-[#093C5D]">
              <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </motion.a>
        </motion.div>

        {/* Contact Cards */}
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
            delay: 0.4,
          }}
          className="mx-auto mt-24 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {/* Email */}
          <a
            href="mailto:hello@ezzycon.co.in"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:border-[#6FD1D7]/30 hover:bg-white/10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-[#6FD1D7]">
              @
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.15em] text-white/30">
                EMAIL
              </p>

              <p className="mt-1 text-sm text-white/70 transition-colors group-hover:text-white">
                hello@ezzycon.co.in
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lg text-[#6FD1D7]">
              ◉
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.15em] text-white/30">
                BASED IN
              </p>

              <p className="mt-1 text-sm text-white/70">
                India • Working Globally
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="mt-24 text-center"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-white/20">
            THINK BIG. BUILD BOLD. MOVE FORWARD.
          </p>
        </motion.div>
      </div>
    </section>
  );
}