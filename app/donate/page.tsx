// donate-page-ar.js
import { Heart, CreditCard, Landmark, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import FloatingBox from '@/components/FloatingBox';
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">

            <Header />

      {/* رأس الصفحة */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">تبرّع الآن</h1>
            <p className="text-xl text-blue-100">
            مساهمتك تساعدنا على تقديم الدعم اللازم للأطفال ويساهم في تنمية المجتمع .
            </p>
          </div>
        </div>
      </section>

{/* صورة توضيحية داخل الصفحة */}
<section className="bg-white py-12">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <Image
        src="/don.jpg" // ← غيّر هذا إلى اسم الصورة الفعلي
        alt="أطفال يستفيدون من المجلة"
        width={800}
        height={400}
        className="rounded-xl shadow-lg mx-auto"
      />
      <p className="mt-6 text-lg text-gray-700">
        كل مساهمة منك تُحدث فرقًا حقيقيًا في حياة الأطفال. ساعدنا في الوصول إلى المزيد.
      </p>
    </div>
  </div>
</section>



      {/* نموذج التبرع */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-5">
              {/* عمود التأثير */}
              <div className="md:col-span-2">
                <div className="sticky top-24 space-y-8">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">أثر تبرعك</h2>
                    <p className="text-gray-600">
                      تبرعك يدعم مشاريعنا التعليمية بشكل مباشر ويساعدنا في تحسين حياة الأطفال ورفع مستواهم التعليمي.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[25, 50, 100, 250].map((amount) => (
                      <div key={amount} className="rounded-lg bg-blue-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-blue-100 p-2">
                            <Heart className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold">${amount}</h3>
                            <p className="text-sm text-gray-600">
                              {amount === 25 && "تؤمّن طباعة 10 أعداد من المجلة  لطفل واحد"}
                              {amount === 50 && "تؤمّن طباعة 25 أعداد من المجلة  لطفل واحد          "}
                              {amount === 100 && "تؤمّن طباعة 60 أعداد من المجلة  لطفل واحد    "}
                              {amount === 250 && " تمول 3 جلسات  دعم نفسي لـ 20 طفل "}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-lg font-bold">أمان التبرع</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      تبرعك آمن. نستخدم تقنيات تشفير لحماية معلوماتك الشخصية والمالية.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 w-12 rounded bg-gray-200"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* عمود النموذج */}
              <div className="md:col-span-3">
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">أكمِل التبرع</h2>

                  <form className="space-y-8">
                    {/* نوع التبرع */}
                    <div className="space-y-4">
                      <Label>نوع التبرع</Label>
                      <RadioGroup defaultValue="one-time" className="flex flex-wrap gap-4">
                        {[
                          { value: "one-time", label: "مرة واحدة" },
                          { value: "monthly", label: "شهري" },
                        ].map(({ value, label }) => (
                          <div key={value} className="flex-1">
                            <RadioGroupItem value={value} id={value} className="peer sr-only" />
                            <Label
                              htmlFor={value}
                              className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                            >
                              {label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* مبلغ التبرع */}
                    <div className="space-y-4">
                      <Label>مبلغ التبرع</Label>
                      <RadioGroup defaultValue="50" className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {["25", "50", "100", "custom"].map((val) => (
                          <div key={val}>
                            <RadioGroupItem value={val} id={`amount-${val}`} className="peer sr-only" />
                            <Label
                              htmlFor={`amount-${val}`}
                              className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                            >
                              {val === "custom" ? "مخصص" : `$${val}`}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      <Input type="number" placeholder="أدخل مبلغك الخاص" className="mt-2" />
                    </div>

                    {/* تخصيص التبرع */}
                    <div className="space-y-4">
                      <Label>تخصيص التبرع</Label>
                      <RadioGroup defaultValue="general" className="space-y-2">
                        {[
                          { id: "general", label: "صندوق عام" },
                          { id: "relief", label: "دعن فعاليات" },
                          { id: "psychological", label: "دعم نفسي" },
                          { id: "development", label: "طباعة مجلة" },
                        ].map(({ id, label }) => (
                          <div key={id} className="flex items-center space-x-2">
                            <RadioGroupItem value={id} id={id} />
                            <Label htmlFor={id}>{label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* معلومات شخصية */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">المعلومات الشخصية</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">الاسم الأول</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">الكنية</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف (اختياري)</Label>
                        <Input id="phone" type="tel" />
                      </div>
                    </div>

                    {/* طريقة الدفع */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">طريقة الدفع</h3>
                      <Tabs defaultValue="paypal" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          {/* <TabsTrigger value="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" /> بطاقة
                          </TabsTrigger>
                          <TabsTrigger value="bank" className="flex items-center gap-2">
                            <Landmark className="h-4 w-4" /> حوالة
                          </TabsTrigger> */}
                          <TabsTrigger value="paypal" className="flex items-center gap-2">
                            <Wallet className="h-4 w-4" /> PayPal
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="paypal" className="pt-4 text-center">
                          <p className="mb-4 text-gray-600">
                            سيتم توجيهك إلى PayPal لإتمام عملية التبرع بشكل آمن.
                          </p>
                          <Button
                            asChild
                            className="bg-yellow-500 text-white hover:bg-yellow-600"
                            size="lg"
                          >
                            <a
                              href="https://www.paypal.com/ncp/payment/JJAY4ZABCYNH4"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              التبرع عبر PayPal
                            </a>
                          </Button>
                        </TabsContent>
                      </Tabs>
                    </div>

                    {/* ملاحظات إضافية */}
                    <div className="space-y-2">
                      <Label htmlFor="comments">ملاحظات إضافية (اختياري)</Label>
                      <Textarea
                        id="comments"
                        placeholder="أضف أي تفاصيل أو توجيهات خاصة بالتبرع"
                        rows={3}
                      />
                    </div>

                    {/* زر الإرسال */}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      <Heart className="mr-2 h-5 w-5" /> أكمل التبرع
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      بإتمام التبرع، فإنك توافق على شروط الخدمة وسياسة الخصوصية.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <FloatingBox />
 
<Footer />
    </div>
  )
}
