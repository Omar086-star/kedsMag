// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"
import { I18nProvider } from "@/components/I18nProvider"
import CookieBanner from "@/components/CookieBanner"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "مجلة 8 كانون للأطفال",
  description: "مجلة تعليمية ترفيهية للأطفال...",
  generator: "mulla-web.dev",
  verification: {
    google: "2e76X_6xxB8imYzBtEI9OrE4tQsKjJbCcM25Mdqr-Lo",
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()

  const locale = (cookieStore.get("locale")?.value as "ar" | "fr" | "en") || "ar"
  const dir = locale === "ar" ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} className={cairo.variable}>
      <body className="font-cairo bg-white text-gray-800">
        <I18nProvider initialLocale={locale}>
          <main>{children}</main>
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  )
}
