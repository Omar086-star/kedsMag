import React from 'react'
import Link from "next/link"
import Image from "next/image"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function HeritageWorkshopPlan() {
    return (
      <div className="bgactivite text-gray-800 px-6  space-y-10 text-center">
      <Header />

        <h1 className="text-4xl font-bold text-center text-[#3a00cc] mb-8">
          🧶 خطة ورشة الفنون التقليدية والحرف اليدوية
        </h1>
  
        <section className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-[#fa4d00] mb-2">✅ الهدف العام:</h2>
          <p>
            تعزيز تقدير الفنون التقليدية والحرف اليدوية لدى المشاركين من خلال تجربة عملية تشمل الرسم، والتطريز، وصناعة الحرف التراثية.
          </p>
        </section>
  
        <section className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">🎨 الرسم التقليدي</h2>
            <p>رسم أنماط وزخارف تراثية مثل النقوش البدوية والأرابيسك ونقوش الخزف.</p>
          </div>
          <div className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">🧵 التطريز اليدوي</h2>
            <p>تعلم غرز تقليدية مثل الساتان، الصليب، السلسلة، وتنفيذ نماذج بسيطة على القماش.</p>
          </div>
          <div className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">👐 الحرف اليدوية</h2>
            <p>صناعة سلال قش، خرز يدوي، حياكة بسيطة، أو تشكيل صلصال مستوحى من التراث.</p>
          </div>
        </section>
  
        <section className="border-2 border-[#3a00cc] p-6 rounded-xl shadow overflow-auto">
          <h2 className="text-2xl font-semibold text-[#fa4d00] mb-2">📅 الخطة الزمنية (يوم واحد):</h2>
          <table className="table-auto w-full text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-2">الوقت</th>
                <th className="p-2 border-2">النشاط</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border-2">9:00 – 9:30</td><td className="p-2 border-2">استقبال – تسجيل – تعريف بالبرنامج</td></tr>
              <tr><td className="p-2 border-2">9:30 – 10:30</td><td className="p-2 border-2">ورشة الرسم التقليدي</td></tr>
              <tr><td className="p-2 border-2">10:30 – 11:00</td><td className="p-2 border-2">استراحة</td></tr>
              <tr><td className="p-2 border-2">11:00 – 12:30</td><td className="p-2 border-2">ورشة التطريز اليدوي</td></tr>
              <tr><td className="p-2 border-2">12:30 – 13:30</td><td className="p-2 border-2">استراحة غداء</td></tr>
              <tr><td className="p-2 border-2">13:30 – 15:00</td><td className="p-2 border-2">ورشة الحرف اليدوية</td></tr>
              <tr><td className="p-2 border-2">15:00 – 15:30</td><td className="p-2 border-2">عرض الأعمال – تبادل الآراء</td></tr>
              <tr><td className="p-2 border-2">15:30 – 16:00</td><td className="p-2 border-2">توزيع شهادات – ختام</td></tr>
            </tbody>
          </table>
        </section>
  
        <section className="grid md:grid-cols-2 gap-6 text-center">
          <div className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">🧰 الموارد البشرية:</h2>
            <ul className="
             pr-4 space-y-1">
              <li>مشرف عام على الورشة</li>
              <li>مدربون متخصصون (3 على الأقل)</li>
              <li>مساعدون للتنظيم</li>
            </ul>
          </div>
          <div className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">📦 الموارد المادية:</h2>
            <ul className=" pr-4 space-y-1">
              <li>طاولات وكراسٍ</li>
              <li>أدوات رسم وتطريز</li>
              <li>مواد حرفية متنوعة</li>
              <li>لافتات وملصقات تراثية</li>
              <li>جهاز عرض (اختياري)</li>
            </ul>
          </div>
        </section>
  
        <section className="border-2 border-[#3a00cc] p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-[#fa4d00] mb-2">🎯 نصائح لضمان النجاح:</h2>
          <ul className=" pr-4 space-y-1">
            <li>تحديد عدد المشاركين مسبقًا (20-30)</li>
            <li>توفير عينات كنماذج ملهمة</li>
            <li>ركن لعرض المواد التراثية الحقيقية</li>
            <li>تصميم شهادة مستوحاة من الزخارف</li>
            <li>توثيق الحدث بالصور والفيديو</li>
          </ul>
        </section>

        <FloatingBox />

        <Footer />

      </div>

    );
  }
  