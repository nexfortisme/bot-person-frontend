<script setup lang="ts">
import dayjs from 'dayjs'

const formatDate = (date: string) => {
  return dayjs(date).format('MM-DD-YYYY HH:mm:ss') + ' UTC'
}

// Getting the value from the parent component
const props = defineProps({
  events: Object
})
</script>

<template>
  <div>
    <div v-for="act in props.events" :key="act.id">
      <div style="border: 1px solid black">{{ formatDate(act.eventDate) }}</div>
      <div>{{ act.eventData }}</div>
      &nbsp;
    </div>
  </div>
</template>
