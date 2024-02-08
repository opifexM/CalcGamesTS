import { BaseGame } from '#src/game/base-game.js';
import type { GameData } from '#src/type/game-data.type.js';
import { getRandomFromRange } from '#src/utils/random.js';

export class Even extends BaseGame {
  readonly #questionValueMin = 1;
  readonly #questionValueMax = 100;

  public constructor() {
    super('Answer "yes" if the number is even, otherwise answer "no".');
  }

  public override getGameData(): GameData {
    const question = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const answer = question % 2 === 0
      ? 'yes'
      : 'no';

    return {
      answer,
      question: question.toString()
    };
  }
}