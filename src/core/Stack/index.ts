import { deepClone, equal } from '@depeng9527/tools'
import type { DefaultOptions, ICompareFn, IOptions } from '../../types'
import { defaultCompareFn } from '../../utils'

class Stack<T = unknown> {
  private items: T[] = []
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
  }

  /**
   * 当前栈的长度
   * @return {number}
   */
  get size() {
    return this.items.length
  }

  /**
   * 栈是否为空
   * @return {boolean}
   */
  get isEmpty() {
    return this.size === 0
  }

  /**
   * 入栈
   * @param val {T} 入栈的元素
   */
  public add(val: T) {
    this.push(val)
  }

  /**
   * 清空栈
   */
  public clear() {
    return this.items = []
  }

  public contains(item: T, compareFunction?: ICompareFn) {
    const comare = compareFunction || this.compareFn
    return this.items.some(i => comare(i, item))
  }

  public forEach(callback: (item: T, index?: number) => void) {
    this.items.forEach(callback)
  }

  * [Symbol.iterator]() {
    let index = this.items.length - 1

    while (index >= 0) {
      yield this.items[index]
      index--
    }
  }

  /**
   * 入栈
   * @param val {T} 入栈的元素
   */
  public push(val: T) {
    this.items.push(val)
  }

  /**
   * 出栈
   * @return {T}
   */
  public pop() {
    return this.items.pop()
  }

  /**
   * 返回栈顶的元素
   * @return T
   */
  public peek() {
    return this.items[this.items.length - 1]
  }

  /**
   * 转换成数组
   */
  public toArray(): T[] {
    return deepClone(this.items)
  }

  /**
   * 判断两个栈是否相等
   */
  public equals(s: Stack<T>) {
    if (this.size !== s.size) return false
    const s1 = this.toArray()
    const s2 = s.toArray()

    return equal(s1, s2)
  }
}

export default Stack
