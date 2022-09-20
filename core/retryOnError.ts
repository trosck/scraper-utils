/**
 * retry execution function on errors
 *
 * @param {*} func 
 * @param {*} tryCount 
 * @param {*} onError 
 * @returns
 */
export default async (
  func: Function,
  tryCount: number,
  // TODO: move onError on second argument(optional) and
  // tryCount on third in options object(or second if no
  // onError argument)
  onError: (error: any, isFinalTry: boolean) => void = () => {}
) => {
  let currentTry = 0
  while(currentTry++ < tryCount) {
    try {
      const result = await func()
      return result
    } catch(error) {
      await onError(error, currentTry === tryCount)
    }
  }
}
