import { ILinkListOptions } from '../../types'
import LinkList from './LinkList'
import DoublyLinkNode from './DoublyLinkNode'

class DoublyLinkList<T = unknown> extends LinkList<T> {
  protected tail: DoublyLinkNode<T> | undefined
  declare protected head: DoublyLinkNode<T> | undefined
  constructor(
    options?: ILinkListOptions<T>,
  ) {
    super(options)

    this.init()
  }

  /**
   * 清空双向链表
   */
  public clear() {
    super.clear()
    this.tail = undefined
  }

  /**
   * 交换双向链表中两个元素
   * @param a {number} 索引
   * @param b {number} 索引
   */
  public swap(a: number, b: number) {
    if (a === b)
      return false

    const overRange = (index: number) => index >= this.count || index < 0
    if (overRange(a) || overRange(b)) return false

    const max = Math.max(a, b)
    const min = Math.min(a, b)

    const maxNode = this.getNodeAt(max) as DoublyLinkNode<T>
    const minNode = this.getNodeAt(min) as DoublyLinkNode<T>

    if (min === 0)
      this.head = maxNode

    if (max === this.count - 1)
      this.tail = minNode

    if (max - min === 1) {
      const minPrev = minNode.prev
      const maxNext = maxNode.next
      if (minPrev)
        minPrev.next = maxNode

      maxNode.prev = minPrev
      maxNode.next = minNode
      minNode.prev = maxNode
      minNode.next = maxNext

      return true
    }

    const minPrev = minNode.prev
    const minNext = minNode.next
    const maxPrev = maxNode.prev!
    const maxNext = maxNode.next

    if (minPrev) minPrev.next = maxNode
    maxNode.prev = minPrev
    maxNode.next = minNext

    maxPrev.next = minNode
    minNode.next = maxNext
    minNode.prev = maxPrev
  }

  /**
   * 获取双向链表尾部
   */
  public getTail() {
    return this.tail
  }

  public init() {
    this.clear()
  }

  public push(val: T) {
    this.insert(this.count, val)
  }

  /**
   * 向双向链表指定索引中插入一个元素
   * @param index
   * @param val
   */
  public insert(index: number, val: T): boolean {
    if ((index > this.count || index < 0)) return false

    const node = new DoublyLinkNode(val)
    let current = this.head!
    if (index === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
      }
      else {
        node.next = this.head
        current.prev = node
        this.head = node
      }
    }
    else if (index === this.count) {
      current = this.tail!

      // hack: jest hack
      if (current) {
        current.next = node
        node.prev = current
        this.tail = node
      }
    }
    else {
      const prev = this.getNodeAt(index - 1) as DoublyLinkNode<T>
      current = prev.next!
      node.next = current
      prev.next = node
      current.prev = node
      node.prev = prev
    }

    this.count++
    return true
  }

  /**
   * 移除双向链表指定索引节点
   * @param index {number}
   */
  public removeAt(index: number): T | undefined {
    if ((index >= this.count || index < 0)) return undefined

    let current = this.head!
    if (index === 0) {
      this.head = current.next
      if (this.count === 1)
        this.tail = undefined
      else
        this.head!.prev = undefined
    }
    else if (index === this.count - 1) {
      current = this.tail!
      this.tail = current.prev
      this.tail!.next = undefined
    }
    else {
      current = this.getNodeAt(index) as DoublyLinkNode<T>
      const prev = current.next!
      prev.next = current.next
      current.next!.prev = prev
    }
    this.count--
    return current.val
  }

  /**
   * 倒序输出
   */
  public listReverse() {
    const result: T[] = []
    let current = this.tail

    while (current) {
      result.push(current.val)
      current = current.prev
    }

    return result
  }
}

export default DoublyLinkList
