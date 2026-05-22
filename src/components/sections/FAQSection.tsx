"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-600 text-center mb-4">FAQ</p>
        <h2 className="font-display italic text-3xl md:text-5xl text-neutral-900 text-center mb-12">
          Questions fréquentes.
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <span className="font-medium text-neutral-900 text-sm md:text-base pr-4">{item.q}</span>
                <span className={`text-amber-500 text-lg transition-transform shrink-0 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-neutral-500 text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}