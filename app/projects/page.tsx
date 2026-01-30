// app/projects/page.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import { useI18n } from "@/components/I18nProvider"

export default function ProjectsPage() {
  const { tr, locale } = useI18n()
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const getByLocale = (row: any, base: string) => {
    const key = `${base}_${locale}` // title_ar / title_en / title_fr
    return row?.[key] || row?.[`${base}_ar`] || row?.[base] || ""
  }

useEffect(() => {
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
.select("id, title_i18n, title, date, location, participants, category, image, file_url")


   if (error) {
  console.error("Error fetching projects:", {
    message: error.message,
    details: error.details,
    hint: error.hint,
    code: error.code,
  })
}
else {
      setProjects(data || [])
    }
    setLoading(false)
  }

  fetchProjects()
}, [locale]) // 👈 مهم


  return (
    <main className="flex-1">
      <Header />

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-12 mb-8">{tr.projectsPage.title}</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {tr.projectsPage.subtitle}
        </p>

        {loading ? (
          <p className="text-center py-12 text-gray-600">{tr.projectsPage.loading}</p>
        ) : (
          <div className="grid grid-cols-1 py-12 md:grid-cols-2 gap-8">
            {projects.map((project) => {
const projectTitle =
  project.title_i18n?.[locale] || project.title_i18n?.ar || project.title || ""

              return (
                <div
                  key={project.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
                >
                  <div className="relative h-64 w-full">
                    {project.image && !String(project.image).endsWith(".pdf") ? (
                      <img
                        src={project.image}
                        alt={projectTitle}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <img
                        src="/default-cover.png"
                        alt={tr.projectsPage.defaultCoverAlt}
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
                    <h3 className="text-2xl font-semibold">{projectTitle}</h3>

                    <div className="text-sm text-muted-foreground mt-2 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        {tr.projectsPage.date}{" "}
                        <span>
                          {project.date
                            ? new Date(project.date).toLocaleDateString(
                                locale === "ar" ? "ar-EG" : locale === "fr" ? "fr-FR" : "en-GB"
                              )
                            : ""}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {tr.projectsPage.location} <span>{project.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {tr.projectsPage.participants} <span>{project.participants}</span>
                      </div>
                    </div>

                    {project.file_url && (
                      <a
                        href={project.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 underline mt-2"
                      >
                        {tr.projectsPage.file}
                      </a>
                    )}
                  </div>

                  <div className="p-6 pt-0 flex justify-between items-center">
                    <Button variant="outline" onClick={() => window.open(`/projects/${project.id}`, "_blank")}>
                      {tr.projectsPage.more}
                    </Button>

                    <Button onClick={() => window.open(`/projects/${project.id}/register`, "_blank")}>
                      {tr.projectsPage.register}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <FloatingBox />
      <Footer />
    </main>
  )
}
