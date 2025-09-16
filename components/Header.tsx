// components/Header.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LangSwitcher } from "@/components/AITranslateProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#3b00cc] backdrop-blur-sm border-purple-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="شعار المجلة" width={100} height={100} className="object-contain" />
          </Link>

          {/* روابط + زر اللغة للديسكتوب */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks()}
            <LangSwitcher className="ml-2" />
          </nav>

          {/* زر فتح القائمة للموبايل */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {menuOpen && (
          <nav className="md:hidden bg-[#3b00cc] text-white px-6 py-4 space-y-4 shadow-lg">
            {navLinks()}
            <LangSwitcher className="w-full" />
            <Link href="/activities#activitéAvenire">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6 py-2 font-bold shadow-lg">
                فعالياتنا القادمة
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function navLinks() {
  return (
    <>
      <Link href="/" className="hover:text-orange-300 textreddd transition-colors">الرئيسية</Link>
      <Link href="/about" className="hover:text-orange-300 textreddd transition-colors">فريق العمل</Link>
      <Link href="/aboutUS" className="hover:text-orange-300 textreddd transition-colors">عن المجلة</Link>
      <Link href="/projects" className="hover:text-orange-300 textreddd transition-colors">مشاريعنا</Link>
      <Link href="/editions" className="hover:text-orange-300 textreddd transition-colors">إصداراتنا</Link>
      <Link href="/activities" className="hover:text-orange-300 textreddd transition-colors">الأنشطة</Link>
      <Link href="/gallery" className="hover:text-orange-300 textreddd textredddtransition-colors">معرض الصور</Link>
      <Link href="/contact" className="hover:text-orange-300 textreddd transition-colors">اتصل بنا</Link>
      <Link href="/speditions" className="hover:text-orange-300 textreddd transition-colors">خاص بنا</Link>
      
      </>
  );
}
