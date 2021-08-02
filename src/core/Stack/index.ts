import { deepClone } from '../../utils/index'

class Stack<T = unknown> {
  private items: T[] = []

  constructor(
    items: T[] = [],
  ) {
    if (Array.isArray(items))
      this.items = deepClone(items)

    else
      throw new Error('传入的参数必须是数组')
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
   * 清空栈
   */
  public clear() {
    return this.items = []
  }
}

export default Stack
