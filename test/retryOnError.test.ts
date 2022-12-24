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
    { retries: tryCount }
  )
  return totalTriesCount
}

const testIsFinalTry = async (maxRetries: number) => {
  let result: boolean | null = null
  let tryCount = 0

  await retryOnError(
    () => {
      tryCount++
      throw new Error()
    }, {
      retries: maxRetries,
      onError: ({ isFinalTry }) => {
        if (isFinalTry) {
          result = tryCount === maxRetries
        }
      }
    }
  )

  return result
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

test(
  'isFinalTry in onError func should return true on last try',
  async () => {
    expect(
      await testIsFinalTry(5)
    ).toBe(true)

    expect(
      await testIsFinalTry(10)
    ).toBe(true)

    expect(
      await testIsFinalTry(15)
    ).toBe(true)
  }
)
