"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const glowX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  // Mount only on client
  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setEnabled(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  // Mouse movement
  useEffect(() => {
    if (!mounted || !enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted, enabled, mouseX, mouseY]);

  // Prevent hydration mismatch
  if (!mounted || !enabled) {
    return null;
  }

  return (
    <>
      {/* Large Ambient Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6FD1D7]/10 blur-[70px]"
      />

      {/* Small Cursor Glow */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B7597]/30 bg-[#6FD1D7]/10 backdrop-blur-sm"
      />

      {/* Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#093C5D]"
      />
    </>
  );
}