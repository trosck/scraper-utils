/**
 * remove doubles spaces
 */
export default (string: string) => (
  string?.replace(/\s\s+/g, ' ') || null
)
