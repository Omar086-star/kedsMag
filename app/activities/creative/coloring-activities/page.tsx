"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"

export default function ColoringActivitiesPage() {
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase
        .from("coloring_activities")
        .select("*")
        .order("created_at", { ascending: false })
      if (!error) setActivities(data || [])
    }
    fetchActivities()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <Header />
      <Bubbles />

      <section className="px-6 py-12">
        <h1 className="text-center text-3xl font-bold text-pink-700 mb-8">
          🖍️ أنشطة التلوين الجاهزة
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl shadow p-4 text-center">
              <Image
                src={activity.preview_url}
                alt={activity.title}
                width={300}
                height={300}
                className="rounded mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2 text-purple-700">{activity.title}</h3>
              <a href={activity.file_url} download>
                <Button className="bg-pink-500 text-white">
                  ⬇️ تحميل الرسم
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
