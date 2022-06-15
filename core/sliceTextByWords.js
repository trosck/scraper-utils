/**
 * Разделение блоков текста
 * по ключевым словам(2). По
 * возможности указывать большую
 * часть ключевых слов для корректной
 * работы.
 *
 * @param {string} text исходный текст
 * @param {string[]} reserved слова разделяющие
 * блоки текста
 *
 * @returns {Object} ключом будет ключевое слово,
 * а значением обрезанный текст. описание доступно
 * (если оно есть) по специальному ключу description
 */
export default (text, reserved) => ['']
  .concat(reserved)
  .map(
    word => ({ word, index: text.indexOf(word) })
  )
  .filter(
    ({ index }) => index > -1
  )
  .sort(
    (a, b) => a.index - b.index
  )
  .reduce((store, { word, index }, itemIndex, wordsArray) => {

    const endIndex = wordsArray[itemIndex + 1]?.index || text.length
    const value = text.slice(index, endIndex).replace(word, '')

    /** описание не детектится, в значении пустая строка */
    store[(word || 'description')] = value

    return store
  }, {})
