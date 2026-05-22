import { Fragment } from "react";

export default function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: "text-blue-400 bg-blue-500/10",
    contacted: "text-amber-400 bg-amber-500/10",
    qualified: "text-green-400 bg-green-500/10",
    won: "text-emerald-400 bg-emerald-500/10",
    lost: "text-red-400 bg-red-500/10",
  };
  const labels: Record<string, string> = {
    new: "Nouveau",
    contacted: "Contacté",
    qualified: "Qualifié",
    won: "Gagné",
    lost: "Perdu",
  };

  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[status] || "text-neutral-400 bg-neutral-800"}`}>
      {labels[status] || status}
    </span>
  );
}