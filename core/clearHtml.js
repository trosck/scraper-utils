/**
 * remove html tags and codes
 * @param string
 * @returns {string}
 */
export default string => string
  ?.replace(/(<([^>]+)>)/g, '')
  ?.replace(/&[#\w\d]+;/g, ' ')
  ?.replace(/[\f\n\r\t\v\u00A0]/g, '')
  ?? null
