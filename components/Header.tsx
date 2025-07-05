"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
// import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react" // أيقونتا القائمة والإغلاق

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* زر القائمة (يظهر فقط على الموبايل) */}
   

      <header className="sticky top-0 z-40 bg-[#3b00cc] backdrop-blur-sm border-purple-900 shadow-lg">
        
        
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="شعار المجلة" width={100} height={100} className="object-contain" />
            </Link>

            {/* القائمة الكاملة على الشاشات المتوسطة فما فوق */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks()}
            </nav>

            <div className="flex items-center gap-3">
              {/* <LanguageSwitcher /> */}
              <a href="/activities#activitéAvenire">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6 py-2 font-bold shadow-lg transform hover:scale-105 transition-all">
                  انظر إلى فعالياتنا القادمة
                </Button>
              </a>
            </div>
          </div>
        </div>
   <div className="dispoRespo md:hidden flex justify-end p-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
        </button>
      </div>
      
        {/* القائمة المنسدلة على الموبايل */}
        {menuOpen && (
          <nav className="md:hidden bg-[#3b00cc] text-white px-6 py-4 space-y-4 shadow-lg">
            {navLinks()}
          </nav>
        )}
      </header>
    </div>
  )
}

function navLinks() {
  return (
    <>
      <Link href="/" className="hover:text-orange-500 transition-colors text-white dispoblock">الرئيسية</Link>
      <Link href="/about" className="hover:text-orange-500 transition-colors text-white dispoblock">فريق العمل</Link>
      <Link href="/aboutUS" className="hover:text-orange-500 transition-colors text-white dispoblock">عن المجلة</Link>
            <Link href="/projects" className="hover:text-orange-500 transition-colors text-white dispoblock">مشاريعنا </Link>

      <Link href="/editions" className="hover:text-orange-500 transition-colors text-white dispoblock">إصداراتنا</Link>
      <Link href="/activities" className="hover:text-orange-500 transition-colors text-white dispoblock">الأنشطة</Link>
      <Link href="/gallery" className="hover:text-orange-500 transition-colors text-white dispoblock">معرض الصور</Link>
      <Link href="/contact" className="hover:text-orange-500 transition-colors text-white dispoblock">اتصل بنا</Link>
      <Link href="/speditions" className="hover:text-orange-500 transition-colors text-white dispoblock">خاص بنا</Link>

    </>
  )
}
