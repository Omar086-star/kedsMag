// app/speditions/[id]/page.tsx
"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download, BookOpen } from "lucide-react"

export default function SpecialEditionDetailPage() {
  const { id } = useParams()
  const [edition, setEdition] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEdition = async () => {
      const { data, error } = await supabase
        .from("speditions")
        .select("*")
        .eq("id", id)
        .single()

      if (error || !data) {
        setError("تعذر تحميل بيانات الإصدار.")
      } else {
        setEdition(data)
      }
    }
    fetchEdition()
  }, [id])

  const handleDownload = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from("speditions")
        .select("downloads")
        .eq("id", edition.id)
        .single()

      if (fetchError || !data) throw new Error("فشل في جلب عدد التحميلات")

      await supabase
        .from("speditions")
        .update({ downloads: (data.downloads || 0) + 1 })
        .eq("id", edition.id)

      const relativePath = edition.file_url?.split("/object/public/uploads/")[1]
      if (!relativePath) throw new Error("مسار الملف غير صالح")

      const { data: signed, error: signErr } = await supabase.storage
        .from("uploads")
        .createSignedUrl(relativePath, 60)

      if (signErr || !signed?.signedUrl) throw new Error("رابط التحميل غير متاح")

      const link = document.createElement("a")
      link.href = signed.signedUrl
      link.download = `${edition.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      alert(err.message || "حدث خطأ أثناء التحميل")
    }
  }

  if (error) return <div className="text-center py-20 text-red-600">{error}</div>
  if (!edition) return <div className="text-center py-20 text-gray-500">جاري تحميل الإصدار...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      <section className="px-6 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-800 mb-8">{edition.title}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl p-4 shadow bg-white">
            <Image
              src={edition.cover_url || "/default-cover.png"}
              alt={edition.title}
              width={500}
              height={700}
              className="rounded object-cover mx-auto"
            />
            <div className="flex gap-2 mt-4 justify-center">
              <a href={edition.file_url} target="_blank">
                <Button className="bg-[#fa4d00] text-white px-4">
                  <BookOpen className="w-4 h-4 ml-2" /> اقرأ الآن
                </Button>
              </a>
              <Button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4">
                <Download className="w-4 h-4 ml-2" /> تحميل العدد
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              عدد التحميلات: {edition.downloads ?? 0}
            </p>
          </div>

          <div className="border border-purple-300 rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4">📝 محتوى العدد:</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {edition.summary || "لا يوجد وصف متاح حالياً."}
            </p>
          </div>
        </div>

        {edition.video_url && (
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4 text-center">🎥 فيديو تعريفي</h2>
            <div className="aspect-video w-full">
              <iframe
                src={edition.video_url}
                title="فيديو الإصدار"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 rounded"
              ></iframe>
            </div>
          </div>
        )}
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
