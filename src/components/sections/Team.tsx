"use client";

import { useTranslations } from "next-intl";

const teamMembers = [
  { name: "Aymane L.", role: "Creative Director", initials: "AL" },
  { name: "Salma B.", role: "Art Director", initials: "SB" },
  { name: "Youssef M.", role: "Lead Developer", initials: "YM" },
  { name: "Imane K.", role: "Motion Designer", initials: "IK" },
  { name: "Omar T.", role: "Brand Strategist", initials: "OT" },
  { name: "Lina H.", role: "UI/UX Designer", initials: "LH" },
];

export function Team() {
  const t = useTranslations("team");

  return (
    <section id="team" className="section-pad bg-cream">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-2">
            <div className="chapter-label text-cyan">{t("chapter")}</div>
          </div>
          <div className="md:col-span-6 md:col-start-4">
            <p className="text-base md:text-lg leading-relaxed text-charcoal/70 font-light max-w-prose">
              {t("intro")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[3/4] bg-charcoal/5 rounded-sm overflow-hidden relative mb-3 md:mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 to-charcoal/40 group-hover:from-cyan/20 group-hover:to-ocean/40 transition-all duration-500 flex items-center justify-center">
                  <span className="heading-serif text-pearl/30 text-[2rem] md:text-[3rem] group-hover:text-pearl/60 transition-colors duration-500">
                    {member.initials}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-base md:text-lg font-medium text-charcoal">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/50 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
