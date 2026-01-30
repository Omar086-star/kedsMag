// components/new-card.tsx

import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  date: string
  image: string
  excerpt: string
}

export function NewsCard({ title, date, image, excerpt }: NewsCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src="/images/katra-flower-card.jpg"
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-3 flex items-center text-sm text-gray-500">
          <Calendar className="mr-1 h-4 w-4" />
          {date}
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{excerpt}</p>
        <Link href="/blog/1" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          Read More →
        </Link>
      </CardContent>
    </Card>
  )
}
