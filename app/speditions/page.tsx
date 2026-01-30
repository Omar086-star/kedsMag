"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Header   from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import { useI18n } from "@/components/I18nProvider"

type Locale = "ar" | "en" | "fr"

function pickText(row: any, field: string, locale: Locale) {
  // يحاول أولاً title_ar / title_en / title_fr
  const key = `${field}_${locale}`
  if (row?.[key]) return row[key]
  // fallback على field الافتراضي
  return row?.[field] || ""
}

export default function SpecialEditionsPage() {
  const { tr, locale } = useI18n() as any
  const loc = (locale || "ar") as Locale

  const [mothers, setMothers] = useState<any[]>([])
  const [teens, setTeens] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEditions = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from("speditions")
        .select("*")
        .eq("status", "Published")
        .order("created_at", { ascending: false })

      if (!error) {
        setMothers(data?.filter((e) => e.audience === "mothers") || [])
        setTeens(data?.filter((e) => e.audience === "teens") || [])
      }
      setLoading(false)
    }

    fetchEditions()
  }, [])

  const handleDownload = async (fileUrl: string, title: string, id: string) => {
    try {
      const { data, error: fetchError } = await supabase
        .from("speditions")
        .select("downloads")
        .eq("id", id)
        .single()

      if (fetchError || !data) throw new Error(tr.common?.error || "Error")

      await supabase
        .from("speditions")
        .update({ downloads: (data.downloads || 0) + 1 })
        .eq("id", id)

      const relativePath = fileUrl.split("/object/public/uploads/")[1]
      if (!relativePath) throw new Error("Invalid file path")

      const { data: signed, error: signErr } = await supabase.storage
        .from("uploads")
        .createSignedUrl(relativePath, 60)

      if (signErr || !signed?.signedUrl) throw new Error("Download link not available")

      const link = document.createElement("a")
      link.href = signed.signedUrl
      link.download = `${title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      alert(err.message || "Unexpected error")
    }
  }

  const renderEditionCard = (edition: any) => {
    const title = pickText(edition, "title", loc)
    const summary = pickText(edition, "summary", loc)
    return (
      <div
        key={edition.id}
        className="rounded-lg border bg-card shadow-sm overflow-hidden"
      >
        <div className="relative h-64 w-full">
          <img
            src={edition.cover_url || "/default-cover.png"}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold">{title}</h3>

          {summary && <p className="mt-4 text-sm text-gray-700">{summary}</p>}
        </div>

        <div className="p-6 pt-0 flex gap-2">
          <Link href={`/speditions/${edition.id}`}>
            <Button variant="outline">{tr.common?.view || "View"}</Button>
          </Link>
          <Button onClick={() => handleDownload(edition.file_url, title, edition.id)}>
            {tr.common?.download || "Download"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="flex-1 bg-gradient-to-br from-blue-50">
      <Header />

      <section
        className="bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage: "url('/pont.jpg')",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="bg-black/60 p-8 rounded-lg max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-3">
            {tr.nav?.special || "Special"}
          </h1>
          <p className="text-lg text-white/90">
            {tr.specialPage?.subtitle || "Discover our special editions."}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {loading && (
          <p className="text-center text-gray-600">
            {tr.common?.loading || "Loading..."}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-800">
              {tr.specialPage?.mothers || "Mothers"}
            </h2>
            <div className="grid gap-6">
              {mothers.map(renderEditionCard)}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-800">
              {tr.specialPage?.teens || "Teens"}
            </h2>
            <div className="grid gap-6">
              {teens.map(renderEditionCard)}
            </div>
          </div>
        </div>
      </div>

      <FloatingBox />
      <Footer />
    </main>
  )
}
