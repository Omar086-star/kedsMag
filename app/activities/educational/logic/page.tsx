// app/activities/educational/logic/page.tsx
"use client"

import React from "react"
import Image from "next/image"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function LogicActivitiesPage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-800 py-10 text-center space-y-10">
      <Header />

      <section className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-[#3a00cc] mb-4">
          {tr.logicPage.title}
        </h1>
        <p className="text-lg text-[#fa4d00] mb-6">
          {tr.logicPage.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/V8rDa4yxJBQ"
            title={tr.logicPage.video1Title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/aEfJEA5VPZU"
            title={tr.logicPage.video2Title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/logic1.png" alt={tr.logicPage.photo1Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/logic2.png" alt={tr.logicPage.photo2Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/logic3.png" alt={tr.logicPage.photo3Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      <Footer />
      <FloatingBox />
    </div>
  )
}
