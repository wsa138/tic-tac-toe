// Gameboard module. 
const gameboard = (function () {
    let _gameSquareIds = ["square0", "square1", "square2", "square3", "square4", 
    "square5", "square6", "square7", "square8"];

    // An array of the squares document objects.
    let gameSquareDoms = _gameSquareIds.map(function(squareId) {
        return document.getElementById(squareId);
    })

    // Makes gameSquareDoms public.
    return {gameSquareDoms};
})() 



// Create players in response to player number selection
let _playerButtons = Array.from(document.getElementsByClassName("playerButton"));
_playerButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log(btn.id);
    });
}); 



// Player creator factory function.
const player = (mark) => {
    return {mark};
} 

let test = player("testMark");


// Adds event listener to elements in argument.
function addEventsToSquares(squares) {
    squares.forEach(function(square) {
        square.addEventListener("click", function addEvent() {
            square.innerHTML = test.mark;
            console.log(square);
            // Remove the event listener function after being clicked.
            square.removeEventListener("click", addEvent)
        })
    })
}


// Calls function to add event listener to squares.
addEventsToSquares(gameboard.gameSquareDoms);