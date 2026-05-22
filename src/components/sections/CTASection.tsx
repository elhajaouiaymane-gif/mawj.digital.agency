"use client";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-neutral-950 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-500 mb-4">Prêt ?</p>
        <h2 className="font-display italic text-3xl md:text-5xl mb-6">
          Prêt à transformer votre business ?
        </h2>
        <p className="text-neutral-400 text-sm md:text-base mb-10 max-w-lg mx-auto">
          Discutons de votre projet. Appel découverte gratuit de 15 minutes. Aucun engagement.
        </p>
        <a
          href="#lead-form"
          className="inline-block bg-amber-500 text-neutral-900 py-3.5 px-10 rounded-full font-semibold text-sm hover:bg-amber-400 transition-colors"
        >
          Démarrer maintenant
        </a>
      </div>
    </section>
  );
}