import Image from "next/image"
import { Heart, Users, Globe, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Join Our Mission</h1>
            <p className="text-xl text-blue-100">
              Discover how you can contribute to our humanitarian efforts and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Ways to Contribute</h2>
            <p className="mb-12 text-lg text-gray-600">
              There are many ways you can support our mission and help those in need.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-200 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Donate</h3>
                <p className="mb-4 text-gray-600">
                  Your financial contribution helps fund our humanitarian projects and provides essential resources to
                  those in need.
                </p>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="/donate">Donate Now</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-200 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Volunteer</h3>
                <p className="mb-4 text-gray-600">
                  Share your time, skills, and passion by volunteering with our team, either locally or internationally.
                </p>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700">Apply Below</Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-200 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Partner With Us</h3>
                <p className="mb-4 text-gray-600">
                  Organizations can collaborate with us on projects, provide in-kind donations, or offer professional
                  services.
                </p>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Volunteer Opportunities</h2>
            <p className="mb-12 text-lg text-gray-600">
              Explore the different ways you can volunteer with Qatra and make a meaningful impact.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Field Volunteers</h3>
              <p className="text-gray-600">
                Work directly with communities in need, assisting with project implementation and service delivery.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Medical Professionals</h3>
              <p className="text-gray-600">
                Provide healthcare services in underserved areas or during emergency response operations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Mental Health Specialists</h3>
              <p className="text-gray-600">
                Offer psychological support and counseling to individuals affected by trauma and hardship.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Administrative Support</h3>
              <p className="text-gray-600">
                Assist with office tasks, data management, and organizational operations at our headquarters.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Communications & Media</h3>
              <p className="text-gray-600">
                Help share our story through content creation, social media management, and public relations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Fundraising & Events</h3>
              <p className="text-gray-600">
                Support our fundraising initiatives, organize events, and help secure resources for our projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Volunteer Application</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to express your interest in volunteering with Qatra.
              </p>
            </div>
            <form className="space-y-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>

              <div className="space-y-2">
                <Label>Areas of Interest</Label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-field" />
                    <label htmlFor="interest-field" className="text-sm">
                      Field Work
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-medical" />
                    <label htmlFor="interest-medical" className="text-sm">
                      Medical Services
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-mental" />
                    <label htmlFor="interest-mental" className="text-sm">
                      Mental Health Support
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-admin" />
                    <label htmlFor="interest-admin" className="text-sm">
                      Administrative Support
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-comms" />
                    <label htmlFor="interest-comms" className="text-sm">
                      Communications & Media
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-fundraising" />
                    <label htmlFor="interest-fundraising" className="text-sm">
                      Fundraising & Events
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Availability</Label>
                <RadioGroup defaultValue="part-time">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time">Full-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="part-time" id="part-time" />
                    <Label htmlFor="part-time">Part-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekends" id="weekends" />
                    <Label htmlFor="weekends">Weekends only</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills & Experience</Label>
                <Textarea
                  id="skills"
                  placeholder="Tell us about your relevant skills, experience, and qualifications"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation</Label>
                <Textarea id="motivation" placeholder="Why do you want to volunteer with Qatra?" rows={4} required />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and volunteer code of conduct.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900">Volunteer Testimonials</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Volunteer"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Medical Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Volunteering with Qatra has been one of the most rewarding experiences of my life. The impact we've
                made on communities in need is truly incredible."
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Volunteer"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Ahmed Hassan</h3>
                  <p className="text-sm text-gray-500">Field Coordinator</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with Qatra has allowed me to use my skills to make a real difference. The team is dedicated and
                passionate about creating positive change."
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Volunteer"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Maria Rodriguez</h3>
                  <p className="text-sm text-gray-500">Communications Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Being part of the Qatra team has given me the opportunity to use my communication skills for a
                meaningful cause. It's been an incredible journey."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Have Questions?</h2>
              <p className="mb-8 text-gray-600">
                If you have any questions about volunteering or other ways to get involved, please don't hesitate to
                contact us.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <a
                  href="mailto:volunteer@qatra.org"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Mail className="h-5 w-5" /> volunteer@qatra.org
                </a>
                <a href="tel:+9611234567" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5" /> +961 1 234 567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  )
}
