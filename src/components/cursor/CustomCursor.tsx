"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type Lenis from "lenis";

export function CustomCursor({ lenis }: { lenis: Lenis | null }) {
  const [isTouch, setIsTouch] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredMagnetic, setHoveredMagnetic] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { damping: 30, stiffness: 300 });
  const smoothY = useSpring(cursorY, { damping: 30, stiffness: 300 });

  useEffect(() => {
    setIsTouch(matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const magEnter = () => setHoveredMagnetic(true);
    const magLeave = () => setHoveredMagnetic(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a, button, [role='button'], .hover-trigger").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mouseenter", magEnter);
      el.addEventListener("mouseleave", magLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, [role='button'], .hover-trigger").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      document.querySelectorAll(".magnetic").forEach((el) => {
        el.removeEventListener("mouseenter", magEnter);
        el.removeEventListener("mouseleave", magLeave);
      });
    };
  }, [cursorX, cursorY, isTouch]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{
            width: hovered ? 64 : hoveredMagnetic ? 48 : 32,
            height: hovered ? 64 : hoveredMagnetic ? 48 : 32,
            backgroundColor: hovered ? "rgba(0,212,255,0.15)" : "transparent",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-full border border-pearl"
        />
      </motion.div>
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovered ? 0 : 1 }}
          className="h-1.5 w-1.5 rounded-full bg-pearl"
        />
      </motion.div>
    </>
  );
}
