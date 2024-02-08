import * as console from 'console';
import readlineSync from 'readline-sync';

import type { Playful } from '#src/game/playful.interface.js';
import type { GameSetting } from '#src/type/game-setting.type.js';

export class GameCli {
  private userName: string = '';
  private currentGameLose = 0;
  private currentGameWin = 0;

  public constructor(
    private readonly game: Playful,
    private readonly greet: Playful,
    private readonly gameSetting: GameSetting
  ) {
  }

  public start(): void {
    console.log(this.game.welcome);

    if (!this.userName) {
      this.runGreet();
    }

    if (this.game.isStandardGame) {
      this.runGame();
    }
  }

  private runGreet(): void {
    const gameData = this.greet.getGameData();
    this.userName = readlineSync.question(`${gameData.question}`);
    console.log(`Hello, ${this.userName}!`);
  }

  private runGame(): void {
    console.log(this.game.instruction);
    while (this.currentGameLose < this.gameSetting.lose && this.currentGameWin < this.gameSetting.win) {
      const gameData = this.game.getGameData();
      console.log(`Question: ${gameData.question}`);

      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === gameData.answer) {
        console.log('Correct!');
        this.currentGameWin++;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
        this.currentGameLose++;
      }
    }

    if (this.currentGameLose === this.gameSetting.lose) {
      console.log(`Let's try again, ${this.userName}!`);
    }
    if (this.currentGameWin === this.gameSetting.win) {
      console.log(`Congratulations, ${this.userName}!`);
    }
  }
}