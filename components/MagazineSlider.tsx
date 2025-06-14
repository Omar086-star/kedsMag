"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [

 
  "/furat.png",
  "/canona.png",
  "/reda.png",
  "/phys.png",
  "/cemc.png",

];

export default function MagazineSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // تبديل كل 10 ثواني

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center py-10">
      <div className="relative  bot-55 widthwithHover rounded-3xl p-8  transform hover:rotate-2 transition-transform duration-300">
        <Image
          src={images[currentIndex]}
          alt={`غلاف المجلة رقم ${currentIndex + 1}`}
          width={400}
          height={500}
          className="w-full widthcent h-auto rounded-2xl shadow-lg transition-all duration-1000 ease-in-out"
        />
        <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
          جديد!
        </div>
      </div>
    </div>
  );
}
