// ✅ EditionsPage (/app/editions/page.tsx)
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Download } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
// import DownloadTotalBox from "@/components/DownloadTotalBox"

export default function EditionsPage() {
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

  if (error) return <div className="text-red-600 text-center mt-6">خطأ: {error}</div>
  if (magazines.length === 0) return <div className="text-center mt-10">جاري التحميل...</div>

  const latest = magazines[0]
  const others = magazines.slice(1)

  const handleDownloadAndClick = async (fileUrl: string, title: string, id: number) => {
    try {
      const { data, error: fetchError } = await supabase
        .from("magazines")
        .select("downloads")
        .eq("id", id)
        .single()

      if (fetchError || !data) throw new Error("فشل في جلب عدد التحميلات")

      await supabase
        .from("magazines")
        .update({ downloads: data.downloads + 1 })
        .eq("id", id)

      // تصحيح استخراج المسار من file_url
      const relativePath = fileUrl.split("/object/public/uploads/")[1]
      if (!relativePath) throw new Error("فشل في استخراج مسار الملف")

      const { data: signed, error: signErr } = await supabase.storage
        .from("uploads")
        .createSignedUrl(relativePath, 60)

      if (signErr || !signed?.signedUrl) throw new Error("فشل في توليد رابط التحميل الآمن")

      const link = document.createElement("a")
      link.href = signed.signedUrl
      link.download = `${title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      alert(err.message || "حدث خطأ غير متوقع أثناء التحميل")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />
      <Bubbles />
      {/* <DownloadTotalBox /> */}





      {/* القسم الأول: الإصدار المميز */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">الإصدار المميز</h2>
                             <h3 className="text-3xl py-20 w-full font-bold mb-2">{latest.title}</h3>

        <Card className="mx-auto respoBox max-w-md border-4 border-purple-300 hover:shadow-2xl">
          <Image src={latest.cover_url || "/placeholder.svg"} alt={latest.title} width={400} height={500} className="object-cover w-full" />
          <CardContent className="p-4">
            <p className="text-gray-600 mb-4">{latest.date}</p>
            <div className="  hwfullss flexDir">
              {/* <Button onClick={() => window.open(latest.file_url, '_blank')} className="flex-1 bg-purple-600 text-white">📖 اقرأ الآن</Button> */}
              {/* <Button onClick={() => handleDownloadAndClick(latest.file_url, latest.title, latest.id)} variant="outline" className="flex-1">⬇️ تحميل العدد</Button> */}
              <Link href={`/editions/${latest.id}`} className="hwfullss"><Button variant="ghost" className=" hwfullss bg-purple-600 text-white"> شاهد هذا العدد</Button></Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* القسم الثاني: باقي الإصدارات */}
<div className="grid md:grid-cols-3  gap-6 px-6 pb-12">
{others.map((mag) => (
<Card key={mag.id} className="border-2 respoBox hover:shadow-xl">
<Image src={mag.cover_url || "/placeholder.svg"} alt={mag.title} width={400} height={300} className="object-cover w-full h-64" />
<CardContent className="p-4">
<h4 className="text-lg font-bold mb-2">{mag.title}</h4>
<p className="text-sm text-gray-500 mb-2">{mag.date}</p>
<div className="hwfullss flexDir">
{/* <Button onClick={() => window.open(mag.file_url, '_blank')} className="flex-1 bg-purple-600 text-white">📖 اقرأ الآن</Button> */}
{/* <Button onClick={() => handleDownloadAndClick(mag.file_url, mag.title, mag.id)} variant="outline" className="flex-1">⬇️ تحميل العدد</Button> */}
<Link href={`/editions/${mag.id}`}><Button variant="ghost" className="flex-1 hwfullss hwfull bg-purple-600 text-white">👁️ شاهد هذا العدد</Button></Link>
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
