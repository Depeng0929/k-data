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
    const list = new DoublyLinkList({ items: [4, 2, 1, 3] })
    list.push(5)

    debugger
    console.log(list.list())
    return {

    }
  },
}

</script>
