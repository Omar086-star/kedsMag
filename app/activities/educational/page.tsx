"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import FloatingBox from '@/components/FloatingBox';

import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function EducationalActivitiesPage() {
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
    <div className=" px-6">
      <Header />

      <h1 className="text-3xl font-bold violetCustom mb-8 text-center">أنشطة تربوية</h1>

      {/* محتوى تربوي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          تهدف الأنشطة التربوية إلى تنمية شخصية الطفل ومهاراته في التفكير والتعاون والاحترام. نقدم هنا بعض الأنشطة التي تدمج التعلم باللعب، وتغرس القيم التربوية من خلال مواقف تعليمية ممتعة.
        </p>
      </div>

      {/* بطاقات صور لمحتوى تربوي ثابت */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/opi3.jpeg" alt="ألعاب تعليمية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">ألعاب تعليمية</h3>
            <p className="text-gray-600 text-sm">نشاطات جماعية تحفز التفكير والتحليل بطريقة ممتعة وتعاونية.</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/opi2.jpeg" alt="قِيَم وتعاون" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">حلقة القيم</h3>
            <p className="text-gray-600 text-sm">نقاشات تربوية حول الصدق، التعاون، والاحترام ضمن مجموعات صغيرة.</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/opi1.jpeg" alt="قصص منطقية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">قصص منطقية</h3>
            <p className="text-gray-600 text-sm">أنشطة قراءة قصص قصيرة تحفز على التفكير المنطقي واستخلاص العِبر.</p>
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
