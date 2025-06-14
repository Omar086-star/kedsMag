
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"


export default function Header() {
  return (
    <div>
            <header className="sticky top-0 z-40 bg-red/90 backdrop-blur-sm bg-[#3b00cc] !bg-[#3b00cc]   border-purple-900 shadow-lg">
<div className="container mx-auto px-4 py-4">
  <div className="flex items-center justify-between">
    <Link href="/" className="flex items-center gap-3">
    <Image src="/logo.png" alt="شعار المجلة" width={100} height={100} className="object-contain" />
 
    </Link>

  <nav      className="hidden md:flex items-center gap-6">
       <Link href="/" className="text-purple-700 hover:text-orange-500 transition-colors text-white  text-fs-force  ">
         الرئيسية
       </Link>
       <Link href="/about" className="text-purple-700 hover:text-orange-500 transition-colors text-white  text-fs-force ">
       فريق العمل
              </Link>
       <Link href="/aboutUS" className="text-purple-700 hover:text-orange-500 transition-colors text-white  text-fs-force ">
         عن المجلة
       </Link>
       <Link href="/editions" className="text-purple-700 hover:text-orange-500 transition-colors text-white  -  text-fs-force ">
         إصداراتنا
       </Link>
       <Link href="/activities" className="text-purple-700 hover:text-orange-500 transition-colors text-white  -  text-fs-force ">
         الأنشطة
       </Link>
       <Link href="/gallery" className="text-purple-700 hover:text-orange-500 transition-colors text-white  -  text-fs-force ">
         معرض الصور
       </Link>
       <Link href="/contact" className="text-purple-700 hover:text-orange-500 transition-colors text-white   text-fs-force ">
         اتصل بنا
       </Link>
     </nav>
    <div className="flex items-center gap-3">
              <LanguageSwitcher />
<a href="/activities#activitéAvenire"> 
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6 py-2 font-bold shadow-lg transform hover:scale-105 transition-all">
انظر إلى فعالياتنا القادمة              </Button>
</a>
            </div>
  </div>
</div>
</header>
    </div>
  )
}
