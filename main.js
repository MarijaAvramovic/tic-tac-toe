const btnStart = document.querySelector("#start");
const divWinner = document.querySelector(".winner");
const btnRestart = document.querySelector('.reset');
const cells = document.querySelectorAll('.item');
 const msgTurn = document.createElement('h4');

 const inputX = document.querySelector('#X');

    const inputO = document.querySelector('#O');

    let player = 'X';
     

btnRestart.addEventListener('click', restartGame);

btnStart.addEventListener('click', addPlayers);
btnStart.addEventListener('click', addMsg);
 

 
cells.forEach(e => {
    e.addEventListener('click',  () => {
         selectMove(event)
    }); });

 

// function() {
//     const player1 = createPlayer(inputX);
//      const player2 = createPlayer(inputO);
//      if (player == player1.sign ) {
//         player1.addMsg();
//      }else if(player == player2.sign){
//                 player2.addMsg();}
//     console.log(player1.addMsg);

//   })




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
 

 


function selectMove(event) {
    console.log(player);
      
     
    const clickedCell = event.target;
   
   
    clickedCell.textContent =  player;
    changePlayer();
    addMsg();
   



    
    
    

    let tableRound = gameboard(); 
   
    let cellsPerRound = tableRound.moves;
 
     let test = checkWinner(cellsPerRound);


     console.log(test);
     console.log(test.winnerSign);
     let a = test.winnerArr;


    if(a[0][0] != ""){
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

function stopGame() {
     cells.forEach(e => {
         
        e.classList.add('disabled-div');
    });
}
  function restartGame() {

    
    gameOn = false;
    divWinner.textContent = 'Enter names and start the game';

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

    stopGame();

}

function announceNames(nameX, nameO) {
    divWinner.textContent = '';
    const msgWinner = document.createElement('h4');

    msgWinner.textContent = 'X is ' + nameX + " and O is " + nameO;

    divWinner.appendChild(msgWinner);
    divWinner.appendChild(msgTurn);

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
  
return { nameO, nameX}
  

}

function announceTurn(sign){
    let currentPlayer = sign;

    if(currentPlayer == 'X'){

    divWinner.textContent = '';
    const msgWinner = document.createElement('h4');

    msgWinner.textContent = 'Now is ' + addPlayers().nameX + ' turn';

    divWinner.appendChild(msgWinner);
    }else if (currentPlayer == 'O'){
        divWinner.textContent = '';
    const msgWinner = document.createElement('h4');

    msgWinner.textContent = 'Now is ' + addPlayers().nameO + ' turn';

    divWinner.appendChild(msgWinner);
    }
}

function createPlayer(name) {
    return {
        name: name.value,
        sign: name.id,
    }
}
// let yu = createPlayer(inputX);

//  console.log(yu.addMsg());

 function addMsg () {
             
            
            msgTurn.textContent = '';
             msgTurn.textContent = 'Now is ' + player + ' turn';
 
            }
 

 function changePlayer() {
  
        player = (player == 'X') ? "O" : "X";
 }