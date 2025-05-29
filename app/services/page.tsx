import Link from "next/link"
import { Calendar, ArrowRight, BookOpen, Users, Award, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium text-blue-600">
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
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/appointment">
                <Calendar className="mr-2 h-4 w-4" /> Prendre RDV
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">Mes Services</h1>
              <p className="text-xl text-gray-600">
                Un accompagnement personnalisé pour votre développement personnel et professionnel
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Coaching Personnel */}
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Coaching Personnel</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Accompagnement individuel pour développer votre potentiel, clarifier vos objectifs et surmonter les
                    obstacles qui vous freinent.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Définition d'objectifs personnels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Gestion du stress et des émotions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Développement de la confiance en soi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Amélioration des relations interpersonnelles</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-blue-600">80€/séance</div>
                    <div className="text-sm text-gray-500">Séance de 1h - Première consultation gratuite</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/appointment">Réserver une séance</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Formation Numérique */}
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-blue-600"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl">Formation Numérique</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Maîtrisez les outils numériques essentiels et développez votre présence digitale pour optimiser
                    votre productivité et votre visibilité.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Suite Office (Word, Excel, PowerPoint)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Outils collaboratifs (Teams, Slack, Notion)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Réseaux sociaux professionnels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Automatisation des tâches</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-blue-600">120€/session</div>
                    <div className="text-sm text-gray-500">Session de 2h - Support inclus</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/appointment">Planifier une formation</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Cours d'Économie */}
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Cours d'Économie</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Cours particuliers et formations en économie, gestion d'entreprise et analyse financière adaptés à
                    votre niveau et vos objectifs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Microéconomie et macroéconomie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Gestion financière</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Analyse de marché</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Business plan et stratégie</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-blue-600">60€/heure</div>
                    <div className="text-sm text-gray-500">Cours particulier - Supports fournis</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/appointment">Réserver un cours</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Accompagnement Administratif */}
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Accompagnement Administratif</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Aide complète pour vos démarches administratives, création d'entreprise ou d'association, et
                    structuration de vos projets.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Création d'entreprise/association</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rédaction de statuts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Démarches légales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Recherche de financements</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-blue-600">150€/dossier</div>
                    <div className="text-sm text-gray-500">Forfait complet - Suivi inclus</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/association">En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Formules d'accompagnement</h2>
              <p className="mb-12 text-lg text-gray-600">
                Des packages complets pour un suivi personnalisé sur la durée
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Starter */}
              <Card className="border-2 border-gray-200 hover:border-blue-200 transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">299€</div>
                  <div className="text-sm text-gray-500">3 séances de coaching</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">3 séances de coaching (1h chacune)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Bilan de compétences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Plan d'action personnalisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Support email pendant 1 mois</span>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/appointment">Choisir Starter</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="border-2 border-blue-500 hover:border-blue-600 transition-all relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Populaire</span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">799€</div>
                  <div className="text-sm text-gray-500">3 mois d'accompagnement</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">8 séances de coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">2 formations numériques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Accès espace cours en ligne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Support prioritaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Suivi personnalisé 3 mois</span>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/appointment">Choisir Premium</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Elite */}
              <Card className="border-2 border-gray-200 hover:border-blue-200 transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Elite</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">1499€</div>
                  <div className="text-sm text-gray-500">6 mois d'accompagnement</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">15 séances de coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Formations illimitées</span>

                    <span className="text-sm">Formations illimitées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Accompagnement projet complet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Création association incluse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Appels illimités</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Garantie résultats</span>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/appointment">Choisir Elite</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Comment ça marche ?</h2>
              <p className="mb-12 text-lg text-gray-600">Un processus simple et efficace pour votre accompagnement</p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  1
                </div>
                <h3 className="mb-2 text-lg font-bold">Consultation gratuite</h3>
                <p className="text-gray-600">Échange de 30 minutes pour comprendre vos besoins et objectifs</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  2
                </div>
                <h3 className="mb-2 text-lg font-bold">Plan personnalisé</h3>
                <p className="text-gray-600">Création d'un programme sur mesure adapté à votre situation</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  3
                </div>
                <h3 className="mb-2 text-lg font-bold">Accompagnement</h3>
                <p className="text-gray-600">Séances régulières et suivi continu de vos progrès</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  4
                </div>
                <h3 className="mb-2 text-lg font-bold">Résultats</h3>
                <p className="text-gray-600">Atteinte de vos objectifs et autonomie dans vos projets</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Prêt à commencer votre transformation ?</h2>
              <p className="mb-8 text-lg text-blue-100">
                Réservez votre consultation gratuite et découvrez comment je peux vous aider à atteindre vos objectifs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/appointment">
                    <Calendar className="mr-2 h-5 w-5" /> Consultation gratuite
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/contact">
                    Me contacter <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
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
