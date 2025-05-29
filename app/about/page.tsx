import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Target, Heart, Star, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-purple-300 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-800">مجلة 8 كانون</h1>
                <p className="text-sm text-orange-600 font-medium">للأطفال ⭐⭐⭐</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-purple-700 hover:text-purple-900 transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
                من نحن
              </Link>
              <Link href="/editions" className="text-purple-700 hover:text-purple-900 transition-colors">
                إصداراتنا
              </Link>
              <Link href="/activities" className="text-purple-700 hover:text-purple-900 transition-colors">
                الأنشطة
              </Link>
              <Link href="/gallery" className="text-purple-700 hover:text-purple-900 transition-colors">
                معرض الصور
              </Link>
              <Link href="/contact" className="text-purple-700 hover:text-purple-900 transition-colors">
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-800 mb-6">من نحن</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              مجلة 8 كانون هي مجلة تعليمية وترفيهية مخصصة للأطفال، تهدف إلى تنمية مهاراتهم وقدراتهم الإبداعية من خلال
              محتوى هادف وممتع
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-800 mb-6">رسالتنا</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                نسعى إلى إنشاء محتوى تعليمي وترفيهي عالي الجودة يساعد الأطفال على التعلم والنمو بطريقة ممتعة وتفاعلية.
                نؤمن بأن التعليم يجب أن يكون مليئاً بالمرح والإبداع.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">تعليم هادف وممتع</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">قيم تربوية أصيلة</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">إبداع وابتكار</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-20%20%C3%A0%2021.35.14_bbd16de7.jpg-JlJHNl0egJL0Jwsf4EKUtWfP0L2HdX.jpeg"
                alt="شخصية مجلة 8 كانون"
                width={400}
                height={400}
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
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
                <h3 className="text-xl font-bold text-blue-800 mb-2">الهدفية</h3>
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
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600">فريق متخصص ومتفان لخدمة أطفالنا</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "أ. ولاء درويش",
                role: "رئيسة التحرير",
                description: "متخصصة في أدب الأطفال والتربية",
              },
              {
                name: "أ. محمد الأحمد",
                role: "مصمم جرافيك",
                description: "خبير في الأنشطة التعليمية التفاعلية",
              },
              {
                name: "عمر الملا",
                role: "المشرف العام",
                description: "خبير فني ولوجستي   ",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {member.name.charAt(2)}
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">إنجازاتنا</h2>
            <p className="text-xl opacity-90">أرقام تعكس تأثيرنا الإيجابي</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">عدد إصدار</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">طفل مستفيد</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">نشاط تفاعلي</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">مجلة 8 كانون</h3>
                  <p className="text-sm text-orange-400">للأطفال ⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-400">
                مجلة تعليمية وترفيهية مخصصة للأطفال، تهدف إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/editions" className="text-gray-400 hover:text-white transition-colors">
                    إصداراتنا
                  </Link>
                </li>
                <li>
                  <Link href="/activities" className="text-gray-400 hover:text-white transition-colors">
                    الأنشطة
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">تابعنا</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  @
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  X
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
              <div className="space-y-2 text-gray-400">
                <p>office@8kanoon.org</p>
                <p>+963 XXX XXX XXX</p>
                <p>سوريا - دمشق</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
