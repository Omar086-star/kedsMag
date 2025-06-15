import React from "react";
import Image from "next/image"
import Link from "next/link"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function CreativeCutPastePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-800 px-6 py-10 text-center space-y-10">
      <Header />

      <h1 className="text-center text-4xl font-bold text-pink-700 mb-4">
        ✂️ أنشطة القص واللصق وصنع المجسمات
      </h1>
      <p className="text-center text-[#fa4d00] text-lg mb-6">
        أنشطة تنمي المهارات الحركية الدقيقة والإبداع العملي لدى الأطفال.
      </p>

      {/* قسم الفيديوهات */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">🎥 فيديوهات تعليمية</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/WkrZNep7hDg"
            title="نشاط مجسمات 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/1wmdSu7zhI8"
            title="نشاط مجسمات 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* قسم الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">  صور من الأنشطة</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/acti3.png" alt="نشاط قص ولصق 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/acti2.png" alt="نشاط قص ولصق 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/acti1.png" alt="نشاط قص ولصق 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      <Footer />
      <FloatingBox />
    </div>
  );
}
