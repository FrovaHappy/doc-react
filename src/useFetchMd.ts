export default async function useFetchMd(url: string) {
  const file = await fetch(url).catch(() => {
    throw new Error('fetch: File not found')
  })
  return await file.text()
}
