// app/projects/[id]/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"

export default function ProjectDetailsPage() {
  const { id } = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, date, location, participants, category, image, file_url")
        .eq("id", id)
        .single()

      if (error) {
        console.error("خطأ في جلب المشروع:", error)
      } else {
        setProject(data)
      }
      setLoading(false)
    }

    if (id) fetchProject()
  }, [id])

  if (loading) {
    return <div className="text-center py-20 text-lg">جاري تحميل المشروع...</div>
  }

  if (!project) {
    return <div className="text-center py-20 text-red-600">تعذر العثور على هذا المشروع.</div>
  }

  return (
    <div className="min-h-screen  px-6">
            <Header />

      <div className="max-w-3xl py-12 mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">{project.title}</h1>

        <div className="relative w-full h-72 mb-6">
          {project.image && !project.image.endsWith(".pdf") ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          ) : (
            <Image
              src="/default-cover.png"
              alt="صورة المشروع"
              fill
              className="object-cover rounded-lg"
            />
          )}
        </div>

        <div className="space-y-4 text-gray-700">
          <p>📅 التاريخ: {new Date(project.date).toLocaleDateString("ar-EG")}</p>
          <p>📍 المكان: {project.location}</p>
          <p>👥 عدد المشاركين: {project.participants}</p>
          <p>🎨 الفئة: {project.category}</p>
        </div>

        {project.file_url && (
          <div className="mt-6">
            <a
              href={project.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              📄 عرض الملف الكامل
            </a>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" onClick={() => window.history.back()}>رجوع</Button>
         <Button onClick={() => window.open(`/projects/${project.id}/register`, "_blank")}>
  التسجيل
</Button>     
        </div>
      </div>
            <FloatingBox />
      <Footer />
    </div>
  )
}
