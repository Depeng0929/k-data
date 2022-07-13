import type { ICompareFn } from '../../types'
import { defaultCompareFn } from '../../utils'
import LinkedList from '../LinkedList'

interface LRUOptions<T = unknown> {
  max?: number
  compareFn: ICompareFn<T>
}

export class LRU<V = unknown, K = string> {
  private max = 1000
  private compareFn = defaultCompareFn
  private hashMap = new Map<K, V>()
  private linkList = new LinkedList<V>({
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

  set(key: K, val: V) {
    if (this.hashMap.has(key)) {
      this.hashMap.delete(key)
      this.linkList.remove(val)
    }
    this.hashMap.set(key, val)
  }

  get() {}

  has() {}

  clear() {}

  delete() {}

  forEach() {}

  pop() {}

  peek() {}

  contains() {}
}
