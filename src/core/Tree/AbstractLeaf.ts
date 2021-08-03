abstract class AbstractLeaf<T = unknown> {
  public parent: AbstractLeaf | undefined = undefined
  public children: AbstractLeaf<T>[] = []

  get level(): number {
    return this.parent ? this.parent.level + 1 : 0
  }

  constructor(
    public val: T,
  ) {}

  /* eslint-disable*/
  public add(node: AbstractLeaf<T>): void {}

  public remove(): void {}

  public isLeaf() {
    return false
  }

  public abstract excute(callback: (p: AbstractLeaf<T>) => any): void
}

export default AbstractLeaf
