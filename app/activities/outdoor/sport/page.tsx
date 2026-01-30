// app/activities/outdoor/sport/page.tsx
"use client"

import React from "react"
import Image from "next/image"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function SportsPage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-blue-50 py-6">
      <Header />

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        {tr.sportPage.title}
      </h1>

      {/* الفيديوهات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            {tr.sportPage.video1Heading}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/cq7IEufeS50"
              title={tr.sportPage.video1Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            {tr.sportPage.video2Heading}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/Y1ftsy9s8PE"
              title={tr.sportPage.video2Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* الفوائد + الصور */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          {tr.sportPage.benefitsTitle}
        </h2>

        <ul className="non-list text-center list-inside text-gray-700 leading-loose mb-6">
          {tr.sportPage.benefitsList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/sport1.png" alt={tr.sportPage.photo1Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/sport4.png" alt={tr.sportPage.photo2Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/sport2.png" alt={tr.sportPage.photo3Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </div>

      <FloatingBox />
      <Footer />
    </div>
  )
}
