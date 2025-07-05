 // صفحة "من نحن" بتصميم مشابة للصورة المرفقة (بطاقات الفريق مرتبة رأسياً مع صورة دائرية وأيقونة)

 import Image from "next/image"
 import { Card, CardContent } from "@/components/ui/card"
 import { Calendar,BookOpen,Award,Target, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
 import Link from "next/link"
 import { Button } from "@/components/ui/button"
 import Bubbles from "@/components/Bubbles";
 import FloatingBox from '@/components/FloatingBox';
 import {  Camera, Users, Download, Play, Star, Heart } from "lucide-react"
 import Footer from "@/components/Footer"
import Header from "@/components/Header"
 export default function AboutPage() {
 

   return (
     <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100  px-6">
 
 <Header />

 
 
 
 <div className=" mx-auto relative ">
 <div className="relative bgi  w-full h-full object-cover ">
 <div className="relative   bg-[#0e0e52]">
 <div className="bginss max-w-screen ">
   <Bubbles />
   <h2 className="  text-center  w-1000g mbot text-force font-bold ">   </h2>
 
   <div className="relative z-30 text-white flex flex-col justify-center items-center h-screen">
     <div className="absolute top-10 left-10 w-10 h-40 animate-rotateBlob">
     <img src="/8-p.png" alt="blob" className="w-full h-full object-contain" />
   </div> 
     <div className="absolute top-10 right-100 w-10 h-40 animate-rotateBlobs">
     <img src="/8-o.png" alt="blob" className="w-full h-full object-contain" />
   </div> 
   </div>
 </div>
 
     </div>
 
 
 </div>

 
 
                 
       </div>
             {/* Hero Section */}
             <section className="py-16 relative overflow-hidden">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h1 className="text-5xl font-bold text-purple-800 mb-6">نبذة عنا</h1>
             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               مجلة 8 كانون للأطفال، هي مجلة تعليمية ترفيهية مخصصة للأطفال، تهدف إلى تنمية مهاراتهم وقدراتهم الإبداعية من خلال
               محتوى هادف وممتع
             <br/>
               يتواجد فريقنا في الداخل السوري مع شركائنا المحليين 
             </p>
           </div>
         </div>
       </section>
 



       {/* Mission & Vision */}
       <section className="py-16 bg-white">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">

 
             <div className="relative">
               <Image
                 src={"/furaty.gif"}
                 alt="شخصية مجلة 8 كانون"
                 width={400}
                 height={400}
                 className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
               />
             </div>
             
             <div>
               <h2 className="text-4xl font-bold text-purple-800 mb-6">رسالتنا</h2>
               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                 نسعى إلى إنشاء محتوى تعليمي وترفيهي عالي الجودة يساعد الأطفال على التعلم والنمو بطريقة ممتعة وتفاعلية.
                 نؤمن بأن التعليم يجب أن يكون مليئاً بالمرح والإبداع.
               </p>
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-purple-500 rounded-full  animate-go flex items-center justify-center">
                     <Target className="w-4 h-4 text-white" />
                   </div>
                   <span className="text-gray-700  animate-hoverone ">تعليم هادف وممتع</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-blue-500 rounded-full animate-go flex items-center justify-center">
                     <Heart className="w-4 h-4 text-white  " />
                   </div>
                   <span className="text-gray-700  animate-hoverone2 ">قيم تربوية أصيلة</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex animate-go items-center justify-center">
                     <Star className="w-4 h-4 text-white " />
                   </div>
                   <span className="text-gray-700   animate-hoverone1 ">إبداع وابتكار</span>
                 </div>
               </div>
             </div>


           </div>
         </div>
       </section>
 
       {/* Values */}
       <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold text-purple-800 mb-4">قيمنا</h2>
             <p className="text-xl text-gray-600">القيم التي نؤمن بها ونسعى لتعزيزها في أطفالنا</p>
           </div>
 



           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 bg-white">
               <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <BookOpen className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-purple-800 mb-2">التعلم المستمر</h3>
                 <p className="text-gray-600">نشجع الأطفال على حب التعلم والاستطلاع</p>
               </CardContent>
             </Card>
 
             <Card className="border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 bg-white">
               <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Users className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-green-800 mb-2">التعاون</h3>
                 <p className="text-gray-600">نعزز روح العمل الجماعي والتعاون</p>
               </CardContent>
             </Card>
 
             <Card className="border-4 border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 bg-white">
               <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Heart className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-orange-800 mb-2">الحب والاحترام</h3>
                 <p className="text-gray-600">نغرس قيم الحب والاحترام المتبادل</p>
               </CardContent>
             </Card>
 
             <Card className="border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105 bg-white">
               <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Star className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-pink-800 mb-2">الإبداع</h3>
                 <p className="text-gray-600">نحفز الخيال والإبداع لدى الأطفال</p>
               </CardContent>
             </Card>
 
             <Card className="border-4 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-105 bg-white">
               <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Target className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-blue-800 mb-2">المحتوى</h3>
                 <p className="text-gray-600">محتوى هادف يخدم نمو الطفل</p>
               </CardContent>
             </Card>
 
             <Card className="border-4 border-yellow-200 hover:border-yellow-400 transition-all transform hover:scale-105 bg-white">
               <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Award className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-yellow-800 mb-2">التميز</h3>
                 <p className="text-gray-600">نسعى للتميز في كل ما نقدمه</p>
               </CardContent>
             </Card>
           </div>
         </div>
         <div>
            <h1 className="text-5xl font-bold text-purple-800  mcentr">
الترخيص
            </h1>
         <p className="text-xl text-gray-700 max-w-3xl mcentr mx-auto">
            مجلة 8 كانون للأطفال مرخصة بشكل رسمي برقم 
            <br/>
            <span className="text-2xl text-orange-500 max-w-3xl mcentr mx-auto">W593009063</span>
             
             <br/>
             فرنسا - ليل 
             </p>
         </div>
       </section>
 
      
       <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold mb-4"> أرقام نسعى للحصول عليها في المرحلة الأولى</h2>
             <p className="text-xl opacity-90">أرقام ستعكس تأثيرنا الإيجابي</p>
           </div>
 
           <div className="grid md:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="text-5xl font-bold mb-2">60+</div>
               <div className="text-lg opacity-90">عدد إصدار</div>
             </div>
             <div className="text-center">
               <div className="text-5xl font-bold mb-2">100K+</div>
               <div className="text-lg opacity-90">طفل مستفيد</div>
             </div>
             <div className="text-center">
               <div className="text-5xl font-bold mb-2">100+</div>
               <div className="text-lg opacity-90">نشاط تفاعلي</div>
             </div>
             <div className="text-center">
               <div className="text-5xl font-bold mb-2">6+</div>
               <div className="text-lg opacity-90">سنوات خبرة</div>
             </div>
           </div>
         </div>
       </section>
 
       <FloatingBox />
       <Footer />

   </div>
   )
 }
 
 
 
 
 
 
 
 
 