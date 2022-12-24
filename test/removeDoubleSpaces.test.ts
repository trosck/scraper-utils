import removeDoubleSpaces from '../src/removeDoubleSpaces'

const example = '      Example Domain    This domain is for use in illustrative examples in documents. You may use this    domain in literature without prior coordination or asking for permission.    More information...  '
const clearText = ' Example Domain This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission. More information... '

describe('removeDoubleSpaces', () => {
  it('should remove double spaces', () => {
    expect(removeDoubleSpaces(example)).toBe(clearText)
  })
})
