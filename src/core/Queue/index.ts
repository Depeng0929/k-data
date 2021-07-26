import { deepClone } from '../../utils/index'

class Queue<T = unknown> {
  private items: T[] = []
  constructor(
    items: T[] = [],
  ) {
    this.items = deepClone(items)
  }

  get isEmpty() {
    return this.items.length === 0
  }

  get size() {
    return this.items.length
  }

  /**
   * 添加
   * @param val
   */
  public enqueue(val: T) {
    this.items.push(val)
  }

  /**
   *  出列
   */
  public dequeue() {
    return this.items.shift()
  }

  /**
   * 查看对列中第一个元素
   */
  public peek() {
    return this.items[0]
  }

  public clear() {
    this.items = []
  }
}

export default Queue
