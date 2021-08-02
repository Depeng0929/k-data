import { Queue } from '../../index'

enum Colors {
  WHITE, // 待发现
  GREY, // 未完全发现
  BLACK // 完全发现
}

class Graph<T = string> {
  // 存放所有顶点
  public vertices: T[] = []
  public adjList: Map<T, T[]> = new Map()
  private colors: Map<T, Colors> = new Map()

  constructor(
    public isDirected = false, // 默认是无向图
  ) {
  }

  // 添加图的顶点
  public addVertex(v: T) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
      this.colors.set(v, Colors.WHITE)
    }
  }

  // 设置两个顶点的关系
  public addEdge(v: T, w: T) {
    if (!this.adjList.get(v))
      this.addVertex(v)

    if (!this.adjList.get(w))
      this.addVertex(w)

    this.adjList.get(v)?.push(w)
    if (!this.isDirected)
      this.adjList.get(w)?.push(v)
  }

  // 广度优先
  public breadthFirstSearch(
    callback: (e: T) => any = () => {},
    startVertex: T = this.vertices[0],
  ) {
    this.clearColors()

    const queue = new Queue<T>()
    queue.enqueue(startVertex)

    while (!queue.isEmpty) {
      const u = queue.dequeue()!
      const neighbors = this.adjList.get(u)!
      this.colors.set(u, Colors.GREY)
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (this.colors.get(w) === Colors.WHITE) {
          this.colors.set(w, Colors.GREY)
          queue.enqueue(w)
        }
      }
      this.colors.set(u, Colors.BLACK)
      callback(u)
    }
  }

  // 深度优先
  public depthFirstSearch(callback: (p: T) => any = () => {}) {
    this.clearColors()

    for (let i = 0; i < this.vertices.length; i++) {
      if (this.colors.get(this.vertices[i]) === Colors.WHITE)
        this.depthFirstSearchVisit(this.vertices[i], callback)
    }
  }

  private depthFirstSearchVisit(u: T, callback: (p: T) => any = () => {}) {
    this.colors.set(u, Colors.GREY)
    if (callback)
      callback(u)

    const neighbors = this.adjList.get(u)!
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (this.colors.get(w) === Colors.WHITE)
        this.depthFirstSearchVisit(w, callback)
    }
    this.colors.set(u, Colors.BLACK)
  }

  private clearColors() {
    this.colors = new Map()
  }
}

export default Graph
