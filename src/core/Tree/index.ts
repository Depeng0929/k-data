import Queue from '../Queue'
import AbstractLeaf from './AbstractLeaf'

class Tree<T = unknown> extends AbstractLeaf<T> {
  /**
   * 添加子节点
   * @param node {AbstractLeaf<T>} 子节点
   */
  public add(node: AbstractLeaf<T>) {
    this.children.push(node)
    node.parent = this

    return this
  }

  /**
   * 移除当前节点
   */
  public remove() {
    if (!this.parent) return undefined

    const children = this.parent.children
    for (let i = 0; i < children.length; i++) {
      if (children[i] === this) {
        children.splice(i, 1)
        break
      }
    }
  }

  /**
   * 深度优先
   * @param callback
   */
  public excute(callback: (p: AbstractLeaf<T>) => any) {
    callback(this)
    this.children.forEach(i => i.excute(callback))
  }

  /**
   * 广度优先
   * @param callback
   */
  public breadthFirstSearch(callback: (p: AbstractLeaf<T>) => any = () => { }) {
    const queue = new Queue<AbstractLeaf<T>>()
    queue.enqueue(this)

    while (!queue.isEmpty) {
      const current = queue.dequeue()!
      const children = current.children
      for (let i = 0; i < children.length; i++)
        queue.enqueue(children[i])

      callback(current)
    }
  }
}

export default Tree
