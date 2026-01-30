"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Download } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Bubbles from "@/components/Bubbles"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function EditionDetailPage() {
const { tr, locale } = useI18n()
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
        setError(tr.common.error)
      } else {
        setEdition(data)
      }
    }
    fetchEdition()
  }, [id, tr.common.error])

  const handleDownload = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from("magazines")
        .select("downloads")
        .eq("id", edition.id)
        .single()

      if (fetchError || !data) throw new Error("Fetch downloads failed")

      await supabase
        .from("magazines")
        .update({ downloads: (data.downloads || 0) + 1 })
        .eq("id", edition.id)

      const relativePath = edition.file_url.split("/object/public/uploads/")[1]
      if (!relativePath) throw new Error("Invalid file path")

      const { data: signed, error: signErr } = await supabase.storage
        .from("uploads")
        .createSignedUrl(relativePath, 60)

      if (signErr || !signed?.signedUrl) throw new Error("Signed URL failed")

      const link = document.createElement("a")
      link.href = signed.signedUrl
      link.download = `${editionTitle || "edition"}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      alert(err.message || tr.common.error)
    }
  }

  if (error) return <div className="text-center py-20 text-red-600 font-bold">{error}</div>
  if (!edition) return <div className="text-center py-20 text-gray-500">{tr.common.loading}</div>
const getByLocale = (row: any, base: string) => {
  const key = `${base}_${locale}` // title_ar / title_en / title_fr
  return row?.[key] || row?.[`${base}_ar`] || row?.[base] || ""
}

const editionTitle = getByLocale(edition, "title")
const editionSummary = getByLocale(edition, "summary")
const editionDescription = getByLocale(edition, "description")
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      <section
        className="bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage: "url('/pont.jpg')",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="bg-black coverS bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-center fontLarg py-12 font-bold text-purple-100 mb-8">{editionTitle}</h1>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl p-4 shadow bg-white">
            <Image
              src={edition.cover_url || "/placeholder.svg"}
              alt={editionTitle}
              width={500}
              height={700}
              className="rounded object-cover mx-auto"
            />

            <div className="gap-2 hwfullss mt-4 text-centerc">
              <Button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 hwfullss to-blue-500">
                <Download className="w-4 h-4 ml-2" /> {tr.edition.download}
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-2 text-center">
              {tr.edition.downloadsCount}: {edition.downloads ?? 0}
            </p>
          </div>

          <div className="border border-purple-300 text-center rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4">{tr.edition.contentTitle}</h2>

            <p className="text-gray-700 text-center lsdD py-1 leading-relaxed whitespace-pre-line">
              {editionSummary || tr.edition.noDescription}

            </p>

            <p className="text-gray-700 text-center lsdD leading-relaxed whitespace-pre-line">
{editionDescription || tr.edition.noDescription}
            </p>
          </div>
        </div>

        {edition.video_url && (
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4 text-center">
              {tr.edition.videoTitle}
            </h2>
            <div className="aspect-video w-full">
              <iframe
                src={edition.video_url}
                title="Edition video"
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
