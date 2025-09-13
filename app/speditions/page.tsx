// app/speditions/page.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Link from "next/link"

export default function SpecialEditionsPage() {
  const [mothers, setMothers] = useState<any[]>([])
  const [teens, setTeens] = useState<any[]>([])

  useEffect(() => {
    const fetchEditions = async () => {
      const { data, error } = await supabase
        .from("speditions")
        .select("*")
        .eq("status", "Published")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("خطأ في جلب الإصدارات:", error)
      } else {
        setMothers(data?.filter((e) => e.audience === "mothers") || [])
        setTeens(data?.filter((e) => e.audience === "teens") || [])
      }
    }

    fetchEditions()
  }, [])

  const handleDownload = async (fileUrl: string, title: string, id: string) => {
    try {
      const { data, error: fetchError } = await supabase
        .from("speditions")
        .select("downloads")
        .eq("id", id)
        .single()

      if (fetchError || !data) throw new Error("فشل في جلب عدد التحميلات")

      await supabase
        .from("speditions")
        .update({ downloads: (data.downloads || 0) + 1 })
        .eq("id", id)

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
      alert(err.message || "حدث خطأ أثناء محاولة تحميل العدد")
    }
  }

  const renderEditionCard = (edition: any) => (
    <div key={edition.id} className="rounded-lg border bg-card bg-gradient-to-br from-blue-10 violetCustom text-card-foreground shadow-sm overflow-hidden">
      <div className="relative h-64 w-full">
        <img
          src={edition.cover_url || "/default-cover.png"}
          alt={edition.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col space-y-1.5  p-6">
        <h3 className="text-2xl font-semibold">{edition.title}</h3>
        <div className="text-sm text-muted-foreground mt-2 flex flex-col gap-2">
          {edition.location && <div className="flex items-center gap-2"> 📍 <span>{edition.location}</span></div>}
          {edition.category && <div className="flex items-center gap-2"> 🏷️ <span>{edition.category}</span></div>}
        </div>
        {edition.summary && <p className="mt-4 text-sm text-gray-700">{edition.summary}</p>}
      </div>
      <div className="p-6 pt-0 flex  ">
        <Link href={`/speditions/${edition.id}`}><Button variant="outline">اقرأ المزيد</Button></Link>
        <Button onClick={() => handleDownload(edition.file_url, edition.title, edition.id)}>⬇️ تحميل العدد</Button>
      </div>
    </div>
  )

  return (
    <main className="flex-1 bg-gradient-to-br from-blue-50 violetCustom">
      <Header />
      <section
        className="bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage: "url('/pont.jpg')", // ضع هنا مسار صورة المصافحة
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="bg-black coverS bg-opacity-50 p-8 rounded-lg">
                     <h3 className="text-3xl spetexttit py-20 w-full font-bold mb-2">الإصدارات الخاصة</h3>
        <p className="text-center text-white text-2xl  mb-12  max-w-2xl mx-auto"> اكتشف محتوياتنا المخصصة للأمهات الجدد واليافعين.</p>
        <div className="dison"> 
       <div className="disons">
                             <h3 className="text-3xl py-6 w-full disflsex font-bold mb-2">نخلة </h3>

   <p className=" text-white text-2xl   max-w-2xl mx-auto spetext">   
           محتوانا الخاص الموجه للأمهات الجدد واسمه نخلة 
<br/>
          نخلة التي تبقى شامخة , نخلة التي تتحمل قسوة الطبيعة وجفافها 
        <br/>
          نخلة التي تعطي اطيب الثمار وأكثرها فائدة 
        <br/>
          نخلة المتشبثة بجذورها في أعماق الأرض 

        </p>
       </div>

      <div className="disons">
                             <h3 className="text-3xl py-6 w-full disflsex font-bold mb-2">أنا و أنت </h3>

          <p className="text-center text-white text-2xl  max-w-2xl mx-auto spetext"> أنا وأنت 
          هذا المحتوى لي ولك يا صديقي 

          لكي نكون سويا شركاء في   <br/>  بناء بلدنا ومستقبلنا 
                     على قدر الحلم و على قدر الذاكرة

 <br/>

          أنا و أنت و أنت و أنا 
          
          كلانا على ذات المسافة  
                   كلانا على ذات الخط

        <br/>  
          ستكون هذه المساحة لنسمع بعضنا 
  نكتشف جوهرنا وقيمتنا   
        </p>
       </div>
      </div>

         </div>
      </section>
      <div className="container mx-auto ">

   <div className="grid md:grid-cols-2 gap-12 ">  
<div className="flexDirSedition borrrder py-10 gap-8 strII ">
         {/* قسم الأمهات الجدد */}
        <h2 className=" font-bold text-purple-800 textSpec  mb-4">  نخلة </h2>
        <div className="strII  py-6 mb-12"> {mothers.map(renderEditionCard)} </div>
</div>
    
<div className="flexDirSedition borrrder py-10  strII ">
              {/* قسم اليافعين */}
         <h2 className="  font-bold text-purple-800  textSpec mb-4">  أنا وأنت</h2>
        <div className="strII gap-8 py-6 mb-12"> {teens.map(renderEditionCard)} </div>   
</div>  




   </div>
    
    <div className="flexDirSedition borrrder py-10  strII ">
           
         <h2 className="  font-bold text-purple-800  textSpec mb-4">  قريباً جداً </h2>
        <div className="strII gap-8 py-6 mb-12"> {teens.map(renderEditionCard)} </div>   
</div> 
          </div>

      <FloatingBox />
      <Footer />
    </main>
  )
}
