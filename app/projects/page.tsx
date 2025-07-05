// app/projects/page.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, date, location, participants, category, image, file_url")

      if (error) {
        console.error("خطأ في جلب المشاريع:", error)
      } else {
        setProjects(data || [])
      }
    }

    fetchProjects()
  }, [])

  return (
    <main className="flex-1 ">
      <Header />

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-12 mb-8">مشاريعنا</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          تعرف على أحدث النشاطات والفعاليات التي تنظمها مجلة 8 كانون للأطفال، وشارك في تجارب ممتعة ومفيدة
        </p>
        <div className="grid grid-cols-1 py-12 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            >
              <div className="relative h-64 w-full">
                {project.image && !project.image.endsWith(".pdf") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src="/default-cover.png"
                    alt="صورة تعبيرية عن المشروع"
                    className="object-cover w-full h-full"
                  />
                )}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-primary/80 transition-colors">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="text-sm text-muted-foreground mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    📅 <span>{new Date(project.date).toLocaleDateString("ar-EG")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    📍 <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    👥 <span>{project.participants}</span>
                  </div>
                </div>
                {project.file_url && (
                  <a
                    href={project.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 underline mt-2"
                  >
                    📄 عرض الملف
                  </a>
                )}
              </div>
              <div className="p-6 pt-0 flex justify-between items-center">
                <Button variant="outline" onClick={() => window.open(`/projects/${project.id}`, "_blank")}>تفاصيل أكثر</Button>
<Button onClick={() => window.open(`/projects/${project.id}/register`, "_blank")}>
  التسجيل
</Button>              </div>
            </div>
          ))}
        </div>
      </div>

      <FloatingBox />
      <Footer />
    </main>
  )
}
