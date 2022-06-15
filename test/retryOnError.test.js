import assert from 'assert'
import retryOnError from '../core/retryOnError.js'

;(async () => {
  const testRetry = async (tryCount, limit = tryCount) => {
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

  const fiveRetries = await testRetry(5)
  const twoFromFiveTries = await testRetry(5, 2)

  describe('retryOnError', function () {
    it(
      'should try 5 times',
      () => assert.equal(fiveRetries, 5)
    )

    it(
      'should return on second try from five ',
      () => assert.equal(twoFromFiveTries, 2)
    )
  })

  run()
})();
