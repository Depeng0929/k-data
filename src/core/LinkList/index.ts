import { deepClone, defaultCompareFn } from '../../utils'
import INode from './Node'

class LinkList <T = unknown> {
  public head: INode<T> | null = null
  private count = 0
  private items: T[]

  constructor(
    items: T[],
    public compareFn: typeof defaultCompareFn = defaultCompareFn,
  ) {
    this.items = deepClone(items)
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
      this.count++
    }
  }

  public insert(val: T, index: number) {
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

  public removeAt(index: number) {
    if (this.isOverRange(index))
      return null
  }

  private isOverRange(index: number) {
    return index > this.count || index < 0
  }
}

export default LinkList
