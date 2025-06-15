import React from "react";
import Image from "next/image";
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"



export default function OutdoorGamesPage() {
  return (
    <div className="min-h-screen bg-yellow-50 p-6">
            <Header />

      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-8">
        الألعاب الميدانية 🏃‍♀️
      </h1>

      {/* القسم الأول: الفيديوهات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">فيديو 1: ألعاب في الحديقة</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/fBJeFXWzW6E"
              title="فيديو ألعاب ميدانية 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">فيديو 2: نشاطات ممتعة للأطفال</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/nBkhxX88RKI"
              title="فيديو ألعاب ميدانية 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* القسم الثاني: الفوائد مع الصور */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
          فوائد الألعاب الميدانية 🪁
        </h2>
        <ul className="non-list text-center list-inside text-gray-700 leading-loose mb-6">
          <li>تعزيز اللياقة البدنية والنشاط الحركي.</li>
          <li>تقوية روح الفريق والتعاون بين الأطفال.</li>
          <li>تحفيز الحواس وتنمية المهارات الاجتماعية.</li>
          <li>إفراغ الطاقة بشكل إيجابي وممتع.</li>
          <li>تقوية الثقة بالنفس والجرأة في التعبير.</li>
        </ul>

        {/* الصور التوضيحية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/jardin1.png" alt="لعبة 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/jardin2.png" alt="لعبة 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/jardinact1.png" alt="لعبة 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </div>
      <FloatingBox />

<Footer />

    </div>
  );
}
