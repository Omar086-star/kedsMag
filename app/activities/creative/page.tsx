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
export default function CreativeActivitiesPage() {
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("activities")
        .select("*")
        .eq("category", "creative")
      setActivities(data || [])
    }
    fetchData()
  }, [])

  return (
    <div className=" px-6">
      <Header />

      <h1 className="text-3xl font-bold violetCustom mb-8 text-center">أنشطة إبداعية</h1>

      {/* محتوى إبداعي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          الأنشطة الإبداعية تمنح الأطفال مساحة للتعبير الحر وتنمية خيالهم وابتكارهم. من خلال الرسم، التمثيل، والتصميم اليدوي، يكتشف الطفل قدراته الفنية ويطور شخصيته بشكل متوازن.
        </p>
      </div>

      {/* بطاقات صور لمحتوى إبداعي ثابت */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/color1.png" alt="رسم وتلوين" fill className="object-cover rounded-t" />
          </div>
         

          
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">ركن الرسم والتلوين</h3>
            <p className="text-gray-600 text-sm">أنشطة فنية تعزز الحس الجمالي وتتيح للطفل التعبير عن أفكاره بالألوان.</p>
            <a href="/activities/creative/coloring-activities"> <span className="text-gray-900"> تعلم المزيد</span>    </a> 
          </CardContent>
         
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/meusem4.png" alt="مسرح الأطفال" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">مسرح الطفل</h3>
            <p className="text-gray-600 text-sm">تمثيليات وأداءات مسرحية تطور الجرأة والثقة بالنفس وروح التعاون.</p>
            <a href="/activities/creative/meusem"> <span className="text-gray-900"> تعلم المزيد</span>    </a> 

          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/form1.png" alt="أشغال يدوية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">الأشغال اليدوية</h3>
            <p className="text-gray-600 text-sm">أنشطة قص ولصق وصنع مجسمات تنمي المهارات الحركية الدقيقة والإبداع العملي.</p>
            <a href="/activities/creative/traditional"> <span className="text-gray-900"> تعلم المزيد</span>    </a> 

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