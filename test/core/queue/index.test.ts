import { Queue } from '../../../src'

describe('queue', () => {
  const a = [1, 2, 3]
  let s = new Queue(a)

  beforeEach(() => {
    s = new Queue(a)
  })

  it('init', () => {
    const s2 = new Queue()

    expect(s2.size).toBe(0)
    expect(s2.isEmpty).toBeTruthy()

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

  it('pop over range', () => {
    s.clear()
    expect(s.dequeue()).toBeUndefined()
    expect(s.size).toBe(0)
  })

  it('forEach', () => {
    let count = 0
    while (!s.isEmpty) {
      count++
      s.dequeue()
    }
    expect(count).toBe(3)
  })

  it('source pollution', () => {
    s.enqueue(4)
    expect(a.length).toBe(3)
  })
})
