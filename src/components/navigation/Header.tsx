"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import type Lenis from "lenis";

const DARK_SECTION_IDS = ["statement", "clients", "cta"];

export function Header({ lenis }: { lenis: Lenis | null }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkBg, setDarkBg] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const inDark = DARK_SECTION_IDS.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      setDarkBg(inDark);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = useCallback(
    (target: string) => {
      setMenuOpen(false);
      if (lenis) {
        lenis.scrollTo(target, { offset: 0 });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between transition-colors duration-300 ${
          darkBg || menuOpen ? "text-pearl" : "text-charcoal"
        }`}
        style={{ mixBlendMode: darkBg ? "difference" : "normal" }}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="relative z-50 flex items-baseline gap-2"
        >
          <span className="font-display text-2xl italic font-semibold leading-none">mawj</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-50 hidden sm:inline">
            مَوْج
          </span>
        </a>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase hidden md:block">
            Since 2024
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 font-mono text-[11px] tracking-[0.25em] uppercase cursor-pointer hover:opacity-60 transition-opacity"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <MenuOverlay onClose={() => setMenuOpen(false)} onNavigate={handleNav} />
        )}
      </AnimatePresence>
    </>
  );
}

function MenuOverlay({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate: (target: string) => void;
}) {
  const links = [
    { num: "01", label: "Work", target: "#featured-work" },
    { num: "02", label: "About", target: "#about" },
    { num: "03", label: "Services", target: "#services" },
    { num: "04", label: "Contact", target: "#contact-footer" },
  ];

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-40 bg-abyss text-pearl flex flex-col justify-center px-6 md:px-20"
    >
      <nav className="flex flex-col gap-6 md:gap-8">
        {links.map((link, i) => (
          <motion.button
            key={link.num}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            onClick={() => onNavigate(link.target)}
            className="group flex items-center gap-6 md:gap-10 text-left cursor-pointer"
          >
            <span className="font-mono text-[12px] tracking-[0.3em] text-cyan">
              {link.num}
            </span>
            <span className="heading-serif text-[clamp(3rem,10vw,8rem)] text-pearl group-hover:text-cyan transition-colors duration-300">
              {link.label}
            </span>
          </motion.button>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-6 md:left-20 right-6 md:right-20 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div className="font-mono text-[11px] tracking-[0.25em] text-pearl/50">
          <p>hello@mawj.agency</p>
          <p className="mt-1">Casablanca / Paris / Dubai</p>
        </div>
        <div className="flex gap-6 font-mono text-[11px] tracking-[0.2em] text-pearl/50">
          <a href="#" className="hover:text-cyan transition-colors">Instagram</a>
          <a href="#" className="hover:text-cyan transition-colors">Twitter</a>
          <a href="#" className="hover:text-cyan transition-colors">LinkedIn</a>
        </div>
      </motion.div>
    </motion.div>
  );
}
