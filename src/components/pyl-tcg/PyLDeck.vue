<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: {
    deckSize: {
      type: Number,
      default: 60
    }
  }
}
</script>

<template>
  <div style="align-items: center">Cards Remaining: {{ deckSize }}</div>
</template>
