<script setup lang="ts">
import { ref } from "vue";
import GameBoard from "./components/GameBoard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import { Player } from "./models/Player";

let gameStarted = ref(false);

function startGame(players: Player[]) {
  console.log(players);
  gameStarted.value = true;
}
</script>

<template>
  <StartScreen @start-game="startGame"></StartScreen>
  <GameBoard :players="players" v-if="gameStarted"></GameBoard>
  <!-- <ScoreBoard></ScoreBoard> -->
</template>

<style scoped></style>
