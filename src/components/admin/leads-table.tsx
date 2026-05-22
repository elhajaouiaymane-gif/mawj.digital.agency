"use client";

import { useState } from "react";

const statusColors: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-amber-500/20 text-amber-400",
  qualified: "bg-green-500/20 text-green-400",
  won: "bg-emerald-500/20 text-emerald-400",
  lost: "bg-red-500/20 text-red-400",
};

const statusLabels: Record<string, string> = {
  new: "Nouveau",
  contacted: "Contacté",
  qualified: "Qualifié",
  won: "Gagné",
  lost: "Perdu",
};

const typeLabels: Record<string, string> = {
  landing: "Landing Page",
  website: "Site Vitrine",
  ecommerce: "E-commerce",
  other: "Autre",
};

const budgetLabels: Record<string, string> = {
  lt5k: "< 5k MAD",
  "5to10k": "5-10k MAD",
  "10to20k": "10-20k MAD",
  gt20k: "> 20k MAD",
};

const timelineLabels: Record<string, string> = {
  urgent: "Urgent",
  "1month": "1 mois",
  "2to3months": "2-3 mois",
  flexible: "Flexible",
};

export default function LeadsTable({
  leads,
  onStatusChange,
  onNotesChange,
}: {
  leads: any[];
  onStatusChange: (id: string, status: string) => void;
  onNotesChange: (id: string, notes: string) => void;
}) {
  const [notesOpen, setNotesOpen] = useState<string | null>(null);
  const [noteText, setNoteText] = useState("");

  if (leads.length === 0) {
    return (
      <div className="text-center py-20 text-neutral-500">
        <p className="text-4xl mb-4">📭</p>
        <p>Aucun lead pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-neutral-500 text-[10px] font-mono uppercase tracking-wider">
            <th className="p-3">Date</th>
            <th className="p-3">Nom</th>
            <th className="p-3 hidden md:table-cell">Contact</th>
            <th className="p-3 hidden md:table-cell">Type</th>
            <th className="p-3 hidden md:table-cell">Budget</th>
            <th className="p-3">Statut</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t border-neutral-800 hover:bg-neutral-900 transition-colors">
              <td className="p-3 text-neutral-400 text-xs whitespace-nowrap">
                {new Date(lead.created_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
              </td>
              <td className="p-3">
                <p className="text-white font-medium">{lead.full_name}</p>
                {lead.company && <p className="text-neutral-500 text-xs">{lead.company}</p>}
              </td>
              <td className="p-3 hidden md:table-cell">
                <p className="text-neutral-400 text-xs">{lead.email}</p>
                <p className="text-neutral-500 text-xs">{lead.whatsapp}</p>
              </td>
              <td className="p-3 hidden md:table-cell text-neutral-400 text-xs">
                {typeLabels[lead.project_type] || lead.project_type}
              </td>
              <td className="p-3 hidden md:table-cell text-neutral-400 text-xs">
                {budgetLabels[lead.budget_range] || lead.budget_range}
                <br />
                <span className="text-neutral-600">{timelineLabels[lead.timeline]}</span>
              </td>
              <td className="p-3">
                <select
                  value={lead.status}
                  onChange={(e) => onStatusChange(lead.id, e.target.value)}
                  className={`text-xs font-medium rounded-full px-2 py-1 cursor-pointer border-0 ${statusColors[lead.status] || ""}`}
                >
                  {Object.entries(statusLabels).map(([k, v]) => (
                    <option key={k} value={k} className="bg-neutral-900 text-white">{v}</option>
                  ))}
                </select>
              </td>
              <td className="p-3">
                <button
                  onClick={() => {
                    setNotesOpen(notesOpen === lead.id ? null : lead.id);
                    setNoteText(lead.notes || "");
                  }}
                  className="text-xs text-amber-500 hover:text-amber-400 cursor-pointer"
                >
                  Notes {lead.notes ? "●" : "○"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {notesOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 w-full max-w-md">
            <h3 className="font-semibold text-white mb-1">Notes internes</h3>
            <p className="text-xs text-neutral-500 mb-4">{leads.find((l) => l.id === notesOpen)?.full_name}</p>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              rows={4}
              placeholder="Ajouter une note..."
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 resize-none mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onNotesChange(notesOpen, noteText);
                  setNotesOpen(null);
                }}
                className="flex-1 bg-amber-500 text-neutral-900 py-2 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Enregistrer
              </button>
              <button
                onClick={() => setNotesOpen(null)}
                className="px-6 py-2 border border-neutral-700 text-neutral-300 rounded-lg text-sm hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}