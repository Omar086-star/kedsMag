// app/activities/creative/coloring-activites/page.tsx
"use client"
export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
import { useI18n } from "@/components/I18nProvider"

export default function ColoringDrawingPage() {
  const { tr } = useI18n()
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase
        .from("coloring_activities")
        .select("*")
        .order("created_at", { ascending: false })
      if (!error) setActivities(data || [])
    }
    fetchActivities()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100">
      <Header />
      <Bubbles />

      {/* العنوان الرئيسي */}
      <section className="py-12">
        <h1 className="text-center text-4xl font-bold text-pink-700 mb-4">
          {tr.coloringPage.heroTitle}
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          {tr.coloringPage.heroSubtitle}
        </p>

        {/* فيديوهات */}
        <section className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
            {tr.coloringPage.videosTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/WkrZNep7hDg"
              title={tr.coloringPage.video1Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/WaYxqNtdFTI"
              title={tr.coloringPage.video2Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* قسم الصور */}
        <section className="p-6 rounded-xl shadow bg-white mt-6">
          <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">
            {tr.coloringPage.photosTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Image
              src="/color2.png"
              alt={tr.coloringPage.photo1Alt}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-60"
            />
            <Image
              src="/color3.png"
              alt={tr.coloringPage.photo2Alt}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-60"
            />
            <Image
              src="/color4.png"
              alt={tr.coloringPage.photo3Alt}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-60"
            />
          </div>
        </section>

        {/* عرض الأنشطة */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl shadow p-4 text-center">
              <Image
                src={activity.preview_url}
                alt={activity.title}
                width={300}
                height={300}
                className="rounded mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-2 text-purple-700">{activity.title}</h3>
              <a href={activity.file_url} download>
                <Button className="bg-pink-500 text-white">
                  {tr.coloringPage.downloadButton}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* قسم الفوائد */}
      <section className="py-12 bg-white mt-16 rounded-t-3xl shadow-inner">
        <h2 className="text-center text-2xl font-bold text-purple-800 mb-6">
          {tr.coloringPage.benefitsTitle}
        </h2>

        <ul className="nonelist text-center list-inside text-gray-700 max-w-3xl mx-auto leading-loose">
          {tr.coloringPage.benefitsList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
