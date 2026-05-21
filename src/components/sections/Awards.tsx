"use client";

import { useTranslations } from "next-intl";

const awards = [
  "L'Officiel",
  "Awwwards",
  "CSS Design Awards",
  "FWA",
  "TEDx Casablanca",
  "Wallpaper*",
];

export function Awards() {
  const t = useTranslations("awards");

  return (
    <section id="awards" className="section-pad bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>
          <div className="md:col-span-3 md:col-start-4">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-charcoal/50">
              {t("tagline")}
            </div>
          </div>
        </div>

        <div className="space-y-0">
          {awards.map((award, i) => (
            <div
              key={award}
              className="group border-t border-charcoal/10 last:border-b py-4 md:py-6 flex items-center justify-between hover-trigger"
            >
              <span className="heading-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.1] text-charcoal/30 group-hover:text-cyan transition-colors duration-500">
                {award}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-charcoal/20">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
