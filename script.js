
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


    // Win flag.
    let win = 0;

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
            controller.playAgain();
            win = 1;
        } else if (winConditions.some(function(arr) {
            return arr.every(function(ele) {
                return oArr.includes(ele);
            })
        })) {
            controller.winner("O");
            controller.playAgain();
            win = 1;
        } else if (xArr.length > 4) {
            controller.tie()
            controller.playAgain();
            win = 1;
        }
    }




    // Function that adds event listeners on elements in an array.
    function setListener(arr, xArr, oArr) {
        return arr.forEach(function(element) {
            element.addEventListener("click", function() {
                if (element.innerHTML === "X" || 
                element.innerHTML === 1 ||
                win === 1) {
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
    let _results = document.getElementById("results");

    // Play again button parent element.
    let _playAgainParent = document.getElementById("postGame");


    // Creates winner banner.
    function winner(mark) {
        let winner = document.createElement("div");
        winner.innerHTML = `Player ${mark} Wins!`;
        winner.id = "winner";
        _results.appendChild(winner);
        _results.style.display = "block";
    }

    // Creates tie banner.
    function tie() {
        let tie = document.createElement("div");
        tie.innerHTML = "TIE!";
        tie.id = "tie";
        _results.appendChild(tie);
        _results.style.display = "block";
    }

    // Create play again button.
    function playAgain() {
        let playAgain = document.createElement("BUTTON");
        playAgain.id = "playAgain";
        playAgain.innerHTML = "Play Again"
        playAgain.addEventListener("click", reset);
        _playAgainParent.appendChild(playAgain);
    }

    // Resets x and o arrays, results child element and all square innerHTML.
    function reset() {
        playerMod.xSpaces.length = 0;
        playerMod.oSpaces.length = 0;
        _results.removeChild(_results.childNodes[1]);
        _results.style.display = "none";
        _playAgainParent.removeChild(_playAgainParent.childNodes[1])
        gameBoard.gameBoardArray.forEach(function(sqr) {
            sqr.innerHTML = "&nbsp";
        })
    }



    return {winner, tie, playAgain, reset}
})();


gameBoard.setListener(gameBoard.gameBoardArray, 
    playerMod.xSpaces, 
    playerMod.oSpaces)