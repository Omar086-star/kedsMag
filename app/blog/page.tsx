import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User, ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Blog & News</h1>
            <p className="text-xl text-blue-100">
              Stay updated with our latest news, stories, and humanitarian efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              <div className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="relative h-80 w-full">
                  <Image src="/images/katra-flower-card.jpg" alt="Featured Article" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>May 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Sarah Johnson</span>
                    </div>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">
                    <Link href="/blog/1" className="hover:text-blue-600">
                      New Medical Clinic Opens in Rural Community
                    </Link>
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Our latest healthcare initiative brings essential medical services to an underserved area, providing
                    access to quality healthcare for over 5,000 residents who previously had to travel long distances
                    for medical attention.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Healthcare</Badge>
                    <Badge variant="secondary">Development</Badge>
                    <Badge variant="secondary">Community</Badge>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/blog/1">
                        Read Full Article <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Article Grid */}
              <div className="grid gap-8 sm:grid-cols-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/images/katra-flower-card.jpg"
                        alt={`Article ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>April 28, 2025</span>
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">
                        <Link href={`/blog/${item}`} className="hover:text-blue-600">
                          Annual Fundraising Gala Raises Record Amount
                        </Link>
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">
                        Thanks to our generous donors, we raised over $200,000 to support our humanitarian projects
                        around the world.
                      </p>
                      <Link href={`/blog/${item}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Read More →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next</span>
                  </Button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="space-y-8">
                {/* Search */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input className="pl-10" placeholder="Search articles..." />
                  </div>
                </div>

                {/* Categories */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                        <span>Relief Efforts</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">12</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                        <span>Healthcare</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                        <span>Education</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">15</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                        <span>Community Development</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">10</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                        <span>Volunteer Stories</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">7</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Recent Posts</h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src="/images/katra-flower-card.jpg"
                            alt={`Recent post ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            <Link href="#" className="hover:text-blue-600">
                              Volunteer Spotlight: Meet Sarah
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500">April 10, 2025</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Healthcare</Badge>
                    <Badge variant="secondary">Education</Badge>
                    <Badge variant="secondary">Relief</Badge>
                    <Badge variant="secondary">Water</Badge>
                    <Badge variant="secondary">Children</Badge>
                    <Badge variant="secondary">Refugees</Badge>
                    <Badge variant="secondary">Development</Badge>
                    <Badge variant="secondary">Volunteers</Badge>
                    <Badge variant="secondary">Fundraising</Badge>
                    <Badge variant="secondary">Community</Badge>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
                  <p className="mb-4 text-gray-600">
                    Subscribe to our newsletter to stay updated with our latest news.
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your email address" type="email" required />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
