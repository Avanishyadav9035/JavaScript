const board = document.getElementById("board")
let turn = "X"

for(let i = 0;i<9;i++){
    const cell = document.createElement("div");
    cell.style.border = "1px solid black";
    cell.style.height = "100px"
    cell.style.display = "flex"
    cell.style.alignItems = "center"
    cell.style.justifyContent = "center"
    cell.style.fontSize = "2em";

    cell.addEventListener("click",()=>{
        if(!cell.textContent){
            cell.textContent = turn
            turn = turn === "X" ? "0" : "X";
        }
    })
    board.appendChild(cell)
}