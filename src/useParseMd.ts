import { rehype } from 'rehype'
import rehypeHighlight from 'rehype-highlight'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkHeadingId from 'remark-heading-id'
import { unified } from 'unified'

export default async function useParseMd(str: string) {
  const toHtml = await unified().use(remarkHeadingId, { defaults: true }).use(remarkParse).use(remarkHtml).process(str)
  const file = await rehype()
    .data('settings', { fragment: true })

    .use(rehypeHighlight)
    .process(String(toHtml))
  return String(file)
}
