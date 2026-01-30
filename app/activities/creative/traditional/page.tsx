// app/activities/creative/traditional/page.tsx
"use client"

import React from "react"
import Image from "next/image"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function CreativeCutPastePage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-800 py-10 text-center space-y-10">
      <Header />

      <h1 className="text-center text-4xl font-bold text-pink-700 mb-4">
        {tr.traditionalPage.title}
      </h1>
      <p className="text-center text-[#fa4d00] text-lg mb-6">
        {tr.traditionalPage.subtitle}
      </p>

      {/* قسم الفيديوهات */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.traditionalPage.videosTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/WkrZNep7hDg"
            title={tr.traditionalPage.video1Title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/1wmdSu7zhI8"
            title={tr.traditionalPage.video2Title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* قسم الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.traditionalPage.photosTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Image
            src="/acti3.png"
            alt={tr.traditionalPage.photo1Alt}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-60"
          />
          <Image
            src="/acti2.png"
            alt={tr.traditionalPage.photo2Alt}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-60"
          />
          <Image
            src="/acti1.png"
            alt={tr.traditionalPage.photo3Alt}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-60"
          />
        </div>
      </section>

      <Footer />
      <FloatingBox />
    </div>
  )
}
