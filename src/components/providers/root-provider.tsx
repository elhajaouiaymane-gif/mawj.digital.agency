"use client";

import { ReactNode, useEffect, useState } from "react";
import Lenis from "lenis";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { Header } from "@/components/navigation/Header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function RootProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      wheelMultiplier: 1,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenisInstance.destroy();
  }, [reducedMotion]);

  return (
    <>
      <CustomCursor lenis={lenis} />
      <Header lenis={lenis} />
      <ScrollProgress />
      {children}
    </>
  );
}
