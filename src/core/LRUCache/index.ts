import DoublyList from '../LinkList/DoublyLinkList'
import DoublyNode from '../LinkList/DoublyNode'

class LRUCache<T = unknown> {
  public hash = new Map()
  private linkList = new DoublyList<T>()
  private count = 0

  constructor(
    public capacity: number = 5,
  ) {
  }

  public get(key: unknown) {

  }

  public put(key: unknown, value: unknown) {
    const node = this.hash.get(key)
    if (node) {
      node.value = value
    }
    else {}
  }

  public remove(key: unknown) { }

  private moveToHead(node: DoublyNode<T>) {

  }
}

export default LRUCache
