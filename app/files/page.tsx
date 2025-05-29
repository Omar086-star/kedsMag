// app/files/page.tsx
'use client'

import Link from "next/link"

const files = [
  { name: "Summer Edition", url: "/uploads/summer-edition.pdf", type: "PDF" },
  { name: "Coloring Page", url: "/uploads/kids-activity.jpg", type: "Image" },
]

export default function FilesPage() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">الملفات المتاحة</h1>
      <ul className="space-y-4">
        {files.map((file, idx) => (
          <li key={idx} className="bg-purple-50 p-4 rounded shadow-md">
            <p className="font-semibold">{file.name} ({file.type})</p>
            <Link href={file.url} target="_blank" className="text-blue-600 underline">عرض أو تحميل</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
