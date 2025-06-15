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

export default function ColoringDrawingPage() {
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
      <section className="px-6 py-12">
        <h1 className="text-center text-4xl font-bold text-pink-700 mb-4">
          🖍️ أنشطة الرسم والتلوين
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
     في هذه الصفحة ستجدون أنشطة ممتعة لتحميل الرسومات الجاهزة للتلوين، ومشاركة الأطفال في تطوير خيالهم ومهاراتهم الفنية 💜 قريباا
        </p>

      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">🎥 فيديوهات تعليمية</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/WkrZNep7hDg"
            title="نشاط مجسمات 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/WaYxqNtdFTI"
            title="نشاط مجسمات 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* قسم الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">  صور من الأنشطة</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/color2.png" alt="نشاط قص ولصق 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/color3.png" alt="نشاط قص ولصق 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/color4.png" alt="نشاط قص ولصق 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>




        {/* عرض الأنشطة */}
        <div className="grid md:grid-cols-3 gap-6">
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
                  ⬇️ تحميل النشاط
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* قسم الفوائد */}
      <section className="px-6 py-12 bg-white mt-16 rounded-t-3xl shadow-inner">
        <h2 className="text-center text-2xl font-bold text-purple-800 mb-6">🎨 فوائد الرسم والتلوين للأطفال</h2>
        <ul className=" nonelist text-center list-inside text-gray-700 max-w-3xl mx-auto leading-loose">
          <li>تنمية المهارات الحركية الدقيقة والتنسيق بين اليد والعين.</li>
          <li>تعزيز الخيال والإبداع عند الطفل.</li>
          <li>التعبير عن المشاعر بطريقة آمنة ومرحة.</li>
          <li>زيادة التركيز والانتباه خلال أداء المهمة.</li>
          <li>خلق جو تفاعلي ممتع بين الأهل والأطفال.</li>
        </ul>
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}