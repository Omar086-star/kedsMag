// app/ourPromo/page.tsx
"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import ReactPlayer from "react-player"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
import { useI18n } from "@/components/I18nProvider"

export default function OurVideosPage() {
  const { tr, locale } = useI18n()
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

const getByLocale = (row: any, base: string) => row?.[base] || ""

  useEffect(() => {
    const fetchVideos = async () => {
      // إذا عندك أعمدة مترجمة خلي select يجيبها
const { data, error } = await supabase
  .from("videos")
  .select("id, file_url, title, description, is_main, status")
  .eq("status", "Published")
  .order("id", { ascending: false })


      if (error) {
        console.error("Error fetching videos:", error)
        setLoading(false)
        return
      }

      setVideos(data || [])
      setLoading(false)
    }

    fetchVideos()
  }, [locale])

  const main = videos.find((v) => v.is_main)
  const others = videos.filter((v) => !v.is_main)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Bubbles />

      <h1 className="text-4xl font-bold text-center py-10 text-purple-700 mb-6">
        {tr.ourPromoPage.title}
      </h1>

      {loading && (
        <p className="text-center text-gray-500 py-10">{tr.ourPromoPage.loading}</p>
      )}

      {/* بوكس رئيسي */}
      {main && (
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <div className="bg-gray-50 rounded-2xl shadow p-4 md:p-6 border">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <ReactPlayer url={main.file_url} controls width="100%" height="100%" />
            </div>

            <h3 className="text-2xl font-bold text-purple-800 mt-4">
              {getByLocale(main, "title") || tr.ourPromoPage.untitled}
            </h3>

            {getByLocale(main, "description") ? (
              <p className="text-gray-700 mt-2">{getByLocale(main, "description")}</p>
            ) : null}
          </div>
        </section>
      )}

      {/* كل الفيديوهات على شكل بوكسات */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">
          {tr.ourPromoPage.allVideos}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(main ? others : videos).map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow hover:shadow-md transition border overflow-hidden"
            >
              <div className="aspect-video w-full">
                <ReactPlayer url={video.file_url} controls width="100%" height="100%" />
              </div>

              <div className="p-4">
                <h4 className="text-lg font-bold text-purple-700 line-clamp-2">
                  {getByLocale(video, "title") || tr.ourPromoPage.untitled}
                </h4>

                {getByLocale(video, "description") ? (
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {getByLocale(video, "description")}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
