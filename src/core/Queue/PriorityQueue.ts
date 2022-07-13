import { deepClone } from '@depeng9527/tools'
import type { DefaultOptions, ICompareFn, IOptions } from '../../types'
import { defaultCompareFn, defaultSwap } from '../../utils'

class PriorityQueue<T = unknown> {
  private list: T[] = []
  private compareFn: ICompareFn<T> = defaultCompareFn

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

    this.list = deepClone(items)
    this.compareFn = compareFn
  }

  /**
   * 判断队列是否为kong
   * @return {boolean}
   */
  get isEmpty() {
    return this.list.length === 0
  }

  /**
   * 队列长度
   * @return {number}
   */
  get size() {
    return this.list.length
  }

  public add(value: T) {
    this.enqueue(value)
  }

  /**
   * 清空队列
   */
  public clear() {
    this.list = []
  }

  public contains(value: T) {
    return this.list.includes(value)
  }

  /**
   * 入队
   * @param value {T}
   */
  public enqueue(value: T) {
    this.list.push(value)
    this.siftUp(this.list.length - 1)
  }

  /**
   * 出队
   * @return {T | undefined}
   */
  public dequeue() {
    if (this.isEmpty) return undefined
    if (this.list.length === 1) return this.list.shift()

    const result = this.list.shift()
    this.list.unshift(this.list.pop()!)
    this.siftDown(0)
    return result
  }

  /**
   * 返回队列顶部的元素
   * @return {T | undefined}
   */
  public peek() {
    return this.isEmpty ? undefined : this.list[0]
  }

  public toArray() {
    return deepClone(this.list)
  }

  public forEach(callback: (item: T) => void) {
    this.list.forEach(callback)
  }

  * [Symbol.iterator]() {
    let index = 0

    while (index < this.list.length) {
      yield this.list[index]
      index++
    }
  }

  /**
   * 入队时，需要上移元素
   * @param index {number} 上移元素的数组索引，通常是 length - 1
   */
  private siftUp(index: number) {
    let parent = this.getParentIndex(index)

    while (
      typeof parent !== undefined
      && index > 0
        && this.compareFn(this.list[index], this.list[parent!]) === 1
    ) {
      defaultSwap(this.list, parent!, index)
      index = parent!
      parent = this.getParentIndex(index)
    }
  }

  /**
   * 出队时，最后一个元素放在头部，执行下移交换操作
   * @param index {number}
   */
  private siftDown(index: number) {
    let current = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)

    if (left < this.size && this.compareFn(this.list[current], this.list[left]) === -1)
      current = left

    if (right < this.size && this.compareFn(this.list[current], this.list[right]) === -1)
      current = right

    if (index !== current) {
      defaultSwap(this.list, index, current)
      this.siftDown(current)
    }
  }

  /**
   * 获取当前节点的左子节点索引
   * @param index 当前节点索引
   * @return {number}
   */
  private getLeftIndex(index: number) {
    return 2 * index + 1
  }

  /**
   * 获取当前节点的右子节点索引
   * @param index 当前节点索引
   * @return {number}
   */
  private getRightIndex(index: number) {
    return 2 * index + 2
  }

  /**
   * 获取当前节点的父节点索引
   * @param index 当前节点索引
   * @return {number}
   */
  private getParentIndex(index: number) {
    if (index === 0)
      return undefined

    return Math.floor((index - 1) / 2)
  }
}

export default PriorityQueue
