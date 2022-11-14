const gameBoard = (() => {
    //build array for game board
    const board = new Array(9)
    //Place mark
    const setBoard = (index, sign) => {
        console.log(`${sign} is putting in ${index}`)
    }
    return{setBoard}
})()

//player constructor
function player(mark, turn) {
     this.mark = mark;
     this.turn = turn;
     this.changeTurn = () => {
        this.turn = Boolean(this.turn ? "false" : "ture");
        console.log(this)
     }
}

// 
const displayController = (()=>{
    //get game board element
    const cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.addEventListener("click", (e)=>{
            if (e.target.innerHTML !== "") return;
            //start the game here!
            gameController.playGame(e.target.id)
        })
    })
})()

const gameController = (() => {
    //Check player
    const playerO = new player("O", true);
    const playerX = new player("X", false);
    //Check win
    const winRules = [  
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
                ];

    const playGame = (id) => {
        let sign = (playerO.turn===true) ? "O" : "X";
        gameBoard.setBoard(id, sign)
        playerO.changeTurn()
        console.log(playerO)
        playerX.changeTurn()
    }

    return {playGame};
})()