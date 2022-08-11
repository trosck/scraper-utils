import clearHtml from '../core/clearHtml'

const example = `
<body>
  <div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
  </div>
</body>
`
const clearText = '      Example Domain    This domain is for use in illustrative examples in documents. You may use this    domain in literature without prior coordination or asking for permission.    More information...  '

describe('clearHtml', () => {
  it('should clean text from html', () => {
    expect(clearHtml(example)).toBe(clearText)
  })
})
