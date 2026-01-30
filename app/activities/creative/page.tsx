"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

export default function CreativeActivitiesPage() {
  const { tr } = useI18n()
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("activities").select("*").eq("category", "creative")
      setActivities(data || [])
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />

      <h1 className="text-3xl font-bold violetCustom mb-8 text-center">
        {tr.creativeActivitiesPage.title}
      </h1>

      {/* محتوى إبداعي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          {tr.creativeActivitiesPage.intro}
        </p>
      </div>

      {/* بطاقات ثابتة */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* الرسم والتلوين */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/color1.png"
              alt={tr.creativeActivitiesPage.cards.coloring.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>

          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.creativeActivitiesPage.cards.coloring.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.creativeActivitiesPage.cards.coloring.desc}
            </p>
            <a href="/activities/creative/coloring-activities">
              <span className="text-gray-900">
                {tr.creativeActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* مسرح الطفل */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/meusem4.png"
              alt={tr.creativeActivitiesPage.cards.theater.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.creativeActivitiesPage.cards.theater.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.creativeActivitiesPage.cards.theater.desc}
            </p>
            <a href="/activities/creative/meusem">
              <span className="text-gray-900">
                {tr.creativeActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* الأشغال اليدوية */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/form1.png"
              alt={tr.creativeActivitiesPage.cards.handcrafts.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.creativeActivitiesPage.cards.handcrafts.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.creativeActivitiesPage.cards.handcrafts.desc}
            </p>
            <a href="/activities/creative/traditional">
              <span className="text-gray-900">
                {tr.creativeActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>
      </div>

      {/* بيانات Supabase */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <Card key={activity.id} className="bg-white border-2 border-purple-200">
            <div className="relative h-56">
              <Image
                src={activity.cover_url || "/placeholder.svg"}
                alt={activity.title}
                fill
                className="object-cover rounded-t"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold violetCustom mb-2">{activity.title}</h3>
              <a href={activity.file_url} target="_blank" className="text-blue-600 hover:underline">
                <BookOpen className="inline w-4 h-4 mr-1" />
                {tr.creativeActivitiesPage.viewActivity}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <FloatingBox />
      <Footer />
    </div>
  )
}
