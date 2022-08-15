import type { ITreeListITem } from './type'

class TreeNode {
  private _parent: TreeNode | null = null
  constructor(
    private _item: ITreeListITem<'id', 'pid'>,
  ) {}

  get id() {
    return this._item.id
  }

  get pid() {
    return this._item.pid
  }

  get parent() {
    return this._parent
  }

  get children() {
    return this._item.children
  }

  setParent(node: TreeNode) {
    this._parent = node
  }
}

export default TreeNode
