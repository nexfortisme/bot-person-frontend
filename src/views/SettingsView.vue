<script setup lang="ts">
import ActivityPage from '@/components/user-settings/ActivityPage.vue'
import MyStatsPage from '@/components/user-settings/MyStatsPage.vue'
import UserPage from '@/components/user-settings/UserPage.vue'
import type { Event } from '@/interfaces/event.interface'
import type { User } from '@/interfaces/user.interface'
import { useAuthStore } from '@/stores/auth'
import { userStore } from '@/stores/user'
import { ref } from 'vue'

let activityFetchCall = fetch('http://localhost:3000/api/v1/user/activity', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${useAuthStore().token}`
  }
})

let userFetchCall = fetch('http://localhost:3000/api/v1/user/info', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${useAuthStore().token}`
  }
})

let user: User
let events: Event[]

let userRef = ref()
let eventsRef = ref()
let eventCountRef = ref()

Promise.all([activityFetchCall, userFetchCall])
  .then((responses) => Promise.all(responses.map((response) => response.json())))
  .then(([activityData, userData]) => {
    events = activityData
    user = userData

    userRef.value = user
    eventsRef.value = events

    eventCountRef.value = events.length

    userStore().setUser(user)
    userStore().setEvents(events)

    console.log(user)
    console.log(events)
  })
  .catch((error) => {
    console.log('oops', error)
  })
</script>

<template>
  <Suspense>
    <main>
      <!-- <UserPage /> -->
      <MyStatsPage :user="userRef" :eventCount="eventCountRef" />
      <hr />
      <ActivityPage :events="eventsRef" />
    </main>
    <template #fallback>
      <div class="loading">
        <p>Loading...</p>
      </div>
    </template>
  </Suspense>
</template>
