
// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { BookOpen, Download, Eye, Calendar, Star } from "lucide-react"
// import { useEffect, useState } from "react"
// import { supabase } from "@/lib/supabase"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// export default function EditionsPage() {
//   const [magazines, setMagazines] = useState<any[]>([])

//   useEffect(() => {
//     async function fetchMagazines() {
//       const { data, error } = await supabase.from("magazines").select("*").order("date", { ascending: false })
//       if (!error) setMagazines(data || [])
//     }
//     fetchMagazines()
//   }, [])

//   const latest = magazines[0]
//   const others = magazines.slice(1)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
//       {/* Header */}
//       <header className="sticky top-0 z-40 bg-red/90 backdrop-blur-sm bg-[#3b00cc] !bg-[#3b00cc]   border-purple-900 shadow-lg">
// <div className="container mx-auto px-4 py-4">
//   <div className="flex items-center justify-between">
//     <Link href="/" className="flex items-center gap-3">
//     <Image src="/logo.png" alt="شعار المجلة" width={100} height={100} className="object-contain" />
 
//     </Link>

//     <nav className="hidden md:flex items-center gap-6">
//       <Link href="/" className="text-purple-700 hover:text-purple-900 transition-colors text-white  text-fs-force  ">
//         الرئيسية
//       </Link>
//       <Link href="/about" className="text-purple-700 hover:text-purple-900 transition-colors text-white  text-fs-force ">
//         من نحن
//       </Link>
//       <Link href="/editions" className="text-purple-700 hover:text-purple-900 transition-colors text-white  -  text-fs-force ">
//         إصداراتنا
//       </Link>
//       <Link href="/activities" className="text-purple-700 hover:text-purple-900 transition-colors text-white  -  text-fs-force ">
//         الأنشطة
//       </Link>
//       <Link href="/gallery" className="text-purple-700 font-bold hover:text-purple-900 transition-colors text-white  -  text-fs-force ">
//         معرض الصور
//       </Link>
//       <Link href="/contact" className="text-purple-700 hover:text-purple-900 transition-colors text-white   text-fs-force ">
//         اتصل بنا
//       </Link>
//     </nav>
//   </div>
// </div>
// </header>

//       {/* Hero Section */}
//       <section className="py-16 relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h1 className="text-5xl font-bold violetCustom mb-6">إصداراتنا</h1>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               اكتشف مجموعة واسعة من الإصدارات التعليمية والترفيهية المصممة خصيصاً لأطفالكم
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured العدد المميز Edition */}
//       {latest && (
//           <div className="mb-12 justfyCenter">
//             <h2 className="text-2xl font-bold text-purple-700 mb-4">العدد المميز</h2>
//             <Card className="overflow-hidden max-w-50 border-4 border-purple-400 bg-white">
//               <div className="relative  h-72 md:h-96">
//                 <Image
//                   src={latest.cover_url || "/placeholder.svg"}
//                   alt={latest.title}
//                   fill
//                   unoptimized
//                   className="object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-2xl font-bold violetCustom mb-2">{latest.title}</h3>
//                 <p className="text-gray-600 mb-4">{latest.date}</p>
//                 <div className="flex gap-4">
//                   <a href={latest.file_url} target="_blank" rel="noopener noreferrer">
//                     <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full px-6">
//                       <BookOpen className="w-4 h-4 mr-2" /> اقرأ الآن
//                     </Button>
//                   </a>
//                   <a href={latest.file_url} download>
//                     <Button variant="outline" className="border-purple-500 text-purple-700 rounded-full px-6">
//                       <Download className="w-4 h-4 mr-2" /> تحميل
//                     </Button>
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//       {/* All Editions */}
//       <div className="grid md:grid-cols-4 pb-12 gap-8">
//           {others.map((issue, index) => (
//             <Card key={index} className="overflow-hidden boxi   border-4 border-purple-200 bg-white">
//               <div className="relative h-64 ">
//                 <Image
//                   src={issue.cover_url || "/placeholder.svg"}
//                   alt={issue.title}
//                   fill
//                   unoptimized
//                   className="object-cover f100f"
//                 />
//               </div>
//               <CardContent className="p-4">
//                 <h4 className="text-xl font-bold violetCustom mb-2">{issue.title}</h4>
//                 <p className="text-gray-500 mb-4">{issue.date}</p>
//                 <div className="flex gap-2">
//                   <a href={issue.file_url} target="_blank" rel="noopener noreferrer" className="flex-1">
//                     <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full">
//                       <BookOpen className="w-4 h-4 mr-2" /> اقرأ الآن
//                     </Button>
//                   </a>
//                   <a href={issue.file_url} download>
//                     <Button variant="outline" className="border-2 border-purple-500 text-purple-700 rounded-full">
//                       <Download className="w-4 h-4" />
//                     </Button>
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//       {/* PDF Reader Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold violetCustom mb-4">قارئ المجلة</h2>
//             <p className="text-xl text-gray-600">اقرأ المجلة مباشرة من المتصفح</p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
//               <div className="bg-white rounded-xl p-6 shadow-lg">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-bold violetCustom">العدد الأخير - كانون الثاني 2025</h3>
//                   <div className="flex gap-2">
//                     <Button variant="outline" className="border-purple-500 text-purple-700">
//                       <Download className="w-4 h-4 mr-2" />
//                       تحميل
//                     </Button>
//                     <Button className="bg-purple-600 hover:bg-purple-700 text-white">ملء الشاشة</Button>
//                   </div>
//                 </div>

//                 {/* PDF Viewer Placeholder */}
//                 <div className="bg-gray-50 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
//                   <div className="text-center">
//                     <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                     <p className="text-gray-500 text-lg">قارئ PDF التفاعلي</p>
//                     <p className="text-gray-400">انقر على "اقرأ الآن" لعرض المجلة</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-center gap-4 mt-6">
//                   <Button variant="outline" className="border-gray-300">
//                     الصفحة السابقة
//                   </Button>
//                   <span className="text-gray-600">صفحة 1 من 32</span>
//                   <Button variant="outline" className="border-gray-300">
//                     الصفحة التالية
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>







//       {/* CTA  الاشتراكSection */}
//       <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold mb-6">لا تفوت أحدث إصداراتنا</h2>
//             <p className="text-xl mb-8 opacity-90">اشترك في النشرة البريدية للحصول على أحدث الإصدارات</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="أدخل بريدك الإلكتروني"
//                 className="flex-1 px-4 py-3 rounded-full text-gray-800 text-right"
//               />
//               <Button className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
//                 اشترك الآن
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-bx-force  text-white py-12 ">
// <div className="container mx-auto px-4">
//   <div className="grid md:grid-cols-4 gap-8">
//   <Link href="/" className="flex items-center justfyLogo gap-3 gap-8">
//     <Image src="/logo.png" alt="شعار المجلة" width={170} height={135} className="object-contain" />
//   <p className="text-sm text-orange-400"> ⭐⭐⭐⭐⭐</p>
//     <p className="text-white">
//                 مجلة تعليمية وترفيهية مخصصة للأطفال
//                 <br/>
//                  تهدف  
//                 إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة
//               </p>
//     </Link>
   

//     <div>
//       <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
//       <ul className="space-y-2">
//         <li>
//           <Link href="/about" className="text-white hover:text-white transition-colors">
//             من نحن
//           </Link>
//         </li>
//         <li>
//           <Link href="/editions" className="text-white hover:text-white transition-colors">
//             إصداراتنا
//           </Link>
//         </li>
//         <li>
//           <Link href="/activities" className="text-white hover:text-white transition-colors">
//             الأنشطة
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className="text-white hover:text-white transition-colors">
//             اتصل بنا
//           </Link>
//         </li>
//       </ul>
//     </div>

//     <div>
//       <h4 className="text-lg font-bold mb-4">تابعنا</h4>
//       <div className="flex gap-4">
//         <a
//           href="#"
//           className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
//         >
//           f
//         </a>
//         <a
//           href="#"
//           className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
//         >
//           @
//         </a>
//         <a
//           href="#"
//           className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
//         >
//           X
//         </a>
//       </div>
//     </div>

//     <div>
//       <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
//       <div className="space-y-2 text-white">
//         <p>office@8kanoon.org</p>
//         <p>+33759889586</p>
//         <p>سوريا - دمشق</p>
//       </div>
//     </div>
//   </div>

//   <div className="border-t text-white mt-8 pt-8 text-center text-white">
//     <p>&copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.</p>
//   </div>
// </div>
// </footer>
//     </div>
//   )
// }
