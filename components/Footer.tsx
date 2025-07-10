import React from 'react'
import Image from "next/image"
import DonateButton from '@/components/DonateButton';

import Link from "next/link"



export default function Footer() {
  return (
    <div>
<footer className="bg-[#2a00b8] text-white dirrr py-12 text-sm">
  <div className="container mx-auto px-4 grid md:grid-cols-6 gap-8  items-centre">

    <div>

      <h4 className="font-bold text-l fitCon mb-3">تبرع لنا  </h4>
<DonateButton/>
    </div>


    {/* شركاؤنا */}
    <div className="text-center">
      <h4 className="font-bold text-l mb-3">شركائنا</h4>
      <a href="https://salam-ngo.org/">
        <Image src="/logosalam.png" alt="Salam Logo" width={60} height={60} className="mx-auto rounded-full bg-white p-1" />
      </a>
    </div>



    {/* تواصل معنا */}
    <div>
      <h4 className="font-bold text-l   mb-3">تواصل معنا</h4>
      <div className="flex gap-20 dirrr ">
        <a  href="https://facebook.com"><Image src="/facebook.svg" alt="facebook" width={24} height={24} /></a>
        <a  href="https://instagram.com"><Image src="/instagram.svg" alt="instagram" width={24} height={24} /></a>
        <a  href="https://youtube.com"><Image src="/youtube.svg" alt="youtube" width={24} height={24} /></a>
        <a  href="https://linkedin.com"><Image src="/linkedin.svg" alt="linkedin" width={24} height={24} /></a>
      </div>
      <p className="text-s">office@8kanoon.org</p>
      <p className="text-s">+33759889586</p>
      <p className="text-s">سوريا - دمشق</p>
    </div>


    {/* معلومات عنا */}
    <div>
      <h4 className="font-bold text-l mb-3">معلومات عنا</h4>
      <ul className="space-y-2">
        <li><Link href="/aboutUS">عن المجلة</Link></li>
        <li><Link href="/contact">اتصل بنا</Link></li>
      </ul>
    </div>



    {/* روابط سريعة */}
    <div>
      <h4 className="font-bold text-l mb-3">روابط سريعة</h4>
      <ul className="space-y-2">
        <li><Link href="/about">فريق العمل</Link></li>
        <li><Link href="/aboutUS">عن المجلة</Link></li>
        <li><Link href="/projects">مشاريعنا</Link></li>
        <li><Link href="/editions">إصدارات المجلة</Link></li>
        <li><Link href="/activities">نشاطاتنا</Link></li>
        <li><Link href="/gallery" >معرض الصور</Link></li>
        <li> <Link href="/contact" >اتصل بنا</Link></li>
        <li>   <Link href="/speditions" >خاص بنا</Link>
</li>

              
      </ul>
    </div>


    {/* الشعار والوصف */}

    <div className="col-span-1 text-right space-y-2">
      <Image src="/logo.png" alt="شعار المجلة" width={130} height={100} className="mx-auto" />
      <p className="text-white text-center text-sm leading-snug">
        مجلة تعليمية وترفيهية مخصصة للأطفال<br />
        تهدف إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة
      </p>
    </div>

  </div>

  <div className="text-center text-white border-t border-white mt-10 pt-6 text-s">
    &copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.
  </div>
</footer>

    </div>
  )
}
