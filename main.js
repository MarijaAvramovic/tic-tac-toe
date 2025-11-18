const btnStart = document.querySelector("#start");


const o = gameboard();
console.log(o.cells);
console.log(o.moves);

 
 
 


function gameboard() {
    const cells = document.querySelectorAll('.item');

    let moves = [];
    cells.forEach(element => {
        const move = element.textContent;
        moves.push(move);
    });
    return {cells, moves }
}

