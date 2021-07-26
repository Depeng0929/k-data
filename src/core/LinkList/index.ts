import { defaultCompareFn } from '../../utils'
import INode from './Node'

class LinkList <T = unknown> {
  public head: INode<T> | null = null
  private count = 0

  constructor(
    items: T[] = [],
    public compareFn: typeof defaultCompareFn = defaultCompareFn,
  ) {
    this.transformList(items)
  }

  get size() {
    return this.count
  }

  get isEmpty() {
    return this.count === 0
  }

  public getHead() {
    return this.head
  }

  public print() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }

  public push(val: T) {
    const node = new INode(val)
    if (this.head === null) {
      this.head = node
    }
    else {
      let current = this.head
      while (current.next)
        current = current.next

      current.next = node
    }
    this.count++
  }

  public insert(index: number, val: T) {
    if (this.isOverRange(index))
      return false

    const node = new INode(val)
    if (index === 0) {
      const current = this.head
      this.head = node
      node.next = current
    }
    else {
      const prev = this.getElementAt(index - 1)
      const current = prev!.next
      prev!.next = node
      node.next = current
    }

    this.count++
    return true
  }

  public getElementAt(index: number) {
    if (this.isEmpty) return null
    if (index > this.count || index < 0) return null

    let current = this.head
    for (let i = 0; i < index; i++)
      current = current!.next

    return current
  }

  public remove(val: T) {
    const index = this.indexOf(val)
    return this.removeAt(index)
  }

  public removeAt(index: number) {
    if (this.isOverRange(index))
      return null

    let current
    if (index === 0) {
      current = this.head
      this.head = current!.next
    }
    else {
      const prev = this.getElementAt(index - 1)
      current = prev!.next
      prev!.next = current!.next
    }

    this.count--
    return current!.val
  }

  public indexOf(val: T) {
    if (this.isEmpty) return -1

    let current = this.head
    for (let i = 0; i < this.count; i++) {
      // hack: ts-jest not support enum
      if (this.compareFn(current!.val, val) === 0)
        return i
      current = current!.next
    }
    return -1
  }

  public clear() {
    this.head = null
    this.count = 0
  }

  public sort() {
    // ...
  }

  private isOverRange(index: number) {
    return index > this.count || index < 0
  }

  private transformList(arr: T[]) {
    this.clear()

    arr.forEach((item) => {
      this.push(item)
    })
  }
}

export default LinkList
