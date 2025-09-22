// app/activity/[id]/page.tsx
import { supabase } from "@/lib/supabase"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import FloatingBox from '@/components/FloatingBox';

export default async function ActivityPage({ params }: { params: { id: string } }) {
  const { data: activity, error } = await supabase
    .from("activities") // أو "activities" حسب الجدول
    .select("*")
    .eq("id", params.id)
    .single()

  if (error) {
    return <div className="p-6 text-red-600">حدث خطأ أثناء جلب النشاط</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">

              <Header />
      <section className="  py-12 hwfulls">

                    <div className="mt-4 w-full ">

      <h1 className="text-3xl font-bold fitConc py-6  violetCustom">{activity.title}</h1>
      <p className="text-gray-700 max-auto ">{activity.description}</p>
      <p className="text-1xl  py-6 fitConbb" ><strong className="text-3xl font-bold fitConc py-6 fitConbb ">الموقع</strong> {activity.location}</p>
      <p className="text-1xl   py-6 fitConbb " ><strong className="text-3xl font-bold fitConc py-6  fitConbb">التاريخ</strong> {activity.date}</p>
 </div>

      <div className="mt-4 w-full hwfull">
        <img
          src={activity.file_url}
          className=" hwfull py-12 border rounded-xl"
        />
      </div>
      </section>
      <FloatingBox />
 
<Footer />
    </div>
  )
}






