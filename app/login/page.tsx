"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  // جلب الإيميلات من env وتحويلها إلى مصفوفة
  const allowedEmails = process.env.NEXT_PUBLIC_ALLOWED_ADMIN_EMAILS?.split(",").map(e => e.trim().toLowerCase()) || []

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const normalizedEmail = email.trim().toLowerCase()

    if (!allowedEmails.includes(normalizedEmail)) {
      alert("هذا البريد غير مصرح له بالدخول.")
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signInWithOtp({ email: normalizedEmail })

    if (error) {
      alert("فشل تسجيل الدخول: " + error.message)
    } else {
      alert("تم إرسال رابط الدخول إلى بريدك الإلكتروني.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 px-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">تسجيل الدخول</h2>

        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          disabled={loading}
        >
          {loading ? "جارٍ الإرسال..." : "إرسال رابط الدخول"}
        </button>
      </form>
    </div>
  )
}
