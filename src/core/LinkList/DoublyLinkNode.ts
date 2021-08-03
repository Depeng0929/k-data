import LinkNode from './LinkNode'

class DoublyLinkNode<T = unknown> extends LinkNode<T> {
  public prev: DoublyLinkNode<T> | undefined = undefined
  public next: DoublyLinkNode<T> | undefined = undefined
}

export default DoublyLinkNode
