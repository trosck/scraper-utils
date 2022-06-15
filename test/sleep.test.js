import assert from 'assert'
import sleep from '../core/sleep.js'

const sleepTime = 1000

;(async () => {

  const timeBefore = Date.now()
  await sleep(sleepTime)
  const timeAfter = Date.now()

  describe('sleep', function () {
    it(`should sleep ~${sleepTime}ms`, () => {
      assert.ok(timeAfter - timeBefore - sleepTime < 10)
    })
  })

  run()
})();
