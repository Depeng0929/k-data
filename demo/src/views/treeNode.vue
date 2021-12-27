<template>
  <div>
    <ul>
      <li v-for="item in treeList" :key="item">
        {{ item }}
      </li>
    </ul>
    <button @click="onAdd">
      click add
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { BSTree } from '../../../src/index'

export default defineComponent({
  name: 'TreeNode',
  setup() {
    const tree = reactive(new BSTree<number>())
    const treeList = computed(() => {
      const result: number[] = []
      tree.preOrderTraverse((val) => {
        result.push(val)
      })
      return result
    })

    function onAdd() {
      tree.insert(Math.random())
    }

    return {
      treeList,
      onAdd,
    }
  },
})
</script>
