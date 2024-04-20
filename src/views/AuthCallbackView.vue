<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const route = useRoute()

onMounted(async () => {
  const token = route.query.token
  if (token) {
    try {
      await authStore.processToken(token as string)
      router.push('/') // Redirect to home after processing
    } catch (error) {
      console.error('Failed to process token:', error)
      router.push('/login') // Redirect to login on failure
    }
  } else {
    router.push('/login') // Redirect if no token is found
  }
})
</script>

<template>
  <div>
    <h1>Processing login...</h1>
  </div>
</template>
