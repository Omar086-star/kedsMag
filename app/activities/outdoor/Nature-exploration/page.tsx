// app/activities/outdoor/Nature-exploration/page.tsx
"use client"

import React from "react"
import Image from "next/image"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function NatureExplorationPage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen bg-green-50 py-6">
      <Header />

      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        {tr.naturePage.title}
      </h1>

      {/* الفيديوهات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            {tr.naturePage.video1Heading}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/JbeEhsEQvGY"
              title={tr.naturePage.video1Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            {tr.naturePage.video2Heading}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/x1Qa6-LIgrw"
              title={tr.naturePage.video2Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
          {tr.naturePage.photosTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/nature4.png" alt={tr.naturePage.photo1Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/nature2.png" alt={tr.naturePage.photo2Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/nature1.png" alt={tr.naturePage.photo3Alt} width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      {/* فوائد */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          {tr.naturePage.benefitsTitle}
        </h2>
        <ul className="nonelist text-center list-inside text-gray-700 leading-loose">
          {tr.naturePage.benefitsList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <FloatingBox />
      <Footer />
    </div>
  )
}
