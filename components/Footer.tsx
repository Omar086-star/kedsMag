"use client"

import React from "react"
import Image from "next/image"
import DonateButton from "@/components/DonateButton"
import Link from "next/link"
import { useI18n } from "@/components/I18nProvider"

export default function Footer() {
  const { tr } = useI18n()

  return (
    <footer className="bg-[#2a00b8] text-white dirrr py-12 text-l m">
      <div className="container mx-auto px-4 grid md:grid-cols-6 gap-8 items-centre">
        {/* Donate */}
        <div>
          <h4 className="font-bold text-2xl sccalls fitCon mb-3">{tr.footer.donateTitle}</h4>
          <DonateButton />
        </div>

        {/* Partners */}
        <div className="text-center">
          <h4 className="font-bold text-2xl sccalls gap-5 mb-3">{tr.footer.partnersTitle}</h4>
          <a href="https://salam-ngo.org/">
            <Image
              src="/logosalam.png"
              alt="Salam NGO"
              width={100}
              height={80}
              className="mx-auto sccall sccallsx p-2"
            />
          </a>
          <a href="https://syria-rebuild.com/ar/">
            <Image
              src="/logobw2.png"
              alt="Syria Rebuild"
              width={100}
              height={80}
              className="mx-auto sccall sccallsx p-2"
            />
          </a>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-2xl sccalls mb-3">{tr.footer.contactTitle}</h4>
          <div className="flex conimggap gap-5">
            <a href="https://facebook.com" className="sccall conimg">
              <Image src="/facebook.svg" alt="facebook" width={45} height={34} />
            </a>
            <a href="https://instagram.com" className="sccall conimg">
              <Image src="/instagram.svg" alt="instagram" width={45} height={35} />
            </a>
            <a href="https://youtube.com" className="sccall conimg">
              <Image src="/youtube.svg" alt="youtube" width={45} height={35} />
            </a>
            <a href="https://linkedin.com" className="sccall conimg">
              <Image src="/linkedin.svg" alt="linkedin" width={45} height={35} />
            </a>
          </div>
          <p className="text-l">{tr.footer.email}</p>
          <p className="text-l">{tr.footer.phone}</p>
          <p className="text-l">{tr.footer.location}</p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-2xl sccalls mb-3">{tr.footer.aboutTitle}</h4>
          <ul className="space-y-2">
            <li><Link href="/aboutUS">{tr.nav.about}</Link></li>
            <li><Link href="/contact">{tr.nav.contact}</Link></li>

<li><Link href="/MentionsLegales"> LN </Link></li>
<li><Link href="/privacy"> privacy</Link></li>
<li><Link href="/cookies"> cookies</Link></li>
<li><Link href="/agb"> agb</Link></li>
<li><Link href="/faq"> faq</Link></li>



          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl sccalls mb-3">{tr.footer.quickLinksTitle}</h4>
          <ul className="space-y-2">
            <li><Link href="/about">{tr.nav.team}</Link></li>
            <li><Link href="/aboutUS">{tr.nav.about}</Link></li>
            <li><Link href="/projects">{tr.nav.projects}</Link></li>
            <li><Link href="/editions">{tr.nav.editions}</Link></li>
            <li><Link href="/activities">{tr.nav.activities}</Link></li>
            <li><Link href="/gallery">{tr.nav.gallery}</Link></li>
            <li><Link href="/contact">{tr.nav.contact}</Link></li>
            <li><Link href="/speditions">{tr.nav.special}</Link></li>
          </ul>
        </div>

        {/* Logo & description */}
        <div className="col-span-1 text-right space-y-2">
          <Image src="/logo.png" alt="Logo" width={130} height={100} className="mx-auto" />
          <p className="text-white sccalls text-center text-lm leading-snug whitespace-pre-line">
            {tr.footer.description}
          </p>
        </div>
      </div>

      <Link href={"/MentionsLegales"}>
        <div className="text-center text-white border-t border-white mt-10 pt-6 text-l">
          {tr.footer.rights}
        </div>
      </Link>
    </footer>
  )
}
