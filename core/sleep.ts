/**
 * simple sleep function
 */
export default (time: number) => new Promise(
  resolve => setTimeout(resolve, time)
)
