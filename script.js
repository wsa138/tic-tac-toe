// Gameboard module. 
const gameboard = (function () {
    let _gameSquareIds = ["square0", "square1", "square2", "square3", "square4", 
    "square5", "square6", "square7", "square8"];

    // An array of the squares document objects.
    let gameSquareDoms = _gameSquareIds.map(function(squareId) {
        return document.getElementById(squareId);
    });

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
    };


    // Calls function to add event listener to squares.
    return addEventsToSquares(gameSquareDoms);
})() 





// Player creator factory function.
const createPlayer = (mark) => {
    return {mark};
}

let test = Object.create(createPlayer("M"));




// Game functionality method.
const game = (function() {
    // Creates players based on which player button is clicked. 
    function choosePlayers() {
        let onePlayer = document.getElementById("onePlayer");
        let twoPlayer = document.getElementById("twoPlayer");
        onePlayer.addEventListener("click", function() {
            let xPlayer = Object.create(createPlayer("x"));
            console.log(xPlayer.mark);
        })
        twoPlayer.addEventListener("click", function() {
            let xPlayer = Object.create(createPlayer("EX"));
            let oPlayer = Object.create(createPlayer("O"));
            console.log(xPlayer.mark, oPlayer.mark); 
        })
    }

    return choosePlayers();

})()