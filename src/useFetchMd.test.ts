import useFetchMd from './useFetchMd'
describe('test useFetchMd', () => {
  test('should return a string', async () => {
    const str = 'https://raw.githubusercontent.com/FrovaHappy/beatriz-bot/main/readme.md'
    const res = await useFetchMd(str)
    expect(res).toBeTypeOf('string')
  })
  test('should throw an error', async () => {
    const str = 'invalid url'
    await expect(useFetchMd(str)).rejects.toThrow('fetch: File not found')
  })
})
