"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AllEventsPage() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("activitesFuture")
        .select("*")
        .order("date", { ascending: true })

      if (data) setEvents(data)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-4xl font-bold violetCustom mb-10">جميع الأنشطة القادمة</h1>

        {loading ? (
          <p className="text-center text-gray-600">جارٍ تحميل الأنشطة...</p>
        ) : (
          <div className="grid gap-8 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="border-4 border-purple-200 hover:border-purple-400 transition-all rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50"
              >
                <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div
                    className="relative w-32 h-32 flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedImage(event.cover_url)}
                  >
                    <Image
                      src={event.cover_url || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-2xl"
                    />
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
                        <span>قريباً</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Link href={`/booking/${event.id}`}>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-2 font-bold">
                        احجز مكانك
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popup to show full image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 left-2 text-white text-xl font-bold bg-red-600 px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="تكبير الصورة"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
