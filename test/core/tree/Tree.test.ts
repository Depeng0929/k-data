import { BSTree } from '../../../src'

describe('BSTree is ok', () => {
  const bstree = new BSTree<number>()
  bstree.insert(50)
  bstree.insert(30)
  bstree.insert(70)
  bstree.insert(10)
  bstree.insert(40)
  bstree.insert(90)
  bstree.insert(80)

  it('preOrder ok', () => {
    const result: number[] = []
    bstree.preOrderTraverse(val => result.push(val))

    expect(result).toEqual([50, 30, 10, 40, 70, 90, 80])
  })

  it('inOrder ok', () => {
    const result: number[] = []
    bstree.inOrderTraverse(val => result.push(val))

    expect(result).toEqual([10, 30, 40, 50, 70, 80, 90])
  })

  it('postOrder ok', () => {
    const result: number[] = []
    bstree.postOrderTraverse(val => result.push(val))

    expect(result).toEqual([10, 40, 30, 80, 90, 70, 50])
  })

  it('remove ok', () => {
    bstree.remove(50)
    const result: number[] = []
    bstree.inOrderTraverse(val => result.push(val))
    expect(result).toEqual([10, 30, 40, 70, 80, 90])
  })
})
