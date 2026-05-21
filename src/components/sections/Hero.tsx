"use client";

import { useTranslations } from "next-intl";
import { SplitText } from "@/components/ui/SplitText";
import { useRef, useEffect } from "react";

export function Hero() {
  const t = useTranslations("hero");
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gradientRef.current;
    if (!el) return;

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center section-pad overflow-hidden bg-cream"
    >
      <div
        ref={gradientRef}
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(0,212,255,0.15) 0%, rgba(255,184,0,0.08) 40%, transparent 70%)",
          transition: "background 0.1s ease-out",
        }}
      />

      <div className="relative z-10 max-w-[90vw] md:max-w-[85vw]">
        <div className="chapter-label text-cyan mb-6 md:mb-10">
          {t("eyebrow")}
        </div>

        <SplitText
          as="h1"
          type="lines"
          stagger={0.06}
          className="heading-serif text-[clamp(3.5rem,10vw,8rem)] md:text-[clamp(5rem,12vw,10rem)] leading-[0.92] tracking-tight text-balance max-w-[6ch]"
        >
          {t("headline")}
        </SplitText>

        <div className="mt-12 md:mt-20 font-mono text-[11px] tracking-[0.25em] uppercase text-charcoal/40 animate-pulse">
          {t("cta")}
        </div>
      </div>
    </section>
  );
}
