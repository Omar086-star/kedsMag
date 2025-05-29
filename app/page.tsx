// import Image from "next/image"
// import Link from "next/link"
// import { BookOpen, Calendar, Camera, Users, Download, Play, Star, Heart } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { LanguageSwitcher } from "@/components/language-switcher"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-purple-300 shadow-lg">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="flex items-center gap-3">
//               <div className="relative w-16 h-16 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1">
//                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                   <BookOpen className="w-8 h-8 text-purple-600" />
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-purple-800">مجلة 8 كانون</h1>
//                 <p className="text-sm text-orange-600 font-medium">للأطفال ⭐⭐⭐</p>
//               </div>
//             </Link>

//             <nav className="hidden md:flex items-center gap-6">
//               <Link href="/" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
//                 الرئيسية
//               </Link>
//               <Link href="/about" className="text-purple-700 hover:text-purple-900 transition-colors">
//                 من نحن
//               </Link>
//               <Link href="/editions" className="text-purple-700 hover:text-purple-900 transition-colors">
//                 إصداراتنا
//               </Link>
//               <Link href="/activities" className="text-purple-700 hover:text-purple-900 transition-colors">
//                 الأنشطة
//               </Link>
//               <Link href="/gallery" className="text-purple-700 hover:text-purple-900 transition-colors">
//                 معرض الصور
//               </Link>
//               <Link href="/contact" className="text-purple-700 hover:text-purple-900 transition-colors">
//                 اتصل بنا
//               </Link>
//             </nav>

//             <div className="flex items-center gap-3">
//               <LanguageSwitcher />
//               <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6 py-2 font-bold shadow-lg transform hover:scale-105 transition-all">
//                 <Download className="w-4 h-4 mr-2" />
//                 تحميل العدد الأخير
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-16 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></div>
//         <div className="container mx-auto px-4 relative">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="text-center md:text-right">
//               <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
//                 <Star className="w-4 h-4" />
//                 مجلة تعليمية ممتعة للأطفال
//                 <Star className="w-4 h-4" />
//               </div>
//               <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6 leading-tight">
//                 مرحباً بكم في
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
//                   مجلة 8 كانون
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-700 mb-8 leading-relaxed">
//                 مجلة تعليمية وترفيهية مخصصة للأطفال، تحتوي على قصص مشوقة، أنشطة تفاعلية، ومحتوى تعليمي يساعد الأطفال على
//                 التعلم والنمو بطريقة ممتعة.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all"
//                 >
//                   <BookOpen className="w-5 h-5 mr-2" />
//                   اقرأ العدد الجديد
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-bold"
//                 >
//                   <Play className="w-5 h-5 mr-2" />
//                   شاهد الفيديو
//                 </Button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative w-full max-w-md mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl transform rotate-6 opacity-20"></div>
//                 <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-2 transition-transform duration-300">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20%C3%A0%2016.54.12_ee54019b.jpg-uEBvcOHjGlx1czgWgizMzra9Py2fnG.jpeg"
//                     alt="غلاف مجلة 8 كانون"
//                     width={400}
//                     height={500}
//                     className="w-full h-auto rounded-2xl shadow-lg"
//                   />
//                   <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
//                     جديد!
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-purple-800 mb-4">ماذا نقدم لأطفالكم؟</h2>
//             <p className="text-xl text-gray-600">محتوى تعليمي وترفيهي متنوع يناسب جميع الأعمار</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
//               <CardContent className="p-6 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                   <BookOpen className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-purple-800 mb-2">قصص تعليمية</h3>
//                 <p className="text-gray-600">قصص مشوقة تحمل قيماً تربوية وتعليمية مفيدة</p>
//               </CardContent>
//             </Card>

//             <Card className="border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
//               <CardContent className="p-6 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                   <Users className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-green-800 mb-2">أنشطة تفاعلية</h3>
//                 <p className="text-gray-600">ألعاب وأنشطة تفاعلية تنمي مهارات الطفل</p>
//               </CardContent>
//             </Card>

//             <Card className="border-4 border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
//               <CardContent className="p-6 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                   <Camera className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-orange-800 mb-2">معرض الصور</h3>
//                 <p className="text-gray-600">صور من فعالياتنا وأنشطتنا المختلفة</p>
//               </CardContent>
//             </Card>

//             <Card className="border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-pink-50 to-purple-50">
//               <CardContent className="p-6 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                   <Heart className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-pink-800 mb-2">قيم تربوية</h3>
//                 <p className="text-gray-600">محتوى يعزز القيم الإيجابية والأخلاق الحميدة</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Latest Issues */}
      // <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      //   <div className="container mx-auto px-4">
      //     <div className="text-center mb-12">
      //       <h2 className="text-4xl font-bold text-purple-800 mb-4">أحدث الإصدارات</h2>
      //       <p className="text-xl text-gray-600">اكتشف أحدث أعداد مجلتنا المليئة بالمتعة والتعلم</p>
      //     </div>

      //     <div className="grid md:grid-cols-3 gap-8">
      //       {[
      //         {
      //           image:
      //             "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20%C3%A0%2016.54.12_ee54019b.jpg-uEBvcOHjGlx1czgWgizMzra9Py2fnG.jpeg",
      //           title: "العدد الأخير - كانون الثاني 2025",
      //           description: "قصص وأنشطة حول الطبيعة والبيئة",
      //         },
      //         {
      //           image:
      //             "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.02_164a84c4.jpg-j6O3viQcVZCZVzYnoziuqGNWDPmReB.jpeg",
      //           title: "عدد ديسمبر 2024",
      //           description: "التعاون والعمل الجماعي",
      //         },
      //         {
      //           image:
      //             "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-23%20%C3%A0%2023.43.17_278c92c8.jpg-nlJ1aiGPDEOJWEOeCxIFvWT4fCLJQ2.jpeg",
      //           title: "عدد نوفمبر 2024",
      //           description: "احترام الكبار والتقاليد",
      //         },
      //       ].map((issue, index) => (
      //         <Card
      //           key={index}
      //           className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
      //         >
      //           <div className="relative h-64 overflow-hidden">
      //             <Image
      //               src={issue.image || "/placeholder.svg"}
      //               alt={issue.title}
      //               fill
      //               className="object-cover transition-transform hover:scale-110"
      //             />
      //             <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
      //               جديد
      //             </div>
      //           </div>
      //           <CardContent className="p-6">
      //             <h3 className="text-xl font-bold text-purple-800 mb-2">{issue.title}</h3>
      //             <p className="text-gray-600 mb-4">{issue.description}</p>
      //             <div className="flex gap-2">
      //               <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full">
      //                 <BookOpen className="w-4 h-4 mr-2" />
      //                 اقرأ الآن
      //               </Button>
      //               <Button
      //                 variant="outline"
      //                 className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 rounded-full"
      //               >
      //                 <Download className="w-4 h-4" />
      //               </Button>
      //             </div>
      //           </CardContent>
      //         </Card>
      //       ))}
      //     </div>
      //   </div>
      // </section>

//       {/* Activities Preview */}


//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="container mx-auto px-4 relative">
//           <div className="text-center">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">انضم إلى عائلة مجلة 8 كانون</h2>
//             <p className="text-xl mb-8 opacity-90">احصل على أحدث الإصدارات والأنشطة التعليمية</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold shadow-xl"
//               >
//                 <Download className="w-5 h-5 mr-2" />
//                 تحميل مجاني
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-bold"
//               >
//                 <Calendar className="w-5 h-5 mr-2" />
//                 اشترك في النشرة
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
//                   <BookOpen className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">مجلة 8 كانون</h3>
//                   <p className="text-sm text-orange-400">للأطفال ⭐⭐⭐</p>
//                 </div>
//               </div>
//               <p className="text-gray-400">
//                 مجلة تعليمية وترفيهية مخصصة للأطفال، تهدف إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
//                     من نحن
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/editions" className="text-gray-400 hover:text-white transition-colors">
//                     إصداراتنا
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/activities" className="text-gray-400 hover:text-white transition-colors">
//                     الأنشطة
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
//                     اتصل بنا
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-bold mb-4">تابعنا</h4>
//               <div className="flex gap-4">
//                 <a
//                   href="https://www.facebook.com/share/1DX322Zcyx/"
//                   className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
//                 >
//                   f
//                 </a>
//                 <a
//                   href="https://www.instagram.com/8kanoon.maga?igsh=MnNrdGY5ejcyc3lz "
//                   className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
//                 >
//                   In
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
//                 >
//                   X
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
//               <div className="space-y-2 text-gray-400">
//                 <p>office@8kanoon.org</p>
//                 <p>+963 XXX XXX XXX</p>
//                 <p>سوريا - دمشق</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }











"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Calendar, Camera, Users, Download, Play, Star, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { supabase } from "@/lib/supabase"

export default function HomePage() {
  const [magazines, setMagazines] = useState<any[]>([])
  const [activities, setActivities] = useState<any[]>([])
  useEffect(() => {
    async function fetchData() {
      const { data: mags, error: magsError } = await supabase.from("magazines").select("*").order("date", { ascending: false });
      const { data: acts, error: actsError } = await supabase.from("activites").select("*").order("date", { ascending: false });

      if (magsError || actsError) {
        console.error("خطأ أثناء جلب بيانات المجلات:", magsError);
        console.error("خطأ أثناء جلب بيانات الأنشطة:", actsError);
      } else {
        setMagazines(mags || []);
        setActivities(acts || []);
      }
    }

    fetchData();
  }, []);

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
              <Link href="/" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
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
              <Link href="/gallery" className="text-purple-700 hover:text-purple-900 transition-colors">
                معرض الصور
              </Link>
              <Link href="/contact" className="text-purple-700 hover:text-purple-900 transition-colors">
                اتصل بنا
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6 py-2 font-bold shadow-lg transform hover:scale-105 transition-all">
                <Download className="w-4 h-4 mr-2" />
                تحميل العدد الأخير
              </Button>
            </div>
          </div>
        </div>
      </header>




      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
                <Star className="w-4 h-4" />
                مجلة تعليمية ممتعة للأطفال
                <Star className="w-4 h-4" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6 leading-tight">
                مرحباً بكم في
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  مجلة 8 كانون
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                مجلة تعليمية وترفيهية مخصصة للأطفال، تحتوي على قصص مشوقة، أنشطة تفاعلية، ومحتوى تعليمي يساعد الأطفال على
                التعلم والنمو بطريقة ممتعة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  اقرأ العدد الجديد
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-bold"
                >
                  <Play className="w-5 h-5 mr-2" />
                  شاهد الفيديو
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-2 transition-transform duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20%C3%A0%2016.54.12_ee54019b.jpg-uEBvcOHjGlx1czgWgizMzra9Py2fnG.jpeg"
                    alt="غلاف مجلة 8 كانون"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
                    جديد!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">أحدث الإصدارات</h2>
            <p className="text-xl text-gray-600">اكتشف أحدث أعداد مجلتنا المليئة بالمتعة والتعلم</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {magazines.map((issue, index) => (
              <Card key={index} className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={issue.cover_url || "/placeholder.svg"}
                    alt={issue.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">جديد</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{issue.title}</h3>
                  <p className="text-gray-600 mb-4">{issue.date}</p>
                  <div className="flex gap-2">
                    <a href={issue.file_url} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full">
                        <BookOpen className="w-4 h-4 mr-2" /> اقرأ الآن
                      </Button>
                    </a>
                    <a href={issue.file_url} download>
                      <Button variant="outline" className="border-2 border-purple-500 text-purple-700 rounded-full">
                        <Download className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>





      {/* Latest Issues (Dynamic from Supabase) */}







      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">أنشطة وفعاليات</h2>
            <p className="text-xl text-gray-600">شاهد أحدث أنشطتنا وفعالياتنا التعليمية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.length === 0 && (
              <p className="col-span-full text-center text-gray-400">لا توجد أنشطة حالياً.</p>
            )}
            {activities.map((activity, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <Image
                  src={activity.cover_url || "/default-cover.jpg"}
                  alt={activity.title}
                  width={300}
                  height={300}
                  unoptimized
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-lg">{activity.title}</h4>
                    <p className="text-sm opacity-90">أنشطة ممتعة للأطفال</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl">
              <Camera className="w-5 h-5 mr-2" /> شاهد المزيد من الأنشطة
            </Button>
          </div>
        </div>
      </section>




      {/* باقي الأقسام مثل الأنشطة و CTA والفوتر... */}

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

            <div>             <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>              <ul className="space-y-2">               <li>
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
                  href="https://www.facebook.com/share/1DX322Zcyx/"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/8kanoon.maga?igsh=MnNrdGY5ejcyc3lz "
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  In
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
