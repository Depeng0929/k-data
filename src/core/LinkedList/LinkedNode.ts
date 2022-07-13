import type { Nullable } from '@depeng9527/tools'

class LinkedNode<T = unknown> {
  public next: Nullable<LinkedNode<T>>
  constructor(
    public value: T,
  ) {}
}

export default LinkedNode
