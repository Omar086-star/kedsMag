"use client"

import React, { createContext, useContext, useMemo, useState, useEffect } from "react"
import { translations } from "@/lib/translations" // غيّر المسار حسب مشروعك

export type Locale = "ar" | "en" | "fr"

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  tr: any
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    // خزّنها حتى تبقى ثابتة + تمنع hydration mismatch لاحقاً
    document.cookie = `locale=${l}; path=/; max-age=31536000`
    try {
      localStorage.setItem("locale", l)
    } catch {}
  }

  // (اختياري) لو كان عندك localStorage قديم، وخايف تعمل mismatch
  // ما منبدّل initial state منه، بس ممكن نزامن إذا موجود
  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null
      if (saved && saved !== locale && (saved === "ar" || saved === "en" || saved === "fr")) {
        setLocaleState(saved)
        document.cookie = `locale=${saved}; path=/; max-age=31536000`
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tr = useMemo(() => {
    return translations[locale] || translations.ar
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, tr }), [locale, tr])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
