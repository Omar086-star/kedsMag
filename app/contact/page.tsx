"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import FloatingBox from "@/components/FloatingBox"
import { Send } from "lucide-react"
import { useI18n } from "@/components/I18nProvider"

export default function ContactPage() {
  const { tr } = useI18n()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from("contact_messages").insert([{ ...formData }])

    if (error) {
      alert(tr.contactPage.sentErr)
      console.error("Error sending message:", error)
    } else {
      alert(tr.contactPage.sentOk)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      <section className="py-16 bg-gradient-to-br from-blue-50 violetCustom">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-center text-4xl font-bold violetCustom mb-10">
            {tr.contactPage.title}
          </h1>

          <Card className="border-4 border-purple-200 bg-white shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="violetCustom font-bold">
                      {tr.contactPage.firstName}
                    </Label>
                    <Input
                      id="firstName"
                      required
                      onChange={handleChange}
                      value={formData.firstName}
                      className="border-2 border-purple-200 focus:border-purple-500 rounded-lg p-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="violetCustom font-bold">
                      {tr.contactPage.lastName}
                    </Label>
                    <Input
                      id="lastName"
                      required
                      onChange={handleChange}
                      value={formData.lastName}
                      className="border-2 border-purple-200 focus:border-purple-500 rounded-lg p-3"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="violetCustom font-bold">
                    {tr.contactPage.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="border-2 border-purple-200 focus:border-purple-500 rounded-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="violetCustom font-bold">
                    {tr.contactPage.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    onChange={handleChange}
                    value={formData.phone}
                    className="border-2 border-purple-200 focus:border-purple-500 rounded-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="violetCustom font-bold">{tr.contactPage.subject}</Label>
                  <Select onValueChange={handleSelect} value={formData.subject}>
                    <SelectTrigger className="border-2 border-purple-200 focus:border-purple-500 rounded-lg p-3">
                      <SelectValue placeholder={tr.contactPage.subject} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{tr.contactPage.subjects.general}</SelectItem>
                      <SelectItem value="subscription">{tr.contactPage.subjects.subscription}</SelectItem>
                      <SelectItem value="activities">{tr.contactPage.subjects.activities}</SelectItem>
                      <SelectItem value="partnership">{tr.contactPage.subjects.partnership}</SelectItem>
                      <SelectItem value="feedback">{tr.contactPage.subjects.feedback}</SelectItem>
                      <SelectItem value="technical">{tr.contactPage.subjects.technical}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="violetCustom font-bold">
                    {tr.contactPage.message}
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    onChange={handleChange}
                    value={formData.message}
                    placeholder={tr.contactPage.placeholderMessage}
                    className="border-2 border-purple-200 focus:border-purple-500 rounded-lg p-3"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg py-4 text-lg font-bold shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {tr.contactPage.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <FloatingBox />
      <Footer />
    </div>
  )
}
