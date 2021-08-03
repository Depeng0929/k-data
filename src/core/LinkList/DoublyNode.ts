class DoublyNode<T = unknown> {
  public prev: DoublyNode<T> | undefined = undefined
  public next: DoublyNode<T> | undefined = undefined
  constructor(
    public val: T,
  ) {}
}

export default DoublyNode
