import type { ICompareFn } from '../../types'
import { defaultCompareFn } from '../../utils'
import LinkedList from '../LinkedList'

interface LRUOptions<T = unknown> {
  max?: number
  compareFn?: ICompareFn<T>
}

export default class LRU<V = unknown, K = string | number> {
  private max = 1000
  private compareFn = defaultCompareFn
  private hashMap = new Map<K, V>()
  private linkList = new LinkedList<K>({
    compareFn: this.compareFn,
  })

  constructor(
    options?: LRUOptions,
  ) {
    const { max = 1000, compareFn = defaultCompareFn } = options || {}

    this.max = max
    this.compareFn = compareFn
  }

  get size() {
    return this.hashMap.size
  }

  add(key: K, val: V) {
    return this.set(key, val)
  }

  set(key: K, val: V) {
    if (this.hashMap.has(key))
      return this.hashMap.set(key, val)

    if (this.size >= this.max)
      this.pop()

    this.hashMap.set(key, val)
    this.linkList.add(key)
  }

  get(key: K) {
    return this.hashMap.get(key)
  }

  has(key: K) {
    return this.hashMap.has(key)
  }

  clear() {
    this.linkList.clear()
    this.hashMap.clear()
  }

  delete(key: K) {
    this.linkList.remove(key)
    this.hashMap.delete(key)
  }

  /**
   * 删除最老的一个元素
   */
  pop() {
    const key = this.linkList.removeAt(0)
    if (key)
      return this.hashMap.delete(key)
  }

  /**
   * 获取最新的一个元素
   */
  peek() {
    const key = this.linkList.getTail()
    if (key)
      return this.hashMap.get(key)
  }

  contains(key: K) {
    return this.hashMap.has(key)
  }

  toArray() {
    return this.linkList.toArray().reverse()
  }
}
