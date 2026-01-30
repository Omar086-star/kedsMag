"use client"

import { useEffect, useState } from "react"
import { useI18n } from "@/components/I18nProvider"
import Link from "next/link"

type BannerDoc = {
  title: string
  text: string
  learnMore: string
  accept: string
  necessary: string
  reject: string
}

function getCookie(name: string) {
  if (typeof document === "undefined") return null
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return m ? decodeURIComponent(m[2]) : null
}

function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}`
}

export default function CookieBanner() {
  const { locale } = useI18n()
  const [visible, setVisible] = useState(false)
  const [doc, setDoc] = useState<BannerDoc | null>(null)

  useEffect(() => {
    const consent = getCookie("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  useEffect(() => {
    const fetchDoc = async () => {
      const { supabase } = await import("@/lib/supabase")
      const { data } = await supabase
        .from("i18n_documents")
        .select("content")
        .eq("namespace", "cookieBanner")
        .eq("locale", locale)
        .single()

      if (data?.content) setDoc(data.content as BannerDoc)
    }

    if (visible) fetchDoc()
  }, [locale, visible])

  if (!visible || !doc) return null

  const acceptAll = () => {
    setCookie("cookie_consent", "all")
    setVisible(false)
  }
  const acceptNecessary = () => {
    setCookie("cookie_consent", "necessary")
    setVisible(false)
  }
  const reject = () => {
    setCookie("cookie_consent", "none")
    setVisible(false)
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-4xl rounded-2xl border bg-white p-4 shadow-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-bold">{doc.title}</p>
          <p className="text-sm text-gray-600">{doc.text}</p>
          <Link className="text-sm text-blue-600 underline" href="/cookies">
            {doc.learnMore}
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          <button onClick={reject} className="rounded-full border px-4 py-2 text-sm">
            {doc.reject}
          </button>
          <button onClick={acceptNecessary} className="rounded-full border px-4 py-2 text-sm">
            {doc.necessary}
          </button>
          <button onClick={acceptAll} className="rounded-full bg-purple-600 px-4 py-2 text-sm text-white">
            {doc.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
