import { Suspense, useEffect, useState } from 'react'
import { Section } from './types'
import useFetchMd from './useFetchMd'
import useParseMd from './useParseMd'
import Loading from './Loading'

interface Props {
  section: Section
}
function Content(props: Props) {
  const [data, setData] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const { section } = props
  useEffect(() => {
    const promise = async () => {
      try {
        const md = await useFetchMd(section.url)
        const html = await useParseMd(md)
        setData(html)
      } catch (e: any) {
        setError(e.message)
      }
    }
    promise()
  }, [section])
  return (
    <Suspense fallback={<Loading />}>
      {error ? <div>{error}</div> : <div dangerouslySetInnerHTML={{ __html: data }} />}
    </Suspense>
  )
}

export default Content
