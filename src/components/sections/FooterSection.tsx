import { SITE } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer className="py-12 md:py-16 px-6 bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display italic text-xl text-white">{SITE.name}</p>
          <p className="text-xs mt-1">© {new Date().getFullYear()} — Tous droits réservés.</p>
        </div>
        <div className="flex gap-6 text-xs">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" className="hover:text-amber-500 transition-colors">WhatsApp</a>
          <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" className="hover:text-amber-500 transition-colors">Instagram</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-amber-500 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}