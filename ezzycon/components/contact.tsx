
"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // API route / Google Sheets / Email integration yahan connect karenge
    setSubmitted(true);
  };

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#5DF8D8]" />
            LET&apos;S SOLVE YOUR CHALLENGE
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 max-w-5xl text-center"
        >
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
            Tell us the problem.
            <br />

            <span className="text-[#6FD1D7]">
              We&apos;ll build the solution.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Every business is different. Tell us what&apos;s holding your
            business back, and our team will understand your requirements and
            create a customized solution designed specifically for you.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          {submitted ? (
            <div className="rounded-[2rem] border border-[#6FD1D7]/20 bg-white/10 p-10 text-center backdrop-blur-xl sm:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5DF8D8] text-2xl text-[#093C5D]">
                ✓
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-white">
                We&apos;ve received your request.
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                Thank you for reaching out to Ezzycon. We&apos;ll understand
                your requirements, design a customized solution for your
                business, and get in touch with you shortly.
              </p>

              <p className="mt-6 text-xs font-semibold tracking-[0.15em] text-[#6FD1D7]">
                WE&apos;LL BE IN TOUCH SOON
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.15)] backdrop-blur-2xl sm:p-10"
            >
              {/* Step 1 */}
              <div>
                <label className="text-sm font-semibold text-white">
                  What&apos;s the biggest challenge your business is facing?
                </label>

                <textarea
                  name="challenge"
                  required
                  rows={4}
                  placeholder="Tell us what problem you're currently facing..."
                  className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                />
              </div>

              {/* Step 2 */}
              <div className="mt-7">
                <label className="text-sm font-semibold text-white">
                  Tell us a little more about the situation.
                </label>

                <textarea
                  name="details"
                  required
                  rows={4}
                  placeholder="What is happening right now? What have you tried so far?"
                  className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                />
              </div>

              {/* Step 3 */}
              <div className="mt-7">
                <label className="text-sm font-semibold text-white">
                  What would you like to achieve?
                </label>

                <textarea
                  name="goal"
                  required
                  rows={3}
                  placeholder="Tell us what success would look like for your business..."
                  className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                />
              </div>

              {/* Contact Information */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold tracking-[0.15em] text-[#6FD1D7]">
                  ABOUT YOU
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                  />

                  <input
                    name="company"
                    type="text"
                    placeholder="Business / Company name"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email address"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone / WhatsApp number"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10"
                  />

                  <input
                    name="website"
                    type="url"
                    placeholder="Current website (optional)"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#6FD1D7]/50 focus:bg-white/10 sm:col-span-2"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="mt-7 flex items-start gap-3">
                <input
                  id="terms"
                  name="terms"
                  required
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[#5DF8D8]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-white/40"
                >
                  I agree to be contacted by Ezzycon regarding my request.
                  I understand that the information I provide will be used
                  only to understand my requirements and discuss a suitable
                  solution.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-8 flex w-full items-center justify-center gap-4 rounded-2xl bg-white px-7 py-5 text-sm font-semibold text-[#093C5D] shadow-xl transition-all duration-300 hover:bg-[#5DF8D8] hover:shadow-[0_15px_50px_rgba(93,248,216,0.15)]"
              >
                Submit Your Requirement

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#093C5D] text-white transition-all group-hover:bg-[#093C5D]">
                  <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </button>

              <p className="mt-5 text-center text-[11px] leading-5 text-white/25">
                We&apos;ll review your requirements and get in touch with you
                shortly to understand your business and discuss a customized
                solution.
              </p>
            </form>
          )}
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
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
