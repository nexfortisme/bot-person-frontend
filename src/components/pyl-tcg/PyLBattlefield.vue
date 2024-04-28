<script setup lang="ts">
let hand = [
  {
    name: 'Card 1',
    cost: 1,
    attack: 1,
    health: 1
  },
  {
    name: 'Card 2',
    cost: 2,
    attack: 2,
    health: 2
  },
  {
    name: 'Card 3',
    cost: 3,
    attack: 3,
    health: 3
  }
]
</script>

<script lang="ts">
export default {
  props: {
    hideCards: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div id="hand-container">
    <div
      v-for="(card, x) of hand"
      :key="x"
      id="card"
      :style="{ 'background-color': hideCards ? 'black' : '' }"
    >
      <div id="card-header">
        <span id="card-name">{{ card.name }}</span>
        <span id="card-cost">Cost: {{ card.cost }}</span>
      </div>
      <br />

      <br />
      Attack: {{ card.attack }}
      <br />
      Health: {{ card.health }}
    </div>
  </div>
</template>

<style scoped>
#hand-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

#card {
  width: 12em;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  transition: all 0.4s ease;
}

#card:hover {
  transform: translate3D(0, -1px, 0) scale(1.03);
  box-shadow:
    8px 28px 50px rgba(39, 44, 49, 0.07),
    1px 6px 12px rgba(39, 44, 49, 0.04);
}

#card-header {
  display: flex;
  justify-content: space-between;
}

#card-name {
  font-weight: bold;
  font-size: 20px;
}

hideCards {
  background-color: black;
}
</style>
