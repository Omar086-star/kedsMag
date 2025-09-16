// "use client"
// import { useEffect, useMemo, useState } from "react"
// import type React from "react"

// import { collectTextNodes, type TextNodeRef } from "@/utils/collectTextNodes"

// type Lang = "ar" | "fr" | "en" | "tr" | "de" | "es"
// const DEFAULT_LANG: Lang = "ar"

// function dirOf(lang: Lang) {
//   return lang === "ar" ? "rtl" : "ltr"
// }

// function chunkStrings(items: string[], maxLen = 1200): string[][] {
//   const result: string[][] = []
//   let current: string[] = []
//   let size = 0
//   for (const s of items) {
//     const len = s.length
//     if (size + len > maxLen && current.length) {
//       result.push(current)
//       current = [s]
//       size = len
//     } else {
//       current.push(s)
//       size += len
//     }
//   }
//   if (current.length) result.push(current)
//   return result
// }

// function getCache(key: string) {
//   try {
//     return localStorage.getItem(key) || ""
//   } catch {
//     return ""
//   }
// }
// function setCache(key: string, val: string) {
//   try {
//     localStorage.setItem(key, val)
//   } catch {}
// }

// export default function AITranslateProvider({ children }: { children: React.ReactNode }) {
//   const [lang, setLang] = useState<Lang>(() => {
//     if (typeof window !== "undefined") {
//       return (localStorage.getItem("ui-lang") as Lang) || DEFAULT_LANG
//     }
//     return DEFAULT_LANG
//   })
//   const [busy, setBusy] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   // حدّث خصائص html
//   useEffect(() => {
//     document.documentElement.lang = lang
//     document.documentElement.dir = dirOf(lang)
//     localStorage.setItem("ui-lang", lang)
//   }, [lang])

//   // ترجمة كاملة للصفحة عند تغيير اللغة
//   useEffect(() => {
//     let cancelled = false

//     async function translateAll() {
//       setError(null)

//       // حدد الجذر: إن وجد <main> استعمله، وإلا استخدم body
//       const root = (document.querySelector("main") as HTMLElement) ?? document.body

//       if (lang === "ar") {
//         // رجّع النصوص الأصلية
//         const nodes = collectTextNodes(root)
//         nodes.forEach(({ node }) => {
//           const orig = (node as any).__origText as string | undefined
//           if (orig) node.nodeValue = orig
//         })
//         return
//       }

//       const nodes: TextNodeRef[] = collectTextNodes(root)
//       if (nodes.length === 0) return

//       setBusy(true)

//       // خزّن النسخة الأصلية مرة واحدة
//       nodes.forEach(({ node }) => {
//         if (!(node as any).__origText) (node as any).__origText = node.nodeValue || ""
//       })

//       const texts = nodes.map((n) => n.original)

//       // جرّب الكاش أولاً
//       const translated: (string | null)[] = texts.map((t) => {
//         const cached = getCache(`${lang}:${t}`)
//         return cached || null
//       })

//       // حضّر العناصر غير المترجمة
//       const toTranslateIdx: number[] = []
//       const toTranslate: string[] = []
//       translated.forEach((val, i) => {
//         if (!val) {
//           toTranslateIdx.push(i)
//           toTranslate.push(texts[i])
//         }
//       })

//       try {
//         const batches = chunkStrings(toTranslate, 1400)
//         let ptr = 0

//         for (const batch of batches) {
//           if (cancelled) return

//           const res = await fetch("/api/translate", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ chunks: batch, targetLang: lang }),
//           })

//           const data = await res.json()
//           if (!res.ok) throw new Error(data?.error || "Translation failed")

//           const arr: string[] = data.translations
//           for (let j = 0; j < arr.length; j++) {
//             const original = batch[j]
//             const translatedText = arr[j]
//             const globalIndex = toTranslateIdx[ptr + j]
//             translated[globalIndex] = translatedText
//             setCache(`${lang}:${original}`, translatedText)
//           }
//           ptr += batch.length

//           // طبّق تدريجيًا
//           nodes.forEach((ref, k) => {
//             const val = translated[k]
//             if (val) ref.node.nodeValue = val
//           })
//         }
//       } catch (e: any) {
//         setError(e.message || "Translation error")
//       } finally {
//         setBusy(false)
//       }
//     }

//     translateAll()
//     return () => {
//       cancelled = true
//     }
//   }, [lang])

//   const UI = useMemo(
//     () => (
//       <div className="fixed bottom-4 right-4 z-50 flex gap-2 items-center bg-white/90 backdrop-blur border rounded-full px-3 py-2 shadow">
//         <select
//           value={lang}
//           onChange={(e) => setLang(e.target.value as any)}
//           className="border rounded px-2 py-1"
//           aria-label="بدّل اللغة"
//         >
//           <option value="ar">ar</option>
//           <option value="fr">fr</option>
//           <option value="en">en</option>
//           <option value="tr">tr</option>
//           <option value="de">de</option>
//           <option value="es">es</option>
//         </select>
//         {busy && <span className="text-sm">…عم نترجم</span>}
//         {error && <span className="text-sm text-red-600">{error}</span>}
//       </div>
//     ),
//     [lang, busy, error],
//   )

//   return (
//     <>
//       {UI}
//       {children}
//     </>
//   )
// }


// components/AITranslateProvider.tsx
"use client";

import { useEffect, useState } from "react";
import { collectTextNodes, type TextNodeRef } from "@/utils/collectTextNodes";

type Lang = "ar" | "fr";
const DEFAULT_LANG: Lang = "ar";

function dirOf(lang: Lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

function chunkStrings(items: string[], maxLen = 1200): string[][] {
  const result: string[][] = [];
  let current: string[] = [];
  let size = 0;
  for (const s of items) {
    const len = s.length;
    if (size + len > maxLen && current.length) {
      result.push(current);
      current = [s];
      size = len;
    } else {
      current.push(s);
      size += len;
    }
  }
  if (current.length) result.push(current);
  return result;
}

function getCache(key: string) {
  try { return localStorage.getItem(key) || ""; } catch { return ""; }
}
function setCache(key: string, val: string) {
  try { localStorage.setItem(key, val); } catch {}
}

export default function AITranslateProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return ((localStorage.getItem("ui-lang") as Lang) || DEFAULT_LANG);
    }
    return DEFAULT_LANG;
  });
  const [busy, setBusy] = useState(false);

  // استمع لزر اللغة في الهيدر
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Lang;
      setLang(detail);
    };
    window.addEventListener("set-lang", handler as EventListener);
    return () => window.removeEventListener("set-lang", handler as EventListener);
  }, []);

  // حدّث سمات html
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = dirOf(lang);
    localStorage.setItem("ui-lang", lang);
  }, [lang]);

  // ترجم الصفحة عند تغيير اللغة
  useEffect(() => {
    let cancelled = false;

    async function translateAll() {
      // الجذر: إن وجد <main> استعمله، وإلا body
      // const root = (document.querySelector("main") as HTMLElement) ?? document.body;
const root = document.body;

      if (lang === "ar") {
        // رجّع النصوص الأصلية
        const nodes = collectTextNodes(root);
        nodes.forEach(({ node }) => {
          const orig = (node as any).__origText as string | undefined;
          if (orig) node.nodeValue = orig;
        });
        return;
      }

      const nodes: TextNodeRef[] = collectTextNodes(root);
      if (nodes.length === 0) return;

      setBusy(true);

      // خزن الأصل
      nodes.forEach(({ node }) => {
        if (!(node as any).__origText) (node as any).__origText = node.nodeValue || "";
      });

      const texts = nodes.map((n) => n.original);

      // الكاش
      const translated: (string | null)[] = texts.map((t) => {
        const cached = getCache(`${lang}:${t}`);
        return cached || null;
      });

      // جهّز غير المترجم
      const toTranslateIdx: number[] = [];
      const toTranslate: string[] = [];
      translated.forEach((val, i) => {
        if (!val) { toTranslateIdx.push(i); toTranslate.push(texts[i]); }
      });

      try {
        const batches = chunkStrings(toTranslate, 1400);
        let ptr = 0;

        for (const batch of batches) {
          if (cancelled) return;

          const res = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chunks: batch, targetLang: lang }),
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data?.error || "Translation failed");

          const arr: string[] = data.translations;

          for (let j = 0; j < arr.length; j++) {
            const original = batch[j];
            const translatedText = arr[j];
            const globalIndex = toTranslateIdx[ptr + j];
            translated[globalIndex] = translatedText;
            setCache(`${lang}:${original}`, translatedText);
          }
          ptr += batch.length;

          // طبّق تدريجياً
          nodes.forEach((ref, k) => {
            const val = translated[k];
            if (val) ref.node.nodeValue = val;
          });
        }
      } finally {
        setBusy(false);
      }
    }

    translateAll();
    return () => { cancelled = true; };
  }, [lang]);

  return <>{children}</>;
}

/* زر اللغة المخصص للنافبار (لغتان فقط) */
export function LangSwitcher({ className = "" }: { className?: string }) {
  const [val, setVal] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return ((localStorage.getItem("ui-lang") as Lang) || DEFAULT_LANG);
    }
    return DEFAULT_LANG;
  });

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLang = e.target.value as Lang;
    setVal(newLang);
    window.dispatchEvent(new CustomEvent("set-lang", { detail: newLang }));
  }

  return (
    <select
      value={val}
      onChange={onChange}
      className={`bggggg text-sm px-2 py-[6px] rounded-md border ${className}`}
      aria-label="بدّل اللغة"
    >
      <option value="ar">العربية</option>
      <option value="fr">Français</option>
    </select>
  );
}
