import { DoublyLinkList, DoublyLinkNode } from '../LinkList/index'

export type LRUCacheNode<T = unknown> = {
  LRUKey: unknown
  LRUValue: T
}

const compareFn = (a: LRUCacheNode, b: LRUCacheNode) => {
  if (a.LRUKey === b.LRUKey) return 0

  return (a.LRUKey as number) > (b.LRUKey as number) ? 1 : -1
}

class LRUCache<T = unknown> {
  private count = 0
  private hash = new Map<any, DoublyLinkNode<LRUCacheNode<T>>>()
  private linkList = new DoublyLinkList<LRUCacheNode<T>>({
    compareFn,
  })

  constructor(
    public capacity: number = 5,
  ) {
  }

  /**
   * 当前LRU元素数量
   */
  get size() {
    return this.count
  }

  /**
   * 是否为空
   */
  get isEmpty() {
    return this.count === 0
  }

  /**
   * 获取元素
   * @param key {unknow}
   */
  public get(key: unknown) {

  }

  /**
   * 添加或修改
   * @param key {unknow}
   * @param val {T}
   */
  public put(key: unknown, val: T) {
    const LRUNodeValue: LRUCacheNode<T> = { LRUKey: key, LRUValue: val }
    let LRUNode = this.hash.get(key)
    if (LRUNode) {
      LRUNode.val.LRUValue = val
      this.moveHead(LRUNode)
    }
    else {
      LRUNode = new DoublyLinkNode(LRUNodeValue)
      this.hash.set(key, LRUNode)
      this.moveHead(LRUNode)
      this.count++
    }
  }

  /**
   * 删除
   */
  public remove(key) { }

  private moveHead(node: DoublyLinkNode<LRUCacheNode<T>>) {
    const index = this.linkList.indexOf(node.val)
    this.linkList.swap(index, 0)
  }
}

export default LRUCache
