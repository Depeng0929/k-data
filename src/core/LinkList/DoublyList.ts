import { defaultCompareFn } from '../../utils'
import DoublyNode from './DoublyNode'
import LinkList from './index'

class DoublyList<T = unknown> extends LinkList<T> {
  public head: DoublyNode<T> | null = null
  public tail: DoublyNode<T> | null = null

  public insert(index: number, val: T): boolean {
    if (super.isOverRange(index))
      return false

    const node = new DoublyNode(val)
    let current = this.tail

    if (index === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      }
      else {
        node.next = this.tail
        current!.prev = node
        this.head = node
      }
    }
    else if (index === this.count) {
      current = this.tail!
      current.next = node
      node.prev = current
      this.tail = node
    }
    else {
      const prevElement = this.getNodeAt(index - 1)!
      current = prevElement.next
      node.next = current
      prevElement.next = node
      current.prev = node
      node.prev = prevElement
    }
    return true
  }

  public clear() {
    super.clear()
    this.tail = null
  }
}

export default DoublyList
