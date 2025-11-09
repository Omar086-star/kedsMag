import React from 'react'
import Image from "next/image"
import DonateButton from '@/components/DonateButton';

import Link from "next/link"



export default function Footer() {
  return (
    <div>
<footer className="bg-[#2a00b8] text-white dirrr py-12 text-l m">
  <div className="container mx-auto px-4 grid md:grid-cols-6 gap-8  items-centre">

    <div>

      <h4 className="font-bold text-2xl sccalls fitCon mb-3">تبرع لنا  </h4>
<DonateButton/>
    </div>


    {/* شركاؤنا */}
    <div className="text-center  ">
      <h4 className="font-bold text-2xl  sccalls gap-5 mb-3">شركائنا</h4>
      <a href="https://salam-ngo.org/">
        <Image src="/logosalam.png" alt="  سلام لتنمية المجتمعية" width={100} height={80} className="mx-auto sccall sccallsx  p-2" />
      </a>
            <a href="https://syria-rebuild.com/ar/">
        <Image src="/logobw2.png" alt="  قنوات إعادة الإعمار"  width={100} height={80} className="mx-auto sccall sccallsx   p-2" />
      </a>
    </div>



    {/* تواصل معنا */}
    <div className=''>
      <h4 className="font-bold text-2xl sccalls mb-3">تواصل معنا</h4>
      <div className=" flex  conimggap gap-5  ">
        <a  href="https://facebook.com" className='sccall conimg'><Image src="/facebook.svg" alt="facebook" width={45} height={34} /> </a>
        <a  href="https://instagram.com" className='sccall conimg' ><Image src="/instagram.svg" alt="instagram" width={45} height={35} /></a>
        <a  href="https://youtube.com" className='sccall conimg' ><Image src="/youtube.svg" alt="youtube" width={45} height={35} /></a>
        <a  href="https://linkedin.com" className='sccall conimg'><Image src="/linkedin.svg" alt="linkedin" width={45} height={35} /></a>
      </div>
      <p className="text-l">office@8kanoon.org</p>
      <p className="text-l">+33759889586</p>
      <p className="text-l">سوريا - دمشق</p>
    </div>


    {/* معلومات عنا */}
    <div>
      <h4 className="font-bold text-2xl sccalls mb-3">معلومات عنا</h4>
      <ul className="space-y-2">
        <li><Link href="/aboutUS">عن المجلة</Link></li>
        <li><Link href="/contact">اتصل بنا</Link></li>
       <li>   <Link href="/volunteer" >تطوع معنا  </Link> </li>

      </ul>
    </div>



    {/* روابط سريعة */}
    <div>
      <h4 className="font-bold text-2xl sccalls mb-3">روابط سريعة</h4>
      <ul className="space-y-2">
        <li><Link href="/about">فريق العمل</Link></li>
        <li><Link href="/aboutUS">عن المجلة</Link></li>
        <li><Link href="/projects">مشاريعنا</Link></li>
        <li><Link href="/editions">إصدارات المجلة</Link></li>
        <li><Link href="/activities">نشاطاتنا</Link></li>
        <li><Link href="/gallery" >معرض الصور</Link></li>
        <li> <Link href="/contact" >اتصل بنا</Link></li>
        <li>   <Link href="/speditions" >خاص بنا</Link></li>

              
      </ul>
    </div>


    {/* الشعار والوصف */}

    <div className="col-span-1 text-right space-y-2">
      <Image src="/logo.png" alt="شعار المجلة" width={130} height={100} className="mx-auto" />
      <p className="text-white sccalls text-center text-lm leading-snug">
        مجلة تعليمية وترفيهية مخصصة للأطفال<br />
        تهدف إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة
      </p>
    </div>

  </div>
 <Link href={'/MentionsLegales'}>
   <div className="text-center text-white border-t border-white mt-10 pt-6 text-l">

    &copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.

  </div>
 </Link>

</footer>

    </div>
  )
}
