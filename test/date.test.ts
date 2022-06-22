import assert from 'assert'
import { parseRuDate } from '../core/date'

describe('date', () => {
  const testDate = (
    ruDate: string,
    time: string
  ) => it(
    `should parse ${ruDate}`,
    () => assert.equal(
      parseRuDate(ruDate)?.getTime(),
      new Date(time).getTime()
    )
  )

  testDate('01 ноя 2020', '2020-11-01T00:00:00.000Z')
  testDate('28 Декабря 2016', '2016-12-28T00:00:00.000Z')
  testDate('23 октября 2019', '2019-10-23T00:00:00.000Z')
})
