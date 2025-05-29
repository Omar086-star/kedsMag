import Image from "next/image"
import Link from "next/link"
import { BookOpen, Download, Eye, Calendar, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EditionsPage() {
  const editions = [
    {
      id: 1,
      title: "العدد الأخير - كانون الثاني 2025",
      description: "قصص وأنشطة حول الطبيعة والبيئة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20%C3%A0%2016.54.12_ee54019b.jpg-uEBvcOHjGlx1czgWgizMzra9Py2fnG.jpeg",
      date: "كانون الثاني 2025",
      pages: 32,
      isNew: true,
      featured: true,
    },
    {
      id: 2,
      title: "عدد ديسمبر 2024",
      description: "التعاون والعمل الجماعي",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.02_164a84c4.jpg-j6O3viQcVZCZVzYnoziuqGNWDPmReB.jpeg",
      date: "ديسمبر 2024",
      pages: 28,
      isNew: false,
      featured: false,
    },
    {
      id: 3,
      title: "عدد نوفمبر 2024",
      description: "احترام الكبار والتقاليد",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.17_278c92c8.jpg-nlJ1aiGPDEOJWEOeCxIFvWT4fCLJQ2.jpeg",
      date: "نوفمبر 2024",
      pages: 30,
      isNew: false,
      featured: false,
    },
    {
      id: 4,
      title: "عدد أكتوبر 2024",
      description: "الصداقة والأخوة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.09_244f6a8e.jpg-UqfKujnyLpryS4xuW4ODZ30oiPbeIK.jpeg",
      date: "أكتوبر 2024",
      pages: 26,
      isNew: false,
      featured: false,
    },
    {
      id: 5,
      title: "عدد سبتمبر 2024",
      description: "اللعب في الطبيعة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.25_2a735461.jpg-hQnYQ5weX5Ls4Z4HPwT821KcOzSOqv.jpeg",
      date: "سبتمبر 2024",
      pages: 24,
      isNew: false,
      featured: false,
    },
    {
      id: 6,
      title: "عدد أغسطس 2024",
      description: "العودة إلى المدرسة",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-12%20%C3%A0%2015.55.47_0868c9f4.jpg-Gtg7GZTLTZb7z70h4dLU1s44mH1lkC.jpeg",
      date: "أغسطس 2024",
      pages: 28,
      isNew: false,
      featured: false,
    },
  ]

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
              <Link href="/editions" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
                إصداراتنا
              </Link>
              <Link href="/activities" className="text-purple-700 hover:text-purple-900 transition-colors">
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
            <h1 className="text-5xl font-bold text-purple-800 mb-6">إصداراتنا</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              اكتشف مجموعة واسعة من الإصدارات التعليمية والترفيهية المصممة خصيصاً لأطفالكم
            </p>
          </div>
        </div>
      </section>

      {/* Featured Edition */}
      {editions
        .filter((edition) => edition.featured)
        .map((edition) => (
          <section key={edition.id} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 text-lg font-bold mb-4">
                  العدد المميز
                </Badge>
                <h2 className="text-3xl font-bold text-purple-800">أحدث إصداراتنا</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="relative">
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-2 transition-transform duration-300">
                    <Image
                      src={edition.image || "/placeholder.svg"}
                      alt={edition.title}
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    {edition.isNew && (
                      <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
                        جديد!
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <h3 className="text-4xl font-bold text-purple-800 mb-4">{edition.title}</h3>
                  <p className="text-xl text-gray-700 mb-6">{edition.description}</p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-8">
                    <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span>{edition.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                      <BookOpen className="w-4 h-4" />
                      <span>{edition.pages} صفحة</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      اقرأ الآن
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-bold"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      تحميل PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      {/* All Editions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">جميع الإصدارات</h2>
            <p className="text-xl text-gray-600">تصفح مكتبتنا الكاملة من الإصدارات التعليمية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editions.map((edition) => (
              <Card
                key={edition.id}
                className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={edition.image || "/placeholder.svg"}
                    alt={edition.title}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                  {edition.isNew && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      جديد
                    </div>
                  )}
                  {edition.featured && (
                    <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      <Star className="w-4 h-4 inline mr-1" />
                      مميز
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{edition.title}</h3>
                  <p className="text-gray-600 mb-4">{edition.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edition.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{edition.pages} صفحة</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full">
                      <Eye className="w-4 h-4 mr-2" />
                      اقرأ
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 rounded-full"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Reader Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">قارئ المجلة</h2>
            <p className="text-xl text-gray-600">اقرأ المجلة مباشرة من المتصفح</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-purple-800">العدد الأخير - كانون الثاني 2025</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-purple-500 text-purple-700">
                      <Download className="w-4 h-4 mr-2" />
                      تحميل
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">ملء الشاشة</Button>
                  </div>
                </div>

                {/* PDF Viewer Placeholder */}
                <div className="bg-gray-50 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">قارئ PDF التفاعلي</p>
                    <p className="text-gray-400">انقر على "اقرأ الآن" لعرض المجلة</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <Button variant="outline" className="border-gray-300">
                    الصفحة السابقة
                  </Button>
                  <span className="text-gray-600">صفحة 1 من 32</span>
                  <Button variant="outline" className="border-gray-300">
                    الصفحة التالية
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">لا تفوت أحدث إصداراتنا</h2>
            <p className="text-xl mb-8 opacity-90">اشترك في النشرة البريدية للحصول على أحدث الإصدارات</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 text-right"
              />
              <Button className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
                اشترك الآن
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
