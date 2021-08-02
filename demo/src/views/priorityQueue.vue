<template>
  <div>PriorityQueue</div>
</template>

<script lang="ts">
import { PriorityQueue } from '../../../src/index'

export default {
  name: 'Graph',
  setup() {
    const queue = new PriorityQueue()

    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(1)

    queue.dequeue()
    console.log(queue)
    return {
    }
  },
}

</script>
