import React from "react";
import Image from "next/image";
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LogicActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-800 px-6 py-10 text-center space-y-10">
      <Header />

      <section className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-[#3a00cc] mb-4">🧠 أنشطة التفكير المنطقي</h1>
        <p className="text-lg text-[#fa4d00] mb-6">أنشطة تنمي مهارات التحليل، الملاحظة، وربط الأحداث بشكل ممتع وتفاعلي.</p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/V8rDa4yxJBQ"
            title="فيديو التفكير 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/aEfJEA5VPZU"
            title="فيديو التفكير 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Image src="/logic1.png" alt="نشاط ذهني 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/logic2.png" alt="نشاط ذهني 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/logic3.png" alt="نشاط ذهني 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      <Footer />
      <FloatingBox />
    </div>
  );
}
