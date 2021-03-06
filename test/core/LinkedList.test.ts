import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LinkedList } from '../../src/index'

let list = new LinkedList({ items: [4, 2, 1, 3] })

beforeEach(() => {
  list = new LinkedList({ items: [4, 2, 1, 3] })
})
afterEach(() => {
  list.clear()
})

describe('LinkList', () => {
  it('init normal', () => {
    expect(list.size).toBe(4)
    expect(list.getHead()).toBe(4)
    expect(list.getTail()).toBe(3)
  })

  it('add', () => {
    list.add(5)
    expect(list.size).toBe(5)
    expect(list.getHead()).toBe(4)
    expect(list.getTail()).toBe(5)
  })

  it('clear', () => {
    list.clear()
    expect(list.size).toBe(0)
    expect(list.getHead()).toBeUndefined()
    expect(list.getTail()).toBeUndefined()
  })

  it('contains', () => {
    expect(list.contains(1)).toBe(true)
    expect(list.contains(5)).toBe(false)
  })

  it('elementAtIndex', () => {
    expect(list.elementAt(0)).toBe(4)
    expect(list.elementAt(1)).toBe(2)
    expect(list.elementAt(2)).toBe(1)
    expect(list.elementAt(3)).toBe(3)
  })

  it('getHead', () => {
    expect(list.getHead()).toBe(4)
  })

  it('forEach', () => {
    const result: number[] = []
    list.forEach((item) => {
      result.push(item)
    },
    )
    expect(result).toEqual([4, 2, 1, 3])
  })

  it('indexof', () => {
    expect(list.indexOf(1)).toBe(2)
    expect(list.indexOf(5)).toBe(-1)
  })

  it('remove', () => {
    list.remove(1)
    expect(list.size).toBe(3)
    expect(list.elementAt(2)).toBe(3)
  })

  it('removeAt', () => {
    list.removeAt(1)
    expect(list.size).toBe(3)
    expect(list.elementAt(1)).toBe(1)
    expect(list.toArray()).toEqual([4, 1, 3])
    expect(list.getTail()).toBe(3)
    expect(list.getHead()).toBe(4)
  })

  it('removeAt start', () => {
    list.removeAt(0)
    expect(list.toArray()).toEqual([2, 1, 3])
    expect(list.size).toBe(3)
    expect(list.getTail()).toBe(3)
    expect(list.getHead()).toBe(2)
  })
  it('removeAt end', () => {
    list.removeAt(3)
    expect(list.size).toBe(3)
    expect(list.toArray()).toEqual([4, 2, 1])
    expect(list.getHead()).toBe(4)
    expect(list.getTail()).toBe(1)
  })

  it('toArray', () => {
    expect(list.toArray()).toEqual([4, 2, 1, 3])
  })

  it('clear', () => {
    list.clear()
    expect(list.size).toBe(0)
    expect(list.getHead()).toBeUndefined()
    expect(list.getTail()).toBeUndefined()
  })

  // [4, 2, 1, 3]
  it('swap', () => {
    list.swap(2, 1)
    expect(list.toArray()).toEqual([4, 1, 2, 3])
    expect(list.size).toBe(4)
  })
  it('swap head', () => {
    list.swap(0, 1)
    expect(list.toArray()).toEqual([2, 4, 1, 3])
    expect(list.size).toBe(4)
  })
  it('swap end', () => {
    list.swap(0, 3)
    expect(list.toArray()).toEqual([
      3,
      2,
      1,
      4,
    ])
    expect(list.size).toBe(4)
  })
  it('swap middle', () => {
    list.swap(2, 3)
    expect(list.toArray()).toEqual([4, 2, 3, 1])
    expect(list.size).toBe(4)
  })

  it('iterator', () => {
    const result = []
    for (const item of list)
      result.push(item)

    expect(result).toEqual([
      4,
      2,
      1,
      3,
    ])
  })
})
