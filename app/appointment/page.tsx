"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, Mail, Phone, MessageSquare, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                DC
              </div>
              <span className="text-xl font-bold text-gray-900">Coach Digital</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              À propos
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/association" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Création d'association
            </Link>
            <Link href="/courses" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Espace cours
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services
              </Link>
              <h1 className="mb-4 text-4xl font-bold text-gray-900">Prendre rendez-vous</h1>
              <p className="text-xl text-gray-600">
                Réservez votre consultation et commencez votre transformation dès aujourd'hui
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Formulaire de réservation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Informations personnelles</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom *</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input id="phone" type="tel" />
                          </div>
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Type de service</h3>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service souhaité *</Label>
                          <Select>
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="coaching">Coaching personnel</SelectItem>
                              <SelectItem value="formation">Formation numérique</SelectItem>
                              <SelectItem value="economie">Cours d'économie</SelectItem>
                              <SelectItem value="administratif">Accompagnement administratif</SelectItem>
                              <SelectItem value="consultation">Consultation gratuite</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Date and Time */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Date et heure</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="date">Date souhaitée *</Label>
                            <Input
                              id="date"
                              type="date"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Heure préférée *</Label>
                            <Select value={selectedTime} onValueChange={setSelectedTime}>
                              <SelectTrigger id="time">
                                <SelectValue placeholder="Choisir un créneau" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="09:00">09:00</SelectItem>
                                <SelectItem value="10:00">10:00</SelectItem>
                                <SelectItem value="11:00">11:00</SelectItem>
                                <SelectItem value="14:00">14:00</SelectItem>
                                <SelectItem value="15:00">15:00</SelectItem>
                                <SelectItem value="16:00">16:00</SelectItem>
                                <SelectItem value="17:00">17:00</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">Message (optionnel)</Label>
                        <Textarea
                          id="message"
                          placeholder="Décrivez brièvement vos objectifs ou questions..."
                          rows={4}
                        />
                      </div>

                      {/* Submit */}
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                        <Calendar className="mr-2 h-5 w-5" />
                        Confirmer le rendez-vous
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        Vous recevrez un email de confirmation avec les détails du rendez-vous.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Available Times */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Créneaux disponibles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Cette semaine</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                          <span className="text-sm">Lundi 27 Jan</span>
                          <span className="text-sm text-green-600">3 créneaux</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                          <span className="text-sm">Mercredi 29 Jan</span>
                          <span className="text-sm text-green-600">2 créneaux</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                          <span className="text-sm">Vendredi 31 Jan</span>
                          <span className="text-sm text-yellow-600">1 créneau</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Besoin d'aide ?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-gray-600">contact@coach-digital.fr</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Téléphone</div>
                        <div className="text-sm text-gray-600">+33 1 23 45 67 89</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Réponse</div>
                        <div className="text-sm text-gray-600">Sous 24h maximum</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing Reminder */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Première consultation</h4>
                    <p className="text-sm text-blue-700">
                      Votre première consultation de 30 minutes est entièrement gratuite et sans engagement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  DC
                </div>
                <span className="text-xl font-bold">Coach Digital</span>
              </div>
              <p className="mt-4 text-gray-400">
                Votre partenaire pour le développement personnel et la transformation numérique.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Coaching personnel
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Formation numérique
                  </Link>
                </li>
                <li>
                  <Link href="/association" className="text-gray-400 hover:text-white">
                    Création d'association
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Ressources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white">
                    Vidéos
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white">
                    Supports PDF
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>contact@coach-digital.fr</p>
                <p>+33 1 23 45 67 89</p>
                <p>Paris, France</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Coach Digital. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
