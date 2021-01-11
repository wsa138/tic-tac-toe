// Game functionality module.
const game = (function() {
    // Creates players based on which player button is clicked. 
    const choosePlayers = function() {
        let onePlayer = document.getElementById("onePlayer");
        let twoPlayer = document.getElementById("twoPlayer");
        onePlayer.addEventListener("click", function() {
            players = [];
            let xPlayer = Object.create(createPlayer("xPlayer", "x"));
            players.push(xPlayer);
            return players;
        }) 
        twoPlayer.addEventListener("click", function() {
            players = [];
            let xPlayer = Object.create(createPlayer("xPlayer", "x"));
            let oPlayer = Object.create(createPlayer("oPlayer", "O"));
            players.push(xPlayer, oPlayer);
            return players;
        })
    }


    return choosePlayers();

})()

function currentTurn(playersArr) {
    if (playersArr.length === 1) {
        return playersArr[0].mark;
    }
}

 
// Player creator factory function.
const createPlayer = (name, mark) => {
    return {name, mark};
}




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
                square.innerHTML = "test";
                console.log(square);
                // Remove the event listener function after being clicked.
                square.removeEventListener("click", addEvent)
            })
        })
    };


    // Calls function to add event listener to squares.
    return addEventsToSquares(gameSquareDoms);
})()  


//console.log(currentTurn(players));