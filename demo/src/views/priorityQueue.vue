<template>
  <div>PriorityQueue</div>
</template>

<script lang="ts">
import { PriorityQueue } from '../../../src/index'

export default {
  name: 'Graph',
  setup() {
    const queue = new PriorityQueue()

    queue.enqueue(68)
    queue.enqueue(31)
    queue.enqueue(65)
    queue.enqueue(21)
    queue.enqueue(24)
    queue.enqueue(32)
    queue.enqueue(26)
    queue.enqueue(19)
    queue.enqueue(16)
    queue.enqueue(13)

    console.log(queue)
    return {
    }
  },
}

</script>
