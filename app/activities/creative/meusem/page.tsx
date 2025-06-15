import React from "react";
import Image from "next/image"
import Link from "next/link"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ChildLibraryEvent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 px-6 py-10 text-center space-y-10">
      <Header />

      <h1 className="text-center text-4xl font-bold text-pink-700 mb-4">
        🎭 فعالية: مسرح الطفل
      </h1>
      <p className="text-center text-[#fa4d00] text-lg mb-6">
        الشعار: "اعبر.. تَمثّل.. تَعلّم!"
      </p>

      {/* قسم الفيديوهات */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">🎬 عروض من مسرح الطفل</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/024Y_vlgwTc"
                title="مسرح الطفل 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/RsviKog0KDU"
                title="مسرح الطفل 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

       <section className="p-6 rounded-xl shadow bg-white">
         <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">  صور من مسرح الطفل</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           <Image src="/meusem1.png" alt="جلسة حكاية 1" width={400} height={400} className="rounded-lg object-cover w-full h-60" />
           <Image src="/meusem2.png" alt="جلسة حكاية 3" width={400} height={400} className="rounded-lg object-cover w-full h-60" />

           <Image src="/meusem3.png" alt="جلسة حكاية 2" width={400} height={400} className="rounded-lg object-cover w-full h-60" />
         </div>
       </section>

   





      <Footer />
      <FloatingBox />
    </div>
  );
}
