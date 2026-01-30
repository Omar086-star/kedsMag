"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useI18n } from "@/components/I18nProvider"

type Doc = {
  title: string
  subtitle?: string
  sections?: { title: string; body: string }[]
}

export default function PrivacyPage() {
  const { locale } = useI18n()
  const dir = locale === "ar" ? "rtl" : "ltr"

  const [doc, setDoc] = useState<Doc | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDoc = async () => {
      setError(null)
      const { supabase } = await import("@/lib/supabase")

      const { data, error } = await supabase
        .from("i18n_documents")
        .select("content")
        .eq("namespace", "privacy")
        .eq("locale", locale)
        .single()

      if (error || !data?.content) {
        setError("Failed to load content.")
        setDoc(null)
        return
      }

      setDoc(data.content as Doc)
    }

    fetchDoc()
  }, [locale])

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Header />

      <main className="container mx-auto py-12 max-w-4xl px-4">
        {error && <p className="text-center text-red-600 font-semibold">{error}</p>}
        {!doc && !error && <p className="text-center text-gray-500">Loading...</p>}

        {doc && (
          <>
            <h1 className="text-3xl font-bold mb-2">{doc.title}</h1>
            {doc.subtitle && <p className="text-muted-foreground mb-8">{doc.subtitle}</p>}

            <div className="space-y-6">
              {(doc.sections || []).map((s, i) => (
                <section key={i} className="p-6 rounded-2xl border bg-card shadow-sm">
                  <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                  <div className="whitespace-pre-line leading-relaxed">{s.body}</div>
                </section>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
