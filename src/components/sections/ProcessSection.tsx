"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-600 mb-4">Process</p>
        <h2 className="font-display italic text-3xl md:text-5xl text-neutral-900 mb-4">
          Comment ça marche.
        </h2>
        <p className="text-neutral-500 text-sm md:text-base max-w-xl mb-16">
          Un processus simple en 4 étapes. Pas de jargon, pas de surprises.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <span className="font-mono text-4xl text-amber-500/30 font-bold">{step.step}</span>
              <h3 className="font-display italic text-xl text-neutral-900 mt-2">{step.title}</h3>
              <p className="text-xs font-semibold text-amber-600 mt-1">{step.subtitle}</p>
              <p className="text-sm text-neutral-500 mt-3">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}