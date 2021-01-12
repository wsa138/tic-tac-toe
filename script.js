
// Gameboard module.
const gameBoard = (function() {
    // Creates an array of each square element.
    let gameBoardArray = Array.from(document.getElementsByClassName("gameSquare"));

    // Example function
    function test(i) {
        console.log(i);
    }

    return {
        gameBoardArray,
        test
    }
})();


// Contains all functions that alter the display.
const displayController = function() {
    // A function that sets event listeners on squares and runs the markSquare function.
    const setAvailableSquares = function(arr) {
        console.log(arr)
    }

    return {
        setAvaileableSquare: setAvailableSquares
    }
}



// Factory creates a player object with a name and their mark(x or o).
const player = function(name, mark) {
    return {
        name,
        mark
    };
}



/* An object that controls the flow of the game. */
const gameflow = {}