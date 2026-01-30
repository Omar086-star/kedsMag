"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import LangSwitcher from "@/components/LangSwitcher"
import { useI18n } from "@/components/I18nProvider"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { tr } = useI18n()

  useEffect(() => {
    setMounted(true)
  }, [])

  // ✅ يمنع Hydration mismatch
  if (!mounted) return null

  return (
    <header className="sticky top-0 z-40 bg-[#3b00cc] backdrop-blur-sm border-purple-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks(tr, () => setMenuOpen(false))}
            <LangSwitcher className="ml-2" />
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="text-white w-8 h-8" />
              ) : (
                <Menu className="text-white w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-[#3b00cc] text-white px-6 py-4 space-y-4 shadow-lg">
            {navLinks(tr, () => setMenuOpen(false))}
            <LangSwitcher className="w-full" />
            <Link href="/activities#activitéAvenire" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6 py-2 font-bold shadow-lg">
                {tr.nav.upcoming}
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

function navLinks(tr: any, closeMenu: () => void) {
  return (
    <>
      <Link href="/" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.home}
      </Link>
      <Link href="/about" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.team}
      </Link>
      <Link href="/aboutUS" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.about}
      </Link>
      <Link href="/projects" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.projects}
      </Link>
      <Link href="/editions" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.editions}
      </Link>
      <Link href="/activities" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.activities}
      </Link>
      <Link href="/gallery" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.gallery}
      </Link>
      <Link href="/contact" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.contact}
      </Link>
      <Link href="/speditions" onClick={closeMenu} className="hover:text-orange-300 textreddd transition-colors">
        {tr.nav.special}
      </Link>
    </>
  )
}
