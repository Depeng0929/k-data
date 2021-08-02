import INode from './Node'

class DoublyNode<T = unknown> extends INode {
  public prev: DoublyNode<T> | null = null
  public next: DoublyNode<T> | null = null
  constructor(
    public val: T,
  ) {
    super(val)
  }
}

export default DoublyNode
