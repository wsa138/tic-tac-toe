
// Gameboard module.
const gameBoard = (function() {
    // Creates an array of each square element.
    let gameBoardArray = Array.from(document.getElementsByClassName("gameSquare"));

    // Function replaces the innerHTML of a dom element.
    let _replaceInner = function(element, text) {
        element.innerHTML = text;
        switch(text) {
            case "X":
                xSpaces.push(parseInt(element.id.match(/\d/)[0]));
                break;
            case "O":
                oSpaces.push(parseInt(element.id.match(/\d/)[0]));
                break;
        }
    }

    // Win Conditions.
    let winConditions = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]

    // Function checks for a win on the gameboard.
    function _checkWin() {
        console.log("checking for win");
        if (winConditions.some(function(arr) {
            return arr.every(function(ele) {
                return xSpaces.includes(ele);
            })
        })) {
            console.log("Player X Wins!");
        } else if (winConditions.some(function(arr) {
            return arr.every(function(ele) {
                return oSpaces.includes(ele);
            })
        })) {
            console.log("Player O Wins!")
        } else if (xSpaces.length > 4) {
            console.log("Tie Game");
        }
    }



    // Function that adds event listeners on elements in an array.
    function setListener(arr) {
        return arr.forEach(function(element) {
            element.addEventListener("click", function() {
                if (element.innerHTML === "X" || element.innerHTML === "O") {
                    return;
                } else {
                    _replaceInner(element, playersArr[currentPlayer].mark);
                    _checkWin();
                    setCurrentPlayer();

                }
            })
        })
    }


    return {
        gameBoardArray,
        setListener,
        winConditions
    }
})();


// Factory creates a player object with a name and their mark(x or o).
const player = function(name, mark) {
    return {
        name,
        mark
    };
}




// Sample players for the game.
let xPlayer = Object.create(player("xPlayer", "X"));
let oPlayer = Object.create(player("oPlayer", "O"));

// Array of the sample players.
let playersArr = [xPlayer, oPlayer];

let currentPlayer = 0;

function setCurrentPlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
}


let xSpaces = [];
let oSpaces = [];




/* An object that controls the flow of the game. */
const gameFlow = {}


gameBoard.setListener(gameBoard.gameBoardArray)