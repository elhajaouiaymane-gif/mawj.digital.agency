"use client";

import { useTranslations } from "next-intl";

const clients = [
  "Royal Air Maroc",
  "OCP Group",
  "Maroc Telecom",
  "Inwi",
  "Marjane",
  "Atlas Lions",
  "BMCE Bank",
  "TEDx Casablanca",
  "L'Officiel Maroc",
  "Attijariwafa Bank",
];

export function Clients() {
  const t = useTranslations("clients");

  return (
    <section id="clients" className="section-pad bg-abyss text-pearl overflow-hidden">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>
        </div>

        <div className="space-y-0">
          {clients.map((client, i) => (
            <div
              key={client}
              className="group border-t border-pearl/10 last:border-b py-4 md:py-6 flex items-center justify-between cursor-default hover-trigger"
            >
              <span className="heading-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.1] text-pearl/40 group-hover:text-cyan transition-colors duration-500">
                {client}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-pearl/20 group-hover:text-pearl/50 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
