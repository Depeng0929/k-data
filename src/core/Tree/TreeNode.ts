class TreeNode<T = unknown> {
  public children: TreeNode<T>[] = []
  public level: number
  private parent: TreeNode<T> | null = null

  constructor(
    public val: T,
    level = 0,
  ) {
    this.level = level
  }

  public add(node: TreeNode<T>) {
    node.parent = this
    node.level = this.level + 1
    this.children.push(node)
    return this
  }

  public remove() {
    if (this.parent === null)
      return

    for (let i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i] === this) {
        this.parent.children.splice(i, 1)
        return
      }
    }
  }
}

export default TreeNode
