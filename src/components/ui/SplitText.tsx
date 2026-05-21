"use client";

import { useRef, useEffect, createElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function SplitText({
  children,
  as: Tag = "h2",
  className = "",
  type = "lines",
  stagger = 0.04,
}: {
  children: string;
  as?: string;
  className?: string;
  type?: "chars" | "words" | "lines";
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    const el = ref.current;
    const text = el.textContent || "";
    el.textContent = "";

    let wrapper: HTMLElement;

    if (type === "chars") {
      wrapper = document.createElement("span");
      wrapper.style.display = "inline";
      wrapper.innerHTML = text
        .split("")
        .map((c) => `<span class="split-char inline-block" style="display:inline-block">${c === " " ? "&nbsp;" : c}</span>`)
        .join("");
    } else if (type === "words") {
      wrapper = document.createElement("span");
      wrapper.style.display = "inline";
      wrapper.innerHTML = text
        .split(" ")
        .map((w) => `<span class="split-word inline-block" style="display:inline-block; white-space:nowrap">${w}&nbsp;</span>`)
        .join("");
    } else {
      wrapper = document.createElement("div");
      wrapper.style.display = "block";
      wrapper.innerHTML = text
        .split("\n")
        .map((l) => `<span class="split-line block overflow-hidden"><span class="inline-block" style="display:inline-block">${l || "&nbsp;"}</span></span>`)
        .join("");
    }

    el.appendChild(wrapper);

    const targets = el.querySelectorAll(".split-char, .split-word, .split-line > span");
    gsap.fromTo(
      targets,
      { y: 80, opacity: 0, rotate: 3 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        stagger,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (el) el.textContent = text;
    };
  }, [children, type, stagger, reduced]);

  return createElement(Tag, { ref, className }, children);
}
