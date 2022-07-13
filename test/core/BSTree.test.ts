import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { BSTree } from '../../src/index'

const bsTree = new BSTree<number>()

beforeEach(() => {
  bsTree.add(50)
  bsTree.add(30)
  bsTree.add(70)
  bsTree.add(10)
  bsTree.add(40)
  bsTree.add(90)
  bsTree.add(80)
})

afterEach(() => {
  bsTree.clear()
})

describe('BSTree is ok', () => {
  it('init ok', () => {
    expect(bsTree.size).toBe(7)
    expect(bsTree.isEmpty).toBeFalsy()
  })

  it('preOrder ok', () => {
    const result: number[] = []
    bsTree.preOrderTraverse(val => result.push(val))

    expect(result).toEqual([50, 30, 10, 40, 70, 90, 80])
  })

  it('inOrder ok', () => {
    const result: number[] = []
    bsTree.inOrderTraverse(val => result.push(val))

    expect(result).toEqual([10, 30, 40, 50, 70, 80, 90])
  })

  it('postOrder ok', () => {
    const result: number[] = []
    bsTree.postOrderTraverse(val => result.push(val))

    expect(result).toEqual([10, 40, 30, 80, 90, 70, 50])
  })

  it('add ok', () => {
    bsTree.add(8)
    expect(bsTree.size).toBe(8)
  })

  it('remove ok', () => {
    bsTree.remove(50)
    const result: number[] = []
    bsTree.inOrderTraverse(val => result.push(val))
    expect(result).toEqual([10, 30, 40, 70, 80, 90])

    expect(bsTree.size).toBe(6)
    expect(bsTree.isEmpty).toBeFalsy()
  })

  it('contains', () => {
    expect(bsTree.contains(10)).toBeTruthy()
    expect(bsTree.contains(100)).toBeFalsy()
  })

  it('max', () => {
    expect(bsTree.max).toBe(90)
  })

  it('min', () => {
    expect(bsTree.min).toBe(10)
  })
})
