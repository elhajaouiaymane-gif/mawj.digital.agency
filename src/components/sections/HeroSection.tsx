"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center px-6 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,165,116,0.15), transparent 70%)" }} />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 max-w-3xl pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-500 mb-6"
        >
          Agence Web — Casablanca
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display italic text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight mb-6 text-balance"
        >
          Sites web qui transforment vos visiteurs en clients.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-neutral-400 text-base md:text-lg max-w-xl mb-10"
        >
          On conçoit des sites web premium pour les entreprises marocaines qui veulent se démarquer. Landing pages, sites vitrines, e-commerce — livrés rapidement, sans vous prendre la tête.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#lead-form" className="bg-amber-500 text-neutral-900 py-3.5 px-8 rounded-full font-semibold text-sm hover:bg-amber-400 transition-colors text-center">
            Démarrer un projet
          </a>
          <a href="#services" className="border border-neutral-700 text-white py-3.5 px-8 rounded-full font-semibold text-sm hover:bg-neutral-800 transition-colors text-center">
            Voir nos services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-8 mt-16 text-neutral-500 text-sm"
        >
          <span>✓ Landing pages <span className="text-amber-500">dès 3 500 MAD</span></span>
          <span className="hidden sm:inline">✓ Sites vitrines <span className="text-amber-500">dès 7 500 MAD</span></span>
        </motion.div>
      </div>
    </section>
  );
}