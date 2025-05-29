import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export function DonateButton() {
  return (
    <Button className="hidden bg-blue-600 hover:bg-blue-700 md:flex" asChild>
      <Link href="/donate">
        <Heart className="mr-2 h-4 w-4" /> Donate Now
      </Link>
    </Button>
  )
}
