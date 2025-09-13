// lib/supabaseAdmin.ts  (سيرفر فقط)
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let cached: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE

  if (!url || !serviceRole) {
    // نرمي الخطأ فقط عند الاستدعاء (في وقت التنفيذ)، وليس عند الاستيراد
    throw new Error(
      "Missing Supabase env. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE in .env.local"
    )
  }

  cached = createClient(url, serviceRole, { auth: { persistSession: false } })
  return cached
}
