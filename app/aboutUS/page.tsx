"use client"

import Image from "next/image"
import { BookOpen, Users, Heart, Star, Target, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
import { useI18n } from "@/components/I18nProvider"

export default function AboutUSPage() {
  const { tr } = useI18n()

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      <div className="mx-auto relative">
        <div className="relative bgi w-full h-full object-cover">
          <div className="relative bg-[#0e0e52]">
            <div className="bginss max-w-screen">
              <Bubbles />
              {/* ممكن تحط عنوان داخل الهيرو إذا بدك */}
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

        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-purple-800 mb-6">{tr.aboutUsPage.heroTitle}</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto whitespace-pre-line">
                {tr.aboutUsPage.heroText}
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src={"/furaty.gif"}
                  alt="شخصية مجلة 8 كانون"
                  width={400}
                  height={400}
                  className="w-full xlxly max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-purple-800 mb-6">{tr.aboutUsPage.missionTitle}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {tr.aboutUsPage.missionText}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full animate-go flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 animate-hoverone">{tr.aboutUsPage.missionPoints.p1}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full animate-go flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 animate-hoverone2">{tr.aboutUsPage.missionPoints.p2}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex animate-go items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 animate-hoverone1">{tr.aboutUsPage.missionPoints.p3}</span>
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
              <h2 className="text-4xl font-bold text-purple-800 mb-4">{tr.aboutUsPage.valuesTitle}</h2>
              <p className="text-xl text-gray-600">{tr.aboutUsPage.valuesSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{tr.aboutUsPage.valuesCards.learnTitle}</h3>
                  <p className="text-gray-600">{tr.aboutUsPage.valuesCards.learnText}</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">{tr.aboutUsPage.valuesCards.teamworkTitle}</h3>
                  <p className="text-gray-600">{tr.aboutUsPage.valuesCards.teamworkText}</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{tr.aboutUsPage.valuesCards.loveTitle}</h3>
                  <p className="text-gray-600">{tr.aboutUsPage.valuesCards.loveText}</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-800 mb-2">{tr.aboutUsPage.valuesCards.creativityTitle}</h3>
                  <p className="text-gray-600">{tr.aboutUsPage.valuesCards.creativityText}</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{tr.aboutUsPage.valuesCards.contentTitle}</h3>
                  <p className="text-gray-600">{tr.aboutUsPage.valuesCards.contentText}</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-yellow-200 hover:border-yellow-400 transition-all transform hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">{tr.aboutUsPage.valuesCards.excellenceTitle}</h3>
                  <p className="text-gray-600">{tr.aboutUsPage.valuesCards.excellenceText}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* License */}
          <div className="py-16">
            <h1 className="text-5xl font-bold text-purple-800 mcentr">{tr.aboutUsPage.licenseTitle}</h1>
            <p className="text-xl text-gray-700 max-w-3xl mcentr mx-auto">
              {tr.aboutUsPage.licenseTextTop}
              <br />
              <span className="text-2xl text-orange-500 max-w-3xl mcentr mx-auto">
                {tr.aboutUsPage.licenseNumber}
              </span>
              <br />
              {tr.aboutUsPage.licenseCity}
            </p>
          </div>
        </section>

        {/* Targets */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{tr.aboutUsPage.targetsTitle}</h2>
              <p className="text-xl opacity-90">{tr.aboutUsPage.targetsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">60+</div>
                <div className="text-lg opacity-90">{tr.aboutUsPage.targets.issues}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100K+</div>
                <div className="text-lg opacity-90">{tr.aboutUsPage.targets.kids}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">{tr.aboutUsPage.targets.activities}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">6+</div>
                <div className="text-lg opacity-90">{tr.aboutUsPage.targets.years}</div>
              </div>
            </div>
          </div>
        </section>

        <FloatingBox />
        <Footer />
      </div>
    </div>
  )
}
