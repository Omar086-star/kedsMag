"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useI18n } from "@/components/I18nProvider"

type Lang = "ar" | "en" | "fr"

export default function AdminDashboard() {
  const router = useRouter()
  const { tr, locale } = useI18n() as any
  const uiLang = (locale || "ar") as Lang

  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  const [contentType, setContentType] = useState("magazine")
  const [audience, setAudience] = useState("")

  // ✅ Multilingual fields
  const [activeLang, setActiveLang] = useState<Lang>("ar")
  const [title_ar, setTitleAr] = useState("")
  const [title_en, setTitleEn] = useState("")
  const [title_fr, setTitleFr] = useState("")

  const [description_ar, setDescAr] = useState("")
  const [description_en, setDescEn] = useState("")
  const [description_fr, setDescFr] = useState("")

  const [summary_ar, setSumAr] = useState("")
  const [summary_en, setSumEn] = useState("")
  const [summary_fr, setSumFr] = useState("")

  // other fields
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [videoUrl, setVideoUrl] = useState("")
  const [isMain, setIsMain] = useState(false)
  const [projectDate, setProjectDate] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) router.push("/login")
      else setUserEmail(data.user.email || "")
      setLoading(false)
    }
    fetchUser()
  }, [router])

  const requiredTitle = () => {
    // نطلب العنوان العربي كحد أدنى (اختيارك)
    return !!title_ar.trim()
  }

  const handleUpload = async () => {
    if (!requiredTitle() || (!file && !coverFile)) {
      return alert("يرجى ملء العنوان العربي وتحميل الملفات المطلوبة")
    }

    let fileUrl = ""
    let coverUrl = ""

    if (file) {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `${contentType}/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("uploads")
        .upload(filePath, file, { upsert: true, cacheControl: "3600" })

      if (uploadError) return alert("فشل رفع الملف: " + uploadError.message)

      const { data: publicUrlData } = supabase.storage
        .from("uploads")
        .getPublicUrl(filePath)

      fileUrl = publicUrlData?.publicUrl || ""
    }

    if (coverFile) {
      const ext = coverFile.name.split(".").pop()
      const name = `${contentType}/cover-${Date.now()}.${ext}`

      const { error: coverErr } = await supabase.storage
        .from("uploads")
        .upload(name, coverFile, { upsert: true, cacheControl: "3600" })

      if (!coverErr) {
        const { data } = supabase.storage.from("uploads").getPublicUrl(name)
        coverUrl = data?.publicUrl || ""
      }
    }

    // ✅ common data (keep old columns too if you want)
    const i18nData = {
      title_ar,
      title_en,
      title_fr,
      description_ar,
      description_en,
      description_fr,
      summary_ar,
      summary_en,
      summary_fr,
    }

    const commonData = {
      // optional legacy fields (for backward compatibility)
      title: title_ar,
      description: description_ar,
      summary: summary_ar,

      location,
      category,
      file_url: fileUrl,
      cover_url: coverUrl,
      video_url: videoUrl,
      status: "Published",
      ...i18nData,
    }

    let insertError: any = null

    switch (contentType) {
      case "documentary": {
        const allowed = ["video/mp4", "video/webm", "video/ogg"]
        if (!file || !allowed.includes(file.type)) return alert("يرجى رفع فيديو فقط في هذا القسم")

        const { error } = await supabase.from("videos").insert({
          ...commonData,
          is_main: isMain,
          type: "video",
        })
        insertError = error
        break
      }

      case "magazine": {
        const { error } = await supabase.from("magazines").insert(commonData)
        insertError = error
        break
      }

      case "special": {
        const { error } = await supabase.from("speditions").insert({
          ...commonData,
          audience,
        })
        insertError = error
        break
      }

      case "activitis": {
        const { error } = await supabase.from("activities").insert(commonData)
        insertError = error
        break
      }

      case "future": {
        const { error } = await supabase.from("activitesFuture").insert(commonData)
        insertError = error
        break
      }

      case "gallery": {
        const { error } = await supabase.from("gallery").insert({
          title: title_ar,
          description: description_ar,
          location,
          category,
          src: coverUrl,
        })
        insertError = error
        break
      }

      case "coloring": {
        const { error } = await supabase.from("coloring_activities").insert({
          title: title_ar,
          description: description_ar,
          category,
          file_url: fileUrl,
          cover_url: coverUrl,
        })
        insertError = error
        break
      }

      case "distribution": {
        if (!file) return alert("يرجى رفع صورة أو فيديو للتوزيع.")
        const isVideo = file.type.startsWith("video")
        const isImage = file.type.startsWith("image")
        if (!isVideo && !isImage) return alert("الملف يجب أن يكون صورة أو فيديو فقط.")

        const { error } = await supabase.from("distribution").insert({
          ...commonData,
          type: isVideo ? "video" : "image",
        })
        insertError = error
        break
      }

      case "projects": {
        const { error } = await supabase.from("projects").insert({
          title: title_ar,
          date: projectDate,
          location,
          participants: category,
          category,
          image: fileUrl,
          file_url: fileUrl || "",
        })
        insertError = error
        break
      }
    }

    if (insertError) {
      console.error("Insert error:", insertError)
      alert("خطأ أثناء الحفظ: " + (insertError?.message || "حدث خطأ غير متوقع"))
      return
    }

    alert("تمت إضافة المحتوى بنجاح ✅")

    // reset
    setTitleAr(""); setTitleEn(""); setTitleFr("")
    setDescAr(""); setDescEn(""); setDescFr("")
    setSumAr(""); setSumEn(""); setSumFr("")
    setLocation(""); setCategory(""); setAudience("")
    setFile(null); setCoverFile(null)
    setVideoUrl(""); setIsMain(false); setProjectDate("")
    setActiveLang("ar")
  }

  if (loading) return <p className="text-center py-20 text-gray-600">جارٍ التحقق من الحساب...</p>

  // helper for labels by UI language (fallback Arabic)
  const L = (ar: string, en: string, fr: string) => {
    if (uiLang === "en") return en
    if (uiLang === "fr") return fr
    return ar
  }

  // current values by activeLang
  const currentTitle = activeLang === "ar" ? title_ar : activeLang === "en" ? title_en : title_fr
  const currentDesc  = activeLang === "ar" ? description_ar : activeLang === "en" ? description_en : description_fr
  const currentSum   = activeLang === "ar" ? summary_ar : activeLang === "en" ? summary_en : summary_fr

  const setCurrentTitle = (v: string) => activeLang === "ar" ? setTitleAr(v) : activeLang === "en" ? setTitleEn(v) : setTitleFr(v)
  const setCurrentDesc  = (v: string) => activeLang === "ar" ? setDescAr(v)  : activeLang === "en" ? setDescEn(v)  : setDescFr(v)
  const setCurrentSum   = (v: string) => activeLang === "ar" ? setSumAr(v)   : activeLang === "en" ? setSumEn(v)   : setSumFr(v)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{L("مرحباً،", "Hello,", "Bonjour,")} {userEmail}</h1>
          <Button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push("/login")
            }}
            className="bg-red-600 text-white"
          >
            {L("تسجيل الخروج", "Logout", "Se déconnecter")}
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 text-white w-full">
              <Upload className="w-4 h-4 mr-2" /> {L("رفع محتوى جديد", "Upload new content", "Ajouter du contenu")}
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[560px]">
            <DialogHeader>
              <DialogTitle>{L("إضافة محتوى", "Add content", "Ajouter du contenu")}</DialogTitle>
              <DialogDescription>
                {L("اختر نوع المحتوى وقم بملء الحقول المناسبة.",
                  "Choose content type and fill the required fields.",
                  "Choisissez le type de contenu et remplissez les champs.")}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {/* content type */}
              <div className="grid gap-2">
                <Label>{L("نوع المحتوى", "Content type", "Type de contenu")}</Label>
                <Select defaultValue="magazine" onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue placeholder={L("اختر النوع", "Select type", "Choisir")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="magazine">{L("إصدار المجلة", "Magazine issue", "Numéro")}</SelectItem>
                    <SelectItem value="special">{L("إصدار خاص", "Special edition", "Édition spéciale")}</SelectItem>
                    <SelectItem value="activitis">{L("نشاط", "Activity", "Activité")}</SelectItem>
                    <SelectItem value="future">{L("نشاط قادم", "Upcoming activity", "À venir")}</SelectItem>
                    <SelectItem value="gallery">{L("صورة للمعرض", "Gallery image", "Image")}</SelectItem>
                    <SelectItem value="coloring">{L("رسم وتلوين", "Coloring", "Coloriage")}</SelectItem>
                    <SelectItem value="documentary">{L("فيديو وثائقي", "Video", "Vidéo")}</SelectItem>
                    <SelectItem value="projects">{L("مشروع", "Project", "Projet")}</SelectItem>
                    <SelectItem value="distribution">{L("توزيع", "Distribution", "Distribution")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(contentType === "magazine" || contentType === "special") && (
                <>
                  <Label>{L("الفئة المستهدفة", "Audience", "Public")}</Label>
                  <Select value={audience} onValueChange={setAudience}>
                    <SelectTrigger>
                      <SelectValue placeholder={L("اختر", "Select", "Choisir")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mothers">{L("الأمهات الجدد", "New mothers", "Nouvelles mamans")}</SelectItem>
                      <SelectItem value="teens">{L("اليافعين", "Teens", "Ados")}</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}

              {/* language tabs */}
              <div className="flex gap-2">
                {(["ar","en","fr"] as Lang[]).map(l => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setActiveLang(l)}
                    className={`px-3 py-2 rounded-lg text-sm font-bold border ${
                      activeLang === l ? "bg-white border-purple-600" : "bg-gray-50"
                    }`}
                  >
                    {l === "ar" ? "العربية" : l === "en" ? "English" : "Français"}
                  </button>
                ))}
              </div>

              {/* multilingual fields */}
              <Label>{L("العنوان", "Title", "Titre")} ({activeLang.toUpperCase()})</Label>
              <Input value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} placeholder="..." />

              <Label>{L("الوصف", "Description", "Description")} ({activeLang.toUpperCase()})</Label>
              <Input value={currentDesc} onChange={(e) => setCurrentDesc(e.target.value)} placeholder="..." />

              {(contentType === "magazine" || contentType === "special") && (
                <>
                  <Label>{L("الملخص", "Summary", "Résumé")} ({activeLang.toUpperCase()})</Label>
                  <Input value={currentSum} onChange={(e) => setCurrentSum(e.target.value)} placeholder="..." />
                </>
              )}

              <Label>{L("الموقع", "Location", "Lieu")}</Label>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="..." />

              <Label>{L("الفئة", "Category", "Catégorie")}</Label>
              <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="..." />

              {(contentType === "magazine" || contentType === "special") && (
                <>
                  <Label>{L("رابط الفيديو", "Video URL", "Lien vidéo")}</Label>
                  <Input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://..." />
                </>
              )}

              <Label>{L("الملف الرئيسي", "Main file", "Fichier")}</Label>
              <Input type="file" accept="application/pdf,image/*,video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />

              <Label>{L("صورة الغلاف", "Cover image", "Image de couverture")}</Label>
              <Input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />

              {contentType === "projects" && (
                <>
                  <Label>{L("تاريخ المشروع", "Project date", "Date du projet")}</Label>
                  <Input type="date" value={projectDate} onChange={(e) => setProjectDate(e.target.value)} />
                </>
              )}

              {contentType === "documentary" && (
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={isMain} onChange={() => setIsMain(!isMain)} />
                  <span>{L("هل هذا الفيديو هو الرئيسي؟", "Is this the main video?", "Vidéo principale ?")}</span>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline">{L("إلغاء", "Cancel", "Annuler")}</Button>
              <Button className="bg-purple-600 text-white" onClick={handleUpload}>
                {L("رفع", "Upload", "Envoyer")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
