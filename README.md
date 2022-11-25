# scraper-utils

helpful tools for scraping

[![ci](https://github.com/trosck/scraper-utils/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/trosck/scraper-utils/actions/workflows/ci.yml)
[![npm publish](https://github.com/trosck/scraper-utils/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/trosck/scraper-utils/actions/workflows/npm-publish.yml)

![](https://img.shields.io/npm/v/@trosckey/scraper-utils.svg?logo=npm)
![](https://img.shields.io/github/languages/code-size/trosck/scraper-utils)
![](https://img.shields.io/npm/l/@trosckey/scraper-utils)
![](https://img.shields.io/github/last-commit/trosck/scraper-utils/main)


## Table of contents
- [Installation](#installation)
- [clearHtml](#clearhtml)
- [date](#date)
  - [parseRuDate](#parserudate)
- [removeDoubleSpaces](#removedoublespaces)
- [retryOnError](#retryonerror)
- [sleep](#sleep)
- [sliceTextByWords](#slicetextbywords)
- [treeSearch](#treesearch)

## Installation

using `npm`
```bash
npm i @trosckey/scraper-utils
```

using `yarn`
```bash
yarn add @trosckey/scraper-utils
```

## clearHtml
removes html tags, codes and line breaks(\n, \t, etc)
```javascript
import { clearHtml } from '@trosckey/scraper-utils'
clearHtml('<div>Hello, &#61;World!\n</div>') // "Hello, World!"
```

## date
parsing date formats, returns `Date` object   
or `null` if cannot parse date   

### parseRuDate
parse ru date format
```javascript
import { parseRuDate } from '@trosckey/scraper-utils'
parseRuDate('01 ноя 2020').toDateString() // "Sun Nov 01 2020"
parseRuDate('28 Декабря 2016').toDateString() // "Wed Dec 28 2016"
```

## removeDoubleSpaces
replaces double spaces by single
```javascript
import { removeDoubleSpaces } from '@trosckey/scraper-utils'
removeDoubleSpaces('Hello    ,     World    !   ') // 'Hello , World ! '
```

## retryOnError
arguments:
1) function for execute
2) count of tries
3) error handler(optional)

returns promise with resolving value

```javascript
import { retryOnError } from '@trosckey/scraper-utils'
const data = await retryOnError(
  async () => {
    const response = await fetch('https://example.com/')
    return response.text()
  },
  5,
  console.error
)

console.log(data) // '<!doctype html><html><head>...'
```

## sleep
simple sleep function, takes a number (milliseconds)
```javascript
import { sleep } from '@trosckey/scraper-utils'
await sleep(5000)
```

## sliceTextByWords
slices text by words
```javascript
import { sliceTextByWords } from '@trosckey/scraper-utils'
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
import { treeSearch } from '@trosckey/scraper-utils'
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

