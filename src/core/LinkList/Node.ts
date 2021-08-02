class INode<T = unknown> {
  public prev: INode<T> | null = null
  public next: INode<T> | null = null
  constructor(
    public val: T,
  ) {
  }
}

export default INode
