<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface IGameBoardProps {
  players: Player[];
}

defineProps<IGameBoardProps>();

let tiles = [
  { clicked: false, symbol: "X" },
  { clicked: false, symbol: "O" },
  { clicked: false, symbol: "" },
  { clicked: false, symbol: "" },
  { clicked: false, symbol: "" },
  { clicked: false, symbol: "" },
  { clicked: false, symbol: "" },
  { clicked: false, symbol: "" },
  { clicked: false, symbol: "" },
];

function markTile(index: number) {
  tiles[index].clicked = true;
  console.log("You clicked tile " + index);
}
</script>
<template>
  <h1>Gameboard</h1>
  <p>{{ players[0].name }}'s turn ({{ players[0].symbol }})</p>
  <section id="gameboard">
    <div
      v-for="(tile, index) in tiles"
      :key="index"
      class="playing-square"
      @click="() => markTile(index)"
    >
      {{ tile.symbol }}
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  text-align: center;
  border: 1px solid red;
  width: 90px;
  height: 90px;
}

.playing-square:hover {
  background-color: grey;
}
</style>
