"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-600 text-center mb-4">Témoignages</p>
        <h2 className="font-display italic text-3xl md:text-5xl text-neutral-900 text-center mb-12">
          Ce que disent mes clients.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                <p className="text-neutral-400 text-xs">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}