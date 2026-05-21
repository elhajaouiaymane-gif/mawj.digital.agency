"use client";

import { useTranslations } from "next-intl";
import { WordSwitcher } from "@/components/ui/WordSwitcher";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/hooks/useLenis";
import { useCallback } from "react";

export function CTA() {
  const t = useTranslations("cta");
  const lenis = useLenis();

  const handleClick = useCallback(() => {
    if (lenis) {
      lenis.scrollTo("#contact-footer", { offset: 0 });
    } else {
      document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [lenis]);

  return (
    <section id="cta" className="relative min-h-screen flex flex-col items-center justify-center section-pad bg-abyss text-pearl text-center overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="heading-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight text-balance">
          {t("prefix")}{" "}
          <WordSwitcher
            words={t.raw("words") as string[]}
            className="text-cyan"
          />{" "}
          {t("suffix")}
        </h2>

        <div className="mt-12 md:mt-16">
          <MagneticButton
            onClick={handleClick}
            className="inline-block px-10 py-4 md:px-14 md:py-5 border-2 border-pearl/20 rounded-full font-mono text-[12px] tracking-[0.25em] uppercase text-pearl hover:bg-pearl hover:text-abyss transition-all duration-300 cursor-pointer"
          >
            {t("button")}
          </MagneticButton>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}
