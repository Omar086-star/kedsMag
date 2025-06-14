'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DownloadTotalBox() {
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    async function fetchTotalDownloads() {
      const { data, error } = await supabase
        .from('magazines') // ← اسم جدولك
        .select('downloads')

      if (!error && data) {
        const sum = data.reduce((acc, curr) => acc + (curr.downloads || 0), 0)
        setTotal(sum)
      }
    }

    fetchTotalDownloads()
  }, [])

  return (
    <div className="bg-white border border-purple-300 rounded-lg p-4 shadow-md w-fit mx-auto my-6">
      <p className="text-purple-700 font-semibold text-lg">
        📥 مجموع مرات التحميل: <span className="font-bold">{total ?? '...'}</span>
      </p>
    </div>
  )
}
