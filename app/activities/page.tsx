"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Calendar, MapPin, Star } from "lucide-react"

import Bubbles from "@/components/Bubbles"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import FloatingBox from "@/components/FloatingBox"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useI18n } from "@/components/I18nProvider"

export default function ActivitiesPage() {
const { tr, locale } = useI18n()

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activities, setActivities] = useState<any[]>([])
  const [futureEvents, setFutureEvents] = useState<any[]>([])
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("") 

  useEffect(() => {
    async function fetchActivities() {
      const { data: acts } = await supabase.from("activities").select("*")
      const { data: future } = await supabase
        .from("activitesFuture")
        .select("*")
        .order("date", { ascending: true })

      setActivities(acts || [])
      setFutureEvents(future || [])
    }
    fetchActivities()
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { error } = await supabase.from("subscriptions").insert([{ email }])
      if (error) throw error
      setMessage(tr.activitiesPage.subscribeOk)
      setEmail("")
    } catch {
      setMessage(tr.activitiesPage.subscribeErr)
    }
  }

const categories = [
  { id: "all", name: tr.activitiesPage.categories.all, color: "purple" },
  { id: "creative", name: tr.activitiesPage.categories.creative, color: "pink" },
  { id: "educational", name: tr.activitiesPage.categories.educational, color: "blue" },
  { id: "outdoor", name: tr.activitiesPage.categories.outdoor, color: "green" },
  { id: "cultural", name: tr.activitiesPage.categories.cultural, color: "orange" },
]



  const filteredActivites =
    selectedCategory === "all"
      ? activities
      : activities.filter((a) => a.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bgine z-10">
          <Bubbles />
          <div className="relative z-30 text-white flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl font-bold text-white text-center violetCustom z-50">
              {tr.activitiesPage.title}
            </h1>
            <p className="text-xl text-white-700 w-3xl mx-auto text-center px-4">
              {tr.activitiesPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Current activities */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivites.map((activite) => (
              <Card
                key={activite.id}
                className="overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activite.cover_url || "/placeholder.svg"}
                    alt={activite.title}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                      {tr.activitiesPage.activityBadge}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold violetCustom mb-2">{activite.title}</h3>
                  <p className="text-gray-600 mb-4">{activite.status}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{activite.date}</span>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/activities/${activite.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full">
                        <BookOpen className="w-4 h-4 mr-2" /> {tr.activitiesPage.viewActivity}
                      </Button>
                    </Link>

                    {activite.file_url && (
                      <a href={activite.file_url} download>
                        <Button variant="outline" className="border-2 border-purple-500 text-purple-700 rounded-full">
                          <Star className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section id="activitéAvenire" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold violetCustom mb-4">{tr.activitiesPage.upcomingTitle}</h2>
            <p className="text-xl text-gray-600">{tr.activitiesPage.upcomingSubtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {futureEvents.map((event, index) => (
              <Card
                key={event.id}
                className="border-4 border-purple-200 hover:border-purple-400 transition-all bg-gradient-to-r from-purple-50 to-blue-50"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-64 h-64 flex-shrink-0">
                      <Image src={event.cover_url || "/placeholder.svg"} alt={event.title} fill className="object-cover scale-1 rounded-2xl" />
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
                          <span>{tr.activitiesPage.comingSoon}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                          <MapPin className="w-4 h-4 text-purple-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <Link href={`/booking/${event.id}`}>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full px-8 py-2 font-bold">
                          {tr.activitiesPage.bookNow}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Link href="/booking">
              <Button className="text-white bg-purple-600 hover:bg-purple-700">{tr.activitiesPage.viewAll}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Activity types */}
      <section
        className="bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage: "url('/pont.jpg')",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <section className="py-16 bg-black bg-opacity-50 violetCustom w-full">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold violetCustom mb-4">{tr.activitiesPage.categoriesTitle}</h2>
              <p className="text-xl text-gray-100">{tr.activitiesPage.categoriesSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{categories.filter((c) => c.id !== "all").map((cat) => (
                <Card key={cat.id} className="border-4 boxi border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 bg-bx-force">
                  <a href={`/activities/${cat.id}`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bgbr rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white hover:scale-150 transition-all" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                      <p className="text-white">{cat.name}</p>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="border-4 boxi border-orange-200 my-10 hover:border-orange-400 transition-all transform hover:scale-105 bg-bx-force">
              <a href="/activities/distreption">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bgbr violetCustom0 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white hover:scale-150 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tr.activitiesPage.showDistribution}</h3>
                  <p className="text-white">{tr.activitiesPage.distributionSubtitle}</p>
                </CardContent>
              </a>
            </Card>
          </div>
        </section>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{tr.activitiesPage.subscribeTitle}</h2>
          <p className="text-xl mb-8 opacity-90">{tr.activitiesPage.subscribeSubtitle}</p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={tr.activitiesPage.emailPlaceholder}
              required
              className="px-6 py-3 rounded-full text-black w-full sm:w-96"
            />
            <button
              type="submit"
              className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-bold"
            >
              {tr.activitiesPage.subscribeBtn}
            </button>
          </form>

          {message && <p className="text-white font-semibold">{message}</p>}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full px-8 py-2 font-bold">
                {tr.activitiesPage.bookNow}
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-bold">
                {tr.activitiesPage.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </section> 

      <FloatingBox />
      <Footer />
    </div>
  )
}
