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

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return this.size === 0
  }

  /**
   * 向栈中添加一个元素
   */
  public push(val: T) {
    this.items.push(val)
  }

  /**
   * 出栈
   */
  public pop() {
    return this.items.pop()
  }

  /**
   * 查看栈顶第一个元素
   */
  public peek() {
    return this.items[this.items.length - 1]
  }

  /**
   * 清除栈中元素
   */
  public clear() {
    return this.items = []
  }
}

export default Stack
