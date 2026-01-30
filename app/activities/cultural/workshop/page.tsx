"use client"

import React from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useI18n } from "@/components/I18nProvider"

export default function DrawingColoringWorkshopPage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-yellow-50 to-pink-100 text-gray-800 space-y-10 text-center">
      <Header />

      <h1 className="text-4xl font-bold text-[#cc007a] mb-8">
        {tr.culturalDrawingPage.title}
      </h1>

      {/* قسم الفيديوهات */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.culturalDrawingPage.videosTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full h-64 rounded-lg"
            // انتبه: كان في سطر جديد داخل الرابط عندك
            src="https://www.youtube.com/embed/1bv4cwPqXRk"
            title={tr.culturalDrawingPage.video1Title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/gAK1kXmo7hU"
            title={tr.culturalDrawingPage.video2Title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* قسم الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.culturalDrawingPage.photosTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image src="/ab.png" alt={tr.culturalDrawingPage.photo1Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/abc.png" alt={tr.culturalDrawingPage.photo2Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/culte.png" alt={tr.culturalDrawingPage.photo3Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
