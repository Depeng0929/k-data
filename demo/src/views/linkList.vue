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
    const list = new DoublyLinkList([4, 2, 1, 3])
    list.push(5)
    console.log(list)
    return {

    }
  },
}

</script>
