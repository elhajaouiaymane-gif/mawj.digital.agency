"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatMAD, SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  const serviceKeys = ["landing", "website", "ecommerce"] as const;

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-600 mb-4">Services</p>
        <h2 className="font-display italic text-3xl md:text-5xl text-neutral-900 mb-4">
          Des sites web qui convertissent.
        </h2>
        <p className="text-neutral-500 text-sm md:text-base max-w-xl mb-16">
          Trois formules pensées pour votre budget et vos objectifs. Simple, transparent, sans surprise.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => {
            const s = SERVICES[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl border p-6 md:p-8 flex flex-col ${
                  "popular" in s
                    ? "border-amber-300 bg-amber-50 ring-2 ring-amber-200"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
                } transition-all`}
              >
                {"popular" in s && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full">
                    Le plus populaire
                  </span>
                )}
                <h3 className="font-display italic text-xl md:text-2xl text-neutral-900 mb-1">{s.title}</h3>
                <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                  {"custom" in s ? "Sur devis" : formatMAD(s.price)}
                  {"custom" in s && (
                    <span className="text-sm font-normal text-neutral-500 block">À partir de {formatMAD(15000)}</span>
                  )}
                  <span className="text-sm font-normal text-neutral-500 block">{"custom" in s ? "" : "paiement unique"}</span>
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-amber-500 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead-form"
                  className={`block text-center py-3 rounded-full font-medium text-sm transition-all ${
                    "popular" in s
                      ? "bg-amber-500 text-white hover:bg-amber-600"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {"custom" in s ? "Demander un devis" : "Choisir ce pack"}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}