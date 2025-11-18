const btnStart = document.querySelector("#start");
const divWinner = document.querySelector(".winner");


const o = gameboard();
console.log(o.cells);
console.log(o.moves);
console.log(o);

 const arr = o.moves;
 
 console.log(arr);

  console.log(checkWinner(o.moves));
const my = checkWinner(o.moves)
const winner = my.winnerSing;

  console.log(winner);

  announceWinner(winner);



function announceWinner(sing) {
    divWinner.textContent = '';
    const msgWinner = document.createElement('h4');

    msgWinner.textContent = 'Winner is ' + sing;

    divWinner.appendChild(msgWinner);

}



function checkWinner(arr) {
    let combos = [
    [arr[0], arr[3], arr[6]],
    [arr[1], arr[4], arr[7]],
    [arr[2], arr[5], arr[8]],
    [arr[0], arr[4], arr[6]],
    [arr[0], arr[1], arr[2]],
    [arr[3], arr[4], arr[5]],
    [arr[6], arr[7], arr[8]]
];
 
   const winnerArr = combos.filter(function(element) {
         const firstElement = element[0];

        return element.every(e => e === firstElement);
   });

   const winnerSing = winnerArr[0][1];
        
        return {winnerArr, winnerSing}
}

function gameboard() {
    const cells = document.querySelectorAll('.item');

    let moves = [];
    cells.forEach(element => {
        const move = element.textContent;
        moves.push(move);
    });

     
    
    return {cells, moves }
}


