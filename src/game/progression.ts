import { BaseGame } from '#src/game/base-game.js';
import type { GameData } from '#src/type/game-data.type.js';
import { getRandomFromRange } from '#src/utils/random.js';

export class Progression extends BaseGame {
  readonly #questionValueMin = 1;
  readonly #questionValueMax = 10;
  readonly #sequenceLengthMin = 5;
  readonly #sequenceLengthMax = 10;

  public constructor() {
    super('What number is missing in the progression?');
  }

  public override getGameData(): GameData {
    const sequenceLength = getRandomFromRange(this.#sequenceLengthMin, this.#sequenceLengthMax);
    const missingIndex = getRandomFromRange(2, sequenceLength - 1);
    let currentNumber = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const sequenceStep = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    let sequenceDisplay = '';
    let hiddenNumber = 0;

    for (let index = 1; index <= sequenceLength; index += 1) {
      if (sequenceDisplay.length) {
        sequenceDisplay += ' ';
      }
      if (index === missingIndex) {
        hiddenNumber = currentNumber;
        sequenceDisplay += '..';
      } else {
        sequenceDisplay += `${currentNumber}`;
      }
      currentNumber += sequenceStep;
    }

    return {
      answer: hiddenNumber.toString(),
      question: sequenceDisplay
    };
  }
}