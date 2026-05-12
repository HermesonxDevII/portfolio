import { createClient } from '@supabase/supabase-js'

// No Next.js usamos process.env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("No environment variables for the Supabase were found! - supabase.ts");
}

export const supabase = createClient(supabaseUrl, supabaseKey)
