"use client";

import { useTranslations } from "next-intl";

export function ContactFooter() {
  const t = useTranslations("contact");

  return (
    <footer id="contact-footer" className="relative section-pad bg-cream text-charcoal">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-32">
          {(t.raw("locations") as Array<{
            city: string;
            address: string;
            phone: string;
          }>).map((loc) => (
            <div key={loc.city} className="md:col-span-4">
              <h3 className="heading-serif text-[clamp(1.5rem,3vw,2.5rem)] text-charcoal mb-3">
                {loc.city}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.15em] text-charcoal/60 leading-relaxed">
                {loc.address}
                <br />
                {loc.phone}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-4">
              {t("follow")}
            </h4>
            <div className="flex gap-6 font-mono text-[12px] tracking-[0.15em] text-charcoal/60">
              <a href="#" className="hover:text-cyan transition-colors">Instagram</a>
              <a href="#" className="hover:text-cyan transition-colors">Twitter</a>
              <a href="#" className="hover:text-cyan transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-cyan transition-colors">Behance</a>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-4">
              {t("newsletter")}
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative border-b border-charcoal/20 pb-3 flex items-center"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent font-mono text-[12px] tracking-[0.1em] text-charcoal placeholder:text-charcoal/30 focus:outline-none py-1"
              />
              <button
                type="submit"
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan hover:opacity-70 transition-opacity cursor-pointer shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-charcoal/10 pt-10 md:pt-16">
          <div className="heading-massive text-[clamp(6rem,25vw,20rem)] leading-[0.8] text-charcoal/5 select-none pointer-events-none">
            mawj
          </div>

          <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl italic font-semibold">mawj</span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-charcoal/30">
                مَوْج
              </span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-charcoal/40">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>

      <a
        href="#contact-footer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }}
        className="fixed bottom-6 left-6 z-40 px-6 py-3 rounded-full bg-charcoal text-cream font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-cyan hover:text-abyss transition-all duration-300 shadow-lg"
      >
        Contact us
      </a>
    </footer>
  );
}
