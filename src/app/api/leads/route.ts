import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, whatsapp, company, project_type, budget_range, timeline, description } = body;

    if (!full_name || !email || !whatsapp || !project_type || !budget_range || !timeline) {
      return NextResponse.json({ error: "Tous les champs obligatoires sont requis." }, { status: 400 });
    }

    const supabase = await createServerSupabase();

    const { error } = await supabase.from("leads").insert({
      full_name,
      email,
      whatsapp,
      company: company || null,
      project_type,
      budget_range,
      timeline,
      description: description || null,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Lead enregistré avec succès." });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}