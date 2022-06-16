import assert from 'assert'
import removeDoubleSpaces from '../dist/core/removeDoubleSpaces.js'

const example = '      Example Domain    This domain is for use in illustrative examples in documents. You may use this    domain in literature without prior coordination or asking for permission.    More information...  '
const clearText = ' Example Domain This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission. More information... '

describe('removeDoubleSpaces', () => {
  it('should remove double spaces', () => {
    assert.equal(removeDoubleSpaces(example), clearText)
  })
})
