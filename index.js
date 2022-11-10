const domController = () => {
    
}


const gameBoard = () => {
    const board = new Array(9)
    //Check player
    //Place mark
    //Check win
    //Change turn
    const setboard = (index, sign) => {

    }
    
}

//player constructor
const player = (mark, turn) => {
     this.mark = mark;
     this.turn = turn;
}

// 
const displayController = (()=>{
    const cells = document.querySelectorAll(".cell")
    cells.forEach("click", (e)=>{
        if (e.target.innerHTML !== "") return;
        setboard()
    })
    
})()