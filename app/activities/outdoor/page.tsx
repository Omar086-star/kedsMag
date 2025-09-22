"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function OutdoorActivitiesPage() {
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
    <div className="  ">
      <Header />

      <h1 className="text-3xl font-bold violetCustom mb-8 text-center">أنشطة خارجية</h1>

      {/* محتوى خارجي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          الأنشطة الخارجية تمنح الأطفال فرصة لاستكشاف بيئتهم، وتنمية مهاراتهم البدنية والاجتماعية. الخروج إلى الطبيعة، اللعب الجماعي، والمغامرات التعليمية تعزز الصحة العامة والانتماء للمجتمع.
        </p>
      </div>

      {/* بطاقات صور لمحتوى خارجي ثابت */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

 

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/natur5.png" alt="رحلات طبيعية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">استكشاف الطبيعة</h3>
            <p className="text-gray-600 text-sm">رحلات إلى الحدائق والجبال لاكتشاف النباتات والحيوانات وتعزيز حب البيئة.</p>
            <a href="/activities/outdoor/Nature-exploration"> <span className="text-blue-600 text-sm"> تعلم المزيد</span></a>

          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/outdoorsports.jpeg" alt="رياضة جماعية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">أنشطة رياضية</h3>
            <p className="text-gray-600 text-sm">ألعاب كرة القدم والعدو والمسابقات التي تعزز اللياقة والتعاون.</p>
            <a href="/activities/outdoor/sport"> <span className="text-blue-600 text-sm"> تعلم المزيد</span></a>

          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/jardinact2.png" alt="ألعاب ميدانية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">ألعاب ميدانية</h3>
            <p className="text-gray-600 text-sm">أنشطة ترفيهية في الهواء الطلق تنمّي المهارات الحركية والإبداع الجماعي.</p>
            <a href="/activities/outdoor/game"> <span className="text-blue-600 text-sm"> تعلم المزيد</span></a>

          </CardContent>
        </Card>
      </div>

      {/* بيانات مسترجعة من Supabase */}
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
                <BookOpen className="inline w-4 h-4 mr-1" />عرض النشاط
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
