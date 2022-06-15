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

  testDate('01 ноя 2020', '2020/11/01')
  testDate('28 Декабря 2016', '2016/12/28', 'long')
  testDate('23 октября 2019', '2019/10/23', 'long')
})
