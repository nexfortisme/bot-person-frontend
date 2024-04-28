<script setup lang="ts"></script>

<template>
  <main>
    <div style="text-align: center">
      <h1>Landing Page</h1>
    </div>
    <RouterView />
    <Suspense>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>

<style scoped>
#stats-container {
  /* display: flex; */
  /* justify-content: center; */
  padding-top: 20px;
}
</style>
