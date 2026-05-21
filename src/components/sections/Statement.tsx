"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Statement() {
  const t = useTranslations("statement");
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  const animate = useCallback(() => {
    if (reduced || !textRef.current) return;

    const el = textRef.current;
    const words = el.textContent?.split(" ") || [];
    el.textContent = "";
    const wrapper = document.createElement("span");
    wrapper.style.display = "inline";
    wrapper.innerHTML = words
      .map(
        (w, i) =>
          `<span class="inline-block" style="display:inline-block" data-word="${i}">${w}&nbsp;</span>`
      )
      .join("");
    el.appendChild(wrapper);

    const wordEls = el.querySelectorAll("[data-word]");
    gsap.fromTo(
      wordEls,
      { y: 120, opacity: 0, rotateZ: 5 },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
      }
    );
  }, [reduced]);

  useEffect(() => {
    animate();
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [animate]);

  return (
    <section
      id="statement"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center section-pad bg-abyss text-pearl overflow-hidden"
    >
      <div className="max-w-[85vw] text-center">
        <h2
          ref={textRef}
          className="heading-serif text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tight"
        >
          {t("text")}
        </h2>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-pearl/30">
        {t("attribution")}
      </div>
    </section>
  );
}
