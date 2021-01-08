// Gameboard module. 
const gameboard = (function () {
    let gameSquareIds = ["square0", "square1", "square2", "square3", "square4", 
    "square5", "square6", "square7", "square8"];

    let gameSquareDoms = gameSquareIds.map(function(squareId) {
        return document.getElementById(squareId);
    })

    return {gameSquareDoms};
})() 



// Player creator factory function.
const player = (mark) => {
    return {mark};
}

let test = player("testMark");


// Adds event listener to elements in argument.
function addEventsToSquares(squares) {
    squares.forEach(function(square) {
        square.addEventListener("click", function() {
            square.innerHTML = test.mark;
            console.log(square);
        })
    })
}

// Calls function to add event listener to squares.
addEventsToSquares(gameboard.gameSquareDoms);