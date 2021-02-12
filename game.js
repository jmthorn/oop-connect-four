import Column from "./column.js";

class Game {
  constructor(playerOneName, playerTwoName) {
    this.name1 = playerOneName;
    this.name2 = playerTwoName;
    this.currentPlayer = 1;
    this.columns = [];
    this.addColumns();
    this.winnerNumber = 0;
  }
  getName() {
    return `${this.name1} vs. ${this.name2}`;
  }
  playInColumn(index) {
    let selectedColumn = this.columns[index];
    selectedColumn.add(this.currentPlayer)

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    console.log(selectedColumn)
    checkForTie();
  }
  addColumns() {
    for (let i = 0; i < 7; i++) {
      this.columns.push(new Column);
    }
  }
  getTokenAt(row, col) {
    let selectedColumn = this.columns[col];
    return selectedColumn.getTokenAt(row);
  }
  isColumnFull(index) {
    return this.columns[index].isFull();
  }
  checkForTie() {
    for (let i = 0; i < this.columns.length; i++ ) {
      if (!this.columns[i].isFull()) {
        return false;
      }
    }
    return this.winnerNumber = 3;
  }
}

export default Game;