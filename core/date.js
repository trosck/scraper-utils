const ruMonthsShort = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
const ruMonthsLong = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

/**
 * Получение даты из строки в ру формате
 *
 * @param {String} str дата формата "DD MM YYYY"
 * @param {short|long} type формат месяца
 * @returns {Date|null}
 */
export const parseRuDate = (str, type = 'short') => {
  try {
    const date = str.match(
      /(?<day>\d{1,2})\s+(?<month>[а-я]+)\s+(?<year>\d{1,4})/i
    )

    if (!date) return null

    const { groups: { day, month, year } } = date

    const monthsArray = type === 'short' ? ruMonthsShort : ruMonthsLong

    return new Date(
      +year,
      monthsArray.indexOf(month.toLowerCase()),
      +day
    )
  } catch(e) {
    return null
  }
}
