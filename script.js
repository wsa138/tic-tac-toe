
// Gameboard module.
const gameBoard = (function() {
    // Creates an array of each square element.
    let gameBoardArray = Array.from(document.getElementsByClassName("gameSquare"));

    // Function replaces the innerHTML of a dom element.
    let _replaceInner = function(element, text, xArr, oArr) {
        element.innerHTML = text;
        switch(text) {
            case "X":
                xArr.push(parseInt(element.id.match(/\d/)[0]));
                break;
            case "O":
                oArr.push(parseInt(element.id.match(/\d/)[0]));
                break;
        }
    }


    // Function checks for a win on the gameboard.
    function _checkWin(xArr, oArr) {
        // Arrays of winning space combinations to check.
        const winConditions = [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7],
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]
        ]
        if (winConditions.some(function(arr) {
            return arr.every(function(ele) {
                return xArr.includes(ele);
            })
        })) {
            controller.winner("X");
        } else if (winConditions.some(function(arr) {
            return arr.every(function(ele) {
                return oArr.includes(ele);
            })
        })) {
            winner("O");
        } else if (xArr.length > 4) {
            controller.tie()
        }
    }




    // Function that adds event listeners on elements in an array.
    function setListener(arr, xArr, oArr) {
        return arr.forEach(function(element) {
            element.addEventListener("click", function() {
                if (element.innerHTML === "X" || element.innerHTML === "O") {
                    return;
                } else {
                    _replaceInner(element, playerMod.playersArr[currentPlayer].mark, xArr, oArr);
                    _checkWin(xArr, oArr);
                    setCurrentPlayer();

                }
            })
        })
    }


    return {
        gameBoardArray,
        setListener
    }
})();



let currentPlayer = 0;

function setCurrentPlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
}





// Game playerModule
const playerMod = (function() {

    // Factory creates a player object with a name and their mark(x or o).
    const player = function(name, mark) {
        return {
            name,
            mark
        };
    }

    // Sample players for the game.
    let _xPlayer = Object.create(player("xPlayer", "X"));
    let _oPlayer = Object.create(player("oPlayer", "O"));

    // Array of the sample players.
    let playersArr = [_xPlayer, _oPlayer];

    let xSpaces = [];
    let oSpaces = [];

    return {playersArr, xSpaces, oSpaces}
    
})();


// Controller module.
const controller = (function() {

    // Winner banner parent element.
    let results = document.getElementById("results");

    // Creates winner banner.
    function winner(mark) {
        let winner = document.createElement("winner");
        winner.innerHTML = `Player ${mark} Wins!`;
        winner.id = "winner";
        results.appendChild(winner);
        results.style.display = "block";
    }

    // Creates tie banner.
    function tie() {
        let tie = document.createElement("tie");
        tie.innerHTML = "TIE!";
        tie.id = "tie";
        results.appendChild(tie);
    }

    return {winner, tie}
})();


gameBoard.setListener(gameBoard.gameBoardArray, 
    playerMod.xSpaces, 
    playerMod.oSpaces)