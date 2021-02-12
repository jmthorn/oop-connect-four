
class Game {
  constructor(playerOneName, playerTwoName) {
    this.name1 = playerOneName;
    this.name2 = playerTwoName;
    this.currentPlayer = 1;

  }

  getName() {
    return `${this.name1} vs. ${this.name2}`;
  }
  playInColumn() {
    if (this.currentPlayer === 1) {
      this.currentPlayer === 2;
    } else {
      this.currentPlayer === 1;
    }
  }
}

export default Game;