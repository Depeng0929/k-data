import type { Nullable } from '@depeng9527/tools'
import { deepClone } from '@depeng9527/tools'
import { Compare } from '../../types/index.d'
import type { DefaultOptions, ICompareFn, IOptions } from '../../types/index.d'
import { defaultCompareFn } from '../../utils'
import LinkedNode from './LinkedNode'

class LinkedList<T = unknown> {
  protected head: Nullable<LinkedNode<T>>
  protected count = 0
  protected items: T[]
  protected compareFn: ICompareFn<T>

  constructor(
    options?: DefaultOptions<T>,
  ) {
    const defaultOptions: IOptions<T> = {
      items: [],
      compareFn: defaultCompareFn,
    }

    const { items, compareFn } = Object.assign(defaultOptions, options || {})
    if (!Array.isArray(items))
      throw new Error('items must be Array')

    this.items = deepClone(items)
    this.compareFn = compareFn

    this.init()
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

  public add(val: T) {
    this.insert(this.count, val)
  }

  /**
   * 清空链表
   */
  public clear() {
    this.head = undefined
    this.count = 0
  }

  /**
   *
   * @param item {T} target
   * @param equalsFunction {(a:T, b:T) => 0|1|-1} compare function
   * @return {boolean}
   */
  public contains(item: T, equalsFunction?: ICompareFn<T>) {
    const equalsFn = equalsFunction || this.compareFn

    let current = this.head
    while (current) {
      if (equalsFn(current.value, item) === Compare.EQUAL)
        return true

      current = current.next
    }
    return false
  }

  /**
   * 根据索引，返回node
   * @param index {number} 索引
   * @returns {LinkedNode<T>}
   */
  public elementAtIndex(index: number) {
    if (this.isEmpty || (index >= this.count || index < 0)) return undefined

    let current = this.head
    for (let i = 0; i < index && current; i++)
      current = current.next

    return current!.value
  }

  /**
   * 获取链表头部
   * @returns {Nullable<LinkedNode<T>>}
   */
  public getHead() {
    return this.head?.value
  }

  /**
   * forEach
   * @param callback
   */
  public forEach(callback: (item: T) => void) {
    let current = this.head
    while (current) {
      callback(current.value)
      current = current.next
    }
  }

  * [Symbol.iterator]() {
    let current = this.head

    while (current) {
      yield current.value
      current = current.next
    }
  }

  /**
   * 给定值，返回在链表中的索引
   * @param val {T}
   * @param equalsFunction {ICompareFn<T>}
   * @returns {number}
   */
  public indexOf(val: T, equalsFunction?: ICompareFn<T>) {
    if (this.isEmpty) return -1

    const equalsFn = equalsFunction || this.compareFn
    let current = this.head

    for (let i = 0; i < this.count && current; i++) {
      if (equalsFn(current.value, val) === 0)
        return i
      current = current.next
    }
    return -1
  }

  /**
   * 删除第一个val相等, 返回被删除的元素
   * @param val {T}
   * @returns {T}
   */
  public remove(val: T, equalsFunction?: ICompareFn<T>) {
    const index = this.indexOf(val, equalsFunction)
    if (!(index >= this.count || index < 0))
      return this.removeAt(index)

    return undefined
  }

  /**
   * 根据索引，删除元素，返回删除后的元素
   * @param index 索引
   * @returns {T}
   */
  public removeAt(index: number): T | undefined {
    if (this.isEmpty || (index >= this.count || index < 0)) return undefined

    let current = this.head!
    if (index === 0) {
      this.head = current.next
    }
    else {
      const prev = this.elementAt(index - 1)!
      current = prev.next!
      prev.next = current.next
    }

    this.count--
    return current.value
  }

  /**
   * 返回一个由链表元素组成的数组
   */
  public toArray(): T[] {
    const result: T[] = []
    let current = this.head

    while (current) {
      result.push(current.value)
      current = current.next
    }

    return result
  }

  protected init() {
    this.items.forEach(item => this.add(item))
  }

  /**
   * 向索引处添加元素
   * @param index {number} 索引
   * @param val {T}
   * @returns {boolean}
   */
  protected insert(index: number, val: T): boolean {
    if ((index > this.count || index < 0))
      return false

    const node = new LinkedNode(val)
    if (index === 0) {
      const current = this.head
      this.head = node
      node.next = current
    }
    else {
      const prev = this.elementAt(index - 1)!
      const current = prev.next!
      prev.next = node
      node.next = current
    }
    this.count++
    return true
  }

  /**
   * 根据索引，返回node
   * @param index {number} 索引
   * @returns {LinkedNode<T>}
   */
  protected elementAt(index: number) {
    if (this.isEmpty || (index >= this.count || index < 0)) return undefined

    let current = this.head
    for (let i = 0; i < index && current; i++)
      current = current.next

    return current
  }
}

export default LinkedList
