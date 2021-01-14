
// Gameboard module.
const gameBoard = (function() {
    // Creates an array of each square element.
    let gameBoardArray = Array.from(document.getElementsByClassName("gameSquare"));

    // Example function
    function test(i) {
        console.log(i);
    }

    // Function replaces the innerHTML of a dom element.
    let replaceInner = function(element, text) {
        element.innerHTML = text;
    }

    // Function removes event listener from a DOM element.
    function removeEvent(element) {
        element.removeEventListener();
    }

    // Function that adds event listeners on elements in an array.
    function setListener(arr) {
        return arr.forEach(function(element) {
            element.addEventListener("click", function() {
                if (element.innerHTML === "X" || element.innerHTML === "O") {
                    return;
                } else {
                    replaceInner(element, playersArr[currentPlayer].mark);
                    setCurrentPlayer();
                }
            })
        })
    }


    return {
        gameBoardArray,
        test,
        setListener,
    }
})();

// gameBoard.setListener(gameBoard.gameBoardArray)


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





/* An object that controls the flow of the game. */
const gameFlow = {}