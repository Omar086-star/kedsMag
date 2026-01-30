"use client"

import { useI18n, type Locale } from "@/components/I18nProvider"

export default function LangSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, tr } = useI18n()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale)
  }

  return (
    <select
      value={locale}
      onChange={onChange}
      className={`rounded-full px-3 py-2 text-sm bg-white text-gray-900 border ${className}`}
      aria-label="Language"
    >
      <option value="ar">{tr.lang.ar}</option>
      <option value="en">{tr.lang.en}</option>
      <option value="fr">{tr.lang.fr}</option>
    </select>
  )
}
