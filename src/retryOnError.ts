/**
 * retry execution function on errors
 *
 * @param {Function} func 
 * @param {Number} tryCount 
 * @param {Function} onError 
 * @returns
 */

interface Options {
  /** The number of times to retry */
  retries?: number
  /** func if you just want to log all failed tries */
  logError?: (error: any) => Promise<any> | any
  onError?: (
    {
      error,
      isFinalTry
    }: {
      /** error from executed function */
      error: any,
      /** returns `true` if it was last try */
      isFinalTry: boolean
    }
  ) => Promise<any> | any
}

export default
  async <T>(func: Function, options?: Options): Promise<T | null> => {
    const maxRetryCount = options?.retries ?? 3

    let currentTry = 0
    while (currentTry++ < maxRetryCount) {
      try {
        const result = await func()
        return result as T
      } catch (error) {
        if (options?.logError) {
          await options.logError(error)
        }

        if (options?.onError) {
          await options.onError({
            error,
            isFinalTry: currentTry === maxRetryCount
          })
        }
      }
    }

    return null
  }
