"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const projects = [
  {
    title: "Royal Air Maroc",
    tags: "Brand Identity · Web Experience",
    color: "#0A1F44",
    image: null,
  },
  {
    title: "OCP Group",
    tags: "Digital Platform · Data Viz",
    color: "#00D4FF",
    image: null,
  },
  {
    title: "Maroc Telecom",
    tags: "UI/UX · Motion",
    color: "#FFB800",
    image: null,
  },
  {
    title: "Atlas Lions",
    tags: "Campaign · Immersive",
    color: "#0D0D0D",
    image: null,
  },
  {
    title: "Marjane",
    tags: "E-commerce · Brand",
    color: "#0A1F44",
    image: null,
  },
  {
    title: "BMCE Bank",
    tags: "Fintech · Web App",
    color: "#00D4FF",
    image: null,
  },
];

export function FeaturedWork() {
  const t = useTranslations("featured");

  return (
    <section id="featured-work" className="section-pad bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm relative"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="heading-serif text-pearl/20 text-[clamp(2rem,6vw,5rem)] italic">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-4 md:col-start-9 ${
                  i % 2 === 1 ? "md:order-1 md:col-start-2" : ""
                }`}
              >
                <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-3">
                  {project.tags}
                </div>
                <h3 className="heading-serif text-[clamp(2rem,5vw,4rem)] leading-[0.92] text-charcoal group-hover:text-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="mt-6">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-charcoal/40 group-hover:text-cyan transition-colors inline-flex items-center gap-2">
                    View project →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
