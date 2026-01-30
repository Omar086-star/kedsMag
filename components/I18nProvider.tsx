"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { Locale } from "@/lib/i18n"
import { defaultLocale, getDirection } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type I18nCtx = {
  locale: Locale
  dir: "rtl" | "ltr"
  tr: ReturnType<typeof getTranslations>
  setLocale: (l: Locale) => void
}

const Ctx = createContext<I18nCtx | null>(null)

function safeGet(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function safeSet(key: string, val: string) {
  try {
    localStorage.setItem(key, val)
  } catch {}
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = safeGet("ui-locale") as Locale | null
    return saved === "ar" || saved === "en" || saved === "fr" ? saved : defaultLocale
  })

  const dir = getDirection(locale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    safeSet("ui-locale", locale)
  }, [locale, dir])

  const tr = useMemo(() => getTranslations(locale), [locale])

  const setLocale = (l: Locale) => setLocaleState(l)

  const value: I18nCtx = { locale, dir, tr, setLocale }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}

export function LangSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, tr } = useI18n()

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      className={`bggggg text-sm px-2 py-[6px] rounded-md border ${className}`}
      aria-label="Switch language"
    >
      <option value="ar">{tr.lang.ar}</option>
      <option value="en">{tr.lang.en}</option>
      <option value="fr">{tr.lang.fr}</option>
    </select>
  )
}
