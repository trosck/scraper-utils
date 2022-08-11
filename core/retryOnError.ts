/**
 * try execute function on error,
 * return true for end cycle
 * @param {*} func 
 * @param {*} tryCount 
 * @param {*} onError 
 * @returns
 */
export default async (
  func: Function,
  tryCount: number,
  onError: (error: any) => void = () => {}
) => {
  let currentTry = 0
  while(currentTry++ < tryCount) {
    try {
      const result = await func()
      return result
    } catch(e) {
      if (currentTry === tryCount) {
        return await onError(e)
      }
    }
  }
}
