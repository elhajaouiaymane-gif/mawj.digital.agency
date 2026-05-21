"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const serviceData = [
  {
    id: "direction",
    num: "01",
    sub: [
      "Creative Direction",
      "Art Direction",
      "Brand Strategy",
      "Visual Identity",
    ],
  },
  {
    id: "digital",
    num: "02",
    sub: [
      "Web Experience",
      "UI/UX Design",
      "Motion & Animation",
      "CGI & 3D",
    ],
  },
  {
    id: "offline",
    num: "03",
    sub: [
      "Immersive Events",
      "Print & Editorial",
      "Spatial Design",
      "Packaging",
    ],
  },
];

const bgColors = [
  "rgba(0,212,255,0.05)",
  "rgba(255,184,0,0.05)",
  "rgba(10,31,68,0.08)",
];

export function Services() {
  const t = useTranslations("services");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" className="section-pad bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>

          <div className="md:col-span-10 space-y-0">
            {serviceData.map((svc, idx) => {
              const isOpen = open === svc.id;
              return (
                <div
                  key={svc.id}
                  className="border-t border-charcoal/10 last:border-b"
                  style={{ backgroundColor: isOpen ? bgColors[idx] : "transparent" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : svc.id)}
                    className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 text-left cursor-pointer group"
                  >
                    <span className="font-mono text-[12px] tracking-[0.3em] text-charcoal/30">
                      {svc.num}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-charcoal/50 w-16 md:w-20 shrink-0">
                      {t(svc.id as "direction" | "digital" | "offline")}
                    </span>
                    <span className="heading-serif text-[clamp(2.5rem,6vw,5rem)] flex-1 group-hover:text-cyan transition-colors duration-300">
                      {t(svc.id as "direction" | "digital" | "offline")}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-charcoal/30 group-hover:text-cyan transition-colors">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pb-12 pl-[calc(3rem+4rem)] md:pl-[calc(5rem+6rem)]">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {svc.sub.map((item) => (
                              <div
                                key={item}
                                className="font-mono text-[12px] tracking-[0.15em] text-charcoal/60 py-1"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
