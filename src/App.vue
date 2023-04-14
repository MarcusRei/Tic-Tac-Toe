<script setup lang="ts">
import { reactive, ref } from "vue";
import GameBoard from "./components/GameBoard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import { Player } from "./models/Player";

let gameStarted = ref(false);
let state = ref<Player[]>([]);
let scoreboard = ref(false);

function startGame(players: Player[]) {
  console.log(players);
  gameStarted.value = true;

  state.value = players;
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
</script>

<template>
  <StartScreen :gameStarted="gameStarted" @start-game="startGame"></StartScreen>
  <GameBoard
    :players="state"
    v-if="gameStarted"
    @point="addPoint"
    @open-scoreboard="toggleScoreboard"
  ></GameBoard>
  <ScoreBoard v-if="scoreboard" :players="state"></ScoreBoard>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
