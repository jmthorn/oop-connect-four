//Changing the color => 
//Have currentPlayer variable. Set it to either red or black using an 
//IF conditional changing the color based on whose turn it is => show this 
//by changing the class to either red or black
//Indicating a column is full => 
//Approach 1: Use placing new token approach - check to see if column vairable === 0 . 
//      If zero, will add .full class to that column.
//Approach 2: See if all of the square IDs have innerHTML or div Children.
//      If the have either, add .full class.
//Placing a new token: 2 approaches => 
//Approach 1: Setting column count variables each with a value of 6
//      attaching each to column ID and when player picks column, 
//      decrement column count by 1.
//Approach 2: Check to see if the highest  square ID has any innerHTML
//      or div child -- if it does, go to next lower available. 
import Game from "./game.js"


let game = undefined;
function updateUI() {
    for(let row = 0; row <= 5; row++) { 

        for(let col = 0; col <= 6; col++) { 
            let currentSquare = document.getElementById(`square-${row}-${col}`);
            currentSquare.innerHTML = "";
            if (game.getTokenAt(currentSquare) === 1) { 
                let div = document.createElement("div");
                div.classList.add("token black");
                currentSquare.appendChild(div);
            } else { 
                let div = document.createElement("div");
                div.classList.add("token red");
                currentSquare.appendChild(div);
            }
        }
    }
    if (game === undefined) {
        let boardHolder = document.getElementById("board-holder");
        boardHolder.classList.add('is-invisible');
        let gameName = document.getElementById("game-name");
        gameName.innerHTML = getName();
    }
    if (game.currentPlayer === 1) { 
        clickTargets.classList.add("red");
    } else { 
        clickTargets.classList.add("black");
    }
}


window.addEventListener('DOMContentLoaded', event => {
    let playerForm = document.getElementById("form-holder");
    let player1 = document.getElementById("player-1-name");
    let player2 = document.getElementById("player-2-name");
    let newGame = document.getElementById("new-game");
    let clickTargets = document.getElementById("click-targets");

    clickTargets.addEventListener("click", (event) => {
       let colId = event.target.id;

       if (colId.includes("column-")) {
       let colNum = colId.split("-")[1];
       let num = Number.parseInt(colNum); 
       game.playInColumn(num);
       }
      updateUI();
    });
        playerForm.addEventListener("keyup", event => {
            
           
            if (player1.value && player2.value) {
            newGame.disabled = false;
            }    
        })

      playerForm.addEventListener("submit", event => {
        event.preventDefault();
        game = new Game(player1.value, player2.value);
        player1.value = '';
        player2.value = '';
        newGame.disabled = true;
        updateUI();
      })  

})


