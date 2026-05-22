"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";
import LeadsTable from "@/components/admin/leads-table";
import StatsCards from "@/components/admin/stats-cards";

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const supabase = createClient();

  const fetchLeads = useCallback(async () => {
    let query = supabase.from("leads").select("*").order("created_at", { ascending: false });
    if (filter !== "all") query = query.eq("status", filter);
    const { data } = await query;
    setLeads(data || []);
  }, [filter, supabase]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      if (!s) window.location.href = "/admin/login";
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (session) fetchLeads();
  }, [session, filter, fetchLeads]);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("leads").update({ status }).eq("id", id);
    fetchLeads();
  };

  const updateNotes = async (id: string, notes: string) => {
    await supabase.from("leads").update({ notes }).eq("id", id);
    fetchLeads();
  };

  if (loading) return <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">Chargement...</div>;
  if (!session) return null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <h1 className="font-display italic text-xl">mawj — Admin</h1>
        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-400">{session.user.email}</span>
          <button onClick={handleLogout} className="text-xs text-red-400 hover:text-red-300 cursor-pointer">Déconnexion</button>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        <StatsCards leads={leads} />
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 flex-wrap">
              {["all", "new", "contacted", "qualified", "won", "lost"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                    filter === s ? "bg-amber-500 text-neutral-900" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                  }`}
                >
                  {s === "all" ? "Tous" : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                const csv = ["Date,Nom,Email,WhatsApp,Type,Budget,Délai,Statut"]
                  .concat(leads.map((l) => `${l.created_at},${l.full_name},${l.email},${l.whatsapp},${l.project_type},${l.budget_range},${l.timeline},${l.status}`))
                  .join("\n");
                const blob = new Blob([csv], { type: "text/csv" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url; a.download = "leads.csv"; a.click();
              }}
              className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg text-xs font-medium hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              Export CSV
            </button>
          </div>
          <LeadsTable leads={leads} onStatusChange={updateStatus} onNotesChange={updateNotes} />
        </div>
      </div>
    </div>
  );
}