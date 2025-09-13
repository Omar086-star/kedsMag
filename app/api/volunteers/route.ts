// app/api/volunteers/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabaseAdmin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    // فحص سريع على الجدول (اختياري)
    const { error } = await supabase.from("volunteers").select("id").limit(1)
    return NextResponse.json({ ok: true, envOk: true, tableOk: !error })
  } catch (e: any) {
    return NextResponse.json({ ok: false, envOk: false, error: e?.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabaseAdmin()

    const body = await req.json().catch(() => null)
    if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })

    const full_name = String(body.full_name || "").trim()
    const email     = String(body.email || "").trim()
    if (!full_name || !email) {
      return NextResponse.json({ error: "الاسم والبريد مطلوبان" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("volunteers")
      .insert({
        full_name,
        email,
        phone: String(body.phone || "").trim() || null,
        city:  String(body.city  || "").trim() || null,
        age:   Number.isFinite(+body.age) ? +body.age : null,
        gender: ["male","female","other"].includes(body.gender) ? body.gender : null,
        skills: String(body.skills || "").trim() || null,
        availability: String(body.availability || "").trim() || null,
        hours_per_week: Number.isFinite(+body.hours_per_week) ? +body.hours_per_week : null,
        has_vehicle: !!body.has_vehicle,
        notes: String(body.notes || "").trim() || null,
        status: "new",
      })
      .select("id, created_at")
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true, id: data.id, created_at: data.created_at })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unexpected error" }, { status: 500 })
  }
}
