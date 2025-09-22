import React from "react";
import Image from "next/image"; 
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"



export default function NatureExplorationPage() {
  return (
    <div className="min-h-screen bg-green-50 py-6">

<Header />

      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        استكشاف الطبيعة 🌿
      </h1>

      {/* القسم الأول: الفيديوهات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">فيديو 1: مغامرة في الغابة</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/JbeEhsEQvGY"
              title="فيديو استكشاف الطبيعة 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">فيديو 2: رحلة إلى الجبال</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.youtube.com/embed/x1Qa6-LIgrw"
              title="فيديو استكشاف الطبيعة 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>



      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">  صور من الأنشطة</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/nature4.png" alt="نشاط قص ولصق 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/nature2.png" alt="نشاط قص ولصق 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/nature1.png" alt="نشاط قص ولصق 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>


      {/* القسم الثاني: فوائد استكشاف الطبيعة */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          فوائد استكشاف الطبيعة 🍃
        </h2>
        <ul className=" nonelist text-center list-inside text-gray-700 leading-loose">
          <li>تعزيز الصحة النفسية والتقليل من التوتر.</li>
          <li>تقوية العلاقة بين الإنسان والبيئة.</li>
          <li>تعلم مهارات الملاحظة والانتباه.</li>
          <li>تحفيز الإبداع والتفكير الخلاق.</li>
          <li>زيادة النشاط البدني بطريقة ممتعة.</li>
        </ul>
      </div>


      <FloatingBox />

<Footer />

    </div>
  );
}
