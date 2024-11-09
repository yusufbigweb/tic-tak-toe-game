let currentPlayer = 'X';
let arr = Array(9).fill(null);

function handleCub(el) {
    const id = Number(el.id);
    arr[id] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(arr);
}

