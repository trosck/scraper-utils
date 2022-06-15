/**
 * remove html tags and codes
 * @param string
 * @returns {string}
 */
export default string => string
  // tags
  ?.replace(/(<([^>]+)>)/g, '')
  // codes
  ?.replace(/&[#\w\d]+;/g, ' ')
  // line breaks
  ?.replace(/[\f\n\r\t\v\u00A0]/g, '')
  ?? null
