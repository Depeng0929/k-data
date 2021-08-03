import { defaultCompareFn } from '../../utils'

class LinkNode<T = unknown> {
  public next: LinkNode<T> | undefined = undefined
  constructor(
    public val: T,
  ) {}
}

class LinkList<T = unknown> {
  protected head: LinkNode<T> | undefined = undefined
  protected count = 0

  constructor(
    protected compareFn: typeof defaultCompareFn = defaultCompareFn,
  ) {
  }

  /**
   * 当前链表长度
   */
  get size() {
    return this.count
  }

  /**
   * 链表是否为空
   */
  get isEmpty() {
    return this.count === 0
  }

  /**
   * 清空链表
   */
  public clear() {
    this.head = undefined
    this.count = 0
  }

  /**
   * 删除第一个val相等, 返回被删除的元素
   * @param val {T}
   * @returns {T}
   */
  public remove(val: T) {
    const index = this.indexOf(val)
    if (!this.overIndexRange(index))
      return this.removeAt(index)

    return undefined
  }

  /**
   * 根据索引，删除元素，返回删除后的元素
   * @param index 索引
   * @returns {T}
   */
  public removeAt(index: number): T {
    if (this.isEmpty || this.overIndexRange(index)) return undefined

    let current = this.head!
    if (index === 0) {
      this.head = current.next
    }
    else {
      const prev = this.getNodeAt(index - 1)!
      current = prev.next!
      prev.next = current.next
    }

    this.count--
    return current.val
  }

  /**
   * 向索引处添加元素
   * @param index {number} 索引
   * @param val {T}
   * @returns {boolean}
   */
  public insert(index: number, val: T): boolean {
    if (this.overIndexRange(index))
      return false

    const node = new LinkNode(val)
    if (index === 0) {
      const current = this.head
      this.head = node
      node.next = current
    }
    else {
      const prev = this.getNodeAt(index - 1)!
      const current = prev.next!
      prev.next = node
      node.next = current
    }
    this.count++
    return true
  }

  /**
   * 获取链表头部
   * @returns {LinkNode<T>}
   */
  public getHead() {
    return this.head
  }

  public push(val: T) {
    this.insert(this.count - 1, val)
  }

  /**
   * 返回一个由链表元素组成的数组
   */
  public list(): T[] {
    const result: T[] = []
    let current = this.head

    while (current) {
      result.push(current.val)
      current = current.next
    }

    return result
  }

  /**
   * 根据索引，返回node
   * @param index {number} 索引
   * @returns {LinkNode<T>}
   */
  public getNodeAt(index: number) {
    if (this.isEmpty || this.overIndexRange(index)) return undefined

    let current = this.head
    for (let i = 0; i < index && current; i++)
      current = current.next

    return current
  }

  /**
   * 给定值，返回在链表中的索引
   * @param val {T}
   * @returns {number}
   */
  public indexOf(val: T) {
    if (this.isEmpty) return -1

    const current = this.head
    for (let i = 0; i < this.count && current; i++) {
      if (this.compareFn(current.val, val) === 0)
        return i
    }
    return -1
  }

  protected overIndexRange(index: number) {
    return index >= this.count || index < 0
  }
}

export {
  LinkList as AbstractList,
  LinkNode as AbstractNode,
}
