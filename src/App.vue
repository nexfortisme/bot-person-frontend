<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/global/AppFooter.vue'
import AppHeader from './components/global/AppHeader.vue'



</script>

<template>
  <div class="app-container">
    <header>
      <AppHeader/>
    </header>

    <main class="contnet">
      <RouterView />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

footer {
  margin-top: auto;
}
</style>
