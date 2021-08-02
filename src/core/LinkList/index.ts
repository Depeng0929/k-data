import { defaultCompareFn } from '../../utils'
import INode from './Node'

class LinkList <T = unknown> {
  public head: INode<T> | null = null
  protected count = 0

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
    this.insert(0, val)
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
      const prev = this.getNodeAt(index - 1)
      const current = prev!.next
      prev!.next = node
      node.next = current
    }

    this.count++
    return true
  }

  public getNodeAt(index: number) {
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
      const prev = this.getNodeAt(index - 1)
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

  // 归并排序
  public sort(): LinkList<T> {
    this.head = this.sortLinkList(this.head, null)
    return this
  }

  private sortLinkList(head: INode | null, tail: INode | null): INode<any> | null {
    if (head === null) return null
    if (head.next === tail) {
      head.next = null
      return head
    }

    // find mid
    let fast = head
    let slow = head
    while (fast !== tail) {
      slow = slow.next!
      fast = fast.next!
      if (fast !== null)
        fast = fast.next!
    }

    return this.sortMerge(this.sortLinkList(head, slow), this.sortLinkList(slow, tail))
  }

  private sortMerge(list1: INode<T> | null, list2: INode<T> | null) {
    const newHead = new INode(-1)
    let tmp = newHead
    while (list1 !== null && list2 !== null) {
      if (this.compareFn(list1.val, list2.val) === -1) {
        tmp.next = list1 as INode<any>
        list1 = list1.next
      }
      else {
        tmp.next = list2 as INode<any>
        list2 = list2.next
      }
      tmp = tmp.next
    }

    if (list1 !== null)
      tmp.next = list1 as INode<any>

    else if (list2 !== null)
      tmp.next = list2 as INode<any>

    return newHead.next
  }

  protected isOverRange(index: number) {
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
