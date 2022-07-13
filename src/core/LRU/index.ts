import LinkedList from '../LinkedList'

interface LRUOptions<T = unknown> {
  max?: number
}

export class LRU<V = unknown, K = string> {
  private max = 1000
  private map = new Map<K, V>()
  private linkList = new LinkedList<V>()

  constructor(
    options?: LRUOptions,
  ) {
    const { max = 1000 } = options || {}

    this.max = max
  }

  get Size() {
    return this.map.size
  }

  set(key: K, val: V) {
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
