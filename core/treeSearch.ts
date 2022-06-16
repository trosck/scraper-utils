/**
 * Поиск по дереву
 *
 * @param tree дерево для поиска
 * @param childKey свойство нод
 * @param verifyFunction функция принимающая ноду
 * и возврающая true/false для определения нужной
 * @returns {Object|null}
 */
export default <TreeNodeType = { [key: string]: any }>(
  tree: TreeNodeType,
  childKey: keyof TreeNodeType,
  verifyFunction: Function
) => {

  return (function search(element: TreeNodeType): TreeNodeType | null {

    if (verifyFunction(element)) {
      return element
    } else if (element?.[childKey]) {
      let result = null
      // @ts-ignore
      const children = element[childKey] as TreeNodeType[]
      for (let i = 0; result == null && i <= children.length; i++) {
        result = search(children[i])
      }
      return result;
    }

    return null;
  })(tree)
}
