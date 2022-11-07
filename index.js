function drawBoard(){
    const table = document.querySelector("table")
    for (let i = 0; i < 3; i++){
        const tr = document.createElement("tr")
        table.appendChild(tr)
        for (let i = 0; i < 3; i++){
            const td = document.createElement("td")
            tr.appendChild(td)
        }
    }
}
drawBoard()