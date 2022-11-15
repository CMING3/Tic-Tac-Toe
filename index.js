const gameBoard = (() => {
    //build array for game board
    const board = new Array(9)
    //Place mark
    const setBoard = (index, sign) => {
        console.log(`${sign} is putting in ${index}`)
    }
    return{setBoard}
})()

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

    let playerTurn = true;

    const playGame = (id) => {
        let sign = "";
        
        if (playerTurn===true){
            sign = "O";
            playerTurn = false;
        } else{
            sign = "X"
            playerTurn = true;
        }
        gameBoard.setBoard(id,sign)
    }

    return {playGame};
})()