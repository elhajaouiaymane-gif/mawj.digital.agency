import { Menu } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="mx-auto flex max-w-[90%] items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="text-cyan font-display text-2xl">مَوْج</span>
          <span className="text-pearl">Mawj</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-pearl/70 hover:text-cyan transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ocean">
          Start a Project
        </a>
        <button className="text-pearl md:hidden cursor-pointer p-2" aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
