'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function FloatingBox() {
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  return (
    <>
      {/* الزر الدائري المتحرك */}
      <div className="fixed xxxl bottom-20 right-10 z-50 animate-float">
        <button
          className="w-30 h-30 flex items-center justify-center textaurtre hover:scale-150 transition-transform  "
          title="أنا أساعدك إذا تريد ذلك !"
          onClick={() => setShowPopup(!showPopup)}
        >
          <Image
            src="/furaty.gif"
            alt="Help Bot"
            width={100}
            height={120}
            unoptimized
            className='furatyImg'
          />
        </button>
      </div>

      {/* الرسالة المنبثقة */}
      {showPopup && (
        <div className="fixed bottom-20 right-40 w-64 bg-white shadow-xl rounded-lg p-4 z-50 border border-purple-300">
          <h3 className="text-purple-700 font-bold mb-3 text-center">مرحباً بك يا صديقي ! 👋</h3>
          <p className="text-sm text-gray-700 text-center mb-4">
            كيف يمكنني مساعدتك اليوم؟
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => router.push('/about')}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full py-2 px-4 text-sm"
            >
              تعرف علينا
            </button>
            <button
              onClick={() => router.push('/editions')}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 text-sm"
            >
              اقرأ آخر الإصدارات
            </button>
            
         

            <button
              onClick={() => router.push('/contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 text-sm"
            >
                تواصل معنا 
            </button>
            <button
              onClick={() => router.push('/donate')}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 text-sm"
            >
                 تبرع لنا 
            </button>



          </div>
        </div>
      )}
    </>
  )
}
