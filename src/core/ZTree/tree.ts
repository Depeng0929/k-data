import TreeNode from './treeNode'

type ZRawITem<T> = T & {
  children: ZRawITem<T>[]
}

class ZTree <T extends object> {
  private _root: TreeNode<T>[] = []

  constructor(
    data?: Array<ZRawITem<T>>,
  ) {
    if (data?.length)
      this.initNodeList(data)
  }

  add(node: TreeNode<T>) {
    this._root.push(node)
  }

  forEach(callback: (node: TreeNode<T>) => void) {
    this._root.forEach((node) => {
      node.forEach(callback)
    })
    return this
  }

  removeChildren(callback: (node: TreeNode<T>) => boolean) {
    this._root = this._root.filter(item => !callback(item))

    this._root.forEach((node) => {
      node.removeChildren(callback)
    })

    return this
  }

  find(callback: (node: TreeNode<T>) => boolean) {
    for (let i = 0; i < this._root.length; i++) {
      const rootItem = this._root[i]
      if (callback(rootItem)) {
        return rootItem
      }
      else {
        const isFind = rootItem.find(callback)
        if (isFind)
          return isFind
      }
    }
    return null
  }

  remove() {
    this._root = []
  }

  private initNodeList(data: Array<ZRawITem<T>>) {
    data.forEach((dataItem) => {
      const treeNode = new TreeNode(dataItem)
      dataItem.children.forEach((item) => {
        this.initNodeItem(item, treeNode)
      })
      this._root.push(treeNode)
    })
  }

  private initNodeItem(dataItem: ZRawITem<T>, parent: TreeNode<ZRawITem<T>> | null) {
    const treeNode = new TreeNode(dataItem)
    parent?.add(treeNode)

    if (dataItem?.children.length) {
      dataItem.children.forEach((item) => {
        this.initNodeItem(item, treeNode)
      })
    }
  }
}

export default ZTree
