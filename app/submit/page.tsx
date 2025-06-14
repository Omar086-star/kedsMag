"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link";
import Image from "next/image";
import FloatingBox from '@/components/FloatingBox';

export default function SubmitPage() {
  const [name, setName] = useState("")
  const [type, setType] = useState("رسم")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setMessage("يرجى إرفاق ملف")
      return
    }

    const fileExt = file.name.split('.').pop()
    const filePath = `submissions/${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("uploads") // تأكد أن هذا اسم الـ bucket
      .upload(filePath, file)

    if (uploadError) {
      setMessage("حدث خطأ أثناء رفع الملف.")
      return
    }

    const { error: insertError } = await supabase.from("submissions").insert([
      {
        name,
        type,
        description,
        file_url: filePath,
      }
    ])

    if (insertError) {
      setMessage("حدث خطأ أثناء حفظ المشاركة.")
    } else {
      setMessage("تم إرسال المشاركة بنجاح!")
      setName("")
      setDescription("")
      setFile(null)
    }
  }

  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold violetCustom mb-6 text-center">أرسل مشاركتك</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="اسم الطفل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option>رسم</option>
            <option>صورة</option>
            <option>قصة</option>
            <option>مشروع</option>
          </select>

          <Textarea
            placeholder="وصف أو تعليق"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />

          <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
            إرسال المشاركة
          </Button>

          {message && <p className="text-center text-purple-700 font-semibold mt-4">{message}</p>}
        </form>
      </div>
      <FloatingBox />





      <footer           className="bg-bx-force  text-white py-12 ">
<div className="container mx-auto px-4">
  <div className="grid md:grid-cols-4 gap-8">
  <Link href="/" className="flex items-center justfyLogo gap-3 gap-8">
    <Image src="/logo.png" alt="شعار المجلة" width={170} height={135} className="object-contain" />
  <p className="text-sm text-orange-400 "> ⭐⭐⭐⭐⭐</p>
    <p className="text-white text-fs-force">
                مجلة تعليمية وترفيهية مخصصة للأطفال
                <br/>
                 تهدف  
                إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة
              </p>
    </Link>
   

    <div>
      <h4 className="  font-bold mb-4 textaurtre">روابط سريعة</h4>
      <ul className="space-y-2">
        <li>
          <Link href="/about" className=" textaurtre1 text-white hover:text-white transition-colors">
            من نحن
          </Link>
        </li>
        <li>
          <Link href="/aboutUS" className=" textaurtre1 text-white hover:text-white transition-colors">
            عن المجلة
          </Link>
        </li>
        <li>
          <Link href="/editions" className=" textaurtre1 text-white hover:text-white transition-colors">
            إصداراتنا
          </Link>
        </li>
        <li>
          <Link href="/activities" className=" textaurtre1 text-white hover:text-white transition-colors">
            الأنشطة
          </Link>
        </li>
        <li>
          <Link href="/contact" className=" textaurtre1 text-white hover:text-white transition-colors">
            اتصل بنا
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="   font-bold text-center mb-4 textaurtre">تابعنا</h4>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/share/15pKYa6LXf/"
          className=" text-fs-force w-15 h-15  flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
              <Image src={"/facebook.svg"} width={50} height={50} alt={'facebook'}  className="object-cover" />

        </a>
        <a
          href="https://www.instagram.com/8kanoon.maga"
          className=" text-fs-force w-15 h-15  flex items-center justify-center hover:bg-pink-700 transition-colors"
        >
                      <Image src={"/instagram.svg"} width={50} height={50} alt={'instagram'}  className="object-cover " />

        </a>
        <a
          href="https://www.youtube.com/@8kanoon-maga"
          className=" text-fs-force w-15 h-15  flex items-center justify-center hover:bg-rose-500 transition-colors"
        >
              <Image src={"/youtube.svg"} width={50} height={50} alt={'youtube'}  className="object-cover" />
              </a>
              <a
          href="https://www.linkedin.com/company/8kanoon-maga"
          className=" text-fs-force w-15 h-15  flex items-center justify-center hover:bg-blue-500 transition-colors"
        >
              <Image src={"/linkedin.svg"} width={50} height={50} alt={'linkedin'}  className="object-cover" />
              </a>
      </div>
    </div>

    <div>
      <h4 className=" font-bold mb-4 textaurtre ">اتصل بنا</h4>
      <div className="textaurtre1 space-y-2 text-white">
        <p className="textaurtre1 ">office@8kanoon.org</p>
        <p className="textaurtre1 ">+33759889586</p>
        <p className="textaurtre1 ">سوريا - دمشق</p>
      </div>
    </div>
  </div>

  <div className="border-t text-white mt-8 pt-8 text-center text-white">
    <p >&copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.</p>
  </div>
</div>
</footer>
    </div>
  )
}
