// components/project-card.tsx

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
  progress: number
  goal: number
  raised: number
}

export function ProjectCard({ title, category, image, description, progress, goal, raised }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src="/images/katra-flower-card.jpg"
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-blue-600">{category}</Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="mb-2 mt-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">${raised.toLocaleString()}</span>
            <span className="text-gray-500">Goal: ${goal.toLocaleString()}</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full rounded-full bg-blue-600" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <div className="flex w-full items-center justify-between">
          <Link href="/projects/1" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Learn More
          </Link>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/donate">
              Donate <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
