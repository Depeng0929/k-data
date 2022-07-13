import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { Queue } from '../../src/index'

const a = [1, 2, 3]
let s = new Queue({
  items: a,
})

beforeEach(() => {
  s = new Queue({
    items: a,
  })
})

afterEach(() => {
  s.clear()
})

describe('queue', () => {
  it('init', () => {
    const s2 = new Queue()

    expect(s2.size).toBe(0)
    expect(s2.isEmpty).toBeTruthy()
    expect(s2.dequeue()).toBeUndefined()

    expect(s.size).toBe(3)
    expect(s.isEmpty).toBeFalsy()
  })

  it('peek', () => {
    expect(s.peek()).toBe(1)
  })

  it('enqueue', () => {
    s.enqueue(4)

    expect(s.size).toBe(4)
    expect(s.isEmpty).toBeFalsy()
    expect(s.peek()).toBe(1)
  })

  it('dequeue', () => {
    expect(s.dequeue()).toBe(1)
    expect(s.peek()).toBe(2)
    expect(s.size).toBe(2)
  })

  it('clear', () => {
    s.clear()
    expect(s.size).toBe(0)
    expect(s.isEmpty).toBeTruthy()
  })

  it('contains', () => {
    expect(s.contains(2)).toBeTruthy()
    expect(s.contains(8)).toBeFalsy()
  })

  it('forEach', () => {
    let count = 0
    while (!s.isEmpty) {
      count++
      s.dequeue()
    }
    expect(count).toBe(3)
  })

  it('iterator', () => {
    const result = []
    for (const item of s)
      result.push(item)

    expect(result).toEqual([
      1,
      2,
      3,
    ])
  })

  it('peek', () => {
    expect(s.peek()).toBe(1)
    expect(s.size).toBe(3)
  })

  it('toArray', () => {
    expect(s.toArray()).toEqual([1, 2, 3])
  })
})
