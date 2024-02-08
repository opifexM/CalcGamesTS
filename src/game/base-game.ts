import type { Playful } from '#src/game/playful.interface.js';
import type { GameData } from '#src/type/game-data.type.js';

export abstract class BaseGame implements Playful {
  readonly #isStandardGame: boolean;
  readonly #instruction: string;
  readonly #welcome = 'Welcome to the Brain Games!';

  protected constructor(instruction: string, isStandardGame = true) {
    this.#instruction = instruction;
    this.#isStandardGame = isStandardGame;
  }

  public getGameData(): GameData {
    return {
      answer: '',
      question: ''
    };
  }

  public get instruction(): string {
    return this.#instruction;
  }

  public get welcome(): string {
    return this.#welcome;
  }

  public get isStandardGame(): boolean {
    return this.#isStandardGame;
  }
}