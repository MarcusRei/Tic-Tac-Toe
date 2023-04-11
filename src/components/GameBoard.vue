<script setup lang="ts">
import { Player } from "../models/Player";

function addSymbol() {
  console.log("Hello");
}

interface IGameBoardProps {
  players: Player[];
}

defineProps<IGameBoardProps>();
</script>
<template>
  <h1>GameBoard</h1>
  <section id="gameboard">
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
    <div class="playing-square" @click="() => addSymbol()"></div>
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
