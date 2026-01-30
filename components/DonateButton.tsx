"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/I18nProvider"

export default function DonateButton() {
  const { tr } = useI18n()

  return (
    <Button className="fitConB fitCon hover:bg-blue-700 text-l md:flex" asChild>
      <Link href="/donate">
        <Heart className="mr-2 h-4 w-4 text-l" /> {tr.floating.btnDonate}
      </Link>
    </Button>
  )
}
