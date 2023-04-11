<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface IGameBoardProps {
  players: Player[];
}
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

defineProps<IGameBoardProps>();
</script>
<template>
  <h1>Gameboard</h1>
  <p>{{ players[0].name }}'s turn ({{ players[0].symbol }})</p>
  <section id="gameboard">
    <div v-for="tile in tiles" class="playing-square"></div>
  </section>
</template>

<style scoped>
#gameboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1em;
  width: 100%;
}

.playing-square {
  border: 1px solid red;
  width: 90px;
  height: 90px;
}

.playing-square:hover {
  background-color: grey;
}
</style>
