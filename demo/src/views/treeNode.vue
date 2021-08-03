<template>
  <div>tree-node</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TreeNode, Tree } from '../../../src/index'

export default defineComponent({
  name: 'TreeNode',
  setup() {
    const tree1 = new Tree('tree1')
    const tree2 = new Tree('tree2')
    const tree3 = new Tree('tree3')
    const node1 = new TreeNode('node1')
    const node2 = new TreeNode('node2')
    const node3 = new TreeNode('node3')

    tree1.add(tree2).add(tree3)
    tree2.add(node1).add(node2)
    tree3.add(node3)

    tree2.remove()
    console.log(tree1)
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
