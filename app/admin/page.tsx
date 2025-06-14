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
  const [file, setFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [summary, setSummary] = useState("")
  const [videoUrl, setVideoUrl] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data.user) {
        router.push("/login")
      } else {
        setUserEmail(data.user.email)
      }
      setLoading(false)
    }
    fetchUser()
  }, [router])

  const handleUpload = async () => {
    const date = new Date().toISOString().split("T")[0]

    if (!title || !file || (contentType !== "gallery" && contentType !== "coloring" && !coverFile)) {
      return alert("يرجى ملء العنوان وتحميل الملفات المطلوبة")
    }

    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `${contentType}/${fileName}`

    const { error: uploadError } = await supabase.storage.from("uploads").upload(filePath, file)
    if (uploadError) return alert("فشل رفع الملف: " + uploadError.message)

    const { data: publicUrlData } = supabase.storage.from("uploads").getPublicUrl(filePath)
    const fileUrl = publicUrlData?.publicUrl || ""

    let coverUrl = ""
    if (coverFile) {
      const ext = coverFile.name.split(".").pop()
      const name = `${contentType}/cover-${Date.now()}.${ext}`
      const { error: coverErr } = await supabase.storage.from("uploads").upload(name, coverFile)
      if (!coverErr) {
        const { data } = supabase.storage.from("uploads").getPublicUrl(name)
        coverUrl = data?.publicUrl || ""
      }
    }

    let insertError: any = null
    const commonData = { title, date, file_url: fileUrl, cover_url: coverUrl, status: "Published" }

    if (contentType === "magazine") {
      const { error } = await supabase.from("magazines").insert({
        ...commonData,
        summary,
        video_url: videoUrl,
      })
      insertError = error
    } else if (contentType === "activitis") {
      const { error } = await supabase.from("activities").insert(commonData)
      insertError = error
    } else if (contentType === "future") {
      const { error } = await supabase.from("activitesFuture").insert({
        ...commonData,
        description,
        location,
      })
      insertError = error
    } else if (contentType === "gallery") {
      const { error } = await supabase.from("gallery").insert({
        title,
        description,
        date,
        location,
        category,
        src: fileUrl,
      })
      insertError = error
    } else if (contentType === "coloring") {
      const { error } = await supabase.from("coloring").insert({
        title,
        description,
        date,
        category,
        file_url: fileUrl,
        cover_url: coverUrl,
      })
      insertError = error
    }

    if (insertError) {
      alert("خطأ أثناء الحفظ: " + insertError.message)
    } else {
      alert("تمت إضافة المحتوى بنجاح")
      setTitle("")
      setDescription("")
      setLocation("")
      setCategory("")
      setFile(null)
      setCoverFile(null)
      setSummary("")
      setVideoUrl("")
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
                    <SelectItem value="activitis">نشاط</SelectItem>
                    <SelectItem value="future">نشاط قادم</SelectItem>
                    <SelectItem value="gallery">صورة للمعرض</SelectItem>
                    <SelectItem value="coloring">رسم وتلوين</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Label>العنوان</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان المحتوى" />

              {contentType === "magazine" && (
                <>
                  <Label>الوصف النصي (موجز)</Label>
                  <Input value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="ملخص العدد" />
                  <Label>رابط الفيديو التعريفي</Label>
                  <Input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://..." />
                </>
              )}

              {(contentType === "future" || contentType === "gallery") && (
                <>
                  <Label>الوصف</Label>
                  <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="وصف النشاط" />
                  <Label>الموقع</Label>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="مثال: دمشق، إدلب..." />
                </>
              )}

              {contentType === "gallery" && (
                <>
                  <Label>الفئة</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workshops">ورش العمل</SelectItem>
                      <SelectItem value="competitions">المسابقات</SelectItem>
                      <SelectItem value="events">الفعاليات</SelectItem>
                      <SelectItem value="characters">الشخصيات</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}

              {contentType === "coloring" && (
                <>
                  <Label>الوصف (اختياري)</Label>
                  <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="وصف نشاط التلوين" />
                  <Label>الفئة</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drawing">رسم</SelectItem>
                      <SelectItem value="coloring">تلوين</SelectItem>
                      <SelectItem value="mixed">مختلط</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}

              <Label>{contentType === "gallery" ? "الصورة" : "الملف الرئيسي (PDF)"}</Label>
              <Input
                type="file"
                accept={contentType === "gallery" ? "image/*" : "application/pdf"}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              {contentType !== "gallery" && (
                <>
                  <Label>صورة الغلاف (اختياري)</Label>
                  <Input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
                </>
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
