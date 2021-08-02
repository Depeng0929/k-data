import { PriorityQueue, Queue } from '../../../src'

describe('PriorityQueue', () => {
  let s = new PriorityQueue()

  beforeEach(() => {
    s = new PriorityQueue()
    s.enqueue(7)
    s.enqueue(6)
    s.enqueue(3)
    s.enqueue(5)
    s.enqueue(4)
    s.enqueue(1)
  })

  it('size', () => {
    expect(s.size).toBe(6)
  })

  it('isEmpty', () => {
    expect(s.isEmpty).toBeFalsy()
  })

  it('clear', () => {
    s.clear()
    expect(s.size).toBe(0)
    expect(s.isEmpty).toBeTruthy()
  })

  it('peek', () => {
    expect(s.peek()).toBe(7)

    s.enqueue(10)
    expect(s.peek()).toBe(10)
  })

  it('enqueue', () => {
    s.enqueue(2)
    expect(s.size).toBe(7)
    expect(s.isEmpty).toBeFalsy()
    expect(s.peek()).toBe(7)
  })

  it('dequeue', () => {
    const result = s.dequeue()
    expect(s.size).toBe(5)
    expect(s.peek()).toBe(6)
    expect(result).toBe(7)
  })
})
