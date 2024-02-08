import { BaseGame } from '#src/game/base-game.js';
import type { GameData } from '#src/type/game-data.type.js';
import { getRandomFromRange } from '#src/utils/random.js';

export class Calc extends BaseGame {
  readonly #questionValueMin = 1;
  readonly #questionValueMax = 100;
  readonly #operationsMap: Record<string, ((a: number, b: number) => number)> = {
    '+': (a: number, b: number): number => a + b,
    '-': (a: number, b: number): number => a - b,
    '*': (a: number, b: number): number => a * b
  };

  readonly #operationKeys = Object.keys(this.#operationsMap);

  public constructor() {
    super('What is the result of the expression?');
  }

  public override getGameData(): GameData {
    const operationIndex = getRandomFromRange(0, this.#operationKeys.length - 1);
    const operationKey = this.#operationKeys[operationIndex];
    if (!operationKey) {
      throw new Error('Operation key is undefined');
    }
    const operationFunction = this.#operationsMap[operationKey];
    if (!operationFunction) {
      throw new Error('Operation key is undefined');
    }

    const firstValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const secondValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
    const question = `${firstValue} ${operationKey} ${secondValue}`;
    const answer = operationFunction(firstValue, secondValue);

    return {
      answer: answer.toString(),
      question
    };
  }
}