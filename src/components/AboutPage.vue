<script setup lang="ts">
import dataService from '@/services/data-service'

let data = dataService.test().then((res) => {
  console.log(res)
  return res
})

// console.log(data)
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
