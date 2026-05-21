"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-ocean"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${30 + mousePosition.x * 10}% ${70 + mousePosition.y * 10}%, rgba(255, 184, 0, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-4"
        >
          Casablanca &rarr; Global
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-pearl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          We craft digital
          <br />
          <span className="gradient-text">waves</span> that
          <br />
          move the world.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 max-w-xl text-lg text-pearl/70 sm:text-xl"
        >
          Riding the Wave of Digital Excellence — Award-winning web design &amp; development
          studio based in Morocco.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="magnetic-btn rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ocean transition-all hover:shadow-glow-gold"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="magnetic-btn rounded-full border border-cyan/30 px-8 py-4 text-sm font-semibold text-cyan backdrop-blur-sm transition-all hover:bg-cyan/10"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl font-bold text-cyan">{stat.value}</div>
              <div className="mt-1 text-sm text-pearl/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </section>
  );
}
