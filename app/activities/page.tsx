"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Calendar, MapPin, Users, Search, Heart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const activities = [
    {
      id: 1,
      title: "ورشة الرسم والتلوين",
      description: "نشاط تفاعلي لتنمية الإبداع والخيال لدى الأطفال",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.02_164a84c4.jpg-j6O3viQcVZCZVzYnoziuqGNWDPmReB.jpeg",
      date: "15 كانون الثاني 2025",
      location: "مركز الأنشطة - دمشق",
      category: "creative",
      participants: 25,
      ageGroup: "6-12 سنة",
    },
    {
      id: 2,
      title: "مسابقة القراءة الممتعة",
      description: "مسابقة تشجع الأطفال على حب القراءة والمطالعة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.09_244f6a8e.jpg-UqfKujnyLpryS4xuW4ODZ30oiPbeIK.jpeg",
      date: "20 كانون الثاني 2025",
      location: "المكتبة العامة - دمشق",
      category: "educational",
      participants: 40,
      ageGroup: "8-14 سنة",
    },
    {
      id: 3,
      title: "رحلة استكشافية في الطبيعة",
      description: "رحلة تعليمية لاستكشاف الطبيعة والتعرف على البيئة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.25_2a735461.jpg-hQnYQ5weX5Ls4Z4HPwT821KcOzSOqv.jpeg",
      date: "25 كانون الثاني 2025",
      location: "حديقة تشرين - دمشق",
      category: "outdoor",
      participants: 30,
      ageGroup: "5-10 سنوات",
    },
    {
      id: 4,
      title: "ورشة الحرف اليدوية",
      description: "تعلم صنع الحرف اليدوية الجميلة والمفيدة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.17_278c92c8.jpg-nlJ1aiGPDEOJWEOeCxIFvWT4fCLJQ2.jpeg",
      date: "30 كانون الثاني 2025",
      location: "مركز الفنون - دمشق",
      category: "creative",
      participants: 20,
      ageGroup: "7-13 سنة",
    },
    {
      id: 5,
      title: "مهرجان الحكايات",
      description: "أمسية مليئة بالحكايات والقصص الشيقة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20%C3%A0%2016.54.12_ee54019b.jpg-uEBvcOHjGlx1czgWgizMzra9Py2fnG.jpeg",
      date: "5 شباط 2025",
      location: "المسرح الوطني - دمشق",
      category: "cultural",
      participants: 100,
      ageGroup: "4-12 سنة",
    },
    {
      id: 6,
      title: "نشاط الطبخ للأطفال",
      description: "تعلم طبخ وصفات صحية ولذيذة مع الأصدقاء",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-12%20%C3%A0%2015.55.47_0868c9f4.jpg-Gtg7GZTLTZb7z70h4dLU1s44mH1lkC.jpeg",
      date: "10 شباط 2025",
      location: "مطبخ التدريب - دمشق",
      category: "educational",
      participants: 15,
      ageGroup: "8-15 سنة",
    },
  ]

  const categories = [
    { id: "all", name: "جميع الأنشطة", color: "purple" },
    { id: "creative", name: "إبداعية", color: "pink" },
    { id: "educational", name: "تعليمية", color: "blue" },
    { id: "outdoor", name: "خارجية", color: "green" },
    { id: "cultural", name: "ثقافية", color: "orange" },
  ]

  const filteredActivities =
    selectedCategory === "all" ? activities : activities.filter((activity) => activity.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-purple-300 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-800">مجلة 8 كانون</h1>
                <p className="text-sm text-orange-600 font-medium">للأطفال ⭐⭐⭐</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-purple-700 hover:text-purple-900 transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="text-purple-700 hover:text-purple-900 transition-colors">
                من نحن
              </Link>
              <Link href="/editions" className="text-purple-700 hover:text-purple-900 transition-colors">
                إصداراتنا
              </Link>
              <Link href="/activities" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
                الأنشطة
              </Link>
              <Link href="/gallery" className="text-purple-700 hover:text-purple-900 transition-colors">
                معرض الصور
              </Link>
              <Link href="/contact" className="text-purple-700 hover:text-purple-900 transition-colors">
                اتصل بنا
              </Link>
            </nav>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-800 mb-6">الأنشطة والفعاليات</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              انضم إلينا في رحلة تعليمية ممتعة مليئة بالأنشطة التفاعلية والفعاليات المثيرة
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 font-bold transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                      : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="ابحث عن نشاط..."
                className="pr-10 pl-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <Card
                key={activity.id}
                className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`
                      ${activity.category === "creative" ? "bg-pink-500" : ""}
                      ${activity.category === "educational" ? "bg-blue-500" : ""}
                      ${activity.category === "outdoor" ? "bg-green-500" : ""}
                      ${activity.category === "cultural" ? "bg-orange-500" : ""}
                      text-white font-bold
                    `}
                    >
                      {categories.find((cat) => cat.id === activity.category)?.name}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users className="w-4 h-4" />
                        <span>{activity.participants} مشارك</span>
                        <span className="mx-2">•</span>
                        <span>{activity.ageGroup}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full">
                      سجل الآن
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 rounded-full"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">الفعاليات القادمة</h2>
            <p className="text-xl text-gray-600">لا تفوت هذه الفعاليات المميزة</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {activities.slice(0, 3).map((activity, index) => (
                <Card
                  key={activity.id}
                  className="border-4 border-purple-200 hover:border-purple-400 transition-all bg-gradient-to-r from-purple-50 to-blue-50"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-right">
                        <h3 className="text-2xl font-bold text-purple-800 mb-2">{activity.title}</h3>
                        <p className="text-gray-700 mb-4">{activity.description}</p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-4">
                          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span>{activity.date}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            <span>{activity.location}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span>{activity.participants} مشارك</span>
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-2 font-bold">
                          احجز مكانك
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activity Types */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">أنواع الأنشطة</h2>
            <p className="text-xl text-gray-600">تنوع في الأنشطة يناسب جميع الاهتمامات</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-2">أنشطة إبداعية</h3>
                <p className="text-gray-600">رسم، تلوين، حرف يدوية، وأنشطة فنية متنوعة</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-105 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">أنشطة تعليمية</h3>
                <p className="text-gray-600">ورش تعليمية، مسابقات، وأنشطة تنمية المهارات</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">أنشطة خارجية</h3>
                <p className="text-gray-600">رحلات، استكشاف الطبيعة، وأنشطة في الهواء الطلق</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">أنشطة ثقافية</h3>
                <p className="text-gray-600">مهرجانات، عروض، وفعاليات ثقافية متنوعة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">انضم إلى أنشطتنا</h2>
            <p className="text-xl mb-8 opacity-90">سجل الآن واحصل على تجربة تعليمية ممتعة لا تُنسى</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold"
              >
                سجل في نشاط
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-bold"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">مجلة 8 كانون</h3>
                  <p className="text-sm text-orange-400">للأطفال ⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-400">
                مجلة تعليمية وترفيهية مخصصة للأطفال، تهدف إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/editions" className="text-gray-400 hover:text-white transition-colors">
                    إصداراتنا
                  </Link>
                </li>
                <li>
                  <Link href="/activities" className="text-gray-400 hover:text-white transition-colors">
                    الأنشطة
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">تابعنا</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  @
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  X
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
              <div className="space-y-2 text-gray-400">
                <p>office@8kanoon.org</p>
                <p>+963 XXX XXX XXX</p>
                <p>سوريا - دمشق</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
