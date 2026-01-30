// app/activities/cultural/page.tsx
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

export default function CulturalActivitiesPage() {
  const { tr } = useI18n()
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("activities")
        .select("*")
        .eq("category", "cultural")
      setActivities(data || [])
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />

      <h1 className="text-3xl font-bold violetCustom py-12 mb-8 text-center">
        {tr.culturalActivitiesPage.title}
      </h1>

      {/* محتوى ثقافي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          {tr.culturalActivitiesPage.intro}
        </p>
      </div>

      {/* بطاقات ثابتة */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* مكتبة الطفل */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/pip (1).png"
              alt={tr.culturalActivitiesPage.cards.library.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.culturalActivitiesPage.cards.library.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.culturalActivitiesPage.cards.library.desc}
            </p>
            <a href="/activities/cultural/read">
              <span className="text-blue-600 text-sm">
                {tr.culturalActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* ورشة فنون تقليدية */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/cc.png"
              alt={tr.culturalActivitiesPage.cards.workshop.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.culturalActivitiesPage.cards.workshop.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.culturalActivitiesPage.cards.workshop.desc}
            </p>
            <a href="/activities/cultural/workshop">
              <span className="text-blue-600 text-sm">
                {tr.culturalActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* حلقة الحكايا */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/trqd (1).png"
              alt={tr.culturalActivitiesPage.cards.story.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.culturalActivitiesPage.cards.story.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.culturalActivitiesPage.cards.story.desc}
            </p>
            <a href="/activities/cultural/story">
              <span className="text-blue-600 text-sm">
                {tr.culturalActivitiesPage.learnMore}
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
                {tr.culturalActivitiesPage.viewActivity}
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
