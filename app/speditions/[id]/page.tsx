"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, BookOpen } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import  Header  from "@/components/header"
import  Footer  from "@/components/footer"
import FloatingBox from "@/components/FloatingBox"
import { useI18n } from "@/components/I18nProvider"

type Locale = "ar" | "en" | "fr"

function pickText(row: any, field: string, locale: Locale) {
  const key = `${field}_${locale}`
  if (row?.[key]) return row[key]
  return row?.[field] || ""
}

export default function SpecialEditionDetailPage() {
  const { id } = useParams()
  const { tr, locale } = useI18n() as any
  const loc = (locale || "ar") as Locale

  const [edition, setEdition] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEdition = async () => {
      const { data, error } = await supabase
        .from("speditions")
        .select("*")
        .eq("id", id)
        .single()

      if (error || !data) setError(tr.common?.error || "Error")
      else setEdition(data)
    }
    fetchEdition()
  }, [id, tr])

  const handleDownload = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from("speditions")
        .select("downloads")
        .eq("id", edition.id)
        .single()

      if (fetchError || !data) throw new Error(tr.common?.error || "Error")

      await supabase
        .from("speditions")
        .update({ downloads: (data.downloads || 0) + 1 })
        .eq("id", edition.id)

      const relativePath = edition.file_url?.split("/object/public/uploads/")[1]
      if (!relativePath) throw new Error("Invalid file path")

      const { data: signed, error: signErr } = await supabase.storage
        .from("uploads")
        .createSignedUrl(relativePath, 60)

      if (signErr || !signed?.signedUrl) throw new Error("Download link not available")

      const link = document.createElement("a")
      link.href = signed.signedUrl
      link.download = `${pickText(edition, "title", loc)}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      alert(err.message || "Unexpected error")
    }
  }

  if (error) return <div className="text-center py-20 text-red-600">{error}</div>
  if (!edition) return <div className="text-center py-20 text-gray-500">{tr.common?.loading || "Loading..."}</div>

  const title = pickText(edition, "title", loc)
  const summary = pickText(edition, "summary", loc)
  const description = pickText(edition, "description", loc)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      <section className="px-6 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-800 mb-8">{title}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl p-4 shadow bg-white">
            <Image
              src={edition.cover_url || "/default-cover.png"}
              alt={title}
              width={500}
              height={700}
              className="rounded object-cover mx-auto"
            />
            <div className="flex gap-2 mt-4 justify-center">
              <a href={edition.file_url} target="_blank" rel="noreferrer">
                <Button className="bg-[#fa4d00] text-white px-4">
                  <BookOpen className="w-4 h-4 ml-2" /> {tr.common?.view || "View"}
                </Button>
              </a>

              <Button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4">
                <Download className="w-4 h-4 ml-2" /> {tr.common?.download || "Download"}
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-2 text-center">
              {tr.edition?.downloadsCount || "Downloads"}: {edition.downloads ?? 0}
            </p>
          </div>

          <div className="border border-purple-300 rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4">
              {tr.edition?.contentTitle || "Content"}
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {summary || tr.edition?.noDescription || "No description available."}
            </p>

            {description && (
              <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-4">
                {description}
              </p>
            )}
          </div>
        </div>

        {edition.video_url && (
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4 text-center">
              {tr.edition?.videoTitle || "🎥 Video"}
            </h2>
            <div className="aspect-video w-full">
              <iframe
                src={edition.video_url}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 rounded"
              />
            </div>
          </div>
        )}
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
