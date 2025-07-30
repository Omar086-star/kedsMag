"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ProjectRegisterPage() {
  const { id } = useParams()
  const [participantCount, setParticipantCount] = useState(1)
  const [participants, setParticipants] = useState([{ name: "", surname: "", age: "", email: "" }])
  const [submitted, setSubmitted] = useState(false)

  const handleParticipantChange = (index: number, field: string, value: string) => {
    const updated = [...participants]
    updated[index] = { ...updated[index], [field]: value }
    setParticipants(updated)
  }

  const handleCountChange = (e: any) => {
    const count = parseInt(e.target.value)
    setParticipantCount(count)

    const updated = []
    for (let i = 0; i < count; i++) {
      updated.push(participants[i] || { name: "", surname: "", age: "", email: "" })
    }
    setParticipants(updated)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const dataToInsert = participants.map((p) => ({
      project_id: id,
      name: `${p.name} ${p.surname}`.trim(),
      email: p.email,
      age: Number(p.age),
    }))

    const { error } = await supabase.from("project_registrations").insert(dataToInsert)

    if (!error) {
      setSubmitted(true)
    } else {
      alert("حدث خطأ أثناء التسجيل")
    }
  }

  if (submitted) {
    return <div className="text-center py-20 text-green-600 text-xl">✅ تم التسجيل بنجاح</div>
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">نموذج التسجيل في المشروع</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">عدد المشاركين</label>
            <input
              type="number"
              min="1"
              value={participantCount}
              onChange={handleCountChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {participants.map((p, i) => (
            <div key={i} className="border p-4 rounded mb-4 bg-gray-50">
              <h3 className="font-semibold mb-2">المشارك {i + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="الاسم والكنية"
                  className="border px-4 py-2 rounded"
                  value={p.name}
                  onChange={(e) => handleParticipantChange(i, "name", e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="مدينة الفعالية المراد التسجيل بها"
                  className="border px-4 py-2 rounded"
                  value={p.surname}
                  onChange={(e) => handleParticipantChange(i, "surname", e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="العمر"
                  className="border px-4 py-2 rounded"
                  value={p.age}
                  onChange={(e) => handleParticipantChange(i, "age", e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="border px-4 py-2 rounded"
                  value={p.email}
                  onChange={(e) => handleParticipantChange(i, "email", e.target.value)}
                  required
                />
              </div>
            </div>
          ))}

          <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded w-full">
            إرسال
          </button>
        </form>
      </div>
    </div>
  )
}
