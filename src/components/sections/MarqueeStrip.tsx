"use client";

import { useRef, useEffect } from "react";

export function MarqueeStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      if (!el) return;
      const speed = 0.3;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const dist = (center - viewCenter) / window.innerHeight;
      el.style.transform = `skewY(${dist * 3}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden py-6 md:py-8 bg-charcoal"
      style={{ transform: "skewY(0deg)", transition: "transform 0.1s linear" }}
    >
      <div className="flex whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-pearl/30 mx-8 animate-marquee"
            style={{ animationDuration: "20s" }}
          >
            mawj · digital waves · creative studio · depuis 2024 · مَوْج ·
          </span>
        ))}
      </div>
    </div>
  );
}
