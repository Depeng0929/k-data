import AbstractLeaf from './AbstractLeaf'

class TreeNode<T = unknown> extends AbstractLeaf<T> {
  public excute(callback: (p: AbstractLeaf<T>) => any) {
    callback(this)
  }

  public isLeaf(): boolean {
    return true
  }
}

export default TreeNode
