"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
import { useI18n } from "@/components/I18nProvider"

export default function FaqPage() {
  const { tr, locale } = useI18n()
  const dir = locale === "ar" ? "rtl" : "ltr"

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100" dir={dir}>
      <Header />
      <Bubbles />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-4">
          {tr.faqPage.title}
        </h1>
        <p className="text-center text-gray-700 mb-10">
          {tr.faqPage.subtitle}
        </p>

        <div className="space-y-4">
          {tr.faqPage.items.map((item: any, idx: number) => (
            <details
              key={idx}
              className="bg-white rounded-2xl shadow border border-purple-200 p-5 group"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="text-lg font-bold text-purple-700">{item.q}</span>
                <span className="text-purple-600 text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>

              <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </main>

      <FloatingBox />
      <Footer />
    </div>
  )
}
