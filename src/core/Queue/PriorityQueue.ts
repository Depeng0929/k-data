import { defaultCompareFn, defaultSwap } from '../../utils'
import { Compare } from '../../types/index.d'

class PriorityQueue<T = unknown> {
  private list: T[] = []
  constructor(
    private compareFn: typeof defaultCompareFn = defaultCompareFn,
  ) {
  }

  get isEmpty() {
    return this.list.length === 0
  }

  get size() {
    return this.list.length
  }

  public enqueue(value: T) {
    this.list.push(value)
    this.siftUp(this.list.length - 1)
  }

  public dequeue() {
    if (this.isEmpty) return undefined
    if (this.list.length === 1) return this.list.shift()

    const result = this.list.shift()
    defaultSwap(this.list, 0, this.list.length - 1)
    this.siftDown(0)
    return result
  }

  public peek() {
    return this.isEmpty ? undefined : this.list[0]
  }

  public clear() {
    this.list = []
  }

  // 元素上移
  private siftUp(index: number) {
    let parent = this.getParentIndex(index)

    while (
      typeof parent !== undefined
      && index > 0
        && this.compareFn(this.list[index], this.list[parent!]) === Compare.MORE
    ) {
      defaultSwap(this.list, parent!, index)
      index = parent!
      parent = this.getParentIndex(index)
    }
  }

  // 元素下移
  private siftDown(index: number) {
    let current = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    if (left < this.size && this.compareFn(this.list[current], this.list[left]) === Compare.LESS)
      current = left

    if (right < this.size && this.compareFn(this.list[current], this.list[right]) === Compare.LESS)
      current = right

    if (index !== current) {
      defaultSwap(this.list, index, current)
      this.siftDown(current)
    }
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1
  }

  private getRightIndex(index: number) {
    return 2 * index + 1
  }

  private getParentIndex(index: number) {
    if (index === 0)
      return undefined

    return Math.floor((index - 1) / 2)
  }
}

export default PriorityQueue
