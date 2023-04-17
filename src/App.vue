<script setup lang="ts">
import { reactive, ref } from "vue";
import GameBoard from "./components/GameBoard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import { Player } from "./models/Player";
import { addToLS, getFromLS } from "./functions";

let gameStarted = ref(false);
let state = ref<Player[]>(getFromLS("players") || []);
let scoreboard = ref(false);
let startScreenKey = ref(0);

if (state.value.length > 0) {
  gameStarted.value = true;
}

function startGame(players: Player[]) {
  console.log(state.value);
  gameStarted.value = true;
  state.value = players;
  addToLS("players", state.value);
}

function addPoint(symbol: string) {
  if (symbol === "X") {
    state.value[0].score++;
  } else {
    state.value[1].score++;
  }
  console.log(state.value);
}

function toggleScoreboard() {
  scoreboard.value = !scoreboard.value;
}

function restartGame() {
  state.value = [];
  gameStarted.value = false;
  startScreenKey.value++;
  localStorage.clear();
}
</script>

<template>
  <StartScreen
    :key="startScreenKey"
    :gameStarted="gameStarted"
    @start-game="startGame"
  ></StartScreen>
  <GameBoard
    :players="state"
    v-if="gameStarted"
    @point="addPoint"
    @open-scoreboard="toggleScoreboard"
  ></GameBoard>
  <ScoreBoard v-if="scoreboard" :players="state"></ScoreBoard>
  <button v-if="gameStarted" @click="restartGame">Reset</button>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
