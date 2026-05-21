"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(true);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1800;
    const frame = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress >= 1) {
        setDone(true);
        setTimeout(() => setShow(false), 800);
        return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: done ? "-100%" : 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: done ? 0.2 : 0 }}
          className="fixed inset-0 z-[9998] bg-cream text-charcoal flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
              Loading
            </div>
            <div className="heading-massive text-[clamp(5rem,20vw,12rem)] leading-none tracking-tighter">
              {count}%
            </div>
            <div className="mt-8 font-mono text-[11px] tracking-[0.2em] text-charcoal/50">
              Hello, welcome to mawj!
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
