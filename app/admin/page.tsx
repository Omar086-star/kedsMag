"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Upload,
  Trash2,
  Edit,
  Book,
  FileText,
  Home,
  LogOut,
  ChevronDown,
  Search,
} from "lucide-react"
import { supabase } from "@/lib/supabase"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
  const [magazines, setMagazines] = useState<any[]>([])
  const [activities, setActivities] = useState<any[]>([])
  const [contentType, setContentType] = useState("magazine")
  const [title, setTitle] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)

  useEffect(() => {
    async function fetchContent() {
      const { data: mags } = await supabase.from("magazines").select("*")
      const { data: acts } = await supabase.from("activities").select("*")
      setMagazines(mags || [])
      setActivities(acts || [])
    }
    fetchContent()
  }, [])

  const handleUpload = async () => {
    const date = new Date().toISOString().split("T")[0]

    if (!title || !file) return alert("يرجى ملء العنوان وتحميل ملف")

    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `${contentType}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from("uploads")
      .upload(filePath, file)

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

    let insertError

    if (contentType === "magazine") {
      const { error } = await supabase.from("magazines").insert({
        title,
        date,
        status: "Published",
        file_url: fileUrl,
        cover_url: coverUrl,
      })
      insertError = error
      if (!error)
        setMagazines([...magazines, { title, date, status: "Published", file_url: fileUrl, cover_url: coverUrl }])
    } else {
      const { error } = await supabase.from("activities").insert({
        title,
        type: "Puzzle",
        date,
        file_url: fileUrl,
      })
      insertError = error
      if (!error) setActivities([...activities, { title, type: "Puzzle", date, file_url: fileUrl }])
    }

    if (insertError) alert("خطأ أثناء الحفظ: " + insertError.message)
    else {
      alert("تمت إضافة المحتوى بنجاح")
      setTitle("")
      setFile(null)
      setCoverFile(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-1 p-6 md:ml-64 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Content Management</h1>

            <div className="flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Content
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Upload New Content</DialogTitle>
                    <DialogDescription>
                      Upload a new magazine issue or activity for kids to enjoy.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="content-type">Content Type</Label>
                      <Select defaultValue="magazine" onValueChange={setContentType}>
                        <SelectTrigger id="content-type">
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="magazine">Magazine Issue</SelectItem>
                          <SelectItem value="activity">Activity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="file">Main File (PDF)</Label>
                      <input
                        id="file-upload"
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="cover">Cover Image</Label>
                      <input
                        id="cover-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-500"
                      onClick={handleUpload}
                    >
                      Upload
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}