import { afterEach, describe, expect, it } from 'vitest'
import { ZTree, transformZTree } from '../../src/index'

function initState() {
  return [
    { id: '1', parentId: '0' },
    { id: '11', parentId: '1' },
    { id: '111', parentId: '11' },
    { id: '2', parentId: '0' },
  ]
}

let dataSource = initState()
let treeData = transformZTree(dataSource, { parentKeyName: 'parentId', rootVal: '0' })
const treeList = new ZTree(treeData)

afterEach(() => {
  dataSource = initState()
  treeData = transformZTree(dataSource, { parentKeyName: 'parentId', rootVal: '0' })
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

  it('init', () => {
    const result: any[] = []
    treeList.forEach((item) => {
      result.push(item.data.id)
    })
    expect(result).toEqual([
      '1',
      '11',
      '111',
      '2',
    ])
  })

  it('find', () => {
    const result: any[] = []
    const node = treeList.find((item) => {
      return item.data.id === '11'
    })
    node?.forEach((item) => {
      result.push(item.data.id)
    })
    expect(result).toEqual(['11', '111'])
  })
})
