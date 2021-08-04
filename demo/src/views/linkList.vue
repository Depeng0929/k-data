<template>
  <div>
    LinkList
  </div>
</template>

<script lang="ts">
import { DoublyLinkList } from '../../../src/index'

export default {
  name: 'LinkList',
  setup() {
    const list = new DoublyLinkList({ items: [4, 2] })
    list.swap(0, 1)

    console.log(list.list())
    console.log(list.listReverse())
    console.log(list)
    return {

    }
  },
}

</script>
