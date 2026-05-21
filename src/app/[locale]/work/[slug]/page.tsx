"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const projectData: Record<string, {
  title: string;
  client: string;
  year: string;
  tags: string;
  description: string;
  color: string;
}> = {
  "royal-air-maroc": {
    title: "Royal Air Maroc",
    client: "Royal Air Maroc",
    year: "2025",
    tags: "Brand Identity · Web Experience",
    description: "A comprehensive digital transformation for Morocco's flagship airline. From booking experience to brand identity, we reimagined every touchpoint to reflect the warmth and ambition of Moroccan hospitality.",
    color: "#0A1F44",
  },
  "ocp-group": {
    title: "OCP Group",
    client: "OCP Group",
    year: "2025",
    tags: "Digital Platform · Data Viz",
    description: "An enterprise data platform that transforms complex fertilizer supply chain data into actionable insights. Clean, powerful, and built for global impact.",
    color: "#00D4FF",
  },
  "maroc-telecom": {
    title: "Maroc Telecom",
    client: "Maroc Telecom",
    year: "2024",
    tags: "UI/UX · Motion",
    description: "Redesigning the digital experience for Morocco's leading telecommunications provider. Focus on accessibility, performance, and delightful micro-interactions.",
    color: "#FFB800",
  },
  "atlas-lions": {
    title: "Atlas Lions",
    client: "Royal Moroccan Football Federation",
    year: "2024",
    tags: "Campaign · Immersive",
    description: "A campaign celebrating Morocco's national football team. Blending digital and physical worlds through interactive installations and social-first content.",
    color: "#0D0D0D",
  },
  marjane: {
    title: "Marjane",
    client: "Marjane Holding",
    year: "2024",
    tags: "E-commerce · Brand",
    description: "A next-generation e-commerce platform that brings the in-store experience online. Seamless, intuitive, and deeply visual.",
    color: "#0A1F44",
  },
  "bmce-bank": {
    title: "BMCE Bank",
    client: "BMCE Bank",
    year: "2024",
    tags: "Fintech · Web App",
    description: "A modern digital banking experience that balances security with elegance. Rebuilding trust through design.",
    color: "#00D4FF",
  },
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectData[slug];

  if (!project) {
    return (
      <main className="pt-32 md:pt-48 section-pad min-h-screen bg-cream">
        <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
          <h1 className="heading-serif text-[clamp(2rem,6vw,5rem)]">Project not found</h1>
          <Link href="/work" className="mt-8 inline-block font-mono text-[11px] tracking-[0.25em] uppercase text-cyan hover:underline">
            ← Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 md:pt-48 min-h-screen bg-cream">
      <div className="section-pad">
        <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
          <Link
            href="/work"
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-cyan hover:underline inline-block mb-10"
          >
            ← Back to work
          </Link>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <div className="chapter-label text-cyan">Project</div>
            </div>
            <div className="md:col-span-10">
              <h1 className="heading-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-charcoal mb-8">
                {project.title}
              </h1>
            </div>
          </div>

          <div
            className="w-full aspect-[16/9] rounded-sm mb-16 md:mb-24 relative overflow-hidden"
            style={{ backgroundColor: project.color }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="heading-serif text-pearl/20 text-[clamp(2rem,8vw,6rem)] italic">
                {project.title}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4 md:col-start-3">
              <div className="space-y-8">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">Client</div>
                  <p className="font-display text-xl text-charcoal">{project.client}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">Year</div>
                  <p className="font-display text-xl text-charcoal">{project.year}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">Services</div>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-charcoal/60">{project.tags}</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base md:text-lg leading-relaxed text-charcoal/70 font-light">
                {project.description}
              </p>
            </div>
          </div>

          <div className="mt-32 md:mt-48 border-t border-charcoal/10 pt-16 flex justify-between items-center">
            <Link
              href="/work"
              className="font-mono text-[11px] tracking-[0.25em] uppercase text-charcoal/40 hover:text-cyan transition-colors"
            >
              ← All work
            </Link>
            <span className="font-mono text-[10px] tracking-[0.2em] text-charcoal/30">
              {project.client} · {project.year}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
