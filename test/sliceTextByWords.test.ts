import sliceTextByWords from '../src/sliceTextByWords'

const example = `
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
Способ приготовления: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Состав: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
Условия хранения: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Предупреждение: It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Важное примечание: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
`

const keywords = [
  'Способ приготовления:',
  'Состав:',
  'Условия хранения:',
  'Предупреждение:',
  'Важное примечание:'
]

const result = {
  'description': '\nThe point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n',
  'Способ приготовления:': ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n',
  'Состав:': ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n',
  'Условия хранения:': ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n',
  'Предупреждение:': ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
  'Важное примечание:': ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.\n',
}

describe('sliceTextByWords', () => {
  it('should slice text by words', () => {
    expect(JSON.stringify(sliceTextByWords(example, keywords))).toBe(JSON.stringify(result))
  })
})
