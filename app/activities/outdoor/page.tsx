// app/activities/outdoor/page.tsx
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

export default function OutdoorActivitiesPage() {
  const { tr } = useI18n()
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("activities")
        .select("*")
        .eq("category", "outdoor")
      setActivities(data || [])
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />

      <h1 className="text-3xl font-bold violetCustom mb-8 text-center">
        {tr.outdoorActivitiesPage.title}
      </h1>

      {/* مقدمة */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          {tr.outdoorActivitiesPage.intro}
        </p>
      </div>

      {/* بطاقات ثابتة */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* الطبيعة */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/natur5.png"
              alt={tr.outdoorActivitiesPage.cards.nature.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.outdoorActivitiesPage.cards.nature.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.outdoorActivitiesPage.cards.nature.desc}
            </p>
            <a href="/activities/outdoor/Nature-exploration">
              <span className="text-blue-600 text-sm">
                {tr.outdoorActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* رياضة */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/outdoorsports.jpeg"
              alt={tr.outdoorActivitiesPage.cards.sport.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.outdoorActivitiesPage.cards.sport.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.outdoorActivitiesPage.cards.sport.desc}
            </p>
            <a href="/activities/outdoor/sport">
              <span className="text-blue-600 text-sm">
                {tr.outdoorActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>

        {/* ألعاب */}
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image
              src="/jardinact2.png"
              alt={tr.outdoorActivitiesPage.cards.games.imageAlt}
              fill
              className="object-cover rounded-t"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">
              {tr.outdoorActivitiesPage.cards.games.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {tr.outdoorActivitiesPage.cards.games.desc}
            </p>
            <a href="/activities/outdoor/game">
              <span className="text-blue-600 text-sm">
                {tr.outdoorActivitiesPage.learnMore}
              </span>
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Supabase */}
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
                {tr.outdoorActivitiesPage.viewActivity}
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
