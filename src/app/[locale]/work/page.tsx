"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { slug: "royal-air-maroc", title: "Royal Air Maroc", tags: "Brand Identity · Web Experience", color: "#0A1F44" },
  { slug: "ocp-group", title: "OCP Group", tags: "Digital Platform · Data Viz", color: "#00D4FF" },
  { slug: "maroc-telecom", title: "Maroc Telecom", tags: "UI/UX · Motion", color: "#FFB800" },
  { slug: "atlas-lions", title: "Atlas Lions", tags: "Campaign · Immersive", color: "#0D0D0D" },
  { slug: "marjane", title: "Marjane", tags: "E-commerce · Brand", color: "#0A1F44" },
  { slug: "bmce-bank", title: "BMCE Bank", tags: "Fintech · Web App", color: "#00D4FF" },
];

export default function WorkPage() {
  return (
    <main className="pt-32 md:pt-48 section-pad min-h-screen bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="chapter-label text-cyan mb-6 md:mb-10">3 Featured work</div>

        <h1 className="heading-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] max-w-[6ch] mb-16 md:mb-24">
          Selected projects
        </h1>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <Link href={`/work/${project.slug}`} className="group grid md:grid-cols-12 gap-6 md:gap-10 items-center">
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div
                    className="aspect-[4/3] w-full rounded-sm relative overflow-hidden"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="heading-serif text-pearl/20 text-[clamp(2rem,5vw,4rem)] italic">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1 md:col-start-2" : "md:col-start-9"}`}>
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-3">
                    {project.tags}
                  </div>
                  <h2 className="heading-serif text-[clamp(2rem,5vw,4rem)] leading-[0.92] text-charcoal group-hover:text-cyan transition-colors duration-300">
                    {project.title}
                  </h2>
                  <div className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-charcoal/40 group-hover:text-cyan transition-colors">
                    View project →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
