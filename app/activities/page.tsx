"use client"

import {useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Calendar, MapPin, Users, Search, Heart, Star } from "lucide-react"
import Bubbles from "@/components/Bubbles";
import { Camera, Download, Play } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"
import FloatingBox from '@/components/FloatingBox';

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activities, setActivities] = useState<any[]>([])
  const [futureEvents, setFutureEvents] = useState<any[]>([])
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    async function fetchActivities() {
      const { data: acts } = await supabase.from("activities").select("*")
      const { data: future } = await supabase.from("activitesFuture").select("*").order("date", { ascending: true })
      setActivities(acts || [])
      setFutureEvents(future || [])
    }
    fetchActivities()
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { error } = await supabase.from("subscriptions").insert([{ email }])
      if (error) throw error
      setMessage("تم الاشتراك بنجاح!")
      setEmail("")
    } catch {
      setMessage("حدث خطأ أثناء الاشتراك.")
    }
  }

  const categories = [
    { id: "all", name: "جميع الأنشطة", color: "purple" },
    { id: "creative", name: "إبداعية", color: "pink" },
    { id: "educational", name: "تعليمية", color: "blue" },
    { id: "outdoor", name: "خارجية", color: "green" },
    { id: "cultural", name: "ثقافية", color: "orange" },
  ]

  const filteredActivites =
    selectedCategory === "all" ? activities : activities.filter((a) => a.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Header */}
      <Header />


      {/* Hero مقدمة ستاتيك Section */}
      <section className=" relative overflow-hidden">
<div className=" bgine z-10">

  <Bubbles />
 

  <div className="relative  z-30 text-white flex flex-col justify-center items-center h-screen">
  <h1 className="text-5xl font-bold text-white text-center   violetCustom  z-50">الأنشطة والفعاليات</h1>

            <p className="text-xl text-white-700 w-3xl mx-auto">
              انضم إلينا في رحلة تعليمية ممتعة مليئة بالأنشطة التفاعلية والفعاليات المثيرة
            </p>    

  </div>
</div>


      </section>

    <section className="">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivites.map((activite) => (
              <Card key={activite.id} className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image src={activite.cover_url || "/placeholder.svg"} alt={activite.title} fill className="object-cover transition-transform hover:scale-110" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white font-bold">نشاط</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users className="w-4 h-4" />
                        <span>مشاركة</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold violetCustom mb-2">{activite.title}</h3>
                  <p className="text-gray-600 mb-4">{activite.status}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>{activite.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href={activite.file_url} target="_blank" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full">
                        <BookOpen className="w-4 h-4 mr-2" /> عرض النشاط
                      </Button>
                    </a>
                    <a href={activite.file_url} download>
                      <Button variant="outline" className="border-2 border-purple-500 text-purple-700 rounded-full">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming  الفعاليات القادمة Events */}


      <section id="activitéAvenire" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold violetCustom mb-4">الفعاليات القادمة</h2>
            <p className="text-xl text-gray-600">لا تفوت هذه الفعاليات المميزة</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {futureEvents.map((event, index) => (
                <Card key={event.id} className="border-4 border-purple-200 hover:border-purple-400 transition-all bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image src={event.cover_url || "/placeholder.svg"} alt={event.title} fill className="object-cover rounded-2xl" />
                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                        <h3 className="text-2xl font-bold violetCustom mb-2">{event.title}</h3>
                        <p className="text-gray-700 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-4">
                          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <a href={event.file_url} target="_blank">
                          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-2 font-bold">
                            احجز مكانك
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* activite انواع النشاطات Types */}
      <section className="py-16 bg-gradient-to-br from-blue-50 violetCustom">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold violetCustom mb-4">أنواع الأنشطة</h2>
            <p className="text-xl text-gray-600">تنوع في الأنشطة يناسب جميع الاهتمامات</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* // - /activities/cultural
// - /activities/outdoor
// - /activities/educational */}

            <Card className="border-4 boxi border-orange-200 hover:border-orange-400  transition-all transform hover:scale-105 bg-bx-force">
            <a href="/activities/creative">  
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bgbr violetCustom0 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white hover:border-orange-400 transition-all transform hover:scale-150" />
                </div>

              <h3 className="text-xl font-bold text-white mb-2">أنشطة إبداعية</h3>
                <p className="text-white">رسم، تلوين، حرف يدوية، وأنشطة فنية متنوعة</p>
              </CardContent>
              </a>
            </Card>

            <Card className="border-4 boxi border-orange-200 hover:border-orange-400  transition-all transform hover:scale-105 bg-bx-force">
            <a href="/activities/educational">  
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bgbr rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white hover:border-orange-400 transition-all transform hover:scale-150" />
                </div>
                <h3 className="text-xl font-bold text-white  mb-2">أنشطة تعليمية</h3>
                <p className="text-white">ورش تعليمية، مسابقات، وأنشطة تنمية المهارات</p>
              </CardContent>
              </a>
            </Card>

            <Card className="border-4 boxi border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 bg-bx-force">
            <a href="/activities/outdoor">  
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bgbr rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white hover:border-orange-400 transition-all transform hover:scale-150" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">أنشطة خارجية</h3>
                <p className="text-white">رحلات، استكشاف الطبيعة، وأنشطة في الهواء الطلق</p>
              </CardContent>
              </a>
            </Card>

            <Card className="border-4 boxi border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 bg-bx-force">
            <a href="/activities/cultural">  
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bgbr to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white hover:border-orange-400 transition-all transform hover:scale-150" />
                </div>
                <h3 className="text-xl font-bold  text-white mb-2">أنشطة ثقافية</h3>
                <p className="text-white">مهرجانات، عروض، وفعاليات ثقافية متنوعة</p>
              </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </section>


      {/* Registration انضم الى نشاطاتنا CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">انضم إلى أنشطتنا</h2>
            <p className="text-xl mb-8 opacity-90">سجل الآن واحصل على تجربة تعليمية ممتعة لا تُنسى</p>

            {/* نموذج الاشتراك */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                required
                className="px-6 py-3 rounded-full text-black w-full sm:w-96"/>
              <button type="submit" className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-bold">
                اشترك
              </button>
            </form>
            {message && <p className="text-white font-semibold">{message}</p>}

            {/* الأزرار الأصلية */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold"
              >
                سجل في نشاط
              </Button>
              <a href="/contact">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-bold"
              >
                تواصل معنا
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <FloatingBox />

      {/* Footer */}
 
<Footer />

    </div>
  )
}
