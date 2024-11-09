let array = Array(9).fill(null)
let currentPlayer = 'X';
function handleCub(el){
    const id = Number[el.id]
    array[id] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(array);
}

