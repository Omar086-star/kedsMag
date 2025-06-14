import Image from "next/image"

import Link from "next/link"
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"
export default function StorySessionPlan() {
    return (

      <div className="min-h-screen bgactivite text-center text-gray-800 gap-4 text-center px-10 nonelist">
      <Header />

<h1 className="text-4xl font-bold text-[#3a00cc] py-12 mb-8">خطة جلسة الحكواتي التفاعلية</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
  <div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md">
    <p className="text-lg font-semibold text-[#fa4d00] text-center">🎉 هذه الجلسة تسرد قصصًا تربوية ممتعة وتتضمن أنشطة تفاعلية مع الأطفال.</p>
  </div>
  <div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-[#fa4d00]">🎯 الهدف العام:</h2>
    <p>تنمية الحس الأخلاقي والثقافي لدى الأطفال من خلال الاستماع إلى قصص تربوية مشوقة تُروى بصوت الحكواتي وبمشاركة تفاعلية من الأطفال.</p>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
  <div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold nonelist mb-2 text-[#fa4d00]" >✅ الأهداف التفصيلية:</h2>
    <ul className="space-y-1  pr-4 text-right">
      <li>غرس القيم مثل الصدق، التعاون، الاحترام، الأمانة.</li>
      <li>تنمية الخيال والتفكير النقدي لدى الأطفال.</li>
      <li>تعزيز مهارات الإصغاء والتفاعل اللغوي.</li>
      <li>ربط القيم بالواقع من خلال حوارات بعد كل قصة.</li>
    </ul>
  </div>
  <div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-[#fa4d00]">👤 الفئة المستهدفة:</h2>
    <p>الأطفال من عمر 6 إلى 12 سنة</p>
    <h2 className="text-2xl font-semibold mb-2 mt-6 text-[#fa4d00]">🕒 المدة الزمنية:</h2>
    <p>45 – 60 دقيقة</p>
  </div>
</div>

<div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md mb-10">
  <h2 className="text-2xl font-semibold mb-2 text-center text-[#fa4d00]">🛠️ التحضيرات:</h2>
  <ul className="space-y-1   pr-4 text-right">
    <li>اختيار حكواتي يمتلك أسلوبًا سرديًا مشوقًا.</li>
    <li>تجهيز 2 إلى 3 قصص قصيرة مناسبة للعمر المستهدف.</li>
    <li>إعداد جلسة مريحة على شكل دائرة أو نصف قمر.</li>
    <li>تجهيز وسائل داعمة (صور – دُمى – صوتيات – جهاز عرض).</li>
  </ul>
</div>

<div className="border-4 border-[#3a00cc] text-center rounded-xl p-6 shadow-md mb-10 overflow-auto">
  <h2 className="text-2xl font-semibold mb-2 text-[#fa4d00]">📋 الجدول الزمني:</h2>
  <table className="table-auto w-full text-sm border-4 border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-2 border">الزمن</th>
        <th className="p-2 border">النشاط</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="p-2 border">5 دقائق</td><td className="p-2 border">ترحيب وتعارف</td></tr>
      <tr><td className="p-2 border">10 دقائق</td><td className="p-2 border">القصة الأولى – قيمة "الصدق"</td></tr>
      <tr><td className="p-2 border">5 دقائق</td><td className="p-2 border">نقاش تفاعلي</td></tr>
      <tr><td className="p-2 border">10 دقائق</td><td className="p-2 border">القصة الثانية – قيمة "التعاون"</td></tr>
      <tr><td className="p-2 border">5 دقائق</td><td className="p-2 border">نشاط تمثيلي أو حركي</td></tr>
      <tr><td className="p-2 border">10 دقائق</td><td className="p-2 border">القصة الثالثة – قيمة "الاحترام"</td></tr>
      <tr><td className="p-2 border">10 دقائق</td><td className="p-2 border">مشاركة الأطفال وتأليف نهاية</td></tr>
    </tbody>
  </table>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
  <div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-center text-[#fa4d00]">🎲 أنشطة مرافقة:</h2>
    <ul className="space-y-1  pr-4  text-center ">
      <li>لعبة "أكمل القصة"</li>
      <li>رسم مشهد من القصة</li>
      <li>عرض تمثيلي من قبل الأطفال</li>
    </ul>
  </div>
  <div className="border-4 border-[#3a00cc] rounded-xl p-6 shadow-md text-center ">
    <h2 className="text-2xl font-semibold mb-2 text-[#fa4d00]">المخرجات المتوقعة:</h2>
    <ul className="space-y-1  pr-4  text-center">
      <li>إدراك الطفل للقيمة الأخلاقية لكل قصة</li>
      <li>تفاعل لفظي وجسدي خلال الجلسة</li>
      <li>إنتاجات فنية أو سردية من الطفل</li>
    </ul>
  </div>
</div>
{/* <div> 
    <h2 className="text-2xl font-semibold mb-2 text-[#fa4d00]"> صور توضيحية:</h2>

</div>

<section className="mb-10 text-center fcol">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    <div className="rounded shadow bg-gray-100 h-40 flex items-center widthimg justify-center text-gray-400">
    <Image src="/store1.png" alt="شعار "   width={500}
  height={200}  className="object-cover " />

      </div>
    <div className="rounded shadow bg-gray-100 h-40 flex items-center widthimg justify-center text-gray-400">
    <Image src="/store2.png" alt="شعار "   width={500}
  height={200}  className="object-contain " />

    </div>
    <div className="rounded shadow bg-gray-100 h-40 flex items-center widthimg justify-center text-gray-400">
    <Image src="/store1.png" alt="شعار "   width={500}
  height={200} className="object-contain " />

    </div>
  </div>
</section> */}
  <h2 className="text-2xl font-semibold text-center mb-2 text-[#fa4d00]">📌 ملاحظات تنظيمية:</h2>

<section className="mb-16 text-center fcol">
  <ul className="space-y-1 text-center pr-4 ">
    <li>مراعاة الفروق العمرية واللغوية.</li>
    <li>تشجيع الطفل الخجول على المشاركة بأسلوب لطيف.</li>
    <li>توثيق بعض المقاطع لأرشفة النشاط.</li>
  </ul>
</section>

<FloatingBox />

<Footer />

      </div>
    );
  }
  