<script setup lang="ts">
import GameBoard from "./components/GameBoard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";

let points: {
  playerX: 0;
  playerO: 0;
};

let playerX = {
  name: "",
};

let playerO = {
  name: "",
};

function addPoint() {
  if ((playerX = win)) {
    points.playerX++;
  } else {
    points.playerO++;
  }
}

function showPlayers() {
  console.log("Spelare O är ", playerO.name, "Spelare X är ", playerX.name);
}
</script>

<template>
  <StartScreen></StartScreen>
  <GameBoard></GameBoard>
  <ScoreBoard></ScoreBoard>
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
