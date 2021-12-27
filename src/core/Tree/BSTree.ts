import { Compare } from '../../types/index.d'
import { defaultCompareFn } from '../../utils/index'
import TreeNode from './TreeNode'
import { ICallback } from './types'

class BSTree<T = number> {
  private root: TreeNode<T> | null = null
  private compareFn: typeof defaultCompareFn = defaultCompareFn

  /**
   * 获取tree中最大node
   */
  get max() {
    if (this.root === null) return null
    return this.getMaxNode(this.root)
  }

  /**
   * 获取tree中最小node
   */
  get min() {
    if (this.root === null) return null
    return this.getMinNode(this.root)
  }

  /**
   * 向BSTree中插入一个node
   * @param val T 要插入的node的值
   */
  public insert(val: T) {
    if (this.root === null)
      this.root = new TreeNode(val)

    else
      this.insertNode(this.root, val)
  }

  /**
   * 删除值为val的node
   * @param val T 要删除的node的值
   */
  public remove(val: T) {
    this.removeNode(this.root, val)
  }

  /**
   * 先序遍历
   * @param callback
   */
  public preOrderTraverse(callback: ICallback<T>) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * 中序遍历
   * @param callback
   */
  public inOrderTraverse(callback: ICallback<T>) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * 后序遍历
   * @param callback
   */
  public postOrderTraverse(callback: ICallback<T>) {
    this.postOrderTraverseNode(this.root, callback)
  }

  private preOrderTraverseNode(node: TreeNode<T> | null, callback: ICallback<T>) {
    if (node !== null) {
      callback(node.val)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  private inOrderTraverseNode(node: TreeNode<T> | null, callback: ICallback<T>) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.val)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  private postOrderTraverseNode(node: TreeNode<T> | null, callback: ICallback<T>) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.val)
    }
  }

  private insertNode(node: TreeNode<T>, val: T) {
    if (
      this.compareFn(val, node.val) === 1
    ) {
      if (node.right === null)
        node.right = new TreeNode(val)

      else
        this.insertNode(node.right, val)
    }
    else {
      if (node.left === null)
        node.left = new TreeNode(val)
      else
        this.insertNode(node.left, val)
    }
  }

  private removeNode(node: TreeNode<T> | null, val: T) {
    if (node === null) return null
    if (node.val === val) {
      if (node.left === null && node.right === null) {
        node = null
      }
      else if (node.left === null || node.right === null) {
        node = node.left || node.right
      }
      else {
        const aux = this.getMinNode(node.right)
        node.val = aux.val
        node.right = this.removeNode(node.right, aux.val)
      }
    }
    else if (node.val > val) {
      node.left = this.removeNode(node.left, val)
    }
    else {
      node.right = this.removeNode(node.right, val)
    }
    return node
  }

  public search(val: T) {
    return this.searchNode(this.root, val)
  }

  private getMaxNode(node: TreeNode<T>) {
    let result = node
    while (node !== null && node.right !== null)
      result = node.right

    return result
  }

  private getMinNode(node: TreeNode<T>) {
    let result = node
    while (node !== null && node.left !== null)
      result = node.left

    return result
  }

  private searchNode(node: TreeNode<T> | null, val: T): null | TreeNode<T> {
    if (node === null) return null
    if (node.val > val) return this.searchNode(node.left, val)
    if (node.val < val) return this.searchNode(node.right, val)
    return node
  }
}

export default BSTree
