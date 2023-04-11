<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

let players: Player[] = [new Player("", 0), new Player("", 0)];

let playerX = ref("");
let playerO = ref("");
</script>

<template>
  <h1>StartScreen</h1>
  <form id="playerX-input" class="player-input" @submit.prevent="">
    <label for="Player X">Player X</label>
    <input v-model="playerX" name="Player X" type="text" />
    <button>Add player</button>
  </form>

  <form id="playerO-input" class="player-input" @submit.prevent="">
    <label for="Player O">Player O</label>
    <input v-model="playerO" name="Player O" type="text" />
    <button>Add player</button>
  </form>
</template>
<style scoped>
.player-input {
  display: flex;
  gap: 1em;
  align-items: center;
  border: 1px solid green;
  padding: 1em;
}
</style>
