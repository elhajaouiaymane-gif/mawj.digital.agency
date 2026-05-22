"use client";

export default function StatsCards({ leads }: { leads: any[] }) {
  const total = leads.length;
  const thisWeek = leads.filter((l) => {
    const d = new Date(l.created_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return d > weekAgo;
  }).length;
  const won = leads.filter((l) => l.status === "won").length;
  const conversion = total > 0 ? Math.round((won / total) * 100) : 0;
  const pipeline = leads.filter((l) => l.status === "won" && l.estimated_value).reduce((sum: number, l: any) => sum + (l.estimated_value || 0), 0);

  const cards = [
    { label: "Total leads", value: total },
    { label: "Cette semaine", value: thisWeek },
    { label: "Taux de conversion", value: `${conversion}%` },
    { label: "Pipeline (MAD)", value: pipeline.toLocaleString("fr-FR") },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-wider">{c.label}</p>
          <p className="text-white text-2xl font-bold mt-1">{c.value}</p>
        </div>
      ))}
    </div>
  );
}