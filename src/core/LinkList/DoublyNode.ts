
class DoublyNode<T = unknown> {
  public prev: DoublyNode<T> | null
  public next: DoublyNode<T> | null
  constructor(
    public val: T,
  ) {
    this.prev = null
    this.next = null
  }
}

export default DoublyNode
