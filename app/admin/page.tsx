// app/(admin)/admin/page.tsx
"use client"

import { useEffect, useState } from "react"
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

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  const [contentType, setContentType] = useState("magazine")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [audience, setAudience] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [summary, setSummary] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [isMain, setIsMain] = useState(false)
  const [projectDate, setProjectDate] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) {
        router.push("/login")
      } else {
        setUserEmail(data.user.email || "")
      }
      setLoading(false)
    }
    fetchUser()
  }, [router])

  const handleUpload = async () => {
    if (!title || (!file && !coverFile)) {
      return alert("يرجى ملء العنوان وتحميل الملفات المطلوبة")
    }

    let fileUrl = ""
    let coverUrl = ""

    if (file) {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `${contentType}/${fileName}`

      const { error: uploadError } = await supabase.storage.from("uploads").upload(filePath, file, {
        upsert: true,
        cacheControl: "3600",
      })
      if (uploadError) return alert("فشل رفع الملف: " + uploadError.message)

      const { data: publicUrlData } = supabase.storage.from("uploads").getPublicUrl(filePath)
      fileUrl = publicUrlData?.publicUrl || ""
    }

    if (coverFile) {
      const ext = coverFile.name.split(".").pop()
      const name = `${contentType}/cover-${Date.now()}.${ext}`
      const { error: coverErr } = await supabase.storage.from("uploads").upload(name, coverFile, {
        upsert: true,
        cacheControl: "3600",
      })
      if (!coverErr) {
        const { data } = supabase.storage.from("uploads").getPublicUrl(name)
        coverUrl = data?.publicUrl || ""
      }
    }

    let insertError: any = null
    const commonData = {
      title,
      description,
      location,
      category,
      file_url: fileUrl,
      cover_url: coverUrl,
      video_url: videoUrl,
      status: "Published",
    }

    switch (contentType) {
      case "documentary": {
        const allowedVideoTypes = ["video/mp4", "video/webm", "video/ogg"]
        if (!file || !allowedVideoTypes.includes(file.type)) {
          return alert("يرجى رفع فيديو فقط في هذا القسم")
        }
        const { error } = await supabase.from("videos").insert({
          ...commonData,
          is_main: isMain,
          type: "video",
        })
        insertError = error
        break
      }
      case "magazine": {
        const { error } = await supabase.from("magazines").insert({
          ...commonData,
          summary,
        })
        insertError = error
        break
      }
      case "special": {
        const { error } = await supabase.from("speditions").insert({
          ...commonData,
          summary,
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
          title,
          description,
          location,
          category,
          src: fileUrl,
        })
        insertError = error
        break
      }
      case "coloring": {
        const { error } = await supabase.from("coloring_activities").insert({
          title,
          description,
          category,
          file_url: fileUrl,
          cover_url: coverUrl,
        })
        insertError = error
        break
      }
case "distribution": {
  if (!file) {
    return alert("يرجى رفع صورة أو فيديو للتوزيع.");
  }

  const isVideo = file.type.startsWith("video")
  const isImage = file.type.startsWith("image")

  if (!isVideo && !isImage) {
    return alert("الملف يجب أن يكون صورة أو فيديو فقط.")
  }

  const { error } = await supabase.from("distribution").insert({
    ...commonData,
    type: isVideo ? "video" : "image",
  })
  insertError = error
  break
}

      case "projects": {
        const { error } = await supabase.from("projects").insert({
          title,
          date: projectDate,
          location,
          participants: category,
          category,
          image: fileUrl,
          file_url: fileUrl || ""
        })
        insertError = error
        break
      }
    }

    if (insertError) {
      console.error("Insert error:", insertError)
      alert("خطأ أثناء الحفظ: " + (insertError?.message || "حدث خطأ غير متوقع"))
    } else {
      alert("تمت إضافة المحتوى بنجاح")
      setTitle("")
      setDescription("")
      setLocation("")
      setCategory("")
      setAudience("")
      setFile(null)
      setCoverFile(null)
      setSummary("")
      setVideoUrl("")
      setIsMain(false)
      setProjectDate("")
    }
  }

  if (loading) {
    return <p className="text-center py-20 text-gray-600">جارٍ التحقق من الحساب...</p>
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">مرحباً، {userEmail}</h1>
          <Button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push("/login")
            }}
            className="bg-red-600 text-white"
          >
            تسجيل الخروج
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 text-white w-full">
              <Upload className="w-4 h-4 mr-2" /> رفع محتوى جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>إضافة محتوى</DialogTitle>
              <DialogDescription>اختر نوع المحتوى وقم بملء الحقول المناسبة.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>نوع المحتوى</Label>
                <Select defaultValue="magazine" onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="magazine">إصدار المجلة</SelectItem>
                    <SelectItem value="special">إصدار خاص (للأمهات)</SelectItem>
                    <SelectItem value="activitis">نشاط</SelectItem>
                    <SelectItem value="future">نشاط قادم</SelectItem>
                    <SelectItem value="gallery">صورة للمعرض</SelectItem>
                    <SelectItem value="coloring">رسم وتلوين</SelectItem>
                    <SelectItem value="documentary">فيديو وثائقي</SelectItem>
                    <SelectItem value="projects">مشروع</SelectItem>
                    <SelectItem value="distribution">توزيع</SelectItem>





                  </SelectContent>
                </Select>
              </div>

              {(contentType === "magazine" || contentType === "special") && (
                <>
                  <Label>الفئة المستهدفة</Label>
                  <Select value={audience} onValueChange={setAudience}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الفئة المستهدفة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mothers">الأمهات الجدد</SelectItem>
                      <SelectItem value="teens">اليافعين</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}

              <Label>العنوان</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان المحتوى" />

              {(contentType !== "gallery") && (
                <>
                  <Label>الوصف</Label>
                  <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="شرح مختصر" />
                </>
              )}

              {(contentType === "magazine" || contentType === "special") && (
                <>
                  <Label>الملخص</Label>
                  <Input value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="ملخص المحتوى" />
                  <Label>رابط الفيديو</Label>
                  <Input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://..." />
                                <Label>الملف الرئيسي</Label>
              <Input type="file" accept="application/pdf,image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />

                </>
              )}
              
              {contentType === "distribution" && (
  <>
    <Label>الموقع</Label>
    <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="مثال: الرقة" />
    <Label>الفئة</Label>
  
    <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="مثال: مواد غذائية" />
                                 <Label>الملف الرئيسي</Label>
              <Input type="file" accept="application/pdf,image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />

  </>
)}


              {(contentType === "gallery") && (
                <>
                  <Label>الوصف</Label>
                  <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="وصف الصورة" />
                  <Label>الموقع</Label>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="مثال: دمشق، إدلب..." />
                  <Label>الفئة</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر فئة الصورة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الصور</SelectItem>
                      <SelectItem value="workshops">ورش العمل</SelectItem>
                      <SelectItem value="competitions">المسابقات</SelectItem>
                      <SelectItem value="frinds">أصدقاء كانون</SelectItem> 
                      <SelectItem value="events">الفعاليات</SelectItem>
                      <SelectItem value="characters">الشخصيات</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}


              {(contentType !== "gallery" && contentType !== "coloring") && (
                <>
                  <Label>صورة الغلاف</Label>
                  <Input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />

                </>
              )}

              {contentType === "projects" && (
                <>
                  <Label>تاريخ المشروع</Label>
                  <Input type="date" value={projectDate} onChange={(e) => setProjectDate(e.target.value)} />
                                <Label>الملف الرئيسي</Label>
              <Input type="file" accept="application/pdf,image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />

                </>
              )}

              {contentType === "documentary" && (
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={isMain} onChange={() => setIsMain(!isMain)} />
                  <span>هل هذا الفيديو هو القصة الوثائقية الرئيسية؟</span>
                </div>
              )}

            </div>

            <DialogFooter>
              <Button variant="outline">إلغاء</Button>
              <Button className="bg-purple-600 text-white" onClick={handleUpload}>
                رفع
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
