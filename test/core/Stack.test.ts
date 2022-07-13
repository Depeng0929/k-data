import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { Stack } from '../../src/index'

describe('stack', () => {
  const a = [1, 2, 3]
  let s = new Stack({
    items: a,
  })

  beforeEach(() => {
    s = new Stack({
      items: a,
    })
  })

  afterEach(() => {
    s.clear()
  })

  it('init', () => {
    const s2 = new Stack()

    expect(s2.size).toBe(0)
    expect(s2.isEmpty).toBeTruthy()

    expect(s.size).toBe(3)
    expect(s.isEmpty).toBeFalsy()
  })

  it('peek', () => {
    expect(s.peek()).toBe(3)
  })

  it('push', () => {
    s.push(4)

    expect(s.size).toBe(4)
    expect(s.isEmpty).toBeFalsy()
    expect(s.peek()).toBe(4)
  })

  it('pop', () => {
    expect(s.pop()).toBe(3)
    expect(s.peek()).toBe(2)
    expect(s.size).toBe(2)
  })

  it('clear', () => {
    s.clear()
    expect(s.size).toBe(0)
    expect(s.isEmpty).toBeTruthy()
  })

  it('pop over range', () => {
    s.clear()
    expect(s.pop()).toBeUndefined()
    expect(s.size).toBe(0)
  })

  it('forEach', () => {
    let count = 0
    while (!s.isEmpty) {
      count++
      s.pop()
    }
    expect(count).toBe(3)
  })

  it('iterator', () => {
    s.add(4)
    const result = []
    for (const item of s)
      result.push(item)

    expect(result).toEqual([4, 3, 2, 1])
  })

  it('source pollution', () => {
    s.push(4)
    expect(a.length).toBe(3)
  })

  it('contains', () => {
    expect(s.contains(3)).toBeTruthy()
  })
})
