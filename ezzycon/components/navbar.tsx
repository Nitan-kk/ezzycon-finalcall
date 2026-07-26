"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
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
    label: "About",
    href: "#about",
  },
  {
    label: "Process",
    href: "#process",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ========================================
          NAVBAR
      ======================================== */}

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.88)"
              : "rgba(255,255,255,0.5)",

            borderColor: scrolled
              ? "rgba(59,117,151,0.16)"
              : "rgba(255,255,255,0.5)",

            boxShadow: scrolled
              ? "0 15px 50px rgba(9,60,93,0.10)"
              : "0 10px 40px rgba(9,60,93,0.03)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="mx-auto flex h-[70px] max-w-7xl items-center justify-between rounded-full border px-4 backdrop-blur-2xl sm:h-[76px] sm:px-6"
        >
          {/* ========================================
              LOGO
          ======================================== */}

          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Ezzycon Home"
            className="group flex items-center gap-3"
          >
            {/* Actual Ezzycon Logo */}
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/logo.png"
                alt="Ezzycon"
                width={40}
                height={40}
                priority
                className="h-full w-full object-contain"
              />

              {/* Subtle Hover Glow */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="pointer-events-none absolute inset-0 rounded-xl bg-[#6FD1D7]/10"
              />
            </motion.div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-[0.12em] text-[#093C5D]">
                EZZYCON
              </span>

              <span className="hidden text-[8px] font-medium tracking-[0.2em] text-[#3B7597]/70 sm:block">
                DIGITAL • AI • SYSTEMS
              </span>
            </div>
          </a>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-5 py-3 text-sm font-medium text-[#093C5D]/60 transition-colors duration-300 hover:text-[#093C5D]"
              >
                {item.label}

                <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#6FD1D7] transition-all duration-300 group-hover:w-5" />
              </a>
            ))}
          </div>

          {/* ========================================
              DESKTOP CTA
          ======================================== */}

          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group flex items-center gap-3 rounded-full bg-[#093C5D] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#093C5D]/15"
            >
              <span>Start a Project</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-base transition-all duration-300 group-hover:bg-[#6FD1D7] group-hover:text-[#093C5D]">
                ↗
              </span>
            </motion.a>
          </div>

          {/* ========================================
              MOBILE MENU BUTTON
          ======================================== */}

          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#093C5D] text-white lg:hidden"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute text-xl"
                >
                  ×
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute text-lg"
                >
                  ☰
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* ========================================
          MOBILE OVERLAY + MENU
      ======================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-[#093C5D]/20 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Menu */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-4 right-4 top-[98px] z-50 overflow-hidden rounded-[2rem] border border-[#6FD1D7]/20 bg-white/90 p-5 shadow-[0_30px_100px_rgba(9,60,93,0.18)] backdrop-blur-2xl lg:hidden"
            >
              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#6FD1D7]/15 blur-3xl" />

              {/* Mobile Links */}

              <div className="relative flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="group flex items-center justify-between border-b border-[#093C5D]/8 py-5 text-lg font-medium text-[#093C5D]"
                  >
                    <span>{item.label}</span>

                    <span className="text-[#3B7597] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="group mt-5 flex items-center justify-between rounded-2xl bg-[#093C5D] p-4 text-white"
              >
                <div>
                  <p className="text-xs font-medium text-white/50">
                    READY TO BUILD?
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Start a Project
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6FD1D7] text-lg text-[#093C5D] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </div>
              </motion.a>

              {/* Mobile Footer */}

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#093C5D]/30">
                  DIGITAL • AI • SYSTEMS
                </span>

                <span className="text-[9px] font-medium text-[#093C5D]/30">
                  EZZYCON
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}