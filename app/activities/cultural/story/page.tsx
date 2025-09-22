import Image from "next/image"
import Link from "next/link"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function StorySessionPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-800    text-center ">
      <Header />

      <h1 className="text-4xl font-bold text-[#3a00cc] mb-4">📚 جلسات الحكاية التفاعلية</h1>

      {/* قسم الفيديوهات */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">🎬 فيديوهات من جلسات سابقة</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/jrPGXAdvmvE"
            title="جلسة حكاية 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/dTy7zSjtGHU"
            title="جلسة حكاية 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* قسم الصور */}
      <section className="p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-semibold text-[#fa4d00] mb-6">  صور من جلسات الحكواتي</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image src="/lec1.png" alt="جلسة حكاية 1" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/lec2.png" alt="جلسة حكاية 2" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
          <Image src="/lec4.png" alt="جلسة حكاية 3" width={400} height={300} className="rounded-lg object-cover w-full h-60" />
        </div>
      </section>

      <Footer />
      <FloatingBox />
    </div>
  );
}
