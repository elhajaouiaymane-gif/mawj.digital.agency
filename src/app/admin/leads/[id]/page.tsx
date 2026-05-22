"use client";

import { useEffect, useState, use } from "react";
import { createClient } from "@/lib/supabase/client";
import StatusBadge from "@/components/admin/status-badge";

const typeLabels: Record<string, string> = {
  landing: "Landing Page", website: "Site Vitrine", ecommerce: "E-commerce", other: "Autre",
};
const budgetLabels: Record<string, string> = {
  lt5k: "< 5k MAD", "5to10k": "5-10k MAD", "10to20k": "10-20k MAD", gt20k: "> 20k MAD",
};
const timelineLabels: Record<string, string> = {
  urgent: "Urgent", "1month": "1 mois", "2to3months": "2-3 mois", flexible: "Flexible",
};

export default function LeadDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { window.location.href = "/admin/login"; return; }
      supabase.from("leads").select("*").eq("id", id).single().then(({ data }) => {
        setLead(data); setLoading(false);
      });
    });
  }, [id]);

  if (loading) return <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">Chargement...</div>;
  if (!lead) return <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">Lead introuvable.</div>;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center gap-4">
        <a href="/admin" className="text-neutral-400 hover:text-white text-sm cursor-pointer">← Retour</a>
        <h1 className="font-display italic text-xl">{lead.full_name}</h1>
      </header>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
            <div><p className="text-neutral-500 text-xs font-mono uppercase">Email</p><p className="text-white">{lead.email}</p></div>
            <div><p className="text-neutral-500 text-xs font-mono uppercase">WhatsApp</p><p className="text-white">{lead.whatsapp}</p></div>
            <div><p className="text-neutral-500 text-xs font-mono uppercase">Entreprise</p><p className="text-white">{lead.company || "—"}</p></div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center"><p className="text-neutral-500 text-xs font-mono uppercase">Statut</p><StatusBadge status={lead.status} /></div>
            <div><p className="text-neutral-500 text-xs font-mono uppercase">Type projet</p><p className="text-white">{typeLabels[lead.project_type] || lead.project_type}</p></div>
            <div><p className="text-neutral-500 text-xs font-mono uppercase">Budget</p><p className="text-white">{budgetLabels[lead.budget_range] || lead.budget_range}</p></div>
            <div><p className="text-neutral-500 text-xs font-mono uppercase">Délai</p><p className="text-white">{timelineLabels[lead.timeline] || lead.timeline}</p></div>
          </div>
        </div>
        {lead.description && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mt-6">
            <p className="text-neutral-500 text-xs font-mono uppercase mb-2">Description du projet</p>
            <p className="text-white text-sm leading-relaxed">{lead.description}</p>
          </div>
        )}
        <div className="mt-6 text-center text-neutral-600 text-xs">
          Créé le {new Date(lead.created_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}