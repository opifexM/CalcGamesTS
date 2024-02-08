import { BaseGame } from '#src/game/base-game.js';
import type { GameData } from '#src/type/game-data.type.js';

export class Greet extends BaseGame {
  public constructor() {
    super('', false);
  }

  public override getGameData(): GameData {
    return {
      answer: '',
      question: 'May I have your name? '
    };
  }
}