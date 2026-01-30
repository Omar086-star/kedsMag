// app/activities/outdoor/game/page.tsx
"use client"

import React from "react"
import Image from "next/image"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function OutdoorGamesPage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-yellow-50 py-6">
      <Header />

      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-8">
        {tr.outdoorGamesPage.title}
      </h1>

      {/* الفيديوهات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">
            {tr.outdoorGamesPage.video1Heading}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/fBJeFXWzW6E"
              title={tr.outdoorGamesPage.video1Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">
            {tr.outdoorGamesPage.video2Heading}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/nBkhxX88RKI"
              title={tr.outdoorGamesPage.video2Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* الفوائد + الصور */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
          {tr.outdoorGamesPage.benefitsTitle}
        </h2>

        <ul className="non-list text-center list-inside text-gray-700 leading-loose mb-6">
          {tr.outdoorGamesPage.benefitsList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/jardin1.png" alt={tr.outdoorGamesPage.photo1Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/jardin2.png" alt={tr.outdoorGamesPage.photo2Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/jardinact1.png" alt={tr.outdoorGamesPage.photo3Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </div>

      <FloatingBox />
      <Footer />
    </div>
  )
}
