// app/booking/[id].tsx
"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function BookingForm() {
  const router = useRouter()
  const { id } = useParams()
  const [event, setEvent] = useState<any>(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    const fetchEvent = async () => {
      const { data, error } = await supabase
        .from("activitesFuture")
        .select("*")
        .eq("id", id)
        .single()
      if (data) setEvent(data)
    }
    if (id) fetchEvent()
  }, [id])

  const handleSubmit = async () => {
    if (!fullName || !phone) return alert("يرجى ملء الاسم ورقم الهاتف")

    const { error } = await supabase.from("event_bookings").insert({
      event_id: id,
      full_name: fullName,
      email,
      phone,
      notes,
      status: "قيد الانتظار"
    })

    if (error) {
      alert("فشل الحجز: " + error.message)
    } else {
      alert("تم إرسال طلب الحجز بنجاح")
      router.push("/success")
    }
  }

  if (!event) return <p className="text-center py-20 text-gray-600">جارٍ تحميل التفاصيل...</p>

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">حجز: {event.title}</h1>

      <div className="space-y-4">
        <div>
          <Label>الاسم الكامل</Label>
          <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: أحمد علي" />
        </div>
        <div>
          <Label>البريد الإلكتروني (اختياري)</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
        </div>
        <div>
          <Label>رقم الهاتف</Label>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="09xxxxxxxx" />
        </div>
        <div>
          <Label>ملاحظات إضافية (اختياري)</Label>
          <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
        </div>

        <Button onClick={handleSubmit} className="bg-blue-600 text-white w-full mt-4">
          تأكيد الحجز
        </Button>
      </div>
    </div>
  )
}
