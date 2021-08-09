import { LRUCache } from '../../../src/index'

describe('LRUCache', () => {
  const cache = new LRUCache(5)

  beforeEach(() => {
    cache.put('A', 'A')
    cache.put('B', 'B')
    cache.put('C', 'C')
    cache.put('D', 'D')
    cache.put('E', 'E')
  })

  afterEach(() => {
    cache.clear()
  })

  it('init', () => {
    expect(cache.size).toBe(5)
    expect(cache.getHead()).toBe('E')
  })

  it('clear', () => {
    cache.clear()
    expect(cache.size).toBe(0)
    expect(cache.get('A')).toBeUndefined()
  })

  it('get', () => {
    cache.get('C')
    expect(cache.getHead()).toBe('C')
  })

  it('remove', () => {
    cache.remove('E')
    expect(cache.getHead()).toBe('D')
    expect(cache.size).toBe(4)
  })

  it('capacity', () => {
    cache.put('F', 'F')
    expect(cache.getHead()).toBe('F')
    expect(cache.size).toBe(5)
  })
})
