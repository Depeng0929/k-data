class TreeNode<T = unknown> {
  public val: T
  public left: TreeNode<T> | null = null
  public right: TreeNode<T> | null = null

  constructor(
    data: T,
  ) {
    this.val = data
  }
}

export default TreeNode
