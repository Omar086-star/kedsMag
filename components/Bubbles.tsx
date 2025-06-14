"use client";

import { useEffect } from "react";

export default function Bubbles() {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;

    const icons = [
      "/8-o.png",
      "/8-p.png",
      // يمكنك إضافة مسارات أخرى لصورك أو أيقوناتك
    ];

    for (let i = 0; i < 80; i++) {
      const isImage = Math.random() < 0.3; // 30% احتمال أن تكون صورة

      const bubble = document.createElement(isImage ? "img" : "div");

      const size = Math.random() * 20 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.position = "absolute";
      bubble.style.bottom = "-100px";
      bubble.style.animation = `rise ${Math.random() * 5 + 5}s ease-in infinite`;
      bubble.style.zIndex = "2";

      if (isImage) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        bubble.setAttribute("src", randomIcon);
        bubble.className = "bubble-icon";
        bubble.style.objectFit = "contain";
      } else {
        bubble.className = "bubble";
        bubble.style.background = Math.random() < 0.5
          ? "rgba(254, 123, 1, 0.4)" // برتقالي
          : "rgba(0, 123, 255, 0.4)"; // أزرق
        bubble.style.borderRadius = "50%";
      }

      container.appendChild(bubble);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div id="bubble-container" className="absolute inset-0 z-2 pointer-events-none" />;
}
