import assert from 'assert'
import { parseRuDate } from '../core/date'

describe('date', () => {
  const testDate = (
    date: string,
    time: string,
    type: 'short' | 'long' = 'short'
  ) => it(
    `should parse ${date}`,
    () => assert.equal(
      parseRuDate(date)?.getTime(),
      new Date(time).getTime()
    )
  )

  testDate('01 ноя 2020', '2020/11/01')
  testDate('28 Декабря 2016', '2016/12/28')
  testDate('23 октября 2019', '2019/10/23')
})
