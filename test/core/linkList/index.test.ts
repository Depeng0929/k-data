import { LinkList } from '../../../src'

describe('queue', () => {
  let list = new LinkList([4, 2, 1, 3])

  beforeEach(() => {
    list = new LinkList([4, 2, 1, 3])
  })
  afterEach(() => {
    list.clear()
  })

  it('print', () => {
    expect(list.print()).toEqual([4, 2, 1, 3])
  })
  it('clear', () => {
    list.clear()
    expect(list.size).toBe(0)
    expect(list.getHead()).toBeNull()
  })

  it('init', () => {
    expect(list.size).toBe(4)
    expect(list.getHead()!.val).toBe(4)
    expect(list.isEmpty).toBeFalsy()
  })

  it('push', () => {
    list.push(5)
    expect(list.size).toBe(5)
    expect(list.print()).toEqual([4, 2, 1, 3, 5])
  })

  it('insert normal', () => {
    expect(list.insert(2, 6)).toBeTruthy()
    expect(list.print()).toEqual([4, 2, 6, 1, 3])
    expect(list.size).toBe(5)

    list.insert(0, 0)
    expect(list.getHead()!.val).toBe(0)
    expect(list.size).toBe(6)
  })

  it('insert abnormal', () => {
    expect(list.insert(-1, 10)).toBeFalsy()
    expect(list.size).toBe(4)
    expect(list.print()).toEqual([4, 2, 1, 3])
  })

  it('getNodeAt', () => {
    expect(list.getNodeAt(-1)).toBeNull()
    expect(list.getNodeAt(2)!.val).toBe(1)
  })

  it('remove', () => {
    expect(list.remove(2)).toBe(2)
    expect(list.remove(-1)).toBeNull()
    expect(list.size).toBe(3)
  })

  it('removeAt', () => {
    expect(list.removeAt(2)).toBe(1)
    expect(list.removeAt(-1)).toBeNull()
    expect(list.size).toBe(3)
  })

  it('indexOf', () => {
    expect(list.indexOf(2)).toBe(1)
    expect(list.indexOf(10)).toBe(-1)
  })

  it('sort', () => {
    expect(list.sort().print()).toEqual([1, 2, 3, 4])
    expect(list.size).toBe(4)
  })
  it('sort abnormal', () => {
    list = new LinkList([1, 2])
    expect(list.sort().print()).toEqual([1, 2])
  })
})
