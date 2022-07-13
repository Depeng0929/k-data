import { defaultCompareFn } from '../../utils/index'
import type { ICompareFn } from '../../types/index.d'
import TreeNode from './TreeNode'

type ICallback<T> = (item: T) => void
interface BSTreeOptions<T> {
  compareFn?: ICompareFn<T>
}

class BSTree<T = number> {
  private root: TreeNode<T> | null = null
  private compareFn: ICompareFn<T> = defaultCompareFn
  private count = 0

  constructor(options?: BSTreeOptions<T>) {
    this.compareFn = options?.compareFn || defaultCompareFn
  }

  get isEmpty() {
    return this.size === 0
  }

  get size() {
    return this.count
  }

  /**
   * 获取tree中最大node
   */
  get max() {
    if (this.root === null) return null
    const node = this.getMaxNode(this.root)
    return node.val
  }

  /**
   * 获取tree中最小node
   */
  get min() {
    if (this.root === null) return null
    const node = this.getMinNode(this.root)
    return node.val
  }

  public add(val: T) {
    if (this.root === null)
      this.root = new TreeNode(val)
    else
      this.insertNode(this.root, val)

    this.count++
  }

  public clear() {
    this.root = null
    this.count = 0
  }

  public contains(val: T) {
    const node = this.searchNode(this.root, val)
    return node != null
  }

  public forEach(callback: ICallback<T>) {
    this.inOrderTraverse(callback)
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

  /**
   * 删除值为val的node
   * @param val T 要删除的node的值
   */
  public remove(val: T) {
    const node = this.removeNode(this.root, val)
    if (node === null)
      return false

    this.count--
    return true
  }

  public toArray() {
    const result: T[] = []
    this.inOrderTraverse((item) => {
      result.push(item)
    })
    return result
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

  private getMaxNode(node: TreeNode<T>) {
    let current = node
    while (current !== null && current.right !== null)
      current = current.right

    return current
  }

  private getMinNode(node: TreeNode<T>) {
    let current = node
    while (current !== null && current.left !== null)
      current = current.left

    return current
  }

  private searchNode(node: TreeNode<T> | null, val: T): null | TreeNode<T> {
    if (node === null) return null
    if (node.val > val) return this.searchNode(node.left, val)
    if (node.val < val) return this.searchNode(node.right, val)
    return node
  }
}

export default BSTree
