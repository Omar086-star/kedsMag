"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Bubbles from "@/components/Bubbles"
import FloatingBox from "@/components/FloatingBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useI18n } from "@/components/I18nProvider"

type TeamKey =
  | "generalSupervisor"
  | "editorInChief"
  | "designLead"
  | "psychSupportLead"
  | "pr"
  | "communications"
  | "techOffice"
  | "teamLead"
  | "proofreading"
  | "digitalMarketing"
  | "hr"
  | "hrAssistant"
  | "editor1"
  | "editor2"
  | "editor3"
  | "psych1"
  | "psych2"
  | "psych3"
  | "designer1"
  | "designer2"
  | "designer3"

export default function AboutPage() {
  const { tr } = useI18n()

  const team: Array<{
    key: TeamKey
    image: string
  }> = [
    { key: "generalSupervisor", image: "/omarmu.png" },
    { key: "editorInChief", image: "/walaa.png" },
    { key: "designLead", image: "/mohammad.png" },
    { key: "psychSupportLead", image: "/omarsh.png" },
    { key: "pr", image: "/aya.png" },
    { key: "communications", image: "/firas.png" },
    { key: "techOffice", image: "/bashier.png" },
    { key: "teamLead", image: "/farah.png" },
    { key: "proofreading", image: "/zahraa.png" },
    { key: "digitalMarketing", image: "/batoul.png" },
    { key: "hr", image: "/ansam.png" },
    { key: "hrAssistant", image: "/israa.png" },
    { key: "editor1", image: "/dyala.png" },
    { key: "editor2", image: "/haifa.png" },
    { key: "editor3", image: "/eman.png" },
    { key: "psych1", image: "/doha.png" },
    { key: "psych2", image: "/fayrouz.png" },
    { key: "psych3", image: "/zina.png" },
    { key: "designer1", image: "/inas.png" },
    { key: "designer2", image: "/nour.png" },
    { key: "designer3", image: "/fatima.png" },
  ]

  const sections = [
    team.slice(0, 1),
    team.slice(1, 4),
    team.slice(4, 8),
    team.slice(8, 12),
    team.slice(12, 15),
    team.slice(15, 18),
    team.slice(18, 22),
  ]

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header />

      <div className="mx-auto relative min-h-screen">
        <div className="relative bgi w-full h-full object-cover">
          <div className="relative bg-[#0e0e52]">
            <div className="bgin max-w-screen">
              <Bubbles />
              <h2 className="text-center w-1000g mbot font-bold">{tr.teamPages.title}</h2>
              <p className="text-center text-white fsrespo mbot ttrs">{tr.teamPages.subtitle}</p>
            </div>
          </div>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-6 mb-12">
            {section.map((member, index) => {
              const t = tr.teamPages.members[member.key]
              return (
                <Card
                  key={index}
                  className="bg-none-force flex flex-col items-center gap-4 w-[280px] p-6 rounded-lg"
                >
                  <Image
                    src={member.image}
                    alt={t.name}
                    width={160}
                    height={200}
                    className="w-full h-50 object-containt coverPersonalite hover:animate-sway rounded-md"
                  />
                  <CardContent className="text-center space-y-1">
                    <h3 className="text-lg text-fs-force font-bold text-force">{t.name}</h3>
                    <p className="c-bx-force font-medium">{t.role}</p>
                    <p className="c-bx-force text-sm leading-relaxed">{t.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ))}

        <FloatingBox />
        <Footer />
      </div>
    </div>
  )
}
