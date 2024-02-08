import type { GameData } from '#src/type/game-data.type.js';

export interface Playful {
  get instruction(): string;
  get welcome(): string;
  getGameData(): GameData;
  get isStandardGame(): boolean;
}