"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const Manifesto = dynamic(() => import("@/components/sections/Manifesto"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"));
const Stats = dynamic(() => import("@/components/sections/Stats"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <div className="relative">
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan border-t-transparent" /></div>}>
        <Hero />
      </Suspense>
      <Manifesto />
      <Services />
      <Portfolio />
      <Stats />
      <ProcessTimeline />
      <Testimonials />
      <Pricing />
      <Contact />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
