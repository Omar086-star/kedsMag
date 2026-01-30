"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Camera, Download, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import Bubbles from "@/components/Bubbles"
import MagazineSlider from "@/components/MagazineSlider"
import { useI18n } from "@/components/I18nProvider"

// ✅ استخدم نفس أسلوب الاستيراد الذي صار عندك (Header/Footer كـ default exports)
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"

export default function HomePage() {
  const { tr } = useI18n() as any

  const [mounted, setMounted] = useState(false)
  const [magazines, setMagazines] = useState<any[]>([])
  const [activites, setActivites] = useState<any[]>([])

  // ✅ يمنع Hydration mismatch بسبب تغيير اللغة بعد التحميل
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function fetchData() {
      const { data: mags, error: magsError } = await supabase
        .from("magazines")
        .select("*")
        .order("date", { ascending: false })

      const { data: acts, error: actsError } = await supabase
        .from("activities")
        .select("*")
        .order("date", { ascending: false })

      if (magsError || actsError) {
        console.log("Fetch magazines error:", magsError)
        console.log("Fetch activities error:", actsError)
      } else {
        setMagazines(mags || [])
        setActivites(acts || [])
      }
    }
    fetchData()
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />
      <Bubbles />

      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bgi z-0"></div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center md:text-right text-white">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
                <Star className="w-4 h-4" />
                {tr?.home?.badge}
                <Star className="w-4 h-4" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {tr?.home?.welcome}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 pt-2 to-yellow-300">
                  {tr?.home?.title}
                </span>
              </h1>

              <p className="text-xl text-white mb-8 leading-relaxed">
                {tr?.home?.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <a href="/ourPromo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    {tr?.home?.visualStory}
                  </Button>
                </a>

                <a href="https://www.youtube.com/watch?v=9y_6tQJfoww">
                  <Button
                    size="lg"
                    className="border-2 border-purple-200 text-white rounded-full px-8 py-4 text-lg font-bold"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {tr?.home?.watchChannel}
                  </Button>
                </a>
              </div>
            </div>

            {/* Slider */}
            <div className="relative w-full max-w-md mx-auto z-30">
              <MagazineSlider />
            </div>
          </div>
        </div>
      </section>

      {/* EDITIONS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 violetCustom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold disBlock violetCustom mb-4">
            {tr?.home?.latestEditionsTitle}
          </h2>
          <p className="text-xl text-gray-600">
            {tr?.home?.latestEditionsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 itemsCent gap-2 px-4">
          {magazines.slice(0, 3).map((issue) => (
            <Card
              key={issue.id}
              className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
            >
              <Link href={`/editions/${issue.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={issue.cover_url || "/placeholder.svg"}
                    alt={issue.title || "Edition"}
                    fill
                    unoptimized
                    className="object-cover transition-transform hover:scale-110"
                  />
                  {/* Badge "New" */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {tr?.newBadge || "New"}
                  </div>
                </div>
              </Link>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold violetCustom mb-2">
                  {issue.title}
                </h3>
                <p className="text-gray-600 mb-4">{issue.date}</p>
                <div className="hwfullss gap-2">
                  <Link href={`/editions/${issue.id}`} className="hwfullss">
                    <Button variant="ghost" className="hwfullss bg-purple-600 text-white">
                      {tr?.home?.viewIssue}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}

          <Link href="/editions">
            <Button className="mt-4 mx-auto bg-purple-600 text-white boxnexT px-6">
              {tr?.home?.viewAllEditions}
            </Button>
          </Link>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold violetCustom mb-4">
              {tr?.home?.activitiesTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {tr?.home?.activitiesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activites.length === 0 && (
              <p className="col-span-full text-center text-gray-400">
                {tr?.home?.noActivities}
              </p>
            )}

            {activites.map((activite) => (
              <Card
                key={activite.id}
                className="overflow-hidden border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activite.cover_url || "/default-cover.jpg"}
                    alt={activite.title || "Activity"}
                    fill
                    unoptimized
                    className="object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {tr?.activityBadge || tr?.home?.activitiesTitle || "Activity"}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {activite.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{activite.date}</p>

                  <div className="flex gap-2">
                    <a href={`/activities/${activite.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full">
                        <BookOpen className="w-4 h-4 mr-2" />{" "}
                        {tr?.home?.viewActivity}
                      </Button>
                    </a>

                    {activite.file_url && (
                      <a href={activite.file_url} download>
                        <Button
                          variant="outline"
                          className="border-2 border-green-500 text-green-700 rounded-full"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <a href="/activities">
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl"
              >
                <Camera className="w-5 h-5 mr-2" /> {tr?.home?.moreActivities}
              </Button>
            </div>
          </a>
        </div>
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
