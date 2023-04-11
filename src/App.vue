<script setup lang="ts">
import GameBoard from "./components/GameBoard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import { Player } from "./models/Player";

let points: {
  playerX: 0;
  playerO: 0;
};

function startGame(players: Player[]) {
  console.log(players);
}
</script>

<template>
  <StartScreen @start-game="startGame"></StartScreen>
  <!-- <GameBoard></GameBoard> -->
  <!-- <ScoreBoard></ScoreBoard> -->
  <!-- <button @click="showPlayers">Visa splearnamn!</button> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
