
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

 let cells = document.querySelectorAll('.item');
 let boardArray = [];

cells.forEach(div => {
  boardArray.push(div.textContent); 
});

console.log(boardArray);

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

reset();
console.log(boardArray);