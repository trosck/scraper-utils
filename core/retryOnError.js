/**
 * try execute function on error,
 * return true for end cycle
 * @param {*} func 
 * @param {*} tryCount 
 * @param {*} onError 
 * @returns
 */
export default async (func, tryCount, onError = () => {}) => {
  let currentTry = -1
  while(++currentTry < tryCount) {
    try {
      const isEnd = await func()
      if (isEnd) return

      currentTry = -1
    } catch(e) {
      // last try
      if (currentTry + 1 === tryCount) {
        return await onError(e)
      }
    }
  }
}
