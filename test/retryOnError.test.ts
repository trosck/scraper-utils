import retryOnError from '../core/retryOnError'

const testRetry = async (tryCount: number, limit = tryCount) => {
  let _count = 0
  await retryOnError(
    () => {
      _count++
      if (_count === limit) {
        return true
      }

      throw new Error()
    },
    tryCount
  )
  return _count
}

test('retryOnError should try 5 times', async () => {
  expect(
    await testRetry(5)
  ).toBe(5)
})

test('retryOnError should return on second try from five', async () => {
  expect(
    await testRetry(5, 2)
  ).toBe(2)
})
