# scrapper-utils

helpful tools for process text

## Utils
- [clearHtml](#clearhtml)
- [date](#date)
  - [parseRuDate](#parserudate)
- [removeDoubleSpaces](#removedoublespaces)
- [retryOnError](#retryonerror)
- [sleep](#sleep)
- [sliceTextByWords](#slicetextbywords)
- [treeSearch](#treesearch)

## clearHtml
removes html tags, codes and line breaks(\n, \t, etc)
```javascript
import { clearHtml } from '@trosckey/scrapper-utils'
clearHtml('<div>Hello, &#61;World!\n</div>') // "Hello, World!"
```

## date
parsing date formats, returns `Date` object   
or `null` if cannot parse date   

first argument - date string, second - month   
format(`short` for `ноя`, `long` for `ноября`),   
default is `short`

### parseRuDate
```javascript
import { parseRuDate } from '@trosckey/scrapper-utils'
parseRuDate('01 ноя 2020').toDateString() // "Sun Nov 01 2020"
parseRuDate('28 Декабря 2016', 'long').toDateString() // "Wed Dec 28 2016"
```

## removeDoubleSpaces
replaces double spaces by single
```javascript
import { removeDoubleSpaces } from '@trosckey/scrapper-utils'
removeDoubleSpaces('Hello    ,     World    !   ') // 'Hello , World ! '
```

## retryOnError
arguments:
- function for execute
- count of tries
- error handler(optional)

executing function need return `truthy`   
value for stop cycle

```javascript
import { retryOnError } from '@trosckey/scrapper-utils'
retryOnError(
  async () => {
    await fetch('https://example.com/')
    return true
  },
  5,
  async error => {
    console.error(error)
  }
)
```

## sleep
simple sleep function, accepts number   
(milliseconds) to sleep
```javascript
import { sleep } from '@trosckey/scrapper-utils'
await sleep(5000)
```

## sliceTextByWords
slices text by words
```javascript
import { sliceTextByWords } from '@trosckey/scrapper-utils'
sliceTextByWords(
  `
    Lorem Ipsum: It was popularised in the 1960s
    Ipsum passages: and more recently with desktop
    publishing: software like Aldus PageMaker including versions of.
  `,
  [
    'Lorem Ipsum:',
    'Ipsum passages:',
    'publishing:'
  ]
)
/**
 * {
 *   'Lorem Ipsum:': ' It was popularised in the 1960s',
 *   'Ipsum passages:': ' and more recently with desktop',
 *   'publishing:': ' software like Aldus PageMaker including versions of.'
 * }
```

## treeSearch
search node in tree, returns found node or `null`
```javascript
import { treeSearch } from '@trosckey/scrapper-utils'
const tree = {
  id: 1,
  children: [
    { id: 2 },
    {
      id: 3,
      children: [
        { id: 4 }
      ]
    }
  ]
}

treeSearch(
  tree,
  'children',
  node => node.id === 4
) // { id: 4 }

treeSearch(
  tree,
  'children',
  node => node.id === 5
) // null
```

