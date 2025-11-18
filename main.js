const btnStart = document.querySelector("#start");


const o = gameboard();
console.log(o.cells);
console.log(o.moves);
console.log(o);

 const arr = o.moves;
 
 console.log(arr);

  console.log(checkWinner(o.moves));

    
//    let ge = [
//     [arr[0], arr[3], arr[6]],
//     [arr[1], arr[4], arr[7]],
//     [arr[2], arr[5], arr[8]],
//     [arr[0], arr[4], arr[6]],
//     [arr[0], arr[1], arr[2]],
//     [arr[3], arr[4], arr[5]],
//     [arr[6], arr[7], arr[8]]
// ];

// console.log(ge);

//  const winnerArr = ge.filter(function(element) {
         
//         const firstElement = element[0];

//   return element.every(e => e === firstElement);
//         });
        console.log('s');

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
        
        return {winnerArr}
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

 
