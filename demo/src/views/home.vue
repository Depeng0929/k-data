<template>
  <div>{{ personRef.name }}</div>
  <button @click="onClick">
    点我
  </button>
</template>

<script lang="ts">
import { reactive } from 'vue'
class Person {
  constructor(
    public name: string,
  ) {}
}

export default {
  name: 'Home',
  setup() {
    const person = new Person('kkk')
    const personRef = reactive(person)

    function onClick() {
      personRef.name = 'kdp'
    }
    return {
      personRef,
      onClick,
    }
  },
}

</script>
