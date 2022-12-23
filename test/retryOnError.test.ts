import retryOnError from '../core/retryOnError'

const testRetry = async (tryCount: number, limit: number | null) => {
  let totalTriesCount = 0
  await retryOnError(
    () => {
      totalTriesCount++
      if (totalTriesCount && totalTriesCount === limit) {
        return true
      }

      throw new Error()
    },
    tryCount
  )
  return totalTriesCount
}

test('retryOnError should try 5 times', async () => {
  expect(
    await testRetry(5, null)
  ).toBe(5)
})

test('retryOnError should return on second try from five', async () => {
  expect(
    await testRetry(5, 2)
  ).toBe(2)
})
