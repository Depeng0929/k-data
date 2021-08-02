import { deepClone } from '../../utils/index'

class Queue<T = unknown> {
  private items: T[] = []
  constructor(
    items: T[] = [],
  ) {
    this.items = deepClone(items)
  }

  /**
   * 队列是否为空
   * @return {boolean}
   */
  get isEmpty() {
    return this.items.length === 0
  }

  /**
   * 返回队列元素的数目
   * @return {number}
   */
  get size() {
    return this.items.length
  }

  /**
   * 队列底部入队
   * @param val {T}
   */
  public enqueue(val: T) {
    this.items.push(val)
  }

  /**
   *  队列顶部出队
   *  @return {T | undefined}
   */
  public dequeue() {
    return this.items.shift()
  }

  /**
   * 返回队列顶部的元素
   * @return {T | undefined}
   */
  public peek() {
    return this.items[0]
  }

  /**
   * 清空队列
   */
  public clear() {
    this.items = []
  }
}

export default Queue
