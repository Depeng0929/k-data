class TreeNode<T extends object> {
  public children: TreeNode<T>[] = []
  public parent: TreeNode<T> | null = null

  constructor(
    public data: T,
  ) {
  }

  add(node: TreeNode<T>) {
    node.setParent(this)
    this.children.push(node)

    return this
  }

  update(data: T) {
    this.data = Object.assign({}, this.data, data)

    return this
  }

  remove() {
    if (!this.parent) return false

    const index = this.parent.children.indexOf(this)
    if (index === -1) return false
    this.parent.children.splice(index, 1)

    return this
  }

  removeChildren(callback: (node: TreeNode<T>) => boolean) {
    this.traverse((node) => {
      if (callback(node))
        node.remove()
    })

    return this
  }

  forEach(callback: (node: TreeNode<T>) => void) {
    this.traverse(callback)

    return this
  }

  setParent(node: TreeNode<T> | null) {
    this.parent = node

    return this
  }

  find(callback: (node: TreeNode<T>) => boolean): TreeNode<T> | null {
    if (callback(this)) return this

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]
      const node = child.find(callback)
      if (node) return node
    }

    return null
  }

  private traverse(callback: (node: TreeNode<T>) => void) {
    callback(this)
    if (this.children.length)
      this.children.forEach(child => child.traverse(callback))
  }
}

export default TreeNode
