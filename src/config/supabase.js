import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ffypuohutnqtwadexsaq.supabase.co"
const supabaseAnonKey = "sb_publishable_-Uy7W9owU0tXHXkQkkMzQw_xEr18wWu"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
