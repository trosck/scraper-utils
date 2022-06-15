/**
 * Поиск по дереву
 *
 * @param tree дерево для поиска
 * @param childKey свойство нод
 * @param verifyFunction функция принимающая ноду
 * и возврающая true/false для определения нужной
 * @returns {Object|null}
 */
export default (tree, childKey, verifyFunction) => {

  return (function search(element) {

    if (verifyFunction(element)) {
      return element
    } else if (element?.[childKey]) {
      let result = null
      for (let i = 0; result == null && i <= element[childKey].length; i++) {
        result = search(element[childKey][i])
      }
      return result;
    }

    return null;
  })(tree)
}
