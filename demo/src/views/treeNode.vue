<template>
  <div>tree-node</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TreeNode } from '../../../src/index'

export default defineComponent({
  name: 'TreeNode',
  setup() {
    const rootTreeNode = new TreeNode(0)
    const treeNode1 = new TreeNode(1)
    const treeNode2 = new TreeNode(2)

    const treeNode11 = new TreeNode(11)
    const treeNode21 = new TreeNode(21)
    const treeNode12 = new TreeNode(12)
    const treeNode22 = new TreeNode(22)
    const treeNode13 = new TreeNode(13)
    const treeNode23 = new TreeNode(23)

    rootTreeNode.add(treeNode1).add(treeNode2)
    treeNode1.add(treeNode11).add(treeNode12).add(treeNode13)
    treeNode2.add(treeNode21).add(treeNode22).add(treeNode23)

    rootTreeNode.breadthFirstSearch(console.log, true)
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
