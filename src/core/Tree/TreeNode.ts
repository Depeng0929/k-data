import { Queue } from '../../index'

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

  // 当前节点广度遍历
  public breadthFirstSearch(callback: (p: any) => any = () => {}) {
    const queue = new Queue<TreeNode>()
    queue.enqueue(this)

    while (!queue.isEmpty) {
      const u = queue.dequeue()!
      const children = u.children
      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        queue.enqueue(child)
      }
      callback(u.val)
    }
  }
}

export default TreeNode
