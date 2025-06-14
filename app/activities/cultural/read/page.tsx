import React from "react";
import Image from "next/image"
import Link from "next/link"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function ChildLibraryEvent() {
  return (
    <div className="min-h-screen bgactivite text-gray-800 px-6 text-center  ">
      <Header />

      <h1 className="text-4xl font-bold text-center text-[#3a00cc] mb-6">
        📚 فعالية: مكتبة الطفل
      </h1>
      <p className="text-center text-[#fa4d00] text-lg mb-6">
        الشعار: "اقرأ.. واكتشف عالمك!"
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="border-2 border-[#3a00cc] rounded-xl p-4">
          <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">🎯 الفئة المستهدفة:</h2>
          <p>الأطفال من عمر 5 إلى 12 سنة</p>
          <h2 className="text-xl font-semibold text-[#fa4d00] mt-4 mb-2">⏱️ المدة:</h2>
          <p>يوم واحد (قابلة للتكرار أسبوعيًا أو شهريًا)</p>
          <h2 className="text-xl font-semibold text-[#fa4d00] mt-4 mb-2">🎯 الهدف:</h2>
          <p>ترسيخ حب القراءة من خلال القصص الممتعة والمصورة، مع ربط الطفل بجذوره الثقافية من خلال القصص التراثية.</p>
        </div>

        <div className="border-2 border-[#3a00cc] rounded-xl p-4">
          <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">✅ محاور الفعالية:</h2>
          <ul className=" pr-5 space-y-1">
            <li>📖 زاوية الكتب المصورة</li>
            <li>📚 سرد القصص التراثية (الحكواتي)</li>
            <li>🎨 ورشات تفاعلية (رسم، تأليف، تصميم غلاف)</li>
            <li>🏆 مسابقة "قارئ اليوم"</li>
          </ul>
        </div>
      </div>

      <div className="border-2 border-[#3a00cc] rounded-xl p-6 mb-10 overflow-auto">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-4">📅 الجدول الزمني المقترح:</h2>
        <table className="table-auto w-full text-sm border-2 border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-2">الوقت</th>
              <th className="p-2 border-2">النشاط</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border-2">09:00 – 09:30</td><td className="p-2 border-2">استقبال الأطفال وتعريف بالبرنامج</td></tr>
            <tr><td className="p-2 border-2">09:30 – 10:00</td><td className="p-2 border-2">جولة في ركن الكتب المصورة</td></tr>
            <tr><td className="p-2 border-2">10:00 – 10:45</td><td className="p-2 border-2">جلسة سرد قصة تراثية بأسلوب الحكواتي</td></tr>
            <tr><td className="p-2 border-2">10:45 – 11:00</td><td className="p-2 border-2">استراحة خفيفة</td></tr>
            <tr><td className="p-2 border-2">11:00 – 12:00</td><td className="p-2 border-2">ورشات رسم أو كتابة تفاعلية</td></tr>
            <tr><td className="p-2 border-2">12:00 – 12:30</td><td className="p-2 border-2">فقرة "أشارككم قصتي"</td></tr>
            <tr><td className="p-2 border-2">12:30 – 13:00</td><td className="p-2 border-2">توزيع الجوائز ووداع المشاركين</td></tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-center mb-10">
        <div className="border-2 border-[#3a00cc] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">🧰 الموارد البشرية:</h2>
          <ul className=" pr-5 space-y-1">
            <li>مشرف عام</li>
            <li>قارئ/حكواتي متمكن</li>
            <li>مساعدون لمرافقة الأطفال</li>
            <li>مدرب ورشة فنية</li>
          </ul>
        </div>
        <div className="border-2 border-[#3a00cc] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">📦 الموارد المادية:</h2>
          <ul className=" pr-5 space-y-1">
            <li>مجموعة كتب مصورة وقصص تراثية</li>
            <li>مفروشات مريحة للأطفال</li>
            <li>أدوات رسم وتلوين</li>
            <li>ديكور ولافتات مستوحاة من القصص</li>
            <li>جوائز رمزية وشهادات</li>
          </ul>
        </div>
      </div>

      <div className="border-2 border-[#3a00cc] text-center rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold text-[#fa4d00] mb-2">🎯 أفكار إضافية:</h2>
        <ul className="pr-5 space-y-1">
          <li>بطاقة "جواز قراءة" يختمها الطفل عند قراءة كل قصة</li>
          <li>مشاركة الأهل بدقائق قليلة في نهاية النشاط</li>
          <li>التعاون مع مكتبة أو كاتب قصص أطفال</li>
          <li>توفير قصص مسموعة للأطفال ذوي الإعاقات البصرية</li>
        </ul>
      </div>



      <FloatingBox />
 
      <Footer />

    </div>
  );
}
