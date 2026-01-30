"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
import { useI18n } from "@/components/I18nProvider"

export default function EditionsPage() {
  const { tr } = useI18n()

  const [magazines, setMagazines] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMagazines = async () => {
      const { data, error } = await supabase
        .from("magazines")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) setError(error.message)
      else setMagazines(data || [])
    }
    fetchMagazines()
  }, [])

  if (error) return <div className="text-red-600 text-center mt-6">{tr.common.error}: {error}</div>
  if (magazines.length === 0) return <div className="text-center mt-10">{tr.common.loading}</div>

  const latest = magazines[0]
  const others = magazines.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />
      <Bubbles />

      {/* Featured */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">{tr.editions.featured}</h2>
        <h3 className="text-3xl py-20 w-full font-bold mb-2">{latest.title}</h3>

        <Card className="mx-auto respoBox max-w-md border-4 border-purple-300 hover:shadow-2xl">
          <Image
            src={latest.cover_url || "/placeholder.svg"}
            alt={latest.title}
            width={400}
            height={500}
            className="object-cover w-full"
          />
          <CardContent className="p-4">
            <p className="text-gray-600 mb-4">{latest.date}</p>
            <div className="hwfullss flexDir">
              <Link href={`/editions/${latest.id}`} className="hwfullss">
                <Button variant="ghost" className="hwfullss bg-purple-600 text-white">
                  {tr.common.viewThisIssue}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Others */}
      <div className="grid md:grid-cols-3 gap-6 px-6 pb-12">
        {others.map((mag) => (
          <Card key={mag.id} className="border-2 respoBox hover:shadow-xl">
            <Image
              src={mag.cover_url || "/placeholder.svg"}
              alt={mag.title}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
            <CardContent className="p-4">
              <h4 className="text-lg font-bold mb-2">{mag.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{mag.date}</p>

              <div className="hwfullss flexDir">
                <Link href={`/editions/${mag.id}`}>
                  <Button variant="ghost" className="flex-1 hwfullss hwfull bg-purple-600 text-white">
                    {tr.common.viewThisIssue}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <FloatingBox />
      <Footer />
    </div>
  )
}
