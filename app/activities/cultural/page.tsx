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
export default function CulturalActivitiesPage() {
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
    <div  className=" px-6">
      <Header />

      <h1 className="text-3xl font-bold violetCustom py-12 mb-8 text-center">أنشطة ثقافية</h1>

      {/* محتوى ثقافي للأطفال */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          الثقافة تساعد الأطفال على فهم العالم من حولهم، وتمنحهم الفرصة للتعرف على الحضارات والقصص والقيم الإنسانية. نقدم هنا بعض الأنشطة الثقافية التي تشجع الطفل على الاستكشاف والتعبير الفني والتعرف على تراثه.
        </p>
      </div>

      {/* بطاقات صور لمحتوى ثقافي ثابت */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/culture-books.png" alt="كتب للأطفال" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">مكتبة الطفل</h3>
            <p className="text-gray-600 text-sm">تشجيع الأطفال على القراءة من خلال كتب مصورة وقصص تراثية.</p>
            <a href="/activities/cultural/read"> <span className="text-blue-600 text-sm"> تعلم المزيد</span></a>

          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/heritage-craft.png" alt="فن تراثي" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">ورشة فنون تقليدية</h3>
            <p className="text-gray-600 text-sm">نشاطات للرسم والتطريز وصنع الحرف اليدوية المستوحاة من التراث.</p>
            <a href="/activities/cultural/workshop"> <span className="text-blue-600 text-sm"> تعلم المزيد</span></a>

          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-purple-200">
          <div className="relative h-56">
            <Image src="/story-circle.png" alt="حكايات شعبية" fill className="object-cover rounded-t" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold violetCustom mb-2">حلقة الحكايا</h3>
            <p className="text-gray-600 text-sm">جلسة تفاعلية يسرد فيها الحكواتي قصصًا ممتعة تحمل قيماً تربوية وثقافية.</p>
            <a href="/activities/cultural/story"> <span className="text-blue-600 text-sm"> تعلم المزيد</span></a>
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