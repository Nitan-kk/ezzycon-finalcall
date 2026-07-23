"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const quickQuestions = [
  "What does Ezzycon do?",
  "How can Ezzycon help my business?",
  "How do I start a project?",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Real AI API yahan connect karenge
    console.log("User message:", message);

    setMessage("");
  };

  const handleQuickQuestion = (question: string) => {
    // Real AI API yahan connect karenge
    console.log("Quick question:", question);
  };

  return (
    <>
      {/* ========================================= */}
      {/* FLOATING AI BUTTON */}
      {/* ========================================= */}

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        aria-label={
          open
            ? "Close Ezzycon AI Assistant"
            : "Open Ezzycon AI Assistant"
        }
        aria-expanded={open}
        className="
          fixed
          bottom-4
          right-4
          z-[100]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#093C5D]
          text-white
          shadow-[0_15px_50px_rgba(9,60,93,0.35)]
          transition-shadow
          duration-300
          hover:shadow-[0_20px_60px_rgba(9,60,93,0.45)]
          sm:bottom-8
          sm:right-8
        "
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
              }}
            >
              <Bot size={25} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Online Indicator */}
        {!open && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="
              absolute
              right-0
              top-0
              h-3.5
              w-3.5
              rounded-full
              border-2
              border-white
              bg-[#5DF8D8]
            "
          />
        )}
      </motion.button>

      {/* ========================================= */}
      {/* MOBILE BACKDROP */}
      {/* ========================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[98]
              bg-[#093C5D]/20
              backdrop-blur-sm
              sm:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* CHAT WINDOW */}
      {/* ========================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-0
              left-2
              right-2
              z-[99]
              flex
              h-[min(600px,calc(100dvh-90px))]
              flex-col
              overflow-hidden
              rounded-t-[2rem]
              border
              border-[#6FD1D7]/20
              bg-white
              shadow-[0_30px_100px_rgba(9,60,93,0.25)]

              sm:bottom-28
              sm:left-auto
              sm:right-8
              sm:h-[600px]
              sm:w-[390px]
              sm:max-w-[calc(100vw-2rem)]
              sm:rounded-[2rem]
            "
          >
            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <div className="relative shrink-0 overflow-hidden bg-[#093C5D] p-4 text-white sm:p-5">
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#5DF8D8]/20 blur-2xl" />

              {/* Mobile Drag Indicator */}
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 sm:hidden" />

              <div className="relative flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5DF8D8] text-[#093C5D]">
                  <Sparkles size={21} />
                </div>

                {/* Title */}
                <div className="min-w-0">
                  <h3 className="truncate font-semibold">
                    Ezzycon AI
                  </h3>

                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5DF8D8]" />

                    <p className="text-[11px] text-white/50">
                      Online • Ready to help
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* CHAT CONTENT */}
            {/* ========================================= */}

            <div className="min-h-0 flex-1 overflow-y-auto bg-[#F7FCFC] p-4 sm:p-5">

              {/* AI Welcome Message */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#093C5D] text-white">
                  <Bot size={16} />
                </div>

                <div className="max-w-[calc(100%-44px)] rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm">
                  <p className="text-sm leading-6 text-[#093C5D]/75">
                    Hi! 👋 I&apos;m Ezzycon AI.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#093C5D]/75">
                    I can help you understand Ezzycon and how we can help
                    solve challenges in your business.
                  </p>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="mt-6">
                <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-[#093C5D]/30">
                  QUICK QUESTIONS
                </p>

                <div className="space-y-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleQuickQuestion(question)}
                      className="
                        group
                        flex
                        min-h-[48px]
                        w-full
                        items-center
                        justify-between
                        gap-3
                        rounded-xl
                        border
                        border-[#093C5D]/10
                        bg-white
                        px-4
                        py-3
                        text-left
                        text-xs
                        text-[#093C5D]/70
                        transition-all
                        hover:border-[#6FD1D7]/40
                        hover:bg-[#F7FCFC]
                        active:scale-[0.98]
                      "
                    >
                      <span className="leading-5">
                        {question}
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="
                          shrink-0
                          text-[#3B7597]
                          transition-transform
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* INPUT AREA */}
            {/* ========================================= */}

            <div
              className="
                shrink-0
                border-t
                border-[#093C5D]/10
                bg-white
                p-3
                pb-[max(0.75rem,env(safe-area-inset-bottom))]
                sm:p-4
              "
            >
              <form
                onSubmit={handleSubmit}
                className="
                  flex
                  min-h-[52px]
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#093C5D]/10
                  bg-[#F7FCFC]
                  p-1.5
                "
              >
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask Ezzycon anything..."
                  autoComplete="off"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    text-[#093C5D]
                    outline-none
                    placeholder:text-[#093C5D]/30
                  "
                />

                <button
                  type="submit"
                  aria-label="Send message"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#093C5D]
                    text-white
                    transition-colors
                    hover:bg-[#3B7597]
                    active:scale-95
                  "
                >
                  <Send size={16} />
                </button>
              </form>

              <p className="mt-2 text-center text-[9px] text-[#093C5D]/25">
                Powered by Ezzycon AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}