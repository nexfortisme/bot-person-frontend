<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

let dummyCounter = ref(0)

let authStore = useAuthStore()

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  dummyCounter.value++
}

let onLoginClick = () => {
  window.location.href = 'http://localhost:3000/api/v1/auth/discord'
}

let logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}
</script>

<template>
  <div class="h-6" />
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <RouterLink to="/"><el-menu-item index="1">Home</el-menu-item></RouterLink>
    <RouterLink to="/about"><el-menu-item index="2">About</el-menu-item></RouterLink>
    <RouterLink to="/dashboard" v-if="authStore.isAuthenticated"
      ><el-menu-item index="3">Dashboard</el-menu-item></RouterLink
    >

    <div class="flex-grow" />

    <el-menu-item v-if="!authStore.isAuthenticated" index="4" @click="onLoginClick()"
      >Login</el-menu-item
    >
    <el-sub-menu index="5-1" v-if="authStore.isAuthenticated">
      <template #title>
        {{ authStore.username }} &nbsp;&nbsp;
        <el-avatar shape="square" :size="40" :src="authStore.userPictureURL" />
      </template>
      <el-menu-item index="5-1-1" @click="logout()">Logout</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.el-menu-item {
  font-family: 'Roboto Mono', monospace;
}

.flex-grow {
  flex-grow: 1;
}
</style>
