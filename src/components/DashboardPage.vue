<script setup lang="ts">
import type { User } from '@/interfaces/user.interface'
import dataService from '@/services/data-service'

let resp = await dataService.getUserInfo()
let userData = resp.data as User
console.log(userData.UserStats.ImageTokens)
</script>

<template>
  <Suspense>
    <template #default>
      <main>
        <div style="text-align: center">
          <h3>Dashboard</h3>
          <ul>
            <li>Username: {{ userData.Username }}</li>
            <li>UserId: {{ userData.UserId }}</li>
            <li>ImageTokens: {{ userData.UserStats.ImageTokens }}</li>
          </ul>
        </div>
      </main>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
