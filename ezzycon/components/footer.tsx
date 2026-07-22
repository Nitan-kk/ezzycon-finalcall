"use client";

import { motion } from "framer-motion";

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const services = [
  "Digital Experiences",
  "AI Automation",
  "Intelligent Systems",
  "Growth Infrastructure",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061F30] text-white">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#3B7597]/20 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#5DF8D8]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-16 py-20 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-28">
          {/* Brand */}
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
          >
            {/* Logo */}
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#093C5D]">
                <span className="text-lg font-bold">
                  E
                </span>
              </div>

              <span className="text-xl font-semibold tracking-[-0.03em]">
                EZZYCON
              </span>
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
              We build premium digital experiences, intelligent AI
              systems, and technology that helps ambitious businesses
              move forward.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@ezzycon.co.in"
              className="group mt-7 inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <span className="text-[#6FD1D7]">
                @
              </span>

              hello@ezzycon.co.in

              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </motion.div>

          {/* Navigation */}
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
              delay: 0.1,
            }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
              NAVIGATION
            </p>

            <div className="mt-7 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}

                  <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
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
              delay: 0.2,
            }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-white/30">
              EXPERTISE
            </p>

            <div className="mt-7 flex flex-col gap-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Massive Brand Text */}
        <div className="overflow-hidden border-t border-white/10 py-10">
          <motion.p
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
              duration: 1,
            }}
            className="select-none text-[16vw] font-bold leading-[0.7] tracking-[-0.08em] text-white/[0.035]"
          >
            EZZYCON
          </motion.p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ezzycon. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/40 transition-all duration-300 hover:border-[#6FD1D7]/40 hover:bg-white/5 hover:text-white"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/40 transition-all duration-300 hover:border-[#6FD1D7]/40 hover:bg-white/5 hover:text-white"
            >
              ig
            </a>
          </div>

          {/* Legal */}
          <div className="flex gap-5 text-xs text-white/30">
            <a
              href="#"
              className="transition-colors hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white/60"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}