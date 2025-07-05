"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import Link from "next/link";
// import Image from "next/image";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
export default function SubmitPage() {
  const [name, setName] = useState("")
  const [type, setType] = useState("رسم")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setMessage("يرجى إرفاق ملف")
      return
    }

    const fileExt = file.name.split('.').pop()
    const filePath = `submissions/${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("uploads") // تأكد أن هذا اسم الـ bucket
      .upload(filePath, file)

    if (uploadError) {
      setMessage("حدث خطأ أثناء رفع الملف.")
      return
    }

    const { error: insertError } = await supabase.from("submissions").insert([
      {
        name,
        type,
        description,
        file_url: filePath,
      }
    ])

    if (insertError) {
      setMessage("حدث خطأ أثناء حفظ المشاركة.")
    } else {
      setMessage("تم إرسال المشاركة بنجاح!")
      setName("")
      setDescription("")
      setFile(null)
    }
  }

  return (
    <div className="min-h-screen bg-purple-50  px-4">

            <Header />
      
      <div className="max-w-xl mx-auto bg-white rounded-lg py-12 px-6 shadow-lg ">
        <h1 className="text-3xl font-bold violetCustom mb-6 text-center">أرسل مشاركتك</h1>
        <form onSubmit={handleSubmit} className="space-y-4 py-10">
          <Input
            type="text"
            placeholder="اسم الطفل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option>رسم</option>
            <option>صورة</option>
            <option>قصة</option>
            <option>مشروع</option>
          </select>

          <Textarea
            placeholder="وصف أو تعليق"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />

          <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
            إرسال المشاركة
          </Button>

          {message && <p className="text-center text-purple-700 font-semibold mt-4">{message}</p>}
        </form>
      </div>
      <FloatingBox />
      <Footer />






    </div>
  )
}
