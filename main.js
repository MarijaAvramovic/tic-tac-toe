const btnStart = document.querySelector("#start");
const divWinner = document.querySelector(".winner");
const btnRestart = document.querySelector('.reset');
const cells = document.querySelectorAll('.item');

 const inputX = document.querySelector('#x');

    const inputO = document.querySelector('#o');

    let player = 'X';
      




 
cells.forEach(e => {
    e.addEventListener('click',  () => {
         selectMove(event)
    });
    e.addEventListener('click',  () => {
           
    });

})





btnRestart.addEventListener('click', restartGame);

btnStart.addEventListener('click', addPlayers)


//------------------------------TEST--------------------------

const o = gameboard();
 
console.log(o.moves);
console.log(o);

 const arr = o.moves;
 
 console.log(arr);

  console.log(checkWinner(o.moves));
const my = checkWinner(o.moves)
const winner = my.winnerSign;

  console.log(winner);
 

 
//   restartGame();

//     const k = gameboard();
//     const l = k.moves;
//     console.log(l);
  
//------------------------------------------------------------
 

 function changePlayer() {
        player = (player == 'X') ? "O" : "X";
    }


function selectMove(event) {
      
     
    const clickedCell = event.target;
   
  
    clickedCell.textContent =  player;
    changePlayer();



    
    
    

    let tableRound = gameboard(); 
   
    let cellsPerRound = tableRound.moves;
 
     let test = checkWinner(cellsPerRound);


     console.log(test);
     console.log(test.winnerSign);
     let a = test.winnerArr;

    if (Array.isArray(a) ) {
 announceWinner(test.winnerSign);
          
    }
    
    let cellValue = clickedCell.textContent;
    const cellId = clickedCell.getAttribute('data-index');

    
    console.log(cellId);
    console.log(cellValue);
     console.log(clickedCell);

     
     clickedCell.classList.add('disabled-div');
        
   
     
    cellsPerRound[cellId] = cellValue;

    console.log(cellsPerRound);

    
     
}

  function restartGame() {

    

    divWinner.textContent = 'Enter names';

     inputX.value = '';
     inputO.value = '';

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

function announceNames(nameX, nameO) {
    divWinner.textContent = '';
    const msgWinner = document.createElement('h4');

    msgWinner.textContent = 'X is ' + nameX + " and O is " + nameO;

    divWinner.appendChild(msgWinner);

}



function checkWinner(arr) {
    let combos = [
        
    [arr[0], arr[3], arr[6]],
    [arr[0], arr[4], arr[8]],
    [arr[0], arr[1], arr[2]],
    [arr[1], arr[4], arr[7]],
    [arr[2], arr[4], arr[6]],
    [arr[3], arr[4], arr[5]],
    [arr[6], arr[7], arr[8]],
    [arr[2], arr[5], arr[8]]
     
];
    
    
   const winnerArr = combos.filter(function(element) {
         const firstElement = element[0];
         

          
            return element.every(e => e === firstElement);
         
         
   });
 

   
   const winnerSign = winnerArr[0][0];
        
        return {winnerArr, winnerSign}
}

function gameboard() {
   let currentCells = document.querySelectorAll('.item');

    let moves = [];
    cells.forEach(element => {
        const move = element.textContent;
        moves.push(move);
    });

     
    
    return {currentCells, moves }
}

 
 function addPlayers() {
   

    const nameX = inputX.value;
    const nameO = inputO.value;

    if(nameO != '' && nameO != 0){
          announceNames(nameX, nameO)
    }
    else {
        console.log("enter names");
        
    }

}

  