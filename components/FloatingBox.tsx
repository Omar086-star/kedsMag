"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useI18n } from "@/components/I18nProvider"

export default function FloatingBox() {
  const { tr } = useI18n()
  const [showPopup, setShowPopup] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  // يمنع Hydration mismatch لأن النصوص/العناوين تعتمد على اللغة
  if (!mounted) return null

  return (
    <>
      {/* الزر الدائري المتحرك */}
      <div className="fixed xxxl bottom-20 right-10 z-50 animate-float">
        <button
          className="w-30 h-30 flex items-center justify-center textaurtre hover:scale-150 transition-transform"
          title={tr.floating.tooltip}
          onClick={() => setShowPopup((prev) => !prev)}
        >
          <Image
            src="/furaty.gif"
            alt="Help Bot"
            width={100}
            height={120}
            unoptimized
            className="furatyImg"
          />
        </button>
      </div>

      {/* الرسالة المنبثقة */}
      {showPopup && (
        <div className="fixed bottom-20 right-40 w-64 bg-white shadow-xl rounded-lg p-4 z-50 border border-purple-300">
          <h3 className="text-purple-700 font-bold mb-3 text-center">{tr.floating.title}</h3>
          <p className="text-sm text-gray-700 text-center mb-4">{tr.floating.subtitle}</p>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => router.push("/about")}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full py-2 px-4 text-sm"
            >
              {tr.floating.btnAbout}
            </button>

            <button
              onClick={() => router.push("/editions")}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 text-sm"
            >
              {tr.floating.btnEditions}
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 text-sm"
            >
              {tr.floating.btnContact}
            </button>

            <button
              onClick={() => router.push("/donate")}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 text-sm"
            >
              {tr.floating.btnDonate}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
