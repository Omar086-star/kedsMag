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
  title: "Coach Digital - Développement Personnel & Numérique",
  description:
    "Coach spécialisé en développement personnel, numérique et accompagnement administratif. Formations, coaching et création d'associations.",
  generator: "v0.dev",
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
