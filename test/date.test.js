import assert from 'assert'
import { parseRuDate } from '../core/date.js'

describe('date', () => {
  const testDate = (date, time, type = 'short') => it(
    `should parse ${date}`,
    () => assert.equal(
      parseRuDate(date, type)?.getTime(),
      new Date(time).getTime()
    )
  )

  testDate('01 ноя 2020', 1604178000000)
  testDate('28 Декабря 2016', 1482872400000, 'long')
  testDate('23 октября 2019', 1571778000000, 'long')
})
