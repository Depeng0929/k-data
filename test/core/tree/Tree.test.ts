import { Tree, TreeNode } from '../../../src'

describe('TreeNode', () => {
  const root = new Tree('tree1')
  const tree2 = new Tree('tree2')
  const tree3 = new Tree('tree3')
  const node1 = new TreeNode('node1')
  const node2 = new TreeNode('node2')
  const node3 = new TreeNode('node3')

  root.add(tree2).add(tree3)
  tree2.add(node1).add(node2)
  tree3.add(node3)

  it('init', () => {
    expect(root.level).toBe(0)
    expect(node3.level).toBe(2)
    expect(tree2.level).toBe(1)
  })

  it('excute', () => {
    const result: string[] = []
    root.excute((item) => {
      result.push(item.val)
    })
    expect(result).toEqual(['tree1', 'tree2', 'node1', 'node2', 'tree3', 'node3'])
  })

  it('breadthFirstSearch', () => {
    const result: string[] = []
    root.breadthFirstSearch((item) => {
      result.push(item.val)
    })
    expect(result).toEqual(['tree1', 'tree2', 'tree3', 'node1', 'node2', 'node3'])
  })

  it('remove', () => {
    tree2.remove()
    tree3.remove()
    expect(root.children.length).toBe(0)
  })
})
