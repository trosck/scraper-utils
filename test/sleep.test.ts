import sleep from '../core/sleep'

const sleepTime = 1000

test(`should sleep ~${sleepTime}ms`, async () => {
  const timeBefore = Date.now()
  await sleep(sleepTime)
  const timeAfter = Date.now()

  expect(timeAfter - timeBefore - sleepTime).toBeLessThan(10)
})
