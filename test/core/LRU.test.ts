import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LRU } from '../../src/index'

let lru = new LRU()

beforeEach(() => {
  lru = new LRU({
    max: 5,
  })
  lru.set(1, 1)
  lru.set(2, 2)
  lru.set(3, 3)
  lru.set(4, 4)
})
afterEach(() => {
  lru.clear()
})

describe('LinkList', () => {
  it('init normal', () => {
    expect(lru.size).toBe(4)
    expect(lru.peek()).toBe(4)
    expect(lru.get(1)).toBe(1)
    expect(lru.toArray()).toEqual([4, 3, 2, 1])
  })

  it('add', () => {
    lru.add(5, 5)
    expect(lru.size).toBe(5)
    expect(lru.peek()).toBe(5)
    expect(lru.get(5)).toBe(5)
    expect(lru.toArray()).toEqual([5, 4, 3, 2, 1])
  })

  it('pop', () => {
    lru.pop()
    expect(lru.size).toBe(3)
    expect(lru.peek()).toBe(4)
    expect(lru.get(1)).toBeUndefined()
    expect(lru.toArray()).toEqual([4, 3, 2])
  })

  it('set over range', () => {
    lru.add(5, 5)
    lru.add(6, 6)
    expect(lru.size).toBe(5)
    expect(lru.peek()).toBe(6)
    expect(lru.get(1)).toBeUndefined()
    expect(lru.toArray()).toEqual([6, 5, 4, 3, 2])
  })

  it('delete', () => {
    lru.delete(2)
    expect(lru.size).toBe(3)
    expect(lru.peek()).toBe(4)
    expect(lru.get(2)).toBeUndefined()
    expect(lru.toArray()).toEqual([4, 3, 1])
  })
})
