const gameBoard = (() => {
    //build array for game board
    let board = ["","","","","","","","",""]
    //Place mark
    const setBoard = (index, sign) => {
        board[index]=sign
    }
    return{board, setBoard}
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
            renderBoard()
            gameController.checkWin()
        })
    })
    //change player message
    const msg = document.querySelector(".player-msg")

    const changeTurnMsg = (sign) => {
        //change some message
        if (sign == "O"){
            msg.innerHTML = "Now is X turn"
        }else if (sign == "X"){
            msg.innerHTML = "Now is O turn"
        }
    }
    const renderBoard = () =>{
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = gameBoard.board[i];
        }
    }

    const resetBtn = document.querySelector(".reset")
    resetBtn.addEventListener("click", () => {
        msg.innerHTML = "Now is O turn"
        gameController.playerTurn = true;
        gameController.sign = ""
        gameBoard.board = ["","","","","","","","",""]
        renderBoard()
    })

    return {changeTurnMsg, msg}
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

    const checkWin = () => {
        if (checkOWin()){
            displayController.msg.innerHTML = "O win !"
        }else if (checkXWin()){
            displayController.msg.innerHTML = "X win !"
        }
    }

    //check the board with winRule array
    const checkOWin = () => {
        return winRules.some((combination) => {
            return combination.every((index) => {
                return gameBoard.board[index] === "O"
            })
        })
    }
    const checkXWin = () => {
        return winRules.some((combination) => {
            return combination.every((index) => {
                return gameBoard.board[index] === "X"
            })
        })
    }

    let playerTurn = true;
    let sign = "";
    const playGame = (id) => {
         
        //change turn
        if (playerTurn===true){
            sign = "O";
            playerTurn = false;
        } else{
            sign = "X"
            playerTurn = true;
        }
        gameBoard.setBoard(id,sign)
        displayController.changeTurnMsg(sign)
    }

    return {playGame, checkWin, playerTurn, sign};
})()