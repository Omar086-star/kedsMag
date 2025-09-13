import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MODEL = process.env.OPENAI_TRANSLATE_MODEL || "gpt-4o-mini"

async function callOpenAI(opts: {
  instructions: string
  input: string
  apiKey: string
  responseFormat?: {
    type: "json_schema"
    json_schema: {
      name: string
      strict?: boolean
      schema: any
    }
  }
}) {
  const messages = [
    {
      role: "system" as const,
      content: opts.instructions,
    },
    {
      role: "user" as const,
      content: opts.input,
    },
  ]

  const body: any = {
    model: MODEL,
    messages,
  }

  if (opts.responseFormat) {
    body.response_format = opts.responseFormat
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const raw = await res.json().catch(async () => ({ text: await res.text() }))
    return { ok: false as const, status: res.status, raw, data: null as any }
  }
  const data = await res.json()
  return { ok: true as const, status: 200, raw: null, data }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    using: "chat/completions",
    model: MODEL,
    usage:
      "POST { chunks: string[], targetLang: 'en'|'fr'|'tr'|'de'|'es'|'ar' } أو { html: string, target: 'EN'|'AR'|... }",
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) return NextResponse.json({ error: "OPENAI_API_KEY غير مضبوط" }, { status: 500 })

    // 1) ترجمة مصفوفة نصوص (يستعملها AITranslateProvider)
    if (Array.isArray(body?.chunks) && body.chunks.length > 0) {
      const chunks: string[] = body.chunks.map((s: any) => String(s))
      const targetLang: string = String(body?.targetLang || "en")

      const totalLen = chunks.reduce((s, t) => s + t.length, 0)
      if (totalLen > 120_000) {
        return NextResponse.json({ error: "النصوص طويلة جداً" }, { status: 400 })
      }

      const instructions = `
You translate short UI strings. Return ONLY JSON that matches the schema.
Preserve placeholders, numbers and punctuation exactly. No extra commentary.
`.trim()

      const input = `
Target language: ${targetLang}
Input (JSON array): ${JSON.stringify(chunks)}
`.trim()

      const responseFormat = {
        type: "json_schema" as const,
        json_schema: {
          name: "array_of_translations",
          strict: true,
          schema: {
            type: "object",
            properties: {
              translations: {
                type: "array",
                items: { type: "string" },
                minItems: chunks.length,
                maxItems: chunks.length,
              },
            },
            required: ["translations"],
            additionalProperties: false,
          },
        },
      }

      const r = await callOpenAI({ instructions, input, apiKey, responseFormat })
      if (!r.ok) {
        return NextResponse.json({ error: "OpenAI error", status: r.status, raw: r.raw }, { status: r.status })
      }

      const content = r.data?.choices?.[0]?.message?.content
      let parsed: any = null

      try {
        parsed = JSON.parse(content || "{}")
      } catch (e) {
        return NextResponse.json({ error: "Failed to parse OpenAI response" }, { status: 502 })
      }

      const translations: string[] =
        parsed?.translations && Array.isArray(parsed.translations) ? parsed.translations : []

      if (translations.length !== chunks.length) {
        return NextResponse.json(
          { error: "طول المصفوفة المعادة لا يطابق المدخلة", got: translations.length, expected: chunks.length },
          { status: 502 },
        )
      }
      return NextResponse.json({ translations })
    }

    // 2) ترجمة HTML كامل (اختياري)
    if (typeof body?.html === "string") {
      const html: string = body.html
      const target: string = String(body?.target || "EN")
      const MAX = 120_000
      const trimmed = html.length > MAX ? html.slice(0, MAX) : html

      const instructions = `
You are an expert web content translator.
Translate ALL visible human text within the provided HTML to the target language.
Keep ALL tags, attributes, classes, ids, inline styles, href/src as-is.
Translate text nodes and alt/title/aria-label/placeholder only.
Return ONLY the translated HTML, no explanations.
`.trim()

      const input = `Target Language: ${target}\n---\n${trimmed}`

      const r = await callOpenAI({ instructions, input, apiKey })
      if (!r.ok) {
        return NextResponse.json({ error: "OpenAI error", status: r.status, raw: r.raw }, { status: r.status })
      }

      const translatedHtml: string = r.data?.choices?.[0]?.message?.content ?? ""
      return NextResponse.json({ html: translatedHtml })
    }

    return NextResponse.json({ error: "طلب غير صالح: أرسل {chunks,targetLang} أو {html,target}" }, { status: 400 })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unexpected error" }, { status: 500 })
  }
}
