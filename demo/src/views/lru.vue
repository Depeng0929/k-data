<template>
  <div>
    LRU
  </div>
</template>

<script lang="ts">
import { LRUCache } from '../../../src/index'

export default {
  name: 'LinkList',
  setup() {
    const cache = new LRUCache(5)
    cache.put('A', 'A')
    cache.put('B', 'B')
    cache.put('C', 'C')

    cache.put('D', 'D')
    cache.put('E', 'E')
    cache.get('C')
    console.log(cache)

    return {

    }
  },
}

</script>
