"use client";

import { useTranslations } from "next-intl";
import { SplitText } from "@/components/ui/SplitText";
import { motion } from "framer-motion";
import { Services } from "@/components/sections/Services";

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <main className="pt-32 md:pt-48 min-h-screen bg-cream">
      <div className="section-pad">
        <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
          <div className="chapter-label text-cyan mb-6 md:mb-10">{t("chapter")}</div>

          <SplitText
            as="h1"
            type="lines"
            stagger={0.06}
            className="heading-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] max-w-[6ch] mb-16 md:mb-24"
          >
            What we do
          </SplitText>
        </div>
      </div>

      <Services />

      <div className="section-pad bg-abyss text-pearl">
        <div className="max-w-[90vw] md:max-w-[80vw] mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-pearl/40 mb-6">
            Not sure what you need?
          </p>
          <h2 className="heading-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] text-balance mb-8">
            Let&apos;s figure it out together
          </h2>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full border-2 border-pearl/20 font-mono text-[11px] tracking-[0.25em] uppercase text-pearl hover:bg-pearl hover:text-abyss transition-all duration-300"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </main>
  );
}
