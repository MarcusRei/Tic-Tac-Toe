<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface IScoreBoardProps {
  players: Player[];
}
const props = defineProps<IScoreBoardProps>();

let rankedPlayers = ref(
  props.players.sort((a, b) => {
    return a.score > b.score ? 1 : -1;
  })
);
console.log("Hello", rankedPlayers);
</script>

<template>
  <h1>Scoreboard</h1>
  <ol id="scoreboard">
    <li v-for="player in players" class="player">
      <h4 class="player__name">{{ player.name }}</h4>
      <div class="score">{{ player.score }}</div>
    </li>
  </ol>
</template>

<style scoped>
#scoreboard {
  display: flex;
  flex-direction: column;
}

.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  padding: 0;
}
</style>
