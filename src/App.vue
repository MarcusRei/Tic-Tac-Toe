<script setup lang="ts">
import { reactive, ref } from "vue";
import GameBoard from "./components/GameBoard.vue";
import ScoreBoard from "./components/ScoreBoard.vue";
import StartScreen from "./components/StartScreen.vue";
import { Player } from "./models/Player";

let gameStarted = ref(false);
let state = ref<Player[]>([]);

function startGame(players: Player[]) {
  console.log(players);
  gameStarted.value = true;

  state.value = players;
}
</script>

<template>
  <StartScreen @start-game="startGame"></StartScreen>
  <GameBoard :players="state" v-if="gameStarted"></GameBoard>
  <!-- <ScoreBoard></ScoreBoard> -->
</template>

<style scoped></style>
