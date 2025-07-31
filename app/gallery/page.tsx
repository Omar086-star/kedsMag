// هذا هو مكون صفحة /gallery لعرض الصور من Supabase

"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar,BookOpen, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FloatingBox from '@/components/FloatingBox';
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
interface GalleryImage {
id: number
title: string
description: string
src: string
date: string
location: string
category: string
}

export default function GalleryPage() {
const [gallery, setGallery] = useState<GalleryImage[]>([])
const [selectedCategory, setSelectedCategory] = useState("all")

const categories = [
{ id: "all", name: "جميع الصور" },
{ id: "workshops", name: "ورش العمل" },
{ id: "competitions", name: "المسابقات" },
{ id: "events", name: "الفعاليات" },
{ id: "frinds", name: "أصدقاء كانون" },
{ id: "characters", name: "الشخصيات" },

]

useEffect(() => {
const fetchGallery = async () => {
const { data, error } = await supabase.from("gallery").select("*").order("date", { ascending: false })
if (data) setGallery(data as GalleryImage[])
}
fetchGallery()
}, [])

const filteredImages =
selectedCategory === "all"
? gallery
: gallery.filter((img) => img.category === selectedCategory)

return (

<div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100   ">

<Header />


<section className="py-16 relative overflow-hidden">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h1 className="text-5xl font-bold violetCustom mb-6">معرض الصور</h1>
<p className="text-xl text-gray-700 max-w-3xl mx-auto">
شاهد أجمل اللحظات من أنشطتنا وفعالياتنا التعليمية والترفيهية
</p>
</div>
</div>
</section>


<div className="flex flex-wrap gap-2 justify-center mb-8">
{categories.map((cat) => (
  <Button
    key={cat.id}
    onClick={() => setSelectedCategory(cat.id)}
    className={`rounded-full px-4 py-2 text-sm  font-bold ${
      selectedCategory === cat.id
        ? "bg-purple-900 text-white"
        : "bg-orange-500 text-white"
    }`}
  >
    {cat.name}
  </Button>
))}
</div>

<div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
{filteredImages.map((img) => (
  <Card key={img.id} className="overflow-hidden clasonetest scale11 shadow border gap-6 border-purple-100">
    <div className="relative  h-56">
      <Image
        src={img.src || "/placeholder.svg"}
        alt={img.title}
        fill
        className=" clasonetestimg"
      />
    </div>
    <CardContent className="pyone  space-y-2">
      <h3 className="font-bold violetCustom">{img.title}</h3>
      <p className="text-sm text-gray-600">{img.description}</p>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>{img.date}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <MapPin className="w-3 h-3" />
        <span>{img.location}</span>
      </div>
      <Badge variant="outline" className="text-xs mt-2">
        {categories.find((c) => c.id === img.category)?.name || img.category}
      </Badge>
    </CardContent>
  </Card>
))}
</div>


      <section
        className="bg-fixed llxx bg-center bg-cover text-white"
        style={{
          backgroundImage: "url('/pont.jpg')",  minHeight: "50vh", display: "flex",   alignItems: "center", justifyContent: "center",  textAlign: "center",
        }}
      >
  <section className="py-16  llxx bg-cover bg-black coverS bg-opacity-50">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-4xl py-20 llxx font-bold violetCustom mb-4">  أرقام نسعى للحصول عليها</h2>
<p className="text-xl text-gray-100">أرقام ستعكس نشاطنا وتفاعلنا</p>
</div>

<div className="grid md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
<div className="text-lg text-gray-100">صورة</div>
</div>
<div className="text-center">
<div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
<div className="text-lg text-gray-100">فعالية</div>
</div>
<div className="text-center">
<div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
<div className="text-lg text-gray-100">طفل مشارك</div>
</div>
<div className="text-center">
<div className="text-5xl font-bold text-orange-600 mb-2">25+</div>
<div className="text-lg text-gray-100">موقع</div>
</div>
</div>
</div>
</section>
      </section>












{/* CTA Section */}
<section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
<div className="container mx-auto px-4">
<div className="text-center">
<h2 className="text-4xl font-bold mb-6">شارك معنا لحظاتك المميزة</h2>
<p className="text-xl mb-8 opacity-90">أرسل لنا صور أطفالك وهم يستمتعون بأنشطتنا</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/submit">
<Button
size="lg"
className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold"
>
شارك صورة
</Button></a>

<a href="./contact"> 
<Button
size="lg"
className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-bold"
>
تواصل معنا
</Button></a>
</div>
</div>
</div>
</section>
<FloatingBox />


<Footer />


</div>

)
}






























// {/* Hero Section */}


// {/* Category Filters */}
// <section className="py-8 bg-white">
// <div className="container mx-auto px-4">
//   <div className="flex flex-wrap gap-3 justify-center">
//     {categories.map((category) => (
//       <Button
//         key={category.id}
//         variant={selectedCategory === category.id ? "default" : "outline"}
//         onClick={() => setSelectedCategory(category.id)}
//         className={`rounded-full px-6 py-2 font-bold transition-all ${
//           selectedCategory === category.id
//             ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
//             : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
//         }`}
//       >
//         {category.name}
//       </Button>
//     ))}
//   </div>
// </div>
// </section>


