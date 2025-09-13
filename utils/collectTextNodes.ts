export interface TextNodeRef {
  node: Text
  original: string
}

export function collectTextNodes(root: Element): TextNodeRef[] {
  const result: TextNodeRef[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node: Text) => {
      const text = node.nodeValue?.trim() || ""
      // تجاهل النصوص الفارغة والنصوص القصيرة جداً
      if (text.length < 2) return NodeFilter.FILTER_REJECT
      // تجاهل النصوص التي تحتوي على أرقام فقط أو رموز
      if (/^[\d\s\-_.,!@#$%^&*()+={}[\]|\\:";'<>?/~`]*$/.test(text)) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })

  let node: Text | null
  while ((node = walker.nextNode() as Text | null)) {
    const text = node.nodeValue?.trim() || ""
    if (text) {
      result.push({
        node,
        original: text,
      })
    }
  }

  return result
}
