<template>
  <div class="app">
    <ul>
      <li>
        <router-link :to="{ path: '/' }">
          home
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/link-list' }">
          LinkList
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/priority' }">
          priority
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/tree-node' }">
          treeNode
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/graph' }">
          graph
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/lru' }">
          lru
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
body, html {
  margin: 0;
  padding: 0;
}
.app ul {
  min-height: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
