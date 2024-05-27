<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import dayjs from 'dayjs'
import { onBeforeUpdate, ref, watch } from 'vue'

const props = defineProps({
  user: Object,
  eventCount: Number
})

const outputValue = ref()
const eventCountSource = ref(0)

let date = ref(dayjs(props.user?.UserStats.LastBonus).format('MM-DD-YYYY HH:mm:ss') + ' UTC')
let imageTokens = ref(props.user?.UserStats.ImageTokens.toFixed(2))

onBeforeUpdate(() => {
  date.value = dayjs(props.user?.UserStats.LastBonus).format('MM-DD-YYYY HH:mm:ss') + ' UTC'
  imageTokens.value = props.user?.UserStats.ImageTokens.toFixed(2)

  // // Use useTransition to smoothly transition the value and ensure whole numbers
  // watch(eventCountSource, (newVal) => {
  //   const transitionValue = useTransition(newVal, {
  //     duration: 1500
  //   })
  //   // Create a reactive effect to round the transition value
  //   const roundedTransitionValue = ref(transitionValue.value)

  //   watch(transitionValue, (newTransitionVal) => {
  //     roundedTransitionValue.value = Math.round(newTransitionVal)
  //   })

  //   outputValue.value = roundedTransitionValue.value
  // })

  outputValue.value = useTransition(eventCountSource, {
    duration: 1500
  })
  eventCountSource.value = props.eventCount ?? 0
})
</script>

<template>
  <el-row>
    <el-col :span="6">
      <el-statistic title="Current Bonus Streak" :value="props.user?.UserStats.BonusStreak" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Image Tokens" :value="imageTokens" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Total Interactions" :value="outputValue" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Last Bonus" :value="date" />
    </el-col>
  </el-row>
</template>

<style scoped>
.el-col {
  text-align: center;
}
</style>
