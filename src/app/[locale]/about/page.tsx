"use client";

import { useTranslations } from "next-intl";
import { SplitText } from "@/components/ui/SplitText";
import { motion } from "framer-motion";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <main className="pt-32 md:pt-48 section-pad min-h-screen bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="chapter-label text-cyan mb-6 md:mb-10">1 About</div>

        <SplitText
          as="h1"
          type="lines"
          stagger={0.06}
          className="heading-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] max-w-[8ch] mb-16 md:mb-24"
        >
          {t("headline")}
        </SplitText>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <p className="text-base md:text-lg leading-relaxed text-charcoal/70 font-light">
              {t("body")}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="aspect-[3/4] bg-charcoal/5 rounded-sm" />
          </div>
        </div>

        <div className="mt-32 md:mt-48 border-t border-charcoal/10 pt-16 md:pt-24">
          <div className="chapter-label text-cyan mb-10">Values</div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              { num: "01", title: "Curiosity", desc: "We ask why before we ask how. Every project begins with questions, not answers." },
              { num: "02", title: "Craft", desc: "Every pixel, every letter, every micro-interaction is considered. We don't ship work we wouldn't frame." },
              { num: "03", title: "Wave", desc: "We build work that moves — through culture, through time, through the digital and physical world." },
            ].map((val) => (
              <motion.div
                key={val.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="font-mono text-[12px] tracking-[0.3em] text-cyan mb-3">{val.num}</div>
                <h3 className="heading-serif text-[2rem] md:text-[2.5rem] mb-4">{val.title}</h3>
                <p className="font-mono text-[12px] tracking-[0.1em] text-charcoal/60 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
