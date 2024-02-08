import { Calc } from '#src/game/calc.js';
import { Even } from '#src/game/even.js';
import { Gcd } from '#src/game/gcd.js';
import { Greet } from '#src/game/greet.js';
import type { Playful } from '#src/game/playful.interface.js';
import { Prime } from '#src/game/prime.js';
import { Progression } from '#src/game/progression.js';
import { GameCli } from '#src/game-cli.js';
import type { GameSetting } from '#src/type/game-setting.type.js';

const defaultSetting: GameSetting = {
  lose: 1,
  win: 3
};

function initializeGame(game: Playful): void {
  const cli = new GameCli(game, new Greet(), defaultSetting);
  cli.start();
}

function initiateGreeting(): void {
  initializeGame(new Greet());
}

function initiateEvenGame(): void {
  initializeGame(new Even());
}

function initiateCalcGame(): void {
  initializeGame(new Calc());
}

function initiateGcdGame(): void {
  initializeGame(new Gcd());
}

function initiatePrimeGame(): void {
  initializeGame(new Prime());
}

function initiateProgressionGame(): void {
  initializeGame(new Progression());
}

export { initiateCalcGame, initiateEvenGame, initiateGcdGame, initiateGreeting, initiatePrimeGame, initiateProgressionGame };