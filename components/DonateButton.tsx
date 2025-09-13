import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DonateButton() {
  return (
    <Button className="fitConB fitCon hover:bg-blue-700 text-l md:flex" asChild>
      <Link href="/donate">
        <Heart className="mr-2 h-4 w-4 text-l" />  تبرع لنا
      </Link>
    </Button>
  )
}
