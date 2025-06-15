 // صفحة "من نحن" بتصميم مشابة للصورة المرفقة (بطاقات الفريق مرتبة رأسياً مع صورة دائرية وأيقونة)

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar,BookOpen,Award,Target, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Bubbles from "@/components/Bubbles";
import FloatingBox from '@/components/FloatingBox';
import {  Camera, Users, Download, Play, Star, Heart } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function AboutPage() {
  const team = [
    { name: "أ. عمر الملا",      role: "الـــمشـــــــرف العام", description: " ⭐         ", image: "/omarmu.png" },

    { name: "أ. ولاء درويش",     role: "رئيــــســـــة التحرير", description: "⭐        ", image: "/walaa.png" },

    { name: "أ. محمد الأحمد",    role: "مديـر فريق الــتصــميم", description: "        ⭐", image: "/mohammad.png" },
    { name: "د. عمر الشحادة",   role: "مدير فريق الدعم النفسي", description: "⭐           ", image: "/omarsh.png" },
    { name: "أ. آية الفندي",    role: "مسؤولة الـعلاقات العامة", description: "⭐        ", image: "/aya.png" },
    { name: "أ. زهراء عقيل",    role: "مسؤولة الـتدقيق اللغوي", description: "⭐        ", image: "/zahraa.png" },
    { name: "أ. يتول هنداوي",   role: "مسؤولة التـسويق الرقمي", description: "⭐        ", image: "/batoul.png" },
    { name: "أ. أنسام داوود",   role: "مسؤولة الموارد البشرية", description: "    ⭐     ", image: "/ansam.png" },
    { name: "أ. بشير مشعان",   role: "مسؤول المــكتب التقــني", description: "  ⭐    ", image: "/bashier.png" },
    { name: "أ. ديالا مطر",      role: "فــريــق الـتحــريـــر", description: "⭐          ", image: "/dyala.png" },
    { name: "أ. هيفاء درويش",   role: "فــريــق الـتحــريـــر", description: "⭐        ", image: "/haifa.png" },
    { name: "أ. إيمان عيسى",    role: "فــريــق الـتحــريـــر", description: "⭐   ", image: "/eman.png" },

    { name: "أ. ضحى الحماد",    role: "فريق الدعــم النـــفسي", description: "  ⭐        ", image: "/doha.png" },
    { name: "أ. فيروز الفرحان", role: "فريق الدعــم النـــفسي", description: "⭐        ", image: "/fayrouz.png" },
    { name: "أ. زينة الجبر",    role: "فريق الدعــم النـــفسي", description: "⭐    ", image: "/zina.png" },
    { name: "أ. إيناس سويد",    role: "فــــريــق الــتصــميم", description: "  ⭐      ", image: "/inas.png" },
    { name: "أ. نور اللحام",    role: "فــــريــق الــتصــميم", description: "          ⭐    ", image: "/nour.png" },
    { name: "أ. فاطمة نصار",    role: "فــــريــق الــتصــميم", description: "⭐        ", image: "/fatima.png" },
  ]
  const sections = [
    team.slice(0, 1),

    team.slice(1, 4),

    team.slice(4, 9),
    team.slice(9, 12),
    team.slice(12, 15),
    team.slice(15, 19),


    // team.slice(1, 4),
    // team.slice(4, 9),

    // team.slice(9, 12),
    // team.slice( 12, 18),

  ]
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100  px-6">

<Header />





<div className=" mx-auto relative min-h-screen">
<div className="relative bgi  w-full h-full object-cover ">
<div className="relative   bg-[#0e0e52]">
<div className="bgin max-w-screen ">
  <Bubbles />
  <h2 className="  text-center  w-1000g mbot font-bold ">فريق العمل</h2>
  <p className="text-center text-white fsrespo mbot ttrs">فريق متخصص ومتفان لخدمة أطفالنا</p>

  <div className="relative z-30 text-white flex flex-col justify-center items-center h-screen">
  
    <div className="absolute top-10 left-10 w-10 h-40 animate-rotateBlob">
    <img src="/8-p.png" alt="blob" className="w-full h-full object-contain" />
  </div> 
    <div className="absolute top-10 right-100 w-10 h-40 animate-rotateBlobs">
    <img src="/8-o.png" alt="blob" className="w-full h-full object-contain" />
  </div> 

  </div>
</div>

    </div>


</div>
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-6 mb-12">

            {section.map((member, index) => (
              <Card key={index} className=" bg-none-force flex flex-col items-center gap-4  w-[280px]  p-6 rounded-lg    ">
                <Image src={member.image} alt={member.name} width={160} height={200} className="w-full h-50 object-containt hover:animate-sway rounded-md" />
                <CardContent className="text-center space-y-1">
                  <h3 className="text-lg text-fs-force font-bold  text-force">{member.name}</h3>
                  <p className=" c-bx-force font-medium">{member.role}</p>
                  <p className=" c-bx-force text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}


                
      </div>


      <FloatingBox />

      <Footer />

  </div>
  )
}








