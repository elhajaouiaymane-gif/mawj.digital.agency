"use client";

import { STATS } from "@/lib/constants";

export default function SocialProof() {
  return (
    <section className="py-12 md:py-16 px-6 border-b border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display italic text-2xl md:text-3xl text-neutral-900">{stat.value}</p>
              <p className="text-xs text-neutral-500 mt-1 font-mono uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}