"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${pct / 100})`;
      }
      if (pctRef.current) {
        pctRef.current.textContent = `${Math.round(pct)}%`;
      }
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div
        ref={barRef}
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-cyan origin-left"
        style={{ transform: "scaleX(0)", opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      />
      <span
        ref={pctRef}
        className="fixed bottom-6 right-6 z-[100] font-mono text-[11px] tracking-widest text-charcoal/40 mix-blend-difference"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        0%
      </span>
    </>
  );
}
