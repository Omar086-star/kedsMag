// app/success/page.tsx
export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 تم إرسال الحجز بنجاح!</h1>
      <p className="text-gray-700">سنقوم بالتواصل معك قريبًا لتأكيد التفاصيل.</p>
      <a href="/ ">
                  <p className="text-gray-700 py-12"> عد إلى الصفحة الرئيسية          </p>

      </a>

    </div>
  )
}
