-- Run this in Supabase SQL Editor

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  company TEXT,
  project_type TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  timeline TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'new',
  notes TEXT,
  estimated_value INTEGER
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view leads" ON leads FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Admins can update leads" ON leads FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "Admins can delete leads" ON leads FOR DELETE USING (auth.uid() IS NOT NULL);