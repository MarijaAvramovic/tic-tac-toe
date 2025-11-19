const btnStart = document.querySelector("#start");
const divWinner = document.querySelector(".winner");
const btnRestart = document.querySelector('.reset');
const cells = document.querySelectorAll('.item');


cells.forEach(e => {
    e.addEventListener('click',  () => {
         selectMove(event)
    });
    e.addEventListener('click',  () => {
           
    });

})



btnRestart.addEventListener('click', restartGame);




//------------------------------TEST--------------------------

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


//   restartGame();

//     const k = gameboard();
//     const l = k.moves;
//     console.log(l);
  
//------------------------------------------------------------

function selectMove(event) {
      
     let cellsPerRound = gameboard().moves; 
     checkWinner(cellsPerRound);

     
    const clickedCell = event.target;
    clickedCell.textContent = 'X';
    let cellValue = clickedCell.textContent;

    const cellId = clickedCell.getAttribute('data-index');
    console.log(cellId);
    console.log(cellValue);
     console.log(clickedCell);

     
     clickedCell.classList.add('disabled-div');
        
   
     
    cellsPerRound[cellId] = cellValue;

    console.log(cellsPerRound);

    return ( cellsPerRound)
     
}

  function restartGame() {

    

    divWinner.textContent = 'Game on';

    const table = gameboard();

     

    cells.forEach(e => {
        e.textContent = '';
        e.classList.remove('disabled-div');
    });
     
    let test = cells[2];
    
    table.moves = [];
     
    console.log('opp');
    console.log(table.moves);
    console.log(test.textContent);


  }



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
    

    let moves = [];
    cells.forEach(element => {
        const move = element.textContent;
        moves.push(move);
    });

     
    
    return {cells, moves }
}

 
 