"use client"

import React from "react"
import Image from "next/image"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function ChildLibraryEvent() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-800 text-center space-y-10">
      <Header />

      <h1 className="text-4xl font-bold text-center text-[#3a00cc] mb-4">
        {tr.readPage.title}
      </h1>
      <p className="text-center text-[#fa4d00] text-lg mb-6">
        {tr.readPage.subtitle}
      </p>

      {/* قسم الفيديوهات */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.readPage.videosTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/1LK4_6h00rA"
              title={tr.readPage.video1Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/wAet3PoJpdo"
              title={tr.readPage.video2Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.readPage.photosTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image src="/apip1.png" alt={tr.readPage.photo1Alt} width={400} height={400} className="rounded-lg object-cover w-full h-60" />
          <Image src="/pip.png" alt={tr.readPage.photo2Alt} width={400} height={400} className="rounded-lg object-cover w-full h-60" />
          <Image src="/apip2.png" alt={tr.readPage.photo3Alt} width={400} height={400} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      <Footer />
      <FloatingBox />
    </div>
  )
}
