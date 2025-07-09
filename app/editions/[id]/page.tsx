"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { BookOpen, Download } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Bubbles from "@/components/Bubbles"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function EditionDetailPage() {
  const { id } = useParams()
  const [edition, setEdition] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEdition() {
      const { data, error } = await supabase
        .from("magazines")
        .select("*")
        .eq("id", id)
        .single()

      if (error || !data) {
        setError("فشل في تحميل البيانات.")
      } else {
        setEdition(data)
      }
    }

    fetchEdition()
  }, [id])

  const handleDownload = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from("magazines")
        .select("downloads")
        .eq("id", edition.id)
        .single()

      if (fetchError || !data) throw new Error("فشل في جلب عدد التحميلات")

      await supabase
        .from("magazines")
        .update({ downloads: data.downloads + 1 })
        .eq("id", edition.id)

      // ⚠️ تصحيح المسار النسبي بناءً على bucket = "uploads"
      const relativePath = edition.file_url.split("/object/public/uploads/")[1]
      if (!relativePath) throw new Error("فشل في استخراج مسار الملف")

      const { data: signed, error: signErr } = await supabase.storage
        .from("uploads")
        .createSignedUrl(relativePath, 60)

      if (signErr || !signed?.signedUrl) {
        console.error("Signing error:", signErr)
        throw new Error("فشل في توليد رابط التحميل الآمن")
      }

      const link = document.createElement("a")
      link.href = signed.signedUrl
      link.download = `${edition.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      alert(err.message || "حدث خطأ أثناء محاولة تحميل العدد")
    }
  }

  if (error) return <div className="text-center py-20 text-red-600 font-bold">{error}</div>
  if (!edition) return <div className="text-center py-20 text-gray-500">جاري تحميل العدد...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
<Header />
      <section
        className="bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage: "url('/pont.jpg')", // ضع هنا مسار صورة المصافحة
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="bg-black coverS bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-center fontLarg py-12 font-bold text-purple-100 mb-8">{edition.title}</h1>

         </div>
      </section>
      <section className="px-6 py-12">

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl p-4 shadow bg-white">
            <Image
              src={edition.cover_url || "/placeholder.svg"}
              alt={edition.title}
              width={500}
              height={700}
              className="rounded object-cover mx-auto"
            />
            <div className=" gap-2 hwfullss mt-4 text-centerc">

              <Button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 hwfullss to-blue-500  ">
                <Download className="w-4 h-4 ml-2 " /> تحميل العدد
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
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4 text-center">🎥 فيديو تعريفي عن العدد</h2>
            <div className="aspect-video w-full">
              <iframe
                src={edition.video_url}
                title="فيديو العدد"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 rounded"
              ></iframe>
            </div>
          </div>
        )}
      </section>

<Bubbles />
<FloatingBox />
<Footer />
    </div>
  )
}
