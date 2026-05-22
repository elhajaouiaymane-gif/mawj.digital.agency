"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  project_type: z.string({ message: "Sélectionnez un type" }).min(1),
  budget_range: z.string({ message: "Sélectionnez un budget" }).min(1),
  timeline: z.string({ message: "Sélectionnez un délai" }).min(1),
  full_name: z.string({ message: "Nom requis" }).min(2),
  email: z.string({ message: "Email requis" }).email("Email invalide"),
  whatsapp: z.string({ message: "Téléphone requis" }).min(8),
  company: z.string().optional(),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  { value: "landing", label: "Landing Page", desc: "Une page unique pour présenter votre service" },
  { value: "website", label: "Site Vitrine", desc: "5-7 pages pour votre entreprise" },
  { value: "ecommerce", label: "E-commerce", desc: "Boutique en ligne complète" },
  { value: "other", label: "Autre", desc: "Projet sur-mesure" },
];
const budgets = [
  { value: "lt5k", label: "Moins de 5 000 MAD" },
  { value: "5to10k", label: "5 000 - 10 000 MAD" },
  { value: "10to20k", label: "10 000 - 20 000 MAD" },
  { value: "gt20k", label: "Plus de 20 000 MAD" },
];
const timelines = [
  { value: "urgent", label: "Urgent (< 2 semaines)" },
  { value: "1month", label: "1 mois" },
  { value: "2to3months", label: "2-3 mois" },
  { value: "flexible", label: "Flexible" },
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const projectType = watch("project_type");
  const budgetRange = watch("budget_range");
  const timeline = watch("timeline");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  if (submitted) {
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212600000000";
    const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "mawj.agency";
    return (
      <section id="lead-form" className="py-24 md:py-32 px-6 bg-amber-500">
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <span className="text-5xl mb-6 block">🎉</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-white mb-4">
              Merci ! Je vous contacte sous 24h sur WhatsApp.
            </h2>
            <p className="text-white/80 text-sm mb-10">Votre demande a bien été reçue. À très vite !</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Salut Mawj! Je viens de remplir le formulaire. Hâte d'échanger!")}`}
                target="_blank"
                className="bg-white text-neutral-900 py-3 px-6 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                💬 Me contacter sur WhatsApp
              </a>
              <a
                href={`https://instagram.com/${igHandle}`}
                target="_blank"
                className="bg-neutral-900 text-white py-3 px-6 rounded-full font-semibold text-sm hover:bg-neutral-800 transition-colors"
              >
                📸 Suivre sur Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-24 md:py-32 px-6 bg-neutral-900 text-white">
      <div className="max-w-lg mx-auto">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-500 mb-4">Démarrer un projet</p>
        <h2 className="font-display italic text-3xl md:text-5xl mb-4">
          Votre projet commence ici.
        </h2>
        <p className="text-neutral-400 text-sm mb-10">3 étapes rapides. Je vous réponds en moins de 24h.</p>

        <div className="flex gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1 rounded-full transition-colors ${step >= s ? "bg-amber-500" : "bg-neutral-700"}`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                <p className="font-semibold text-lg mb-6">Quel type de projet ?</p>
                <div className="space-y-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.value}
                      type="button"
                      onClick={() => setValue("project_type", pt.value as FormData["project_type"])}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        projectType === pt.value
                          ? "border-amber-500 bg-amber-500/10"
                          : "border-neutral-700 hover:border-neutral-500"
                      }`}
                    >
                      <span className="font-medium text-sm">{pt.label}</span>
                      <span className="block text-xs text-neutral-400 mt-1">{pt.desc}</span>
                    </button>
                  ))}
                </div>
                {errors.project_type && <p className="text-red-400 text-xs mt-3">{errors.project_type.message}</p>}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                <p className="font-semibold text-lg mb-6">Budget estimé ?</p>
                <div className="space-y-3 mb-8">
                  {budgets.map((b) => (
                    <button
                      key={b.value}
                      type="button"
                      onClick={() => setValue("budget_range", b.value as FormData["budget_range"])}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        budgetRange === b.value
                          ? "border-amber-500 bg-amber-500/10"
                          : "border-neutral-700 hover:border-neutral-500"
                      }`}
                    >
                      <span className="font-medium text-sm">{b.label}</span>
                    </button>
                  ))}
                </div>
                {errors.budget_range && <p className="text-red-400 text-xs mt-3">{errors.budget_range.message}</p>}

                <p className="font-semibold text-lg mb-6 mt-6">Délai souhaité ?</p>
                <div className="space-y-3">
                  {timelines.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setValue("timeline", t.value as FormData["timeline"])}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        timeline === t.value
                          ? "border-amber-500 bg-amber-500/10"
                          : "border-neutral-700 hover:border-neutral-500"
                      }`}
                    >
                      <span className="font-medium text-sm">{t.label}</span>
                    </button>
                  ))}
                </div>
                {errors.timeline && <p className="text-red-400 text-xs mt-3">{errors.timeline.message}</p>}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                <p className="font-semibold text-lg mb-6">Vos coordonnées</p>
                <div className="space-y-4">
                  <input {...register("full_name")} placeholder="Nom complet *" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500" />
                  {errors.full_name && <p className="text-red-400 text-xs">{errors.full_name.message}</p>}
                  <input {...register("email")} placeholder="Email *" type="email" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500" />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                  <input {...register("whatsapp")} placeholder="WhatsApp / Téléphone * (+212...)" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500" />
                  {errors.whatsapp && <p className="text-red-400 text-xs">{errors.whatsapp.message}</p>}
                  <input {...register("company")} placeholder="Nom de l'entreprise" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500" />
                  <textarea {...register("description")} rows={3} placeholder="Décrivez votre projet (optionnel)" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 resize-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-full border border-neutral-600 text-sm font-medium hover:bg-neutral-800 transition-colors cursor-pointer">
                Retour
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && !projectType) return;
                  if (step === 2 && (!budgetRange || !timeline)) return;
                  setStep(step + 1);
                }}
                className="flex-1 bg-amber-500 text-neutral-900 py-3 px-6 rounded-full font-semibold text-sm hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Continuer
              </button>
            ) : (
              <button type="submit" disabled={loading} className="flex-1 bg-amber-500 text-neutral-900 py-3 px-6 rounded-full font-semibold text-sm hover:bg-amber-400 transition-colors disabled:opacity-50 cursor-pointer">
                {loading ? "Envoi..." : "Envoyer ma demande"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}