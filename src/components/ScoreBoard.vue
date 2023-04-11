<script setup lang="ts">
import { Player } from "../models/Player";

let players: Player[] = [new Player("Macke", 14), new Player("Adam", 2)];
</script>
<template>
  <h1>Scoreboard</h1>
  <ol id="scoreboard">
    <li class="player">
      <h4>Player name: {{ players[0].name }}</h4>
      <div>Points: {{ players[0].score }}</div>
    </li>
    <li class="player">
      <h4>Player name: {{ players[1].name }}</h4>
      <div>Points: {{ players[1].score }}</div>
    </li>
  </ol>
</template>
<style scoped>
#scoreboard {
  display: flex;
  flex-direction: column;
}

.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  padding: 0;
}
</style>
