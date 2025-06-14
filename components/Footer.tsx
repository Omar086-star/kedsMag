import React from 'react'
import Image from "next/image"

import Link from "next/link"



export default function Footer() {
  return (
    <div>
            <footer           className="bg-bx-force  text-white py-12 ">
<div className="container footerRespo mx-auto px-4">
  <div className="grid md:grid-cols-4 gap-8">
  <Link href="/" className="flex items-center justfyLogo gap-3 gap-8">
    <Image src="/logo.png" alt="شعار المجلة" width={170} height={135} className="object-contain" />
  <p className="text-sm text-orange-400 "> ⭐⭐⭐⭐⭐</p>
    <p className="text-white text-fs-force">
                مجلة تعليمية وترفيهية مخصصة للأطفال
                <br/>
                 تهدف  
                إلى تنمية مهاراتهم وقدراتهم بطريقة ممتعة
              </p>
    </Link>
   

    <div>
      <h4 className="  font-bold mb-4 textaurtre">روابط سريعة</h4>
      <ul className="space-y-2">
        <li>
          <Link href="/about" className=" textaurtre1 text-white hover:text-white transition-colors">
          فريق العمل
                    </Link>
        </li>
        <li>
          <Link href="/aboutUS" className=" textaurtre1 text-white hover:text-white transition-colors">
            عن المجلة
          </Link>
        </li>
        <li>
          <Link href="/editions" className=" textaurtre1 text-white hover:text-white transition-colors">
            إصداراتنا
          </Link>
        </li>
        <li>
          <Link href="/activities" className=" textaurtre1 text-white hover:text-white transition-colors">
            الأنشطة
          </Link>
        </li>
        <li>
          <Link href="/contact" className=" textaurtre1 text-white hover:text-white transition-colors">
            اتصل بنا
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="   font-bold text-center mb-4 textaurtre">تابعنا</h4>
      <div className="flex gap-4 footerRespoT">
        <a
          href="https://www.facebook.com/share/15pKYa6LXf/"
          className=" text-fs-force w-15 h-15  flex items-center footerRespoT justify-center hover:bg-blue-700 transition-colors"
        >
              <Image src={"/facebook.svg"} width={50} height={50} alt={'facebook'}  className="object-cover" />

        </a>
        <a
          href="https://www.instagram.com/8kanoon.maga"
          className=" text-fs-force w-15 h-15  flex items-center footerRespoT justify-center hover:bg-pink-700 transition-colors"
        >
                      <Image src={"/instagram.svg"} width={50} height={50} alt={'instagram'}  className="object-cover " />

        </a>
        <a
          href="https://www.youtube.com/@8kanoon-maga"
          className=" text-fs-force w-15 h-15  flex items-center footerRespoT justify-center hover:bg-rose-500 transition-colors"
        >
              <Image src={"/youtube.svg"} width={50} height={50} alt={'youtube'}  className="object-cover" />
              </a>
              <a
          href="https://www.linkedin.com/company/8kanoon-maga"
          className=" text-fs-force w-15 h-15  flex items-center footerRespoT justify-center hover:bg-blue-500 transition-colors"
        >
              <Image src={"/linkedin.svg"} width={50} height={50} alt={'linkedin'}  className="object-cover" />
              </a>
      </div>

      <div className='flexDirR text-center mb-4 textaurtre'>
      <h4 className="   font-bold text-center mb-4 textaurtre">شركائنا</h4>

      <a
          href="https://salam-ngo.org/"
          className=" text-fs-force w-20 h-15   flex items-center footerRespoT flexDirR justify-center bg-orange-400 rounded-full hover:bg-orange-200 transition-colors"
        >

              <Image src={"/logosalam.png"} width={80} height={80} alt={'salam'}  className="object-cover" />

        </a>

      </div>
    </div>

    <div>
      <h4 className=" font-bold mb-4 textaurtre ">اتصل بنا</h4>
      <div className="textaurtre1 space-y-2 text-white">
        <p className="textaurtre1 ">office@8kanoon.org</p>
        <p className="textaurtre1 ">+33759889586</p>
        <p className="textaurtre1 ">سوريا - دمشق</p>
      </div>
    </div>
  </div>

  <div className="border-t text-white mt-8 pt-8 text-center text-white">
    <p >&copy; 2025 مجلة 8 كانون للأطفال. جميع الحقوق محفوظة.</p>
  </div>
</div>
</footer>
    </div>
  )
}
