<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface IGameBoardProps {
  players: Player[];
}

let gameState = ref("start");
console.log(gameState.value);

let playerXMoves: number[] = [];
let playerOMoves: number[] = [];

let possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let tiles = ref(["", "", "", "", "", "", "", "", ""]);

const props = defineProps<IGameBoardProps>();
const emit = defineEmits(["point"]);

let currentPlayer = ref(props.players[0]);

function markTile(index: number) {
  if (gameState.value !== "start") {
    return;
  }
  tiles.value[index] = currentPlayer.value.symbol;
  //console.log("You clicked tile " + index);

  if (currentPlayer.value.symbol === "X") {
    playerXMoves.push(index);
    playerXMoves.sort();
  } else {
    playerOMoves.push(index);
    playerOMoves.sort();
  }

  console.log("player X moves are:", playerXMoves);
  console.log("player O moves are:", playerOMoves);

  checkForWin();
}

function checkForDraw() {
  let sumOfEmptyTiles = 0;
  for (let i = 0; i < tiles.value.length; i++) {
    if (tiles.value[i] === "") {
      sumOfEmptyTiles++;
    }
  }
  console.log(sumOfEmptyTiles);

  if (sumOfEmptyTiles === 0) {
    gameState.value = "draw";
  }
}

function changePlayer() {
  if (currentPlayer.value === props.players[0]) {
    currentPlayer.value = props.players[1];
  } else {
    currentPlayer.value = props.players[0];
  }
}

function checkForWin() {
  let sumOfEmptyTiles = 0;
  for (let i = 0; i < possibleWins.length; i++) {
    const [a, b, c] = possibleWins[i];
    checkForDraw();
    if (
      tiles.value[a] &&
      tiles.value[a] === tiles.value[b] &&
      tiles.value[b] &&
      tiles.value[a] === tiles.value[c]
    ) {
      if (tiles.value[a] === currentPlayer.value.symbol) {
        gameState.value = "win";
        emit("point", currentPlayer.value.symbol);
        return tiles.value[a];
      }
    }
  }
  changePlayer();
}

function playAgain() {
  for (let i = 0; i < tiles.value.length; i++) {
    tiles.value[i] = "";
    gameState.value = "start";
  }
}
</script>

<template>
  <h1>Gameboard</h1>
  <p>{{ currentPlayer.name }}'s turn ({{ currentPlayer.symbol }})</p>
  <section id="gameboard">
    <div
      v-for="(tile, index) in tiles"
      :key="index"
      class="playing-square"
      @click.once="() => markTile(index)"
    >
      {{ tile }}
    </div>
  </section>
  <h1 v-if="gameState === 'draw'">DRAW!!!</h1>
  <h1 v-if="gameState === 'win'">{{ currentPlayer.name }} won!</h1>

  <button v-if="gameState !== 'start'" @click="playAgain">Play again</button>
  <button>Scoreboard</button>
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
