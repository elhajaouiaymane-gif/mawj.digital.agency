"use client";

import { useTranslations } from "next-intl";
import { SplitText } from "@/components/ui/SplitText";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="pt-32 md:pt-48 section-pad min-h-screen bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="chapter-label text-cyan mb-6 md:mb-10">{t("chapter")}</div>

        <SplitText
          as="h1"
          type="lines"
          stagger={0.06}
          className="heading-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] max-w-[6ch] mb-16 md:mb-24"
        >
          Let's create something together
        </SplitText>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="md:col-span-5 md:col-start-1">
            <div className="space-y-12">
              {(t.raw("locations") as Array<{
                city: string;
                address: string;
                phone: string;
              }>).map((loc) => (
                <div key={loc.city}>
                  <h2 className="heading-serif text-[1.5rem] md:text-[2rem] text-charcoal mb-2">{loc.city}</h2>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-charcoal/60 leading-relaxed">
                    {loc.address}
                    <br />
                    {loc.phone}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-4">
                {t("follow")}
              </h3>
              <div className="flex gap-6 font-mono text-[12px] tracking-[0.15em] text-charcoal/60">
                <a href="#" className="hover:text-cyan transition-colors">Instagram</a>
                <a href="#" className="hover:text-cyan transition-colors">Twitter</a>
                <a href="#" className="hover:text-cyan transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-cyan transition-colors">Behance</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-charcoal/20 pb-3 font-mono text-[12px] tracking-[0.1em] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-cyan transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-charcoal/20 pb-3 font-mono text-[12px] tracking-[0.1em] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-cyan transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/50 block mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-b border-charcoal/20 pb-3 font-mono text-[12px] tracking-[0.1em] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-cyan transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-charcoal text-cream font-mono text-[11px] tracking-[0.25em] uppercase hover:bg-cyan hover:text-abyss transition-all duration-300 mt-8"
              >
                Send message →
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-charcoal/10 pt-10 md:pt-16">
          <div className="heading-massive text-[clamp(6rem,25vw,20rem)] leading-[0.8] text-charcoal/5 select-none pointer-events-none">
            mawj
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="font-display text-2xl italic font-semibold">mawj</span>
            <p className="font-mono text-[10px] tracking-[0.2em] text-charcoal/40">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
