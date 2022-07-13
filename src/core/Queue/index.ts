import type { DefaultOptions, ICompareFn } from '../../types'
import { defaultCompareFn } from '../../utils'
import LinkedList from '../LinkedList'

export class Queue<T = unknown> {
  private linkedList: LinkedList<T> | undefined

  constructor(
    options?: DefaultOptions<T>,
  ) {
    const defaultOptions: DefaultOptions<T> = {
      items: [],
      compareFn: defaultCompareFn,
    }
    const o = Object.assign(defaultOptions, options || {})
    this.linkedList = new LinkedList<T>(o)
  }

  get size() {
    return this.linkedList?.size || 0
  }

  get isEmpty() {
    if (!this.linkedList) return true
    return this.linkedList.isEmpty
  }

  add(item: T) {
    return this.linkedList?.add(item)
  }

  clear() {
    return this.linkedList?.clear()
  }

  contains(item: T, equalsFunction?: ICompareFn) {
    if (!this.linkedList) return false
    return this.linkedList.contains(item, equalsFunction)
  }

  /**
   * 出列
   */
  dequeue() {
    return this.linkedList?.removeAt(0)
  }

  enqueue(item: T) {
    return this.add(item)
  }

  forEach(callback: (item: T) => void) {
    return this.linkedList?.forEach(callback)
  }

  * [Symbol.iterator]() {
    if (!this.linkedList) return
    for (const item of this.linkedList!)
      yield item
  }

  peek() {
    return this.linkedList?.getHead()
  }

  toArray() {
    if (!this.linkedList) return []
    return this.linkedList.toArray()
  }
}
