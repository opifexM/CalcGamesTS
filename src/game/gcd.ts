import { BaseGame } from '#src/game/base-game.js';
import type { GameData } from '#src/type/game-data.type.js';
import { getRandomFromRange } from '#src/utils/random.js';

export class Gcd extends BaseGame {
  readonly #questionValueMin = 1;
  readonly #questionValueMax = 100;

  public constructor() {
    super('Find the greatest common divisor of given numbers.');
  }

  private gcd(firstValue: number, secondValue: number): number {
    if (!secondValue) {
      return firstValue;
    }
    return this.gcd(secondValue, firstValue % secondValue);
  }

  public override getGameData(): GameData {
    const firstValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const secondValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const question = `${firstValue} ${secondValue}`;
    const answer = this.gcd(firstValue, secondValue);

    return {
      answer: answer.toString(),
      question
    };
  }
}