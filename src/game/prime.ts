import { BaseGame } from '#src/game/base-game.js';
import type { GameData } from '#src/type/game-data.type.js';
import { getRandomFromRange } from '#src/utils/random.js';

export class Prime extends BaseGame {
  readonly #questionValueMin = 1;
  readonly #questionValueMax = 100;

  public constructor() {
    super('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  private isPrime(value: number):boolean {
    if (value <= 1) {
      return false;
    }
    for (let i = 2, sqrt = Math.sqrt(value); i <= sqrt; i += 1) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  }

  public override getGameData(): GameData {
    const question = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const answer = this.isPrime(question) ? 'yes' : 'no';

    return {
      answer,
      question: question.toString()
    };
  }
}