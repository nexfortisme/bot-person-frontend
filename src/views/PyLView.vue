<script setup lang="ts">
import PyLBattlefield from '@/components/pyl-tcg/PyLBattlefield.vue'
import PyLDeck from '@/components/pyl-tcg/PyLDeck.vue'

let opponentDeckSize = 25
</script>

<template>
  <h1 style="text-align: center">PYL</h1>
  <div id="opponent-hand">
    <div style="padding-right: 20px">
      <PyLDeck :deckSize="opponentDeckSize"></PyLDeck>
    </div>
    <div>
      <PyLBattlefield :hideCards="true"> </PyLBattlefield>
    </div>
    <div>INFO PANNEL</div>
  </div>

  <div id="player-hand">
    <PyLBattlefield> </PyLBattlefield>
  </div>
</template>

<style scoped>
#opponent-hand,
#player-hand {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

#player-hand {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-bottom: 3em;
}
</style>
