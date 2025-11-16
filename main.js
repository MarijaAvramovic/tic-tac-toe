
// // factories
// function gameboardObj () {

 
//     const gameboard = ['', '', '', '', '', '', '', '', ''];
     
//     return{gameboard};

     
// }
// function player (sign) {
//     return {}; 
// };
// // game flow obj
// function game () {
//     return {};
// } ;

// // iife
// const displayController = (function () {

// }

// )();

 
// console.log(gameboardObj());


// console.log(gameboardObj());


// let igrac = "x";
// function changePlayer(){
//     if(igrac == "x"){
//         igrac = "o";
//     }
//     else if(igrac == "o"){
//         igrac = "x";
//     }
// }
// let board = [
//     '', '', '',
//      '', '', '', 
//      '', '', ''];
// // changePlayer();
// // console.log(igrac);

// for (let i = 0; i < board.length; i++) {
//         board[i] = igrac; 
//         changePlayer();
//     }

//     console.log(board);


// let winningDraws = [
//     [board[0], board[3], board[6]],
//     [board[1], board[4], board[7]],
//     [board[2], board[5], board[8]],
//     [board[0], board[4], board[6]],
//     [board[0], board[1], board[2]],
//     [board[3], board[4], board[5]],
//     [board[6], board[7], board[8]]
// ];
// console.log(winningDraws);

// const winnerDraw = winningDraws.filter(function(element) {
//     //arr[0]; 3 elementa
//     const firstElement = element[0];
//     return element.every(element => element === firstElement);
// });

// console.log(winnerDraw);

// //  const [winner] = winnerDraw;
//  let winner = winnerDraw[0][0];

//  console.log(winner);

//  function reset() {
//     winner = '';
//     board = [
//     '', '', '',
//      '', '', '', 
//      '', '', ''];
//      igrac = "x";
//  }

// reset();

//  console.log(board);

 // html
    const winnerMsg = document.querySelector(".winner");

    boardArray = [
    '', '', '',
     '', '', '', 
     '', '', ''];

    

    let player = 'X';
    function changePlayer() {
        player = (player == 'X') ? "O" : "X";
    }
    changePlayer();
    console.log(player);

 let cells = document.querySelectorAll('.item');
 
 

 const btnReset = document.querySelector('.reset');
console.log(btnReset);

btnReset.addEventListener("click", function() {
    reset();
  });

 

    cells.forEach(cell => {
      cell.addEventListener('click', event => {
        if(event.target.textContent === ''){    

            checkCells(boardArray);
            event.target.textContent = player;
            changePlayer();
              const  cellId = event.target.dataset.index; 
              boardArray[cellId] = event.target.textContent;

            console.log(boardArray);

        }
         
      });
    });


 let table = {
    zero: document.querySelector('.zero').textContent,
    first: document.querySelector('.one').textContent,
    second: document.querySelector('.two').textContent,
    third: document.querySelector('.three').textContent,
    fourth: document.querySelector('.four').textContent,
    fifth: document.querySelector('.five').textContent,
    sixth: document.querySelector('.six').textContent,
    seventh: document.querySelector('.seven').textContent,
    eight: document.querySelector('.eight').textContent

 }

 console.log(table);
function reset(){
    boardArray = [
    '', '', '',
     '', '', '', 
     '', '', ''];
     cells.forEach(cell => {
        cell.textContent = '';
     });
    // cells.textContent = "";
}

 
let winningDraws = [
    [boardArray[0], boardArray[3], boardArray[6]],
    [boardArray[1], boardArray[4], boardArray[7]],
    [boardArray[2], boardArray[5], boardArray[8]],
    [boardArray[0], boardArray[4], boardArray[6]],
    [boardArray[0], boardArray[1], boardArray[2]],
    [boardArray[3], boardArray[4], boardArray[5]],
    [boardArray[6], boardArray[7], boardArray[8]],
    [boardArray[0], boardArray[4], boardArray[8]],
    [boardArray[2], boardArray[4], boardArray[6]]
];
 

function checkCells(){
        
        
    
    
    } ;

 
console.log(winningDraws);

const winnerDraw = winningDraws.filter(function(element) {
    //arr[0]; 3 elementa
    const firstElement = element[0];
    return element.every(element => element === firstElement);
});

console.log(winnerDraw);

//  const [winner] = winnerDraw;
 let winner = winnerDraw[0][0];
 console.log(winner);