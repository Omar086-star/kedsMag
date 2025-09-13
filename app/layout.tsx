import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import AITranslateProvider from "@/components/AITranslateProvider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "مجلة 8 كانون للأطفال",
  description: "مجلة تعليمية ترفيهية للأطفال...",
  generator: "mulla-web.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-white text-gray-800">
        <AITranslateProvider>
            <main>{children}</main>

        </AITranslateProvider>
      </body>
    </html>
  );
}
