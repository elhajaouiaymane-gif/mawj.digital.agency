"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { SplitText } from "@/components/ui/SplitText";

export function About() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center section-pad bg-cream"
    >
      <div className="w-full max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>

          <div className="md:col-span-7">
            <SplitText
              as="h2"
              type="lines"
              stagger={0.05}
              className="heading-serif text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-balance"
            >
              {t("headline")}
            </SplitText>

            <div className="mt-12 md:mt-16 max-w-prose">
              <p className="text-base md:text-lg leading-relaxed text-charcoal/70 font-light">
                {t("body")}
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:pt-4">
            <div className="aspect-[3/4] bg-charcoal/5 rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-cyan/10 to-ocean/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
