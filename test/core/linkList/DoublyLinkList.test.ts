import { DoublyLinkList } from '../../../src'

describe('DoublyLinkList', () => {
  let list = new DoublyLinkList({ items: [4, 2, 1, 3] })

  beforeEach(() => {
    list = new DoublyLinkList({ items: [4, 2, 1, 3] })
  })
  afterEach(() => {
    list.clear()
  })

  it('init', () => {
    expect(list.getTail()!.val).toBe(3)
    expect(list.getHead()!.val).toBe(4)
    expect(list.size).toBe(4)
    expect(list.isEmpty).toBeFalsy()
  })
  it('list', () => {
    expect(list.list()).toEqual([4, 2, 1, 3])
  })
  it('clear', () => {
    list.clear()
    expect(list.size).toBe(0)
    expect(list.getHead()).toBeUndefined()
    expect(list.getTail()).toBeUndefined()
    expect(list.isEmpty).toBeTruthy()
  })

  it('push', () => {
    list.push(5)
    expect(list.size).toBe(5)
    expect(list.list()).toEqual([4, 2, 1, 3, 5])
    expect(list.getTail()!.val).toBe(5)
  })

  it('insert normal', () => {
    expect(list.insert(2, 6)).toBeTruthy()
    expect(list.list()).toEqual([4, 2, 6, 1, 3])
    expect(list.size).toBe(5)
    expect(list.getHead()!.val).toBe(4)
    expect(list.getTail()!.val).toBe(3)
  })

  it('insert start boundary', () => {
    expect(list.insert(0, 1)).toBeTruthy()
    expect(list.size).toBe(5)
    expect(list.list()).toEqual([1, 4, 2, 1, 3])
    expect(list.getHead()!.val).toBe(1)
    expect(list.getTail()!.val).toBe(3)
  })

  it('insert end boundary', () => {
    expect(list.insert(4, 1)).toBeTruthy()
    expect(list.size).toBe(5)
    expect(list.list()).toEqual([4, 2, 1, 3, 1])
    expect(list.getTail()!.val).toBe(1)
    expect(list.getHead()!.val).toBe(4)
  })

  it('insert out boundary', () => {
    expect(list.insert(-1, 10)).toBeFalsy()
    expect(list.size).toBe(4)
    expect(list.list()).toEqual([4, 2, 1, 3])
  })

  it('getNodeAt', () => {
    expect(list.getNodeAt(-1)).toBeUndefined()
    expect(list.getNodeAt(2)!.val).toBe(1)
  })

  it('remove', () => {
    expect(list.remove(2)).toBe(2)
    expect(list.remove(-1)).toBeUndefined()
    expect(list.size).toBe(3)
  })

  it('removeAt', () => {
    expect(list.removeAt(2)).toBe(1)
    expect(list.removeAt(-1)).toBeUndefined()
    expect(list.size).toBe(3)
  })

  it('indexOf', () => {
    expect(list.indexOf(2)).toBe(1)
    expect(list.indexOf(10)).toBe(-1)
  })

  it('listReverse', () => {
    expect(list.listReverse()).toEqual([3, 1, 2, 4])
  })

  it('swap normal', () => {
    expect(list.swap(1, 2)).toBeTruthy()
    expect(list.list()).toEqual([4, 1, 2, 3])
  })

  it('swap out', () => {
    expect(list.swap(1, 4)).toBeFalsy()
    expect(list.list()).toEqual([4, 2, 1, 3])
  })

  it('swap start boundary', () => {
    expect(list.swap(0, 2)).toBeTruthy()
    expect(list.list()).toEqual([1, 2, 4, 3])
    expect(list.getHead()!.val).toBe(1)
    expect(list.getTail()!.val).toBe(3)
    expect(list.size).toBe(4)
  })

  it('swap end boundary', () => {
    expect(list.swap(0, 3)).toBeTruthy()
    expect(list.list()).toEqual([3, 2, 1, 4])
    expect(list.getHead()!.val).toBe(3)
    expect(list.getTail()!.val).toBe(4)
    expect(list.size).toBe(4)
  })
})
