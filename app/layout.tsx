import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

// استيراد خط Cairo وتفعيله
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
})

// بيانات الـ metadata للموقع
export const metadata: Metadata = {
  title: "   مجلة 8 كانون للأطفال   ",
  description:
    "                 مجلة تعليمية ترفيهية مخصصة للأطفال، تحتوي على قصص مشوقة، أنشطة تفاعلية، ومحتوى تعليمي يساعد الأطفال على التعلم والنمو بطريقة ممتعة",
  generator: "mulla-web.dev",
}

// مكون التخطيط الرئيسي
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr" className={cairo.variable}>
      <body className="font-cairo bg-white text-gray-800">{children}</body>
    </html>
  )
}
