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
      current = prevElement.next!
      node.next = current
      prevElement.next = node
      current.prev = node
      node.prev = prevElement
    }
    this.count++
    return true
  }

  public removeAt(index: number) {
    if (this.isOverRange(index)) return null

    let current = this.head!
    if (index === 0) {
      if (this.count === 1) {
        this.clear()
      }
      else {
        this.head = current.next!
        this.head.prev = null
      }
    }
    else if (index === this.count - 1) {
      current = this.tail!
      this.tail = current.prev!
      this.tail.next = null
    }
    else {
      current = this.getNodeAt(index)!
      const prev = current.prev!
      prev.next = current.next
      current.next!.prev = prev
    }
    this.count--
    return current.val
  }

  public clear() {
    super.clear()
    this.tail = null
  }
}

export default DoublyList
