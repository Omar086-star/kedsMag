"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryImages = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.02_164a84c4.jpg-j6O3viQcVZCZVzYnoziuqGNWDPmReB.jpeg",
      title: "ورشة الرسم والتلوين",
      description: "الأطفال يستمتعون بالرسم والتلوين في ورشة إبداعية",
      category: "workshops",
      date: "15 كانون الثاني 2025",
      location: "مركز الأنشطة - دمشق",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.09_244f6a8e.jpg-UqfKujnyLpryS4xuW4ODZ30oiPbeIK.jpeg",
      title: "مسابقة القراءة",
      description: "أطفال يشاركون في مسابقة القراءة الممتعة",
      category: "competitions",
      date: "20 كانون الثاني 2025",
      location: "المكتبة العامة - دمشق",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.25_2a735461.jpg-hQnYQ5weX5Ls4Z4HPwT821KcOzSOqv.jpeg",
      title: "رحلة في الطبيعة",
      description: "استكشاف الطبيعة والتعلم في الهواء الطلق",
      category: "trips",
      date: "25 كانون الثاني 2025",
      location: "حديقة تشرين - دمشق",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.17_278c92c8.jpg-nlJ1aiGPDEOJWEOeCxIFvWT4fCLJQ2.jpeg",
      title: "ورشة الحرف اليدوية",
      description: "تعلم صنع الحرف اليدوية الجميلة",
      category: "workshops",
      date: "30 كانون الثاني 2025",
      location: "مركز الفنون - دمشق",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20%C3%A0%2016.54.12_ee54019b.jpg-uEBvcOHjGlx1czgWgizMzra9Py2fnG.jpeg",
      title: "مهرجان الحكايات",
      description: "أمسية مليئة بالحكايات والقصص الشيقة",
      category: "events",
      date: "5 شباط 2025",
      location: "المسرح الوطني - دمشق",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-12%20%C3%A0%2015.55.47_0868c9f4.jpg-Gtg7GZTLTZb7z70h4dLU1s44mH1lkC.jpeg",
      title: "نشاط الطبخ",
      description: "تعلم طبخ وصفات صحية ولذيذة",
      category: "workshops",
      date: "10 شباط 2025",
      location: "مطبخ التدريب - دمشق",
    },
    {
      id: 7,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-20%20%C3%A0%2021.35.14_bbd16de7.jpg-JlJHNl0egJL0Jwsf4EKUtWfP0L2HdX.jpeg",
      title: "شخصية المجلة",
      description: "شخصية مجلة 8 كانون المحبوبة",
      category: "characters",
      date: "دائم",
      location: "مجلة 8 كانون",
    },
    {
      id: 8,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%24.jpg-uq5jx9B4mYU59LQrGm6r1wee3mLYyd.jpeg",
      title: "اكتشاف الكنوز",
      description: "نشاط تفاعلي لاكتشاف الكنوز والألغاز",
      category: "games",
      date: "15 شباط 2025",
      location: "مركز الألعاب - دمشق",
    },
  ]

  const categories = [
    { id: "all", name: "جميع الصور", color: "purple" },
    { id: "workshops", name: "ورش العمل", color: "blue" },
    { id: "competitions", name: "المسابقات", color: "green" },
    { id: "trips", name: "الرحلات", color: "orange" },
    { id: "events", name: "الفعاليات", color: "pink" },
    { id: "characters", name: "الشخصيات", color: "yellow" },
    { id: "games", name: "الألعاب", color: "red" },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
      setSelectedImage(filteredImages[prevIndex].id)
    }
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b-4 border-purple-300 shadow-lg">
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
              <Link href="/activities" className="text-purple-700 hover:text-purple-900 transition-colors">
                الأنشطة
              </Link>
              <Link href="/gallery" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
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
            <h1 className="text-5xl font-bold text-purple-800 mb-6">معرض الصور</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              شاهد أجمل اللحظات من أنشطتنا وفعالياتنا التعليمية والترفيهية
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`
                      ${image.category === "workshops" ? "bg-blue-500" : ""}
                      ${image.category === "competitions" ? "bg-green-500" : ""}
                      ${image.category === "trips" ? "bg-orange-500" : ""}
                      ${image.category === "events" ? "bg-pink-500" : ""}
                      ${image.category === "characters" ? "bg-yellow-500" : ""}
                      ${image.category === "games" ? "bg-red-500" : ""}
                      text-white font-bold text-xs
                    `}
                    >
                      {categories.find((cat) => cat.id === image.category)?.name}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-purple-800 mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{image.description}</p>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{image.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full"
              onClick={prevImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full"
              onClick={nextImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImageData.title}</h3>
                <p className="text-white/90 mb-4">{selectedImageData.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedImageData.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImageData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">إحصائيات معرض الصور</h2>
            <p className="text-xl text-gray-600">أرقام تعكس نشاطنا وتفاعلنا</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">صورة</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-lg text-gray-600">فعالية</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-lg text-gray-600">طفل مشارك</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-lg text-gray-600">موقع</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">شارك معنا لحظاتك المميزة</h2>
            <p className="text-xl mb-8 opacity-90">أرسل لنا صور أطفالك وهم يستمتعون بأنشطتنا</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold"
              >
                شارك صورة
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
