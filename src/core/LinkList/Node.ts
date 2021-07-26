class INode<T = unknown> {
  public next: INode<T> | null
  constructor(
    public val: T,
  ) {
    this.next = null
  }
}

export default INode
