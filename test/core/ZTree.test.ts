import { afterEach, describe, expect, it } from 'vitest'
import { transformZTree } from '../../src/index'

function initState() {
  return [
    { id: '1', parentId: '0' },
    { id: '11', parentId: '1' },
    { id: '111', parentId: '11' },
    { id: '2', parentId: '0' },
  ]
}

let dataSource = initState()

afterEach(() => {
  dataSource = initState()
})

describe('transformZTree', () => {
  it('transformZTree', () => {
    const result = transformZTree(dataSource, { parentKeyName: 'parentId', rootVal: '0' })
    expect(result).toEqual([
      {
        children: [
          {
            children: [
              {
                children: [],
                id: '111',
                parentId: '11',
              },
            ],
            id: '11',
            parentId: '1',
          },
        ],
        id: '1',
        parentId: '0',
      },
      {
        children: [],
        id: '2',
        parentId: '0',
      },
    ])
  })
})
