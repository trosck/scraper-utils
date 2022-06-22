const monthFormats = Object.assign(Object.create(null), {
  short: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  long: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
})

/**
 * Получение даты из строки в ру формате
 *
 * @param {String} str дата формата "DD MM YYYY"
 * @returns {Date|null}
 */
export const parseRuDate = (str: string): Date | null => {
  try {
    const date = str.match(
      /(?<day>\d{1,2})\s+(?<month>[а-я]+)\s+(?<year>\d{1,4})/i
    )

    if (!date?.groups) return null

    const { groups: { day, month, year } } = date

    const monthsArray = month.length === 3
      ? monthFormats.short
      : monthFormats.long

    const monthNumber = monthsArray.indexOf(month.toLowerCase()) + 1
    return new Date(`${year}-${monthNumber < 10 && '0' || ''}${monthNumber}-${day}T00:00:00.000Z`)
  } catch(e) {
    return null
  }
}
