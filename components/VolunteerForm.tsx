// components/volunteerForm.tsx

"use client"
import { useState } from "react"

type FormState = {
  full_name: string
  email: string
  phone: string
  city: string
  age: string
  gender: "" | "male" | "female" | "other"
  skills: string
  availability: string
  hours_per_week: string
  has_vehicle: boolean
  notes: string
  website: string // honeypot
}

const initialState: FormState = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  age: "",
  gender: "",
  skills: "",
  availability: "",
  hours_per_week: "",
  has_vehicle: false,
  notes: "",
  website: "",
}

export default function VolunteerForm() {
  const [state, setState] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState<null | { ok: boolean; msg: string }>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setDone(null)

    if (!state.full_name.trim() || !state.email.trim()) {
      setDone({ ok: false, msg: "الاسم والبريد الإلكتروني مطلوبان." })
      return
    }

    try {
      setLoading(true)
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...state,
          hours_per_week: state.hours_per_week ? Number(state.hours_per_week) : null,
          age: state.age ? Number(state.age) : null,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "خطأ غير متوقع")
      }
      setDone({ ok: true, msg: "تم استلام طلبك بنجاح، سنعاود التواصل قريبًا. شكراً لك!" })
      setState(initialState)
    } catch (err: any) {
      setDone({ ok: false, msg: err?.message || "حدث خطأ أثناء الإرسال" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto space-y-4 p-6 bg-white rounded-xl shadow border">

      <h2 className="text-2xl font-bold mb-4 text-center">نموذج التطوّع</h2>

      {/* honeypot: لا تعرضه */}
      <input
        type="text"
        name="website"
        value={state.website}
        onChange={(e) => setState(s => ({ ...s, website: e.target.value }))}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">الاسم الكامل *</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={state.full_name}
            onChange={(e) => setState(s => ({ ...s, full_name: e.target.value }))}
            placeholder="اكتب اسمك الكامل"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">البريد الإلكتروني *</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={state.email}
            onChange={(e) => setState(s => ({ ...s, email: e.target.value }))}
            placeholder="name@example.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">رقم الهاتف</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={state.phone}
            onChange={(e) => setState(s => ({ ...s, phone: e.target.value }))}
            placeholder="+963xxxxxxxxx"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">المدينة/الموقع</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={state.city}
            onChange={(e) => setState(s => ({ ...s, city: e.target.value }))}
            placeholder="مثال: دير الزور"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">العمر</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={state.age}
            onChange={(e) => setState(s => ({ ...s, age: e.target.value }))}
            min={10}
            max={100}
            placeholder="مثال: 28"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">النوع</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={state.gender}
            onChange={(e) => setState(s => ({ ...s, gender: e.target.value as FormState["gender"] }))}
          >
            <option value="">— اختر —</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">المهارات / الاختصاص</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={state.skills}
            onChange={(e) => setState(s => ({ ...s, skills: e.target.value }))}
            placeholder="مثال: هندسة مدنية، تصميم، تعليم، إسعافات أولية…"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">التفرّغ (نص)</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={state.availability}
            onChange={(e) => setState(s => ({ ...s, availability: e.target.value }))}
            placeholder="مثال: مسائي / عطلة نهاية الأسبوع"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">ساعات أسبوعيًا</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={state.hours_per_week}
            onChange={(e) => setState(s => ({ ...s, hours_per_week: e.target.value }))}
            min={1}
            max={60}
            placeholder="مثال: 6"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            id="has_vehicle"
            type="checkbox"
            checked={state.has_vehicle}
            onChange={(e) => setState(s => ({ ...s, has_vehicle: e.target.checked }))}
          />
          <label htmlFor="has_vehicle" className="font-medium">أملك وسيلة نقل</label>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">ملاحظات إضافية</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={state.notes}
            onChange={(e) => setState(s => ({ ...s, notes: e.target.value }))}
            rows={4}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        {loading ? "جاري الإرسال..." : "إرسال الطلب"}
      </button>

      {done && (
        <p className={`mt-3 text-sm ${done.ok ? "text-emerald-700" : "text-red-600"}`}>
          {done.msg}
        </p>
      )}
    </form>
  )
}
