import React from "react";
import Image from "next/image";
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function gameD() {
  return (
    <div className="min-h-screen  py-6 bg-white p-6 rounded-xl shadow">
              <Header />

      <h1 className=" text-4xl  text-[#3a00cc] mt-4  font-bold text-center  mb-8">
        عالم الألعاب التعليمية للأطفال ⚽🏃‍♂️
      </h1>

      {/* القسم الأول: الفيديوهات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">فيديو 1: ألعاب ممتعة</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/f4WYX9m3FGg"
              title="فيديو تمارين 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">فيديو 2: لعبة جماعية</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/Xc65dkb6XcU"
              title="فيديو رياضي 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* القسم الثاني: فوائد الرياضة مع الصور */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          لماذا نحب النشاطات ؟ 🏅
        </h2>
        <ul className="non-list text-center list-inside text-gray-700 leading-loose mb-6">
          <li>تحافظ على التفكير العلمي للطفل.</li>
          <li>تساعد في بناء الشخصية والانضباط.</li>
          <li>تنمي روح التحدي والمثابرة.</li>
          <li>تعزز تقبل الآخر وتخفف المشاحنات.</li>
          <li>تعلم التعاون والعمل الجماعي.</li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/ed1.png" alt="رياضة 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/ed2.png" alt="رياضة 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/ed3.png" alt="رياضة 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />

        </div>
      </div>

      <FloatingBox />
<Footer />

    </div>
  );
}
