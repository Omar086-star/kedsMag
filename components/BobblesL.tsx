"use client";

import { useEffect } from "react";

export default function Bubbles() {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;

    const icons = ["/8-p.png", "/8-p.png"];

    for (let i = 0; i < 80; i++) {
      const isImage = Math.random() < 0.3;

      const bubble = document.createElement(isImage ? "img" : "div");
      const size = Math.random() * 20 + 10;

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.top = Math.random() * 100 + "vh";
      bubble.style.position = "absolute";
      bubble.style.zIndex = "2";

      const fromLeft = Math.random() < 0.5;
      bubble.style[fromLeft ? "left" : "right"] = "-50px";

      const animName = fromLeft ? "flyRight" : "flyLeft";
      const duration = (Math.random() * 5 + 5).toFixed(2);
      bubble.style.animation = `${animName} ${duration}s ease-in infinite`;

      if (isImage) {
        const src = icons[Math.floor(Math.random() * icons.length)];
        bubble.setAttribute("src", src);
        bubble.className = "bubble-icon";
        bubble.style.objectFit = "contain";
      } else {
        bubble.className = "bubble";
        bubble.style.background = Math.random() < 0.5
          ? "rgba(0, 0, 0, 0.4)"
          : "rgb(252, 0, 130)";
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
