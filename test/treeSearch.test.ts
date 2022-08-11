import treeSearch from '../core/treeSearch'

type TreeNodeType = {
  id: number,
  children?: TreeNodeType[]
}

const tree: TreeNodeType = {
  id: 1,
  children: [
    { id: 2 },
    {
      id: 3,
      children: [
        { id: 4 },
        { id: 5 }
      ]
    },
    {
      id: 6,
      children: [
        { id: 7 },
        {
          id: 8,
          children: [
            {
              id: 9,
              children: [
                { id: 10 }
              ]
            }
          ]
        }
      ]
    }
  ]
}

describe('treeSearch', () => {
  const testSearch = (id: number) => it(
    `should find node with id ${id}`,
    () => {
      const result = treeSearch(
        tree,
        'children',
        (node: TreeNodeType) => node?.id === id
      )

      expect(result?.id).toBe(id)
    }
  )

  testSearch(5)
  testSearch(7)
  testSearch(10)
})
