
class LinkNode<T = unknown> {
  public next: LinkNode<T> | undefined = undefined
  constructor(
    public val: T,
  ) {}
}

export default LinkNode
