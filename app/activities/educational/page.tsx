// app/activities/educational/page.tsx
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

export default function EducationalActivitiesPage() {
  const { tr } = useI18n()
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("activities")
        .select("*")
        .eq("category", "educational")
      setActivities(data || [])
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />

      <h1 className="font-bold violetCustom mt-8 text-center text-4xl text-[#3a00cc] mb-4">
        {tr.educationalActivitiesPage.title}
      </h1>

      {/* محتوى تربوي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          {tr.educationalActivitiesPage.intro}
        </p>
      </div>

      {/* بطاقات ثابتة */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* ألعاب تعليمية */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/opi3.jpeg"
              alt={tr.educationalActivitiesPage.cards.games.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.educationalActivitiesPage.cards.games.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.educationalActivitiesPage.cards.games.desc}
            </p>
            <a href="/activities/educational/gameD">
              <span className="text-blue-600 text-sm">
                {tr.educationalActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* حلقة القيم */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/cover1.png"
              alt={tr.educationalActivitiesPage.cards.values.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.educationalActivitiesPage.cards.values.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.educationalActivitiesPage.cards.values.desc}
            </p>
            <a href="/activities/educational/valeu">
              <span className="text-blue-600 text-sm">
                {tr.educationalActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* قصص منطقية */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/opi1.jpeg"
              alt={tr.educationalActivitiesPage.cards.logic.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.educationalActivitiesPage.cards.logic.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.educationalActivitiesPage.cards.logic.desc}
            </p>
            <a href="/activities/educational/logic">
              <span className="text-blue-600 text-sm">
                {tr.educationalActivitiesPage.learnMore}
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
                {tr.educationalActivitiesPage.viewActivity}
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
